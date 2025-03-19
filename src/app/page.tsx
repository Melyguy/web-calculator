import { Calculator } from "./calculator";
import { Fibonacci } from "./fibonacci";
import { FuzzBuzzCalculator } from "./FuzzBuzz";


export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8 items-center">
        <Calculator />
        <FuzzBuzzCalculator />
        <Fibonacci />
      </div>
    </main>
  );
}
