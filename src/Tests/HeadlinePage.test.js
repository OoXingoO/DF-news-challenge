import { render, screen } from '@testing-library/react';
import HeadlinePage from '../Components/HeadlinePage';
import sampleNews from '../mockNewsData.json';

jest.mock("../Components/HeadlineCard/HeadlineCard", () => {
    return function mockHeadlineCard() {
        return <span data-testid="testHeadlinePage">Headline Page Component</span>
    }
})

test(`it should render the correct number of HeadlineCard components based on mock data`, () => {

    const sampleNewsLength = sampleNews.response.results.length

    render(<HeadlinePage />);

    const result = screen.getAllByTestId('testHeadlinePage').length;

    expect(result).toBe(sampleNewsLength);
})