"use client"; 

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "next-view-transitions";
// import { useRouter } from 'next/navigation'; // For extracting params dynamically

interface Product {
  id: number
  slug: string
  name: string
  price: number
  image: string
}

const products: Product[] = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  slug: `errorbot-${i + 1}`,
  name: `ErrorBot ${i + 1}`,
  price: 19.99 + i * 10,
  image: `/assets/images/errorbot-${i + 1}.webp`,
}))

export const ProductGrid = () => {
  return (
    <div className="w-full mx-auto py-8 px-8">

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col h-full relative group border border-transparent hover:border-red-500 hover:border-4 transition-all">
            <CardContent className="p-4 flex flex-col h-full">
              <div className="relative w-full pb-[100%]">
                <Link href={`/robots/${product.slug}`}>

                
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
  
  )
}

export default ProductGrid; 