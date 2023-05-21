"use client";

import {
    Button,
    Card,
    MultiSelectBox,
    MultiSelectBoxItem,
} from "@tremor/react";

import type { IValuable } from "@/types/generic";

export const Searchbar = ({ links }: { links: IValuable<string>[] }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <Card className="bg-blue-400 flex flex-col relative md:sticky top-0 z-auto md:z-20">
            <form
                className="flex flex-wrap md:flex-row gap-4"
                onSubmit={handleSubmit}
            >
                <input
                    className="flex-1 p-2 rounded-md "
                    type="text"
                    placeholder="Buscar por título"
                />
                <input
                    className="flex-1 p-2 rounded-md "
                    type="text"
                    placeholder="Buscar por empresa"
                />

                <MultiSelectBox className="flex-1 rounded-md">
                    {links.map(({ id, value }) => (
                        <MultiSelectBoxItem key={id} value={id} text={value} />
                    ))}
                </MultiSelectBox>

                <Button className="px-14" color="orange">
                    Buscar
                </Button>
            </form>
        </Card>
    );
};
