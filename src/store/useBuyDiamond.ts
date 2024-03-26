import {create} from 'zustand';

interface BuyDiamondState {
    id: string
    totalDiamond: number
    price: boolean
    setId: (id: string) => void;
    setTotalDiamond: (diamond: number) => void;
    setPrice: (price: boolean) => void;
}

export const useBuyDiamondStore = create<BuyDiamondState>((set) => ({
    id: '',
    totalDiamond: 0,
    price: false,
    setId: (inputId: string) => set({ id: inputId }),
    setTotalDiamond: (inputDiamond: number) => set({ totalDiamond: inputDiamond }),
    setPrice: (inputPrice: boolean) => set({ price: inputPrice }),
}));
