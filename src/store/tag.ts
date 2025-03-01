import { create } from "zustand";

export type TagStore = {
  home: {
    selectedTag: string | null;
    setSelectedTag: (tag: string | null) => void;
    isEditTagsModalOpen: boolean;
    setIsEditTagsModalOpen: (isOpen: boolean) => void;
  };
};

export const useTagStore = create<TagStore>((set) => ({
  home: {
    selectedTag: null,
    setSelectedTag: (tag: string | null) =>
      set((state) => ({ home: { ...state.home, selectedTag: tag } })),
    isEditTagsModalOpen: false,
    setIsEditTagsModalOpen: (isOpen: boolean) =>
      set((state) => ({
        home: { ...state.home, isEditTagsModalOpen: isOpen },
      })),
  },
}));

export const useHomeTagStore = () => useTagStore().home;
