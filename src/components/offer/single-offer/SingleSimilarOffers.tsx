import React, { Children } from "react";
import { Card, Subtitle, Text, Title } from "@tremor/react";
import { formatDistanceToNow } from "date-fns";
import es from "date-fns/locale/es";

import type { Item } from "@/types/offer";
import Link from "next/link";

export const SingleSimilarOffers = ({
    similarOffers,
}: {
    similarOffers: Item[];
}) => {
    return (
        <>
            <Title className="text-2xl font-semibold mb-4">
                Ofertas similares
            </Title>

            <div className="grid grid-cols-1 xl:grid-cols-1 gap-4">
                {Children.toArray(
                    similarOffers.map((offer) => (
                        <Link href={`/offer/${offer.id}`}>
                            <Card
                                id={offer.id}
                                className="hover:ring-2 hover:ring-blue-500 transition-shadow"
                            >
                                <header>
                                    <Title className="truncate text-sm">
                                        {offer.title}
                                    </Title>

                                    <Text className="text-sm">
                                        {offer.author.name}
                                    </Text>

                                    <Subtitle className="text-sm">
                                        {offer.city}, publicada hace{" "}
                                        {formatDistanceToNow(
                                            new Date(offer.published),
                                            { locale: es }
                                        )}
                                    </Subtitle>
                                </header>
                            </Card>
                        </Link>
                    ))
                )}
            </div>
        </>
    );
};
