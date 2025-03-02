import { create } from "zustand";

export type SidebarStore = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: true,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
