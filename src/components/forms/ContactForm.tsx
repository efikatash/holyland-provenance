"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2 } from "lucide-react";
import { contactFormSchema, contactTopics, type ContactFormValues } from "@/lib/validations/contact-form";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { PremiumButton } from "@/components/shared/PremiumButton";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "", topic: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    // REPLACE-BEFORE-LAUNCH: This is a structured stub ready for integration.
    // Wire this up to a real endpoint (e.g. an API route that sends email,
    // or a CRM / form-backend webhook) before launch. See README.md.
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("[ContactForm] submission", values);
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-olive-200 bg-olive-50/60 p-10 text-center">
        <CheckCircle2 className="h-8 w-8 text-olive-500" aria-hidden="true" />
        <h3 className="font-serif text-xl text-navy-700">Message received</h3>
        <p className="max-w-sm text-sm text-ink-400">
          Thank you for reaching out. We typically respond within 1–2 business days.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-gold-700 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="contact-name" required error={errors.name?.message}>
          <Input id="contact-name" {...register("name")} hasError={!!errors.name} placeholder="Juan Dela Cruz" />
        </FormField>
        <FormField label="Email" htmlFor="contact-email" required error={errors.email?.message}>
          <Input
            id="contact-email"
            type="email"
            {...register("email")}
            hasError={!!errors.email}
            placeholder="you@email.com"
          />
        </FormField>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Phone / WhatsApp" htmlFor="contact-phone" hint="Optional">
          <Input id="contact-phone" {...register("phone")} placeholder="+63 9XX XXX XXXX" />
        </FormField>
        <FormField label="Topic" htmlFor="contact-topic" required error={errors.topic?.message}>
          <Select id="contact-topic" {...register("topic")} hasError={!!errors.topic} defaultValue="">
            <option value="" disabled>
              Select a topic
            </option>
            {contactTopics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </FormField>
      </div>
      <FormField label="Message" htmlFor="contact-message" required error={errors.message?.message}>
        <Textarea
          id="contact-message"
          {...register("message")}
          hasError={!!errors.message}
          placeholder="Tell us a little about what you need..."
        />
      </FormField>

      <PremiumButton
        type="submit"
        variant="gold"
        size="lg"
        icon={Send}
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </PremiumButton>
    </form>
  );
}
