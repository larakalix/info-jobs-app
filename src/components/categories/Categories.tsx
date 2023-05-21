import React, { Children } from "react";

import type { IValuable } from "@/types/generic";

export const Categories = ({ links }: { links: IValuable<string>[] }) => {
    return (
        <div>
            <ul>
                <li>
                    {Children.toArray(
                        links.map(({ id, value }) => <li>{value}</li>)
                    )}
                </li>
            </ul>
        </div>
    );
};
