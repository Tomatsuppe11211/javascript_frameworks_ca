import AllProducts from './components/Products';
import { Suspense } from 'react';
import Search from ''


export default function Home() {
  return (
    <main className="flex flex-col gap-5 items-center dark:text-white">
      <h1 className="text-2xl text-center mt-5">Javier's Online Shop</h1>

      <Suspense fallback = {<div className='text-lg'>Loading products...</div>}>
        <AllProducts/>
      </Suspense>
      
    </main>
  );
}
