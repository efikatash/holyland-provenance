import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { collections } from "@/data/collections";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/collections",
    "/provenance-passport",
    "/for-churches",
    "/gift-shops-distributors",
    "/import-documentation",
    "/about",
    "/contact",
    "/request-quote",
    "/verify-product",
    "/faq",
  ];

  const collectionRoutes = collections.map((c) => `/collections/${c.slug}`);
  const productRoutes = products.map((p) => `/collections/${p.collectionSlug}/${p.slug}`);

  const allRoutes = [...staticRoutes, ...collectionRoutes, ...productRoutes];

  return allRoutes.map((route) => {
    const changeFrequency: "weekly" | "monthly" = route === "" ? "weekly" : "monthly";
    const priority = route === "" ? 1 : route.startsWith("/collections") ? 0.8 : 0.6;
    return {
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}
