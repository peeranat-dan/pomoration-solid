import { resolveBoolean } from './resolveType';

const getConfig = () => ({
  devMode: resolveBoolean(import.meta.env.VITE_DEV_MODE) || false,
});

const config = getConfig();

export default config;
