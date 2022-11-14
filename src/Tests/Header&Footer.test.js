import { render } from '@testing-library/react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

test(`Header matches snapshot`, () => {
    const headerComponent = render(<Header />);

    expect(headerComponent).toMatchSnapshot();
});

test(`Footer matches snapshot`, () => {
    const footerComponent = render(<Footer />);

    expect(footerComponent).toMatchSnapshot();
});