import { Text, Title } from "@tremor/react";
import { formatDistanceToNow, isValid } from "date-fns";
import es from "date-fns/locale/es";

import type { ISingleOffer } from "@/types/single-offer";

export const ApplicantDialogInformation = ({
    offer,
}: {
    offer: ISingleOffer;
}) => {
    return (
        <div>
            <Text>Datos de la oferta</Text>
            <ul className="list-disc pl-4 [&>li]:text-gray-600 [&>li]:text-sm [&>li]:font-light">
                <li>
                    <Title className="font-semibold">Empresa</Title>
                    <Text>{offer.profile?.name}</Text>
                </li>
                <li>
                    <Title className="font-semibold">Localización</Title>
                    <Text>{offer.city}</Text>
                </li>
                <li>
                    <Title className="font-semibold">Salario</Title>
                    <Text>{offer.salaryDescription}</Text>
                </li>
                {isValid(new Date(offer.creationDate)) && (
                    <li>
                        <Title className="font-semibold">
                            Fecha de publicación
                        </Title>
                        <Text>
                            {" "}
                            {formatDistanceToNow(new Date(offer.creationDate), {
                                locale: es,
                            })}
                        </Text>
                    </li>
                )}
                <li>
                    <Title className="font-semibold">Experiencia mínima</Title>
                    <Text>{offer.experienceMin.value}</Text>
                </li>
                <li>
                    <Title className="font-semibold">Tipo de contrato</Title>
                    <Text>{offer.contractType.value}</Text>
                </li>
            </ul>
        </div>
    );
};
