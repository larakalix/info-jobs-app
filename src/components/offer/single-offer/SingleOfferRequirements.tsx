import { BarList, Text, Title } from "@tremor/react";
import { AiOutlineUser } from "react-icons/ai";

import type { ISingleOffer } from "@/types/single-offer";

export const SingleOfferRequirements = ({ offer }: { offer: ISingleOffer }) => {
    return (
        <div className="grid grid-cols-1">
            <div>
                <Title className="text-2xl font-semibold mb-4">
                    Requisitos
                </Title>

                <ul className="space-y-4">
                    <li>
                        <Title className="font-semibold text-sm md:text-base xl:text-lg">
                            Estudios mínimos
                        </Title>
                        <Text>{offer.studiesMin?.value}</Text>
                    </li>
                    {offer.skillsList?.length > 0 && (
                        <li>
                            <Title className="font-semibold text-sm md:text-base xl:text-lg">
                                Conocimientos necesarios
                            </Title>
                            <Text>
                                {offer.skillsList
                                    .map((skill) => skill.skill)
                                    .join(", ")}
                            </Text>
                        </li>
                    )}
                    <li>
                        <Title className="font-semibold text-sm md:text-base xl:text-lg">
                            Experiencia mínima
                        </Title>
                        <Text>{offer.experienceMin?.value}</Text>
                    </li>
                    <li>
                        <Title className="font-semibold text-sm md:text-base xl:text-lg">
                            Imprescindible residente en
                        </Title>
                        <Text>{offer.residence?.value}</Text>
                    </li>
                </ul>
            </div>

            <div className="mt-4">
                <BarList
                    data={[
                        {
                            name: "Aplicantes",
                            value: offer.applications,
                            icon: function Icon() {
                                return <AiOutlineUser className="mr-4" />;
                            },
                        },
                    ]}
                />
            </div>
        </div>
    );
};
