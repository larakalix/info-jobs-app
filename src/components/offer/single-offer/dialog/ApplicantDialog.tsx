"use client";

import { Children, useCallback, useState } from "react";
import { Card, Subtitle, Text, TextInput, Title } from "@tremor/react";
import { IoIosClose } from "react-icons/io";
import { ApplicantDialogInformation } from "./ApplicantDialogInformation";
import { useSingleOfferStore } from "@/store/singleOfferStore";

import type { ISingleOffer } from "@/types/single-offer";
import type { IOpenQuestion } from "@/types/question";

type Props = {
    offer: ISingleOffer;
    questions: IOpenQuestion[];
};

export const ApplicantDialog = ({ offer, questions }: Props) => {
    const { show, toogle } = useSingleOfferStore((state) => state);

    const handleClose = useCallback(() => toogle(), [toogle]);

    if (!show) return null;

    return (
        <div className="flex items-center justify-center absolute top-0 left-0 bg-black/50 w-full h-screen overflow-hidden z-20">
            <Card className="relative w-full text-left ring-1 bg-white shadow border-blue-500 ring-gray-200 p-6 rounded-lg max-w-2xl mx-auto">
                <button
                    className="absolute top-2 right-2 cursor-pointer"
                    type="button"
                    onClick={handleClose}
                >
                    <IoIosClose className="text-2xl text-gray-400" />
                </button>

                <header className="mb-4">
                    <Subtitle>Inscripción en:</Subtitle>
                    <Title>{offer.title}</Title>
                </header>

                {questions.length === 0 && (
                    <section className="p-10 flex items-center justify-center text-center">
                        <Text className="text-gray-800 w-full">
                            No hay preguntas abiertas para esta oferta
                        </Text>
                    </section>
                )}

                {questions.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                            {Children.toArray(
                                questions.map(({ id, question }) => (
                                    <div>
                                        <Text className="text-gray-800">
                                            <label htmlFor={`${id}`}>
                                                {question}
                                            </label>
                                        </Text>
                                        <TextInput
                                            id={`${id}`}
                                            placeholder="Escribe tu respuesta"
                                            type="text"
                                        />
                                    </div>
                                ))
                            )}
                        </div>

                        <ApplicantDialogInformation offer={offer} />
                    </div>
                )}
            </Card>
        </div>
    );
};
