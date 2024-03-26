import {create} from 'zustand';

interface UserState {
    id: string;
    name: string;
    avatar: string;
    diamond: number;
    setId: (id: string) => void;
    setName: (name: string) => void;
    setAvatar: (avatar: string) => void;
    setDiamond: (diamond: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
    id: '',
    name: '',
    avatar: '',
    diamond: 0,
    setId: (inputId: string) => set({ id: inputId }),
    setName: (inputName: string) => set({ name: inputName }),
    setAvatar: (inputAvatar: string) => set({ avatar: inputAvatar }),
    setDiamond: (inputDiamond: number) => set({ diamond: inputDiamond }),
}));