import { getOffers } from "@/services/OfferService";
import { BiCategoryAlt } from "react-icons/bi";
import { Layout } from "@/components/global/Layout";
import { Offers } from "@/components/offer/Offers";
import { Searchbar } from "@/components/offer/search/Searchbar";
import { Categories } from "@/components/categories/Categories";

import type { IValuable } from "@/types/generic";

export default async function Home() {
    const offers = await getOffers();
    const links: IValuable<string>[] = offers.categories.map(
        ({ id, value }) => ({
            id: `category/${id}`,
            value,
        })
    );

    return (
        <section className="min-h-screen w-full ml-0 md:ml-60">
            <Layout links={[]} />

            <div className="flex flex-col gap-4 w-full p-4 max-w-full md:max-w-5xl m-auto">
                <Searchbar links={links} />
                <div className="flex flex-wrap gap-4">
                    <Offers offers={offers} />
                </div>
            </div>
        </section>
    );
}
