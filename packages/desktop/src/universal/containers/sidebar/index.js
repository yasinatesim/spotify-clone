import React from 'react';

import { LogoWhite, Plus, Heart } from '@spotify-clone/shared/src/universal/components/icon';

import Menu from './components/menu';

import s from './index.module.scss';

function Sidebar() {
  return (
    <aside className={s.sidebar}>
      <a href="#" className={s.logo}>
        <LogoWhite height={40} />
      </a>

      <Menu />

      <nav className={s.nav}>
        <ul>
          <li>
            <a href="#" className={s.link}>
              <span className={s.plus}>
                <Plus width={12} height={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a href="#" className={s.link}>
              <span className={s.heart}>
                <Heart width={12} height={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      {/* <Playlists />

    <DownloadApp />  */}
    </aside>
  );
}

Sidebar.propTypes = {};

export default Sidebar;