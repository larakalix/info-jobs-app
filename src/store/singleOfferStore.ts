import { create } from "zustand";

type StoreProps = {
    show: boolean;
    toogle: () => void;
};

export const useSingleOfferStore = create<StoreProps>((set) => ({
    show: false,
    toogle: () => set((state) => ({ show: !state.show })),
}));
