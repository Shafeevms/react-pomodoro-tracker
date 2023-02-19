import MenuButton from '../MenuButton';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import DropDownItem from './DropDownItem';

import styles from './index.module.scss';


export interface IDropDownItem {
  name: string,
  action: () => void,
  img: string,
}

interface IDropDown {
  menu: IDropDownItem[],
}

const DropDown = ({ menu }: IDropDown) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });

  return (
    <div ref={dropdownRef}>
      <MenuButton onClick={openMenuHandler}/>
      {isMenuOpen &&
        <ul className={styles.dropDown}>
          {menu && menu.map(item => <DropDownItem key={item.name} img={item.img} name={item.name} action={item.action}/>)}
        </ul>
      }
    </div>
  );
};

export default DropDown;
