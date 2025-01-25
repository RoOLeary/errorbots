"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "next-view-transitions";

// Updated Product interface
interface Product {
  id: number;
  slug: string;
  name: string;
  title?: string;
  body: string;
  price?: number;
  image: string;
  acf?: {
    image?: {
      filename?: string;
    };
  };
}

// Corrected mock product data
const products: Product[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 4,
  slug: `errorbot-${i + 1}`,
  name: `ErrorBot ${i + 1}`,
  body: `ErrorBot ${i + 1} description`,
  price: 19.99 + i * 10,
  image: `/assets/images/errorbot-${i + 1}.webp`,
  acf: {
    image: {
      filename: `errorbot-${i + 1}.webp`, // Provide a string value, not the `string` type
    },
  },
}));

// Updated ProductGrid component
interface ProductGridProps {
  data: Product[];
}

export const ProductGrid = ({ data }: ProductGridProps) => {
  return (
    <div className="w-full mx-auto py-8 px-8 max-sm:p-1">
      {/* First loop using data prop */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
        {data?.map((product) => (
          <Card
            key={product.id}
            className="flex flex-col h-full relative group border border-transparent hover:border-red-500 hover:border-4 transition-all"
          >
            <CardContent className="p-4 flex flex-col h-full">
              <div className="relative w-full pb-[100%]">
                <Link href={`/all-errorbots/${product.slug}`} className="cursor-pointer">
                  <Image
                    src={`/assets/images/${product.acf?.image?.filename}` || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </Link>
              </div>
              <div className="mt-4 flex-grow">
                <h3 className="text-lg font-semibold truncate">{product?.title.rendered}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Second loop using mock products */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
        {products
          .slice(4, 24) // Slice the mock data
          .map((product) => (
            <Card
              key={product.id}
              className="flex flex-col h-full relative group border border-transparent hover:border-red-500 hover:border-4 transition-all"
            >
              <CardContent className="p-4 flex flex-col h-full">
                <div className="relative w-full pb-[100%]">
                  <Link href={`/all-errorbots/${product.slug}`} className="cursor-pointer">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </Link>
                </div>
                <div className="mt-4 flex-grow">
                  <h3 className="text-lg font-semibold truncate">{product.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default ProductGrid;
