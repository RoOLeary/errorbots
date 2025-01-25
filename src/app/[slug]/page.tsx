import FilterGrid from "@/components/site/FilterGrid";

export default function Page() {
  return (
    <div className="site">
      <main className="flex flex-col row-start-2 items-start sm:items-start h-full">
        <h1 className="font-black text-4xl px-8 py-8">Products</h1>
        <FilterGrid />
      </main>
    </div>
  );
}
