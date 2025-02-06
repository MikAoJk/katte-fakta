'use client';

import React, {useEffect, useState} from 'react';
import catfacts from "./data/cat-facts.json";

export interface Fact {
    id: number;
    fact: string;
}

export const CatFacts = () => {
    const [randomFact, setRandomFact] = useState<Fact>();

    useEffect(() => {
        setRandomFact(findRandomFact())
    }, []);

    return (
        <div className="flex min-h-screen flex-col p-8 md:items-center md:p-24">
            <div className="md:flex md:min-h-screen md:flex-col">
                <div className="mt-4 md:mt-10">
                    {randomFact &&
                        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{randomFact.fact}
                        </h1>
                    }
                </div>
            </div>
        </div>
    );
}

function findRandomFact(): Fact {
    return catfacts[Math.floor(Math.random() * catfacts.length)]
}

