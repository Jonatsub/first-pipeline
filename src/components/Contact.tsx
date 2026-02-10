import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Namn krävs").max(100),
  email: z.string().trim().email("Ogiltig e-postadress").max(255),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Meddelande krävs").max(2000),
});

type ContactValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const onSubmit = (_data: ContactValues) => {
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Kontakta oss"
          subtitle="Berätta om ert behov så återkommer vi inom 24 timmar."
        />

        {submitted ? (
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <CheckCircle size={48} className="text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Tack för ert meddelande!</h3>
            <p className="text-muted-foreground">Vi återkommer så snart vi kan.</p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-14 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Namn</FormLabel>
                      <FormControl>
                        <Input placeholder="Ditt namn" className="bg-secondary/40 border-border/60" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-post</FormLabel>
                      <FormControl>
                        <Input placeholder="namn@foretag.se" type="email" className="bg-secondary/40 border-border/60" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Företag (valfritt)</FormLabel>
                    <FormControl>
                      <Input placeholder="Företagsnamn" className="bg-secondary/40 border-border/60" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meddelande</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Beskriv ert behov..." rows={5} className="bg-secondary/40 border-border/60" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="glow-btn w-full sm:w-auto px-10">
                Skicka
              </Button>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
}
