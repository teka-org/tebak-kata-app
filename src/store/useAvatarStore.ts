import {create} from 'zustand';

interface UserAvatarState {
  avatar: string;
  setAvatar: (email: string) => void;
}

export const useAvatarStore = create<UserAvatarState>((set) => ({
  avatar: '',
  setAvatar: (email: string) => set({ avatar: email }),
}));
