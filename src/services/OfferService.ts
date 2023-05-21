import * as json from "@/mock/offers.json";
import * as similarsJson from "@/mock/similar-offers.json";

import type { IOffer, Item } from "@/types/offer";
import type { ISingleOffer } from "@/types/single-offer";

const headers = {
    "Content-Type": "application/json",
    Authorization: "Basic " + process.env.NEXT_INFOJOBS_TOKEN,
};

export const getOffers = async (): Promise<IOffer> => {
    const offers: IOffer = JSON.parse(JSON.stringify(json));
    const categories = offers.items.map((item) => item.category);
    offers.categories = Array.from(
        new Set(categories.map((category) => category.id))
    ).map((id) => categories.find((category) => category.id === id)!);

    return offers;
};

export const getSimilarOffers = async (id: string): Promise<Item[]> => {
    const similarOffer: IOffer = JSON.parse(JSON.stringify(similarsJson));
    const size = 4;
    const similars = similarOffer.items
        .map((x) => ({ x, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map((a) => a.x)
        .slice(0, size);

    return similars;
};

export const getOffer = async (id: string): Promise<ISingleOffer> => {
    const response = await fetch(`https://api.infojobs.net/api/1/offer/${id}`, {
        headers,
    });

    return await response.json();
};
