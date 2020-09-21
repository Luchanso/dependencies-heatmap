import { useEffect, useState } from "react";

function isProduction() {
  return process.env.NODE_ENV === 'production';
}

async function getConfig(): Promise<any> {
  return (await fetch("./config")).json();
}

async function getLocalhostConfig(): Promise<Config> {
  return {
    BACKEND_URL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000',
    BASENAME: '/'
  }
}

function ifElse<A, B>(state: boolean, a: A, b: B) {
  if (state) {
    return a;
  }

  return b;
}

export type Config = {
  BACKEND_URL: string;
  BASENAME: string;
}

function isConfig(data: any | Config): data is Config {
  if ((data as Config).BACKEND_URL && (data as Config).BASENAME) {
    return true;
  }

  return false;
}

export function useServerConfig(): Config | undefined {
  const [config, setConfig] = useState<Config | undefined>(undefined);

  useEffect(() => {
    async function fetchConfig() {
      console.log('runned');

      let data = await ifElse(isProduction(), getConfig, getLocalhostConfig)();

      if (isConfig(data)) {
        setConfig(data)
      }
    }

    fetchConfig();
  }, [setConfig]);

  return config;
}
