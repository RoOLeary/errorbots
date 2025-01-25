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

const products: Product[] = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  slug: `errorbot-${i + 1}`,
  name: `ErrorBot ${i + 1}`,
  price: 19.99 + i * 10,
  category: i % 2 === 0 ? "Advanced" : "Basic", // Example categories
  image: `/assets/images/errorbot-${i + 1}.webp`,
}));

export const FilterGrid = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full mx-auto py-8 px-8">
      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 sm:w-[50%]">
        {/* Search Input */}
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1"
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
            <SelectItem value="Basic">Basic</SelectItem>
            <SelectItem value="Advanced">Advanced</SelectItem>
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
                  <p className="text-gray-500">${product.price.toFixed(2)}</p>
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
