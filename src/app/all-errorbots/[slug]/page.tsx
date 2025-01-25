import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type tParams = Promise<{ slug: string[] }>;

export default async function Page(props: { params: tParams }) {
  // Await `params` if it is being treated as asynchronous
  const { slug } = await props.params;

  interface Product {
    id: number
    slug: string
    name: string
    price: number
    image: string
  }
  
  const product = {
    name: `ErrorBot ${slug}`,
    image: `/assets/images/${slug}.webp`,
  };

  const products: Product[] = [
    { id: 2, slug: "errorbot-2", name: "Miguel", price: 29.99, image: "/assets/images/errorbot-2.webp" },
    { id: 3, slug: "errorbot-3", name: "Leonard", price: 39.99, image: "/assets/images/errorbot-3.webp" },
    { id: 24, slug: "errorbot-24", name: "Solo", price: 249.99, image: "/assets/images/errorbot-24.webp" },
  ];


  const res = await fetch(`https://blpwp.frb.io/wp-json/wp/v2/robots?slug=${slug}&_fields=&acf_format=standard`, { cache: 'no-store' }); // Disable caching for fresh data
  const data = await res.json();


  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start h-full">
      <div className="w-full mx-auto py-8 px-8">
        <div className="flex flex-col md:flex-row gap-8 w-full mx-auto">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square">
              <Image
                src={`/assets/images/${data[0].acf.image.filename}` || "/placeholder.svg"}
                alt={data[0]?.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4 uppercase">{data[0]?.title ? data[0]?.title.rendered : product.name}</h1>
              <p className="text-sm text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: data[0]?.acf.body }} />
            </div>
            <Button size="lg" className="w-full md:w-auto">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto py-8 px-8 max-sm:p-1">

    
      <h3 className="font-black text-2xl px-8 py-8">S1M1L4R ERRORBOTS</h3>
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 flex overflow-x-auto flex-nowrap sm:flex-wrap pb-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col h-full relative group border border-transparent hover:border-red-500 hover:border-4 transition-all min-w-[75%] sm:min-w-0"
            >
              <CardContent className="p-4 flex flex-col h-full">
                <div className="relative w-full pb-[100%]">
                  <a href="#" className="cursor-pointer">
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
    </main>
  );
}
