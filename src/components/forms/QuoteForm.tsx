"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2 } from "lucide-react";
import { quoteFormSchema, customerTypes, type QuoteFormValues } from "@/lib/validations/quote-form";
import { collections } from "@/data/collections";
import { products } from "@/data/products";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioPillGroup } from "@/components/ui/radio-pill-group";
import { PremiumButton } from "@/components/shared/PremiumButton";

const yesNoOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

export function QuoteForm() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");
  const preselectedProduct = products.find((p) => p.slug === productParam);

  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cityProvince: "",
      customerType: undefined,
      interestedCollection: preselectedProduct?.collectionSlug ?? "",
      productNames: preselectedProduct ? preselectedProduct.name : "",
      estimatedQuantity: "",
      needsDocumentation: "yes",
      needsWholesalePricing: "no",
      wantsCatalog: false,
      message: "",
    },
  });

  useEffect(() => {
    if (preselectedProduct) {
      setValue("interestedCollection", preselectedProduct.collectionSlug);
      setValue("productNames", preselectedProduct.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productParam]);

  async function onSubmit(values: QuoteFormValues) {
    // REPLACE-BEFORE-LAUNCH: This is a structured stub ready for integration.
    // Wire this up to a real endpoint (email, CRM, sheet, webhook, etc.)
    // before launch. See README.md.
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.info("[QuoteForm] submission", values);
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-olive-200 bg-olive-50/60 p-10 text-center">
        <CheckCircle2 className="h-8 w-8 text-olive-500" aria-hidden="true" />
        <h3 className="font-serif text-xl text-navy-700">Quote request received</h3>
        <p className="max-w-md text-sm text-ink-400">
          Thank you. Our team will confirm pricing, available documentation, and estimated landed cost — usually
          within 1–2 business days.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-gold-700 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {preselectedProduct && (
        <div className="rounded-md border border-gold-300/60 bg-gold-50/60 p-4 text-sm text-navy-700">
          Requesting a quote for <strong>{preselectedProduct.name}</strong>. Adjust the details below as needed.
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" htmlFor="q-name" required error={errors.name?.message}>
          <Input id="q-name" {...register("name")} hasError={!!errors.name} placeholder="Juan Dela Cruz" />
        </FormField>
        <FormField label="Email" htmlFor="q-email" required error={errors.email?.message}>
          <Input
            id="q-email"
            type="email"
            {...register("email")}
            hasError={!!errors.email}
            placeholder="you@email.com"
          />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Phone / WhatsApp" htmlFor="q-phone" required error={errors.phone?.message}>
          <Input id="q-phone" {...register("phone")} hasError={!!errors.phone} placeholder="+63 9XX XXX XXXX" />
        </FormField>
        <FormField label="City / Province" htmlFor="q-city" required error={errors.cityProvince?.message}>
          <Input id="q-city" {...register("cityProvince")} hasError={!!errors.cityProvince} placeholder="Cebu City" />
        </FormField>
      </div>

      <FormField label="Customer Type" required error={errors.customerType?.message}>
        <Controller
          control={control}
          name="customerType"
          render={({ field }) => (
            <RadioPillGroup
              name="customerType"
              value={field.value}
              onChange={field.onChange}
              options={customerTypes.map((c) => ({ label: c, value: c }))}
            />
          )}
        />
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Interested Collection"
          htmlFor="q-collection"
          required
          error={errors.interestedCollection?.message}
        >
          <Select
            id="q-collection"
            {...register("interestedCollection")}
            hasError={!!errors.interestedCollection}
            defaultValue=""
          >
            <option value="" disabled>
              Select a collection
            </option>
            {collections.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
            <option value="not-sure">Not sure / recommend one for me</option>
          </Select>
        </FormField>
        <FormField
          label="Estimated Quantity"
          htmlFor="q-qty"
          required
          error={errors.estimatedQuantity?.message}
          hint="e.g. 1 sample, 20 units, 1 case"
        >
          <Input id="q-qty" {...register("estimatedQuantity")} hasError={!!errors.estimatedQuantity} placeholder="e.g. 25 units" />
        </FormField>
      </div>

      <FormField label="Product Name(s)" htmlFor="q-products" hint="Optional — list specific items if you know them">
        <Input
          id="q-products"
          {...register("productNames")}
          placeholder="e.g. Yemenite Kudu Shofar, King David Anointing Oil"
        />
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Need provenance documentation?" error={errors.needsDocumentation?.message}>
          <Controller
            control={control}
            name="needsDocumentation"
            render={({ field }) => (
              <RadioPillGroup name="needsDocumentation" value={field.value} onChange={field.onChange} options={yesNoOptions} />
            )}
          />
        </FormField>
        <FormField label="Need wholesale pricing?" error={errors.needsWholesalePricing?.message}>
          <Controller
            control={control}
            name="needsWholesalePricing"
            render={({ field }) => (
              <RadioPillGroup name="needsWholesalePricing" value={field.value} onChange={field.onChange} options={yesNoOptions} />
            )}
          />
        </FormField>
      </div>

      <label className="flex items-start gap-3 rounded-md border border-stone-200 bg-ivory-50 p-4 text-sm text-navy-700">
        <Controller
          control={control}
          name="wantsCatalog"
          render={({ field }) => (
            <Checkbox checked={field.value ?? false} onChange={(e) => field.onChange(e.target.checked)} />
          )}
        />
        Also send me your wholesale / church catalog
      </label>

      <FormField label="Message" htmlFor="q-message" hint="Optional — occasion, denomination, timeline, etc.">
        <Textarea id="q-message" {...register("message")} placeholder="Anything else we should know?" />
      </FormField>

      <PremiumButton
        type="submit"
        variant="gold"
        size="lg"
        icon={Send}
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? "Submitting…" : "Submit Quote Request"}
      </PremiumButton>
    </form>
  );
}
