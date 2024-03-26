import {create} from 'zustand';

interface BuyAvatarState {
    id: string
    avatar: string
    avatar_name: string
    diamondPrice: number
    purcashed: boolean
    setId: (id: string) => void;
    setAvatar: (avatar: string) => void;
    setAvatarName: (name: string) => void;
    setDiamondPrice: (diamond: number) => void;
    setPurchased: (purcashed: boolean) => void;
}

export const useBuyAvatarStore = create<BuyAvatarState>((set) => ({
    id: '',
    avatar: '',
    avatar_name: '',
    diamondPrice: 0,
    purcashed: false,
    setId: (inputId: string) => set({ id: inputId }),
    setAvatar: (inputAvatar: string) => set({ avatar: inputAvatar }),
    setAvatarName: (inputName: string) => set({ avatar_name: inputName }),
    setDiamondPrice: (inputDiamond: number) => set({ diamondPrice: inputDiamond }),
    setPurchased: (inputPurchased: boolean) => set({ purcashed: inputPurchased }),
}));
