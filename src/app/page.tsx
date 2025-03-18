import { Calculator } from "./calculator";
import { Fibonacci } from "./fibonacci";
import { FuzzBuzzCalculator } from "./FuzzBuzz";


export default function Home() {
  return (
    <div className="mt-32 w-screen h-screen flex flex-col gap-24 justify-center items-center">

      <Calculator />

      <FuzzBuzzCalculator />
      
      <Fibonacci />
    </div>
  );
}
