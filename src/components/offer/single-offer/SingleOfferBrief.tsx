import { formatDistanceToNow, isValid } from "date-fns";
import { es } from "date-fns/locale";

import type { ISingleOffer } from "@/types/single-offer";

export const SingleOfferBrief = ({ offer }: { offer: ISingleOffer }) => {
    return (
        <section className="mt-6 grid grid-cols-2 gap-4">
            <ul className="list-disc pl-4 [&>li]:text-gray-600 [&>li]:text-sm [&>li]:font-light">
                <li>
                    {offer.city} ({offer.country?.value})
                </li>
                <li>Contrato {offer.contractType.value}</li>
                {isValid(new Date(offer.creationDate)) && (
                    <li>
                        Publicada hace{" "}
                        {formatDistanceToNow(new Date(offer.creationDate), {
                            locale: es,
                        })}
                    </li>
                )}
                <li>
                    Salario:
                    {!offer.salaryDescription
                        ? " No disponible"
                        : offer.salaryDescription}
                </li>
            </ul>
            <ul className="list-disc pl-4 [&>li]:text-gray-600 [&>li]:text-sm [&>li]:font-light">
                <li>Experiencia minima {offer.experienceMin?.value} </li>
                <li>Jornada {offer.journey?.value}</li>
            </ul>
        </section>
    );
};
