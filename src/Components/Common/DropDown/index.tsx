import MenuButton from '../MenuButton';
import React, { useEffect, useRef, useState } from 'react';
import DropDownItem from './DropDownItem';

import styles from './index.module.scss';
import { IDropDownItem, isNode } from './types';

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
    const { current } = dropdownRef;
    if (!current) {
      return;
    }

    if (isNode(event.target) && !current.contains(event.target)) {
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
          {menu.map(item => (
            <DropDownItem
              key={item.name}
              img={item.img}
              title={item.name}
              action={item.action}
            />
          ))}
        </ul>
      }
    </div>
  );
};

export default DropDown;
