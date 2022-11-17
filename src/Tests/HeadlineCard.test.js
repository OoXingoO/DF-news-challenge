import { render, screen } from '@testing-library/react';
import HeadlineCard from '../Components/HeadlineCard/HeadlineCard';

jest.mock("../Components/HeadlineCard/HeadlineTitle", () => {
    return function mockHeadlineTitle() {
        return <span data-testid="test">Mock HeadlineTitle Component</span>
    }
})

jest.mock("../Components/HeadlineCard/Thumbnail", () => {
    return function mockThumbnail() {
        return <span data-testid="test">Mock Thumbnail Component</span>
    }
})

const mockNewsData = {
    id: "testId",
    webTitle: "testWebTitle",
    thumbnail: "testThumbnail"
}

describe(`Headline Card Tests`, () => {

    it(`should render both Thumbnail and HeadlineTitle components`, () => {

        const numOfSubComponents = 2;

        render(<HeadlineCard webTitle={mockNewsData.webTitle} thumbnail={mockNewsData.thumbnail} />)

        const result = screen.getAllByTestId('test').length

        expect(result).toBe(numOfSubComponents)

    })
});


