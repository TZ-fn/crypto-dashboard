import { Dispatch, SetStateAction, useCallback, useEffect, useSyncExternalStore } from 'react';

const dispatchStorageEvent = <T extends string | null | undefined>(key: string, newValue: T) => {
  window.dispatchEvent(new StorageEvent('storage', { key, newValue }));
};

const setLocalStorageItem = <T>(key: string, value: T) => {
  const stringifiedValue = JSON.stringify(value);
  window.localStorage.setItem(key, stringifiedValue);
  dispatchStorageEvent(key, stringifiedValue);
};

const removeLocalStorageItem = (key: string) => {
  window.localStorage.removeItem(key);
  dispatchStorageEvent(key, null);
};

const getLocalStorageItem = (key: string) => {
  return window.localStorage.getItem(key);
};

const useLocalStorageSubscribe = (callback: (this: Window, event: StorageEvent) => void) => {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
};

const getLocalStorageServerSnapshot = () => {
  throw Error('useLocalStorage is a client-only hook');
};

type SetValue<T> = Dispatch<SetStateAction<T>>;

function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  const getSnapshot = () => getLocalStorageItem(key);

  const store = useSyncExternalStore(useLocalStorageSubscribe, getSnapshot, getLocalStorageServerSnapshot);

  const setState: SetValue<T> = useCallback(
    (value) => {
      if (store) {
        try {
          const nextState = typeof value === 'function' ? value(JSON.parse(store)) : value;
          if (nextState === undefined || nextState === null) {
            removeLocalStorageItem(key);
          } else {
            setLocalStorageItem(key, nextState);
          }
        } catch (e) {
          console.warn(e);
        }
      }
    },
    [key, store],
  );

  useEffect(() => {
    if (getLocalStorageItem(key) === null && typeof initialValue !== 'undefined') {
      setLocalStorageItem(key, initialValue);
    }
  }, [key, initialValue]);

  return [store ? JSON.parse(store) : initialValue, setState];
}

export default useLocalStorage;
