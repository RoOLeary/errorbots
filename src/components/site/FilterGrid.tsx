"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input"; // ShadCN Input component
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // ShadCN Select component
import { useState } from "react";
import { Link } from "next-view-transitions";

interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

const products: Product[] = [
    { id: 1, slug: "errorbot-1", name: "Ramón", price: 19.99, image: "/assets/images/errorbot-1.webp", category: 'Not found' },
    { id: 2, slug: "errorbot-2", name: "Miguel", price: 29.99, image: "/assets/images/errorbot-2.webp", category: 'Disconnected'},
    { id: 3, slug: "errorbot-3", name: "Leonard", price: 39.99, image: "/assets/images/errorbot-3.webp", category: 'Fuego' },
    { id: 4, slug: "errorbot-4", name: "Alfonse", price: 49.99, image: "/assets/images/errorbot-4.webp", category: 'Not Found'},
    { id: 5, slug: "errorbot-5", name: "Mabel", price: 59.99, image: "/assets/images/errorbot-5.webp", category: 'Not Found' },
    { id: 6, slug: "errorbot-6", name: "Irving", price: 69.99, image: "/assets/images/errorbot-6.webp", category: 'Disconnected'},
    { id: 7, slug: "errorbot-7", name: "Ethan", price: 79.99, image: "/assets/images/errorbot-7.webp", category: 'Disconnected' },
    { id: 8, slug: "errorbot-8", name: "Beatrice", price: 89.99, image: "/assets/images/errorbot-8.webp", category: 'Fuego'},
    { id: 9, slug: "errorbot-9", name: "Margot", price: 99.99, image: "/assets/images/errorbot-9.webp", category: 'Disconnected'},
    { id: 10, slug: "errorbot-10", name: "Javier", price: 109.99, image: "/assets/images/errorbot-10.webp", category: 'Fuego'},
    { id: 11, slug: "errorbot-11", name: "Clarence", price: 119.99, image: "/assets/images/errorbot-11.webp", category: 'Not Found' },
    { id: 12, slug: "errorbot-12", name: "George", price: 129.99, image: "/assets/images/errorbot-12.webp", category: 'Not Found'},
    { id: 13, slug: "errorbot-13", name: "Claude", price: 139.99, image: "/assets/images/errorbot-13.webp", category: 'Disconnected'},
    { id: 14, slug: "errorbot-14", name: "Dottie", price: 149.99, image: "/assets/images/errorbot-14.webp", category: 'Disconnected'},
    { id: 15, slug: "errorbot-15", name: "Francisco", price: 159.99, image: "/assets/images/errorbot-15.webp", category: 'Not Found' },
    { id: 16, slug: "errorbot-16", name: "Phillipé", price: 169.99, image: "/assets/images/errorbot-16.webp", category: 'Fuego'},
    { id: 17, slug: "errorbot-17", name: "Darina", price: 179.99, image: "/assets/images/errorbot-17.webp", category: 'Fuego'},
    { id: 18, slug: "errorbot-18", name: "Dorothy", price: 189.99, image: "/assets/images/errorbot-18.webp", category: 'Not Found' },
    { id: 19, slug: "errorbot-19", name: "Montague", price: 199.99, image: "/assets/images/errorbot-19.webp",category: 'Disconnected' },
    { id: 20, slug: "errorbot-20", name: "Urusla", price: 209.99, image: "/assets/images/errorbot-20.webp", category: 'Disconnected' },
    { id: 21, slug: "errorbot-21", name: "Clyde", price: 219.99, image: "/assets/images/errorbot-21.webp", category: 'Not Found' },
    { id: 22, slug: "errorbot-22", name: "Pascale", price: 229.99, image: "/assets/images/errorbot-22.webp", category: 'Disconnected' },
    { id: 23, slug: "errorbot-23", name: "Delphine", price: 239.99, image: "/assets/images/errorbot-23.webp", category: 'Disconnected' },
    { id: 24, slug: "errorbot-24", name: "Solo", price: 249.99, image: "/assets/images/errorbot-24.webp", category: 'Fuego'},
  ];

export const FilterGrid = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full mx-auto pb-8 px-8 max-sm:p-1">
      {/* Filter Controls */}
      <div className="flex flex-col gap-4 md:flex-row mb-8 sm:w-[50%]">
        {/* Search Input */}
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-h-10"
        />

        {/* Category Filter */}
        <Select
          onValueChange={(value) => setCategory(value)}
          value={category}
        >
          <SelectTrigger className="w-full md:w-56">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Errorbots</SelectItem>
            <SelectItem value="Not Found">Not Found</SelectItem>
            <SelectItem value="Disconnected">Disconnected</SelectItem>
            <SelectItem value="Fuego">FUEGO!!</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card key={product.id} className="flex flex-col h-full">
              <CardContent className="p-4 flex flex-col h-full">
                <div className="relative w-full pb-[100%]">
                  <Link href={`/all-errorbots/${product.slug}`}>
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
                  {/* <p className="text-gray-500">${product.price.toFixed(2)}</p> */}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default FilterGrid;
