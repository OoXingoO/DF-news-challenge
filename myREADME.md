# News Summary Challenge

## Steps to follow - *Thinking in React*

1. Start with a mock - avaiilable in mockNewsData.json file
2. Break the UI into a component hierarchy
3. Build a static version in React
4. Identify the minimal (but complete) representation of UI state
5. Identify where your state should live
6. Add inverse data flow
---
## Break UI into component hierarchy

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

| Components    | Colour                                      |
| ------------- | ------------------------------------------- |
| **App**       | <span style="color: red">Red</span>         |
| **Thumbnail** | <span style="color: darkgreen">Green</span> |
| **Headline**  | <span style="color: orange">Orange</span>   |

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
  
  
