import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ArticlePage from '../Components/ArticlePage';

jest.mock("../Components/ArticlePage", () => {
    return function mockArticlePage() {
        return <span data-testid="test">Mock Article Component</span>
    }
})

const mockNewsData = {
    id: "test-id",
    headline: "test-headline",
    thumbnail: "test-thumbnail",
    bodyText: "test-bodytext"
}

describe('ArticlePage tests', () => {

    it('it should render the ArticlePage component if id is correct', () => {

        render(
            <MemoryRouter initialEntries={['/articles/test-id']}>
                <Routes>
                    <Route path={"/articles/:id"} element={<ArticlePage news={mockNewsData} />} />
                </Routes>
            </MemoryRouter>
        )

        const articleElement = screen.getByText('Mock Article Component')
        expect(articleElement).toBeInTheDocument()
    });
})