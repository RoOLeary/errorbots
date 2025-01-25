"use client"; 

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from 'next/navigation'; // For extracting params dynamically

interface Product {
  id: number
  slug: string
  name: string
  price: number
  image: string
}

// const products: Product[] = Array.from({ length: 24 }, (_, i) => ({
//   id: i + 1,
//   slug: `errorbot-${i + 1}`,
//   name: `ErrorBot ${i + 1}`,
//   price: 19.99 + i * 10,
//   image: `/assets/images/errorbot-${i + 1}.webp`,
// }))

const products: Product[] = [
  { id: 1, slug: "errorbot-1", name: "Ramón", price: 19.99, image: "/assets/images/errorbot-1.webp" },
  { id: 2, slug: "errorbot-2", name: "Miguel", price: 29.99, image: "/assets/images/errorbot-2.webp" },
  { id: 3, slug: "errorbot-3", name: "Leonard", price: 39.99, image: "/assets/images/errorbot-3.webp" },
  { id: 4, slug: "errorbot-4", name: "Alfonse", price: 49.99, image: "/assets/images/errorbot-4.webp" },
  { id: 5, slug: "errorbot-5", name: "Mabel", price: 59.99, image: "/assets/images/errorbot-5.webp" },
  { id: 6, slug: "errorbot-6", name: "Irving", price: 69.99, image: "/assets/images/errorbot-6.webp" },
  { id: 7, slug: "errorbot-7", name: "Elton", price: 79.99, image: "/assets/images/errorbot-7.webp" },
  { id: 8, slug: "errorbot-8", name: "Beatrice", price: 89.99, image: "/assets/images/errorbot-8.webp" },
  { id: 9, slug: "errorbot-9", name: "Margot", price: 99.99, image: "/assets/images/errorbot-9.webp" },
  { id: 10, slug: "errorbot-10", name: "Javier", price: 109.99, image: "/assets/images/errorbot-10.webp" },
  { id: 11, slug: "errorbot-11", name: "Clarence", price: 119.99, image: "/assets/images/errorbot-11.webp" },
  { id: 12, slug: "errorbot-12", name: "George", price: 129.99, image: "/assets/images/errorbot-12.webp" },
  { id: 13, slug: "errorbot-13", name: "Claude", price: 139.99, image: "/assets/images/errorbot-13.webp" },
  { id: 14, slug: "errorbot-14", name: "Dottie", price: 149.99, image: "/assets/images/errorbot-14.webp" },
  { id: 15, slug: "errorbot-15", name: "Francisco", price: 159.99, image: "/assets/images/errorbot-15.webp" },
  { id: 16, slug: "errorbot-16", name: "Phillipé", price: 169.99, image: "/assets/images/errorbot-16.webp" },
  { id: 17, slug: "errorbot-17", name: "Darina", price: 179.99, image: "/assets/images/errorbot-17.webp" },
  { id: 18, slug: "errorbot-18", name: "Dorothy", price: 189.99, image: "/assets/images/errorbot-18.webp" },
  { id: 19, slug: "errorbot-19", name: "Montague", price: 199.99, image: "/assets/images/errorbot-19.webp" },
  { id: 20, slug: "errorbot-20", name: "Urusla", price: 209.99, image: "/assets/images/errorbot-20.webp" },
  { id: 21, slug: "errorbot-21", name: "Clyde", price: 219.99, image: "/assets/images/errorbot-21.webp" },
  { id: 22, slug: "errorbot-22", name: "Pascale", price: 229.99, image: "/assets/images/errorbot-22.webp" },
  { id: 23, slug: "errorbot-23", name: "Delphine", price: 239.99, image: "/assets/images/errorbot-23.webp" },
  { id: 24, slug: "errorbot-24", name: "Solo", price: 249.99, image: "/assets/images/errorbot-24.webp" },
];


export const ProductGrid = () => {
  const router = useRouter(); 

  const handleClick = (product) => {
    router.push(`/all-errorbots/${product.slug}`);
  };

  return (
    <div className="w-full mx-auto py-8 px-8 max-sm:p-1">

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col h-full relative group border border-transparent hover:border-red-500 hover:border-4 transition-all">
            <CardContent className="p-4 flex flex-col h-full">
              <div className="relative w-full pb-[100%]">
                <a onClick={() => handleClick(product)}>

                
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover rounded-md"
                />
                </a>
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