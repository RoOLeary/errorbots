import ExtendedCarousel from '@/components/site/ExtendedCarousel/ExtendedCarousel';
import ProductGrid from "../components/site/ProductGrid";





export default async function Home() {

  const res = await fetch('https://blpwp.frb.io/wp-json/wp/v2/robots?_fields=&acf_format=standard', { cache: 'no-store' }); // Disable caching for fresh data
  const data = await res.json();

  console.log(data); 


  return (
    <div className="site">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ExtendedCarousel />
        <ProductGrid data={data} />
      </main>
    </div>
  );
}
