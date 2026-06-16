import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  topic: z.string().min(1, "Please select a topic."),
  message: z.string().min(10, "Please include a few more details (at least 10 characters)."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactTopics = [
  "General question",
  "Request a quote",
  "Wholesale / reseller inquiry",
  "Church / bulk order",
  "Provenance / verification question",
  "Other",
] as const;
