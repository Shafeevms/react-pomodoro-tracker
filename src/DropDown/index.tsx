import MenuButton from '../Components/Common/MenuButton';
import { useRef, useState } from 'react';
import DropDownMenu from './DropDownMenu';

interface IDropDown {
  id: string,
}

const DropDown = ({ id }:IDropDown) => {
  const positionRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
  }

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  }

  return (
    <div ref={positionRef}>
      <MenuButton onClick={openMenuHandler}/>
      {isMenuOpen &&
        <DropDownMenu
          position={positionRef}
          closeMenu={closeMenuHandler}
          id={id}
        />
      }
    </div>
  );
};

export default DropDown;
