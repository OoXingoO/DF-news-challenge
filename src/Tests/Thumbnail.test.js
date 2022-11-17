import { render, screen } from '@testing-library/react';
import Thumbnail from '../Components/HeadlineCard/Thumbnail';

test(`should render an image with src and alt props`, () => {

    const src = "https://testsrc.jpg/";
    const alt = "testalt";

    render(<Thumbnail src={src} alt={alt} />)

    const thumbnail = screen.getByAltText(alt);
    const actual = thumbnail.src;

    expect(actual).toBe(src);

})
