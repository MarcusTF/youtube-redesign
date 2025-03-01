import { create } from "zustand";

export type SearchStore = {
  query: string;
  setSearchQuery: (query: string) => void;
  resetSearchQuery: () => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  query: "",
  setSearchQuery: (query) => set({ query }),
  resetSearchQuery: () => set({ query: "" }),
}));
