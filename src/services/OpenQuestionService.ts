import type { IOpenQuestion } from "@/types/question";

const headers = {
    "Content-Type": "application/json",
    Authorization: "Basic " + process.env.NEXT_INFOJOBS_TOKEN,
};

export const getOpenQuestionsByOffer = async (
    id: string
): Promise<IOpenQuestion[]> => {
    const response = await fetch(
        `https://api.infojobs.net/api/1/offer/${id}/openquestion`,
        {
            headers,
        }
    );
    const questions: IOpenQuestion[] = await response.json();
    return questions;
};
