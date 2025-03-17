"use client";

import { useState, FormEvent } from 'react';
import fibonacci from './tsBrains/fibonaccibrain';

export function Fibonacci() {
    const [result, setResult] = useState<number[] | null>(null);

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const formData = new FormData(form);
        const tall = parseInt(formData.get('tall') as string);
        
        if (!isNaN(tall) && tall > 0) {
            setResult(fibonacci(tall));
        }
    };

    return (
        <div className="p-8 flex flex-col justify-center w-[40vw] h-auto bg-gray-400 rounded-2xl" id="fibonacci">
            <h1 className="text-5xl text-white flex font-bold">Fibonacci Kalkulator</h1>
            <form onSubmit={handleSubmit}>
                <input className="flex border-2 mt-16 w-40vw bg-white border-white rounded-2xl" name="tall" placeholder="Skriv et tall" type="number" min="1" />
                <button className="h-8 w-34 mt-8 bg-green-400 rounded-2xl text-white  hover:bg-green-700">
                    Regn ut Fibonacci
                </button>
            </form>
            <p className="mt-8 text-white">
                Resultatet er:{" "}
                <span className="text-white">
                    {result ? result.join(", ") : "Ingen verdi"}
                </span>
            </p>
        </div>
    );
}
