// dataStore.ts
import { create } from 'zustand';

interface PlayersState {
  players: any[];
  setPlayers: (players: any[]) => void;
}

const initialState: PlayersState = {
  players: [],
  setPlayers: () => {},
};

const usePlayersStore = create<PlayersState>((set) => ({
  ...initialState,
  setPlayers: (players: any[]) => set({ players }),
}));

export default usePlayersStore;