import Button from './Button';

import config from '@/utils/config';

const { devMode } = config;
const Header = () => (
  <nav class="absolute inset-x-0 max-w-screen-md h-fit px-4 sm:m-auto py-6 items-center flex justify-between z-10 border-b">
    <h3 class="select-none uppercase text-xl md:text-3xl font-bold font-sans">{`POMORATION`}</h3>
    {devMode ? <Button class="w-fit">Login</Button> : null}
  </nav>
);

export default Header;
