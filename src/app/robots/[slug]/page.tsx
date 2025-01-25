"use client"; 

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'; // For extracting params dynamically

interface ProductDetailsProps {
  id: string
  slug: string
}

export default function Page({ params }) {
  // Generate product details based on id


  const { slug } = params; // `slug` matches the folder name in the file structure

  const product = {
    name: `ErrorBot ${slug}`,
    price: 19.99 + Number.parseInt(params.id) * 10,
    image: `/assets/images/${slug}.webp`,
  }

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start h-full">
      <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl mx-auto">
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
            <h1 className="text-3xl font-bold mb-4">Ramón</h1>
            <p className="text-lg text-gray-600 mb-6">
              Experience the future of error handling with {product.name}. This advanced AI-powered bot is designed to
              detect, analyze, and resolve software errors with unprecedented speed and accuracy.
            </p>
            <p className="text-xl font-semibold mb-6">${product.price.toFixed(2)}</p>
          </div>
          <Button size="lg" className="w-full md:w-auto">
            Add to Cart
          </Button>
        </div>
      </div>
      </div>
    </main>
  )
}
 