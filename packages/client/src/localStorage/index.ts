import debug from "debug";

const log = {
  getItem: debug('localStorage:getItem'),
  setItem: debug('localStorage:setItem')
}

export const STORE_KEYS = {
  projects: 'projects',
  filters: 'filters',
  availableFilters: 'availableFilters'
};

export const getItem = <T>(key: string) => {
  log.getItem('key', key);
  const value = localStorage.getItem(key);
  log.getItem('value', value);
  const result = (value && (JSON.parse(value) as T)) || null;
  log.getItem('result', value);

  return result;
};

export const setItem = (key: string, value: any) => {
  log.setItem('key', key);
  log.setItem('value', value);
  localStorage.setItem(key, JSON.stringify(value));
}
