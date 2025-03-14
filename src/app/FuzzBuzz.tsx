"use client";

import { useState, FormEvent } from "react";

function fizzBuzz(n: number): string[] {
    const result: string[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
}

export function FuzzBuzzCalculator() {
    const [result, setResult] = useState<string[]>([]);

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const formData = new FormData(form);
        const tall = parseInt(formData.get("tall") as string);

        if (!isNaN(tall)) {
            setResult(fizzBuzz(tall));
        }
    };

    return (
        <div className="p-8 flex flex-col justify-center w-[40vw] h-[45vh] bg-gray-600 rounded-2xl">
            <h1 className="text-5xl text-white flex">FizzBuzz Kalkulator</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="flex border-2 w-full mt-4 p-2 bg-white border-white rounded-2xl"
                    name="tall"
                    placeholder="Skriv et tall"
                    type="number"
                    required
                />
                <button className="h-8 w-32 mt-4 bg-green-400 rounded-2xl text-white">
                    Regn ut FizzBuzz
                </button>
            </form>
            <p className="mt-4 text-white">Resultatet er:</p>
            <div className="mt-2 p-4 bg-white text-black rounded-2xl max-h-40 overflow-auto">
                {result.length > 0 ? result.join(", ") : "Ingen resultat ennå"}
            </div>
        </div>
    );
}
