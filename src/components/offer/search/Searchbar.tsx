"use client";

import { Button, Card } from "@tremor/react";

export const Searchbar = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <Card className="bg-blue-400 flex flex-col relative md:sticky top-0 z-20">
            <form
                className="flex flex-wrap md:flex-row gap-4"
                onSubmit={handleSubmit}
            >
                <input
                    className="flex-1 p-2 rounded-md border-2 border-gray-200"
                    type="text"
                    placeholder="Buscar por título"
                />
                <input
                    className="flex-1 p-2 rounded-md border-2 border-gray-200"
                    type="text"
                    placeholder="Buscar por empresa"
                />

                <Button className="px-14" color="orange">
                    Buscar
                </Button>
            </form>
        </Card>
    );
};
