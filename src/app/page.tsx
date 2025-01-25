import Image from "next/image";
import ProductGrid from "../components/site/ProductGrid";
import Navbar from "@/components/site/Navbar";

export default function Home() {
  return (
    <div className="site">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ProductGrid />
      </main>
    </div>
  );
}
