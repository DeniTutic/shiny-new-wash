import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { locations, packages, plans, timeSlots, type PackageId, type PlanId } from "@/data/site";
import { SectionHead } from "./SectionHead";
import { summaryFor, type Selection } from "./selection";

function Info({
  icon: Icon,
  title,
  detail,
}: {
  icon: typeof MapPin;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border bg-card text-foam-cyan">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground">{detail}</div>
      </div>
    </div>
  );
}

/** yyyy-mm-dd in the visitor's timezone, for the date input's min. */
const localToday = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

export function Booking({
  selection,
  onChange,
}: {
  selection: Selection;
  onChange: Dispatch<SetStateAction<Selection>>;
}) {
  const [notes, setNotes] = useState("");
  // when add-ons change on the menu, mirror them in the notes field (only if the user hasn't typed their own)
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    if (!touched) setNotes(summaryFor(selection));
  }, [selection, touched]);

  // set after mount so server and client render the same markup
  const [today, setToday] = useState<string>();
  useEffect(() => setToday(localToday()), []);

  const [sent, setSent] = useState<{ name: string; summary: string } | null>(null);

  return (
    <section id="contact" className="relative border-t border-border/60 bg-surface py-24">
      <div aria-hidden className="foam-stripe absolute inset-x-0 top-0 h-1" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <SectionHead
            align="left"
            tag="Visit / Book"
            title="Drop in. Or drop us a line."
            sub="Two locations, 24/7 self-serve bays, and a detail team that books up fast."
          />
          <div className="mt-10 space-y-5">
            {locations.map((l) => (
              <Info
                key={l.id}
                icon={MapPin}
                title={l.title}
                detail={`${l.address} · ${l.hoursLabel}`}
              />
            ))}
            <Info icon={Phone} title="(555) 010-WASH" detail="Reservations & questions" />
            <Info icon={Mail} title="hello@aqualux.co" detail="Reply within 1 business hour" />
            <Info icon={Clock} title="Detail booking" detail="Mon–Sun · slots fill 3–5 days out" />
          </div>
        </div>

        {sent ? (
          <div
            role="status"
            className="flex flex-col items-start justify-center rounded-xl border border-foam-cyan bg-card p-8"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <CheckCircle2 className="h-10 w-10 text-foam-cyan" aria-hidden />
            <h3 className="mt-4 text-2xl">Request sent</h3>
            <p className="mt-2 text-muted-foreground">
              Thanks, {sent.name}. We'll text you to confirm your slot.
            </p>
            <p className="mt-4 rounded-md border border-border bg-background px-4 py-3 font-mono-num text-sm">
              {sent.summary}
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => {
                setSent(null);
                setTouched(false);
              }}
            >
              Book another
            </Button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = String(new FormData(e.currentTarget).get("name") ?? "").split(" ")[0];
              setSent({ name, summary: notes || summaryFor(selection) });
            }}
            className="rounded-xl border border-border bg-card p-8"
          >
            <h3 className="text-2xl">Book a wash</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us what you drive — we'll confirm by text.
            </p>
            <div className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" autoComplete="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="vehicle">Vehicle</Label>
                <Input id="vehicle" name="vehicle" placeholder="Year, make, model" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="service">Package</Label>
                  <Select
                    value={selection.plan ?? selection.pkg}
                    onValueChange={(v) => {
                      const plan = plans.find((p) => p.id === v);
                      onChange((s) =>
                        plan
                          ? { ...s, pkg: plan.pkg, plan: plan.id as PlanId }
                          : { ...s, pkg: v as PackageId, plan: undefined },
                      );
                    }}
                    name="service"
                  >
                    <SelectTrigger id="service">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Single wash</SelectLabel>
                        {packages.map((p) => (
                          <SelectItem key={p.id} value={p.id}>
                            {p.name} · ${p.price}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Membership</SelectLabel>
                        {plans.map((p) => (
                          <SelectItem key={p.id} value={p.id}>
                            {p.name} · ${p.price}/mo
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Select name="location" defaultValue={locations[0].id}>
                    <SelectTrigger id="location">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((l) => (
                        <SelectItem key={l.id} value={l.id}>
                          {l.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred date</Label>
                  <Input id="date" name="date" type="date" min={today} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slot">Time</Label>
                  <Select name="slot">
                    <SelectTrigger id="slot">
                      <SelectValue placeholder="Any time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => {
                    setTouched(true);
                    setNotes(e.target.value);
                  }}
                />
              </div>
              <Button type="submit" size="lg" className="w-full font-semibold">
                Request booking <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
