# News Summary Challenge - my steps

## Break UI into component hierarchy

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

| Components        | Colour                                      |
| ----------------- | ------------------------------------------- |
| **App**           | <span style="color: red">Red</span>         |
| **Thumbnail**     | <span style="color: darkgreen">Green</span> |
| **HeadlineTitle** | <span style="color: orange">Orange</span>   |

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

| Components    | Colour                                      |
| ------------- | ------------------------------------------- |
| **App**       | <span style="color: red">Red</span>         |
| **Thumbnail** | <span style="color: darkgreen">Green</span> |
| **Headline**  | <span style="color: orange">Orange</span>   |
| **Article**   | <span style="color: skyblue">Blue</span>    |
---
## Using Mock Data & Build static version in React
- I started off by building a `Header` and `Footer` component.
- Then I tested above components using snapshot testing to make sure that UI does not change unexpectedly.
- Next, I created the `HeadlinePage` component adding in subcomponents of `HeadlineTitle`, `Thumbnail` and `HeadlineCard` as props and using mockNewsData.json as mock data to make a display in localhost server.
- Then I tested each individual components.
 --- 
## Stateful Version & Working with external data
- The news data which will appear in the `ArticlesPage` will need to be accessed through `HeadlinePage`. The common parent component that harbours both these pages is the `App` which sits at the very top of the component hierachy.
- To be able to successfully work with external data, I used an Asynchronous Request API to initiate a request to a server to retrieve data and then use this data through JavaScript to update the page through the DOM.
- Before bringing in the Guardian API, I tested out my App by installing a JSON server.
-  
