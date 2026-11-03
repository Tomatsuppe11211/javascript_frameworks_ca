import AllProducts from './components/Products';


export default function Home() {
  return (
    <main className="flex flex-col gap-5 items-center dark:text-white">
      <h1 className="text-2xl text-center mt-5">Javier's Online Shop</h1>

      <AllProducts/>
    </main>
  );
}
