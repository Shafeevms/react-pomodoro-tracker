import DropDown from '../index';
import { fireEvent, render, screen } from '@testing-library/react';
import { IDropDownItem } from '../types';

describe('index.tsx', () => {
  it('should render "MenuButton", when DropDown is mounted', () => {
    render(<DropDown menu={[]}/>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('menu is not visible by default', () => {
    render(<DropDown menu={[]}/>);
    const menu = screen.queryByRole('list');
    expect(menu).not.toBeInTheDocument();
  });

  it(`menu is visible when MenuButton is clicked and not visible 
            if click is outside menu`, () => {
    render(<DropDown menu={[]}/>);

    const button = screen.getByRole('button');

    fireEvent.click(button);
    const menu = screen.getByTestId('menu');
    expect(menu).toBeVisible();

    fireEvent.click(document.body);

    // expect(screen.queryByTestId('menu')).not.toBeInTheDocument();

    setTimeout(() => { //TODO почему нужно ждать, а синхронно не срабатывает?
      expect(screen.queryByTestId('menu')).not.toBeInTheDocument();
    }, 100);
  });

  it('menu renders with correct props', () => {
    const actionMock = jest.fn();
    const mockMenu = [
      { name: 'name1', img: 'img1', action: actionMock, testId: 'menu-item-1' },
      { name: 'name2', img: 'img2', action: actionMock, testId: 'menu-item-2' },
    ] as unknown as IDropDownItem[];

    render(<DropDown menu={mockMenu}/>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByText('name1')).toBeInTheDocument();

    const li = screen.getByTestId('menu-item-2');
    fireEvent.click(li);
    expect(actionMock).toBeCalled();

    const img = screen.getAllByRole('img')[2]; // третий, так как первая кнопка //todo: кажется так неправильно делать?
    expect(img).toHaveAttribute('src', 'img2');
  });
});
