import { Children } from "react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { Card, Metric, Subtitle, Text, Title, Badge } from "@tremor/react";

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
                <Card className="flex flex-col items-start justify-center gap-2">
                    <Metric>{offers.items.length}</Metric>
                    <Text className="block mb-[3px]">Empleos disponibles</Text>
                </Card>
                <Card className="flex flex-col items-start justify-center gap-2">
                    <Metric>0</Metric>
                    <Text className="block mb-[3px]">Ofertas nuevas</Text>
                </Card>
                <Card className="flex flex-col items-start justify-center gap-2">
                    <Metric>0</Metric>
                    <Text className="block mb-[3px]">candidaturas activas</Text>
                </Card>
                <Card className="flex flex-col items-start justify-center gap-2">
                    <Metric>{offers.categories.length}</Metric>
                    <Text>Categorias</Text>
                </Card>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-1 gap-6">
                {Children.toArray(
                    offers.items.map((offer) => (
                        <Card id={offer.id}>
                            <header className="flex flex-col md:flex-row justify-between items-start mb-2">
                                <div className="flex-2 order-2 md:order-1">
                                    {offer.urgent && (
                                        <Badge
                                            color="orange"
                                            className="mb-2 rounded-lg"
                                        >
                                            Urgente
                                        </Badge>
                                    )}
                                    <Title>{offer.title}</Title>
                                </div>
                                <div className="flex flex-wrap items-center justify-end flex-1 gap-2 order-1 md:order-2">
                                    <Badge color="blue" className="rounded-lg">
                                        {offer.category.value}
                                    </Badge>
                                    <Badge color="green" className="rounded-lg">
                                        Contrato {offer.contractType.value}
                                    </Badge>
                                    <Badge color="green" className="rounded-lg">
                                        Jornada {offer.workDay.value}
                                    </Badge>
                                </div>
                            </header>
                            <a
                                href={offer.author.uri}
                                target="_blank"
                            >
                                <Text>{offer.author.name}</Text>
                            </a>

                            <Subtitle>
                                {offer.city}, publicada hace{" "}
                                {formatDistanceToNow(
                                    new Date(offer.published),
                                    { locale: es }
                                )}
                            </Subtitle>

                            <Text className="my-4">{offer.requirementMin}</Text>

                            <Link
                                href={`/offer/${offer.id}`}
                                className="flex-shrink-0 inline-flex justify-center items-center group focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium rounded-md border shadow-sm py-2 text-sm bg-green-500 border-green-500 focus:ring-green-300 text-white hover:bg-green-600 px-14"
                            >
                                Aplicar
                            </Link>
                        </Card>
                    ))
                )}
            </div>
        </Card>
    );
};

// {
//     id: '74d0c8858b41f58c7327a66d400492',
//     title: 'Fontanero/a',
//     province: [Object],
//     city: 'Zaragoza',
//     link: 'https://www.infojobs.net/zaragoza/fontanero/of-i74d0c8858b41f58c7327a66d400492',
//     category: [Object],
//     contractType: [Object],
//     subcategory: [Object],
//     salaryMin: [Object],
//     salaryMax: [Object],
//     salaryPeriod: [Object],
//     experienceMin: [Object],
//     workDay: [Object],
//     study: [Object],
//     published: '2023-05-17T19:50:10.000Z',
//     updated: '2023-05-17T19:50:10.000Z',
//     author: [Object],
//     requirementMin: 'Tener experiencia de 1 año.\r\nResidir cerca a la zona o alrededores.',
//     bold: false,
//     applications: '0',
//     urgent: false
//   },
