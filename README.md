# Homework #4

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.

  * `debugger`
    - debugger is a command in JavaScript that activates the browser's debug mode in the developer tools, allowing the code to be stepped through line by line
  * react router
    - react router is the latest in a long line of attempts to create routing for React. It is finally free of url artifacts such as extra '#'s and '?'s
  * `<Router />` (BrowserRouter)
    - BrowserRouter is the routing root component that allows routing to take place. It must contain a single child object, which will contain any needed navigation and the route targets
  * `<Route />`
    - Route is the route target that is identified by path="" and any children inside are displayed when the url matches the route's path
  * `<Link />`
    - Link is a replacement for the a tag that allows navigation to routes by changing the url so the required Route will display
  * `npm` and `npm install`
    - npm does not stand for Node Package Manager, even though it seems like it should. It is a dependency management system for JavaScript for both the back and front ends. npm install reads the `package.json` and installs all the packages that are listed, as well as all the required dependencies for those packages.


2. Fork and clone this repo.

  * Create a boilerplate React app called me. `create-react-app me`
  * Navigate into /me and run the command: `npm start`
  * `App.js` should return the `<Router />` component as the base.
  * Add a header to the top of your page with three `<Link />` components.
  * Create three components that will be three different "pages" that you will render.
  * The first comopnent should be called `<About />` and should display some fun facts about yourself.
  * The second comopnent should be called `<Hobbies />` and should display a list of your favorite hobbies.
  * The third component should be called `<Media />` and should display some pictures that you like.
  * Link to these three components from the header and display them when you navigate to the appropriate paths.



#### Congratulations on finishing Homework #4!

For more information about our part-time and full-time courses visit: https://www.lambdaschool.com
LambdaSchool's full-time class is now tuition guaranteed.  
