import DropDownMenuItem from '../DropDownItem';
import { fireEvent, render, screen } from '@testing-library/react';
import DropDownItem from '../DropDownItem';

describe('DropDownMenuItem', () => {
  it('component renders without errors', () => {
    const actionMock = jest.fn();

    render(<DropDownItem img='img1' title='testTitle' action={actionMock}/>);

    const title = screen.getByRole('heading');
    const img = screen.getByRole('img');

    fireEvent.click(title);

    expect(title.textContent).toEqual('testTitle');
    expect(img).toHaveAttribute('src', 'img1');
    expect(actionMock).toBeCalled();
  });
});
