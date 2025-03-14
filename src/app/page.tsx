import { Calculator } from "./calculator";
import { FuzzBuzzCalculator } from "./FuzzBuzz";


export default function Home() {
  return (
    <div className="mt-16 w-screen h-screen flex flex-col gap-24 justify-center items-center">

      <Calculator />

      <FuzzBuzzCalculator />
    </div>
  );
}
