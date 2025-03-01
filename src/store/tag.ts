import { create } from "zustand";

export type TagStore = {
  home: {
    selectedTag: string | null;
    setSelectedTag: (tag: string | null) => void;
  };
};

export const useTagStore = create<TagStore>((set) => ({
  home: {
    selectedTag: null,
    setSelectedTag: (tag: string | null) =>
      set((state) => ({ home: { ...state.home, selectedTag: tag } })),
  },
}));
