import Image from "next/image";
import FilterGrid from "@/components/site/FilterGrid";
import Navbar from "@/components/site/Navbar";

export default function Page() {
  return (
    <div className="site">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start h-full">
        <h1 className="font-black text-4xl px-8 py-8">Products</h1>
        <FilterGrid />
      </main>
    </div>
  );
}
