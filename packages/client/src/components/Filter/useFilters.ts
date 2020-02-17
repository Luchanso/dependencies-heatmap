import { getItem, setItem, STORE_KEYS } from '../../localStorage';

type ReturnType = {
  filters: string[] | null;
  availableFilters: string[] | null;
  setFilters: (filters: string[]) => void;
  setAvailableFilters: (filters: string[]) => void;
};

function setFilters(filters: string[]) {
  setItem(STORE_KEYS.filteredLibs, filters);
}

function setAvailableFilters(filters: string[]) {
  setItem(STORE_KEYS.availableFilters, filters);
}

export function useFilters(): ReturnType {
  const filters = getItem<string[]>(STORE_KEYS.filteredLibs);
  const availableFilters = getItem<string[]>(STORE_KEYS.availableFilters) || ['arui-scripts', 'react'];

  return { filters, availableFilters, setFilters, setAvailableFilters };
}
