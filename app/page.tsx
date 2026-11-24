import { Suspense } from 'react';
import SearchAllProducts from './components/SearchProducts';


export default function Home() {
  return (
    <main className="flex flex-col gap-5 items-center dark:text-white w-full">
      <h1 className="text-2xl text-center">Señor Javier's Online Shop</h1>

      <Suspense fallback = {<div className='text-lg'>Loading products...</div>}>
        <SearchAllProducts/>
      </Suspense>
    </main>
  );
}
