import { z } from "zod";

export const customerTypes = ["Pastor", "Church Member", "Gift Shop", "Distributor", "Individual", "Other"] as const;

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(5, "Please enter a phone or WhatsApp number."),
  cityProvince: z.string().min(2, "Please enter your city or province."),
  customerType: z.enum(customerTypes, {
    errorMap: () => ({ message: "Please select a customer type." }),
  }),
  interestedCollection: z.string().min(1, "Please select a collection."),
  productNames: z.string().optional(),
  estimatedQuantity: z.string().min(1, "Please give an estimated quantity."),
  needsDocumentation: z.enum(["yes", "no"]),
  needsWholesalePricing: z.enum(["yes", "no"]),
  wantsCatalog: z.boolean().optional(),
  message: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
