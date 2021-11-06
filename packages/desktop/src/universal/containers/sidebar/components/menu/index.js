import React from 'react';
import Link from 'next/link';

import { Home, Search, Collection } from '@spotify-clone/shared/src/universal/components/icon';

const ICON_SIZE = 24;

import s from './index.module.scss';

function Menu() {
  const menuItems = [
    {
      name: 'Ana sayfa',
      icon: <Home width={ICON_SIZE} height={ICON_SIZE} />,
      href: '/',
    },
    {
      name: 'Ara',
      icon: <Search width={ICON_SIZE} height={ICON_SIZE} />,
      href: '/search',
    },
    {
      name: 'Kitapığın',
      icon: <Collection width={ICON_SIZE} height={ICON_SIZE} />,
      href: '/collection',
    },
  ];

  return (
    <nav className={s.menu}>
      <ul className={s.menuElements}>
        {menuItems.map((item) => (
          <li>
            <Link href="/collection">
              <a className={s.menuLink}>
                {item.icon}
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
