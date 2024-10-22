import { create } from "zustand";

export const useStore = create(set => ({
  searchInput: null,
  setSearchInput: searchInput => set({ searchInput }),
  data: null,
  setData: data => set({ data }),
  filteredData: null,
  setFilteredData: filteredData => set({ filteredData })
}));
