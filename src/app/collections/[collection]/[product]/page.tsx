import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCollectionBySlug } from "@/data/collections";
import { products, getProductBySlug } from "@/data/products";
import { ProductDetail } from "@/components/products/ProductDetail";

interface PageProps {
  params: { collection: string; product: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ collection: p.collectionSlug, product: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProductBySlug(params.collection, params.product);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
  };
}

export default function ProductPage({ params }: PageProps) {
  const collection = getCollectionBySlug(params.collection);
  const product = getProductBySlug(params.collection, params.product);
  if (!collection || !product) notFound();

  return <ProductDetail product={product} />;
}
