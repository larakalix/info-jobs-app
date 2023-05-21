import { Callout, Card, Text, Title } from "@tremor/react";
import { getOffer, getSimilarOffers } from "@/services/OfferService";
import { getOpenQuestionsByOffer } from "@/services/OpenQuestionService";
import { Layout } from "@/components/global/Layout";
import {
    ApplicantDialog,
    SingleOfferBrief,
    SingleOfferChart,
    SingleOfferDescription,
    SingleOfferHeader,
    SingleOfferRequirements,
    SingleSimilarOffers,
} from "@/components/offer/single-offer";

type Props = {
    params: { id: string };
};

export default async function OfferHome({ params: { id } }: Props) {
    const offer = await getOffer(id);
    const questions = await getOpenQuestionsByOffer(id);
    const similarOffers = await getSimilarOffers(id);

    return (
        <section className="min-h-screen w-full ml-0 md:ml-60">
            <Layout links={[]} />

            <div className="flex flex-col gap-4 w-full p-4 max-w-full md:max-w-5xl m-auto">
                <Card>
                    <SingleOfferHeader offer={offer} />

                    <SingleOfferBrief offer={offer} />
                </Card>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                        <SingleOfferDescription offer={offer} />
                    </Card>
                    <Card>
                        <SingleOfferRequirements offer={offer} />
                    </Card>
                    <Card>
                        <SingleOfferChart />
                    </Card>
                    <Card>
                        <SingleSimilarOffers similarOffers={similarOffers} />
                    </Card>
                    <Callout
                        title="Nuestro consejo"
                        color="teal"
                        className="col-span-1 md:col-span-2"
                    >
                        Inscríbete si tienes el perfil, puede que se ajuste más
                        que el de otros inscritos.
                    </Callout>
                </section>

                <Text>
                    Los datos bancarios, de pago y datos personales (DNI, foto)
                    nunca deben proporcionarse al solicitar un empleo. Consulta
                    nuestros consejos para una búsqueda de empleo segura.
                </Text>
            </div>

            <ApplicantDialog offer={offer} questions={questions} />
        </section>
    );
}
