import type { Component } from 'solid-js';
import Header from './Header';

import { Outlet } from '@solidjs/router';

type HeaderProps = {
  withHeader?: boolean;
};

const Layout: Component<HeaderProps> = ({ withHeader }: HeaderProps) => {
  return (
    <div class="w-screen h-screen">
      {withHeader ? <Header /> : null}
      <div class="overflow-y-scroll w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
