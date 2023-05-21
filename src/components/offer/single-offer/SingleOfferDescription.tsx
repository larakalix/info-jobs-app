import { Text, Title } from "@tremor/react";

import type { ISingleOffer } from "@/types/single-offer";

export const SingleOfferDescription = ({ offer }: { offer: ISingleOffer }) => {
    return (
        <>
            <Title className="text-2xl font-semibold mb-4">Descripción</Title>

            <Text>{offer.minRequirements}</Text>

            <ul className="grid grid-cols-2 gap-4 mt-4">
                <li>
                    <Title className="font-semibold">Referencia</Title>
                    <Text>{offer.profile?.name}</Text>
                </li>
                <li>
                    <Title className="font-semibold">Categoría</Title>
                    <Text>{offer.category?.value}</Text>
                </li>
                <li>
                    <Title className="font-semibold">Departamento</Title>
                    {!offer.department ? (
                        <Text>No disponible</Text>
                    ) : (
                        <Text>{offer.department}</Text>
                    )}
                    <Text>{offer.department}</Text>
                </li>
                <li>
                    <Title className="font-semibold">Salario</Title>
                    {!offer.salaryDescription ? (
                        <Text>Salario no disponible</Text>
                    ) : (
                        <Text>{offer.salaryDescription}</Text>
                    )}
                </li>
                <li>
                    <Title className="font-semibold">Horario</Title>
                    <Text>Jornada {offer.journey?.value}</Text>
                </li>
                <li>
                    <Title className="font-semibold">
                        Duración del contrato
                    </Title>
                    {!offer.contractDuration ? (
                        <Text>No disponible</Text>
                    ) : (
                        <Text>Contrato {offer.contractDuration}</Text>
                    )}
                </li>
            </ul>
        </>
    );
};
