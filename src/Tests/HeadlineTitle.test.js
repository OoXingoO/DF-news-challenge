import { render, screen } from '@testing-library/react';
import HeadlineTitle from '../Components/HeadlineCard/HeadlineTitle';

test(`should render a headline with title prop`, () => {

    const title = "testtitle";

    render(<HeadlineTitle title={title} />)

    const Headlinetitle = screen.getByText(title);

    expect(Headlinetitle).toBeInTheDocument;

})
