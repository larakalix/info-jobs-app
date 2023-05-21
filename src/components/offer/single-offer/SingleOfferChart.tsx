"use client";

import { LineChart, Subtitle, Title } from "@tremor/react";

const getRandomData = () => {
    const getApplicantRandomPercentage = () =>
        Math.random() * (5.03 - 0.1) + 0.1;
    const getVacancyRandomPercentage = () =>
        Math.random() * (4.87 - 1.01) + 1.01;

    return [
        {
            month: "Enero",
            "Porcentaje de aplicantes": getApplicantRandomPercentage(),
            "Porcentaje de vacantes": getVacancyRandomPercentage(),
        },
        {
            month: "Febrero",
            "Porcentaje de aplicantes": getApplicantRandomPercentage(),
            "Porcentaje de vacantes": getVacancyRandomPercentage(),
        },
        {
            month: "Marzo",
            "Porcentaje de aplicantes": getApplicantRandomPercentage(),
            "Porcentaje de vacantes": getVacancyRandomPercentage(),
        },
        {
            month: "Abril",
            "Porcentaje de aplicantes": getApplicantRandomPercentage(),
            "Porcentaje de vacantes": getVacancyRandomPercentage(),
        },
        {
            month: "Mayo",
            "Porcentaje de aplicantes": getApplicantRandomPercentage(),
            "Porcentaje de vacantes": getVacancyRandomPercentage(),
        },
    ];
};

export const SingleOfferChart = () => {
    return (
        <>
            <header className="mb-4">
                <Title className="text-2xl font-semibold">
                    Aplicantes/Vacantes 2023
                </Title>
                <Subtitle>Porcentaje de aplicantes y vacantes por mes</Subtitle>
            </header>
            <LineChart
                className="mt-6"
                data={getRandomData()}
                index="month"
                categories={[
                    "Porcentaje de aplicantes",
                    "Porcentaje de vacantes",
                ]}
                colors={["teal", "orange"]}
                valueFormatter={(number: number) => `${number}%`}
                yAxisWidth={40}
            />
        </>
    );
};
