"use client"; 

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

type tParams = Promise<{ slug: string[] }>;

export default async function Page(props: { params: tParams }) {
  // Await `params` if it is being treated as asynchronous
  const { slug } = await props.params;

  console.log('robot',  `ErrorBot ${slug}`);

  const product = {
    name: `ErrorBot ${slug}`,
    image: `/assets/images/${slug}.webp`,
  };

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start h-full">
      <div className="w-full mx-auto py-8 px-8">
        <div className="flex flex-col md:flex-row gap-8 w-full mx-auto">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-6">
                Experience the future of error handling with {product.name}.
              </p>
            </div>
            <Button size="lg" className="w-full md:w-auto">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
