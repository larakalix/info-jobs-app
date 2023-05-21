/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, Text, Title } from "@tremor/react";
import { useSingleOfferStore } from "@/store/singleOfferStore";

import type { ISingleOffer } from "@/types/single-offer";

export const SingleOfferHeader = ({ offer }: { offer: ISingleOffer }) => {
    const { toogle } = useSingleOfferStore((state) => state);

    return (
        <header className="flex items-start justify-between gap-4">
            <div className="flex gap-4">
                {offer.profile.logoUrl && (
                    <div className="w-16 h-16 rounded-md overflow-hidden border-2 border-gray-200 mb-4">
                        <img
                            src={offer.profile.logoUrl}
                            alt={offer.profile.name}
                            className="w-16 h-16 rounded-md "
                        />
                    </div>
                )}
                <div>
                    <Title>{offer.title}</Title>
                    <a href={offer.profile?.websiteUrl && "#"} target="_blank">
                        <Text>{offer.profile?.name}</Text>
                    </a>
                </div>
            </div>
            <div>
                <Button color="orange" onClick={() => toogle()}>
                    Inscribirme en esta oferta
                </Button>
            </div>
        </header>
    );
};
