import { Children } from "react";
import Link from "next/link";
import { Card, Metric, Subtitle, Text, Title, Badge } from "@tremor/react";
import { TbUrgent } from "react-icons/tb";
import { OfferPropertiesList } from "./offer-card/OfferPropertiesList";

import type { IOffer } from "@/types/offer";

export const Offers = ({ offers }: { offers: IOffer }) => {
    return (
        <Card className="w-full">
            <header className="mb-4">
                <Metric>Ofertas para ti</Metric>
                <Subtitle>
                    Otros usuarios con tus mismos intereses también se han
                    inscrito en...
                </Subtitle>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <Card className="flex flex-col items-start justify-center gap-2 hover:ring-2 hover:ring-blue-500 transition-shadow">
                    <Metric>{offers.items.length}</Metric>
                    <Text className="block mb-[3px]">Empleos disponibles</Text>
                </Card>
                <Card className="flex flex-col items-start justify-center gap-2 hover:ring-2 hover:ring-blue-500 transition-shadow">
                    <Metric>0</Metric>
                    <Text className="block mb-[3px]">Ofertas nuevas</Text>
                </Card>
                <Card className="flex flex-col items-start justify-center gap-2 hover:ring-2 hover:ring-blue-500 transition-shadow">
                    <Metric>0</Metric>
                    <Text className="block mb-[3px]">candidaturas activas</Text>
                </Card>
                <Card className="flex flex-col items-start justify-center gap-2 hover:ring-2 hover:ring-blue-500 transition-shadow">
                    <Metric>{offers.categories.length}</Metric>
                    <Text>Categorias</Text>
                </Card>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-1 gap-6">
                {Children.toArray(
                    offers.items.map((offer) => (
                        <Card
                            id={offer.id}
                            className="hover:ring-2 hover:ring-blue-500 transition-shadow"
                        >
                            <header className="flex flex-col gap-2">
                                <div className="flex flex-col md:flex-row items-start justify-between">
                                    <div className="flex flex-[2]">
                                        <div>
                                            {offer.urgent && (
                                                <Badge
                                                    color="orange"
                                                    className="mb-2 rounded-lg"
                                                >
                                                    <span className="flex items-center gap-1">
                                                        <TbUrgent className="opacity-90" />
                                                        Vacante urgente
                                                    </span>
                                                </Badge>
                                            )}
                                            <Title className="font-bold">
                                                {offer.title}
                                            </Title>
                                            <Text>{offer.author.name}</Text>
                                        </div>
                                    </div>
                                    {offer.salaryMin?.value &&
                                        offer.salaryMax?.value &&
                                        offer.salaryPeriod?.value && (
                                            <span className="text-sm font-bold flex flex-1 justify-end">
                                                {offer.salaryMin.value} -{" "}
                                                {offer.salaryMax.value}{" "}
                                                {offer.salaryPeriod.value}
                                            </span>
                                        )}
                                </div>

                                <OfferPropertiesList
                                    city={offer.city}
                                    published={offer.published}
                                    category={offer.category.value}
                                    workDay={offer.workDay.value}
                                />
                            </header>

                            <Text className="my-4">{offer.requirementMin}</Text>

                            <footer className="flex items-center justify-end">
                                <Link
                                    href={`/offer/${offer.id}`}
                                    className="flex-shrink-0 inline-flex justify-center items-center group focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium rounded-md border shadow-sm py-2 text-sm bg-blue-500 border-blue-500 focus:ring-blue-300 text-white hover:bg-blue-600 px-14"
                                >
                                    Aplicar
                                </Link>
                            </footer>
                        </Card>
                    ))
                )}
            </div>
        </Card>
    );
};
