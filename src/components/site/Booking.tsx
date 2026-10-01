import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { locations, packages, type PackageId } from "@/data/site";
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
              <Info key={l.title} icon={MapPin} title={l.title} detail={l.detail} />
            ))}
            <Info icon={Phone} title="(555) 010-WASH" detail="Reservations & questions" />
            <Info icon={Mail} title="hello@aqualux.co" detail="Reply within 1 business hour" />
            <Info icon={Clock} title="Detail booking" detail="Mon–Sun · slots fill 3–5 days out" />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Booking received! We'll text you shortly.");
            e.currentTarget.reset();
            setTouched(false);
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
                  value={selection.pkg}
                  onValueChange={(v) => onChange((s) => ({ ...s, pkg: v as PackageId }))}
                  name="service"
                >
                  <SelectTrigger id="service">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {packages.map((p) => (
                      <SelectItem key={p.id} value={p.id}>
                        {p.name} · ${p.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Preferred date</Label>
                <Input id="date" name="date" type="date" />
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
      </div>
    </section>
  );
}
