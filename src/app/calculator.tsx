"use client";

import { useState, FormEvent } from 'react'
import fakultet from './tsBrains/fakultet'

export function Calculator() {
    const [result, setResult] = useState<number | null>(null);

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const formData = new FormData(form);
        const tall = parseInt(formData.get('tall') as string);
        
        if (!isNaN(tall)) {
            setResult(fakultet(tall));
        }
    };

    return (
        <div className="p-8 flex flex-col justify-center mt-16 w-[40vw] h-[45vh] bg-gray-400 rounded-2xl" id="fakultet">
            <h1 className="text-5xl text-white flex font-bold">Fakultet Kalkulator</h1>
            <form onSubmit={handleSubmit}>
                <input className="flex border-2 mt-16 w-40vw bg-white border-white rounded-2xl" name="tall" placeholder="" type="number" />
                <button className="h-8 w-32 mt-8 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-700">
                    Regn ut fakultet
                </button>
            </form>
            <p className="mt-8 text-white">
                Resultatet er: <span className="text-white">{result}</span>
            </p>
        </div>
    );
}