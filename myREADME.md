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
## Build static version in React
- I started off by building a `Header` and `Footer` component.
- Then I tested above components using snapshot testing to make sure that UI does not change unexpectedly.
- Next, I created the `HeadlinePage` component adding in subcomponents of `HeadlineTitle`, `Thumbnail` and `HeadlineCard` as props and using mockNewsData.json as mock data to make a display in localhost server.
- Then I tested each individual components.
 --- 
## Identify where state should live
- 
