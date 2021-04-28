# Exercise: Recast.ly #
> This project was assigned to me as a student when attending Hack Reactor.
Your task is to build a YouTube Video Player app using React.

### React is Interesting in a Few Key Ways ###
* React uses JSX, which is a syntax extension to JS that is used to describe what the UI should look like.
* React offers two types of view components, a simple functional-style component, and a feature rich class-based component.
* When using React, developers don't have to listen to changes and manually trigger a re-render - instead, React will re-render the necessary components upon state change.
![image](https://user-images.githubusercontent.com/76498304/116457162-eb47d680-a817-11eb-8366-7a08f0833cd8.png)

### High Level Goals of this Sprint ###
* Learn React and how to think about web apps as components in React
* Learn how to transpile code with Babel's command line tool
* Practice using ES6 features
* Continue practicing interactions with a REST API (in this case, the [YouTube Data API](https://developers.google.com/youtube/v3/?hl=en))

### Thinking in Components ###
When designing and building front-end applications, a good approach is to break the functionality of the application apart into small, easily understandable and reusable pieces, often called ___components___. React components are like JavaScript functions - they accept inputs (called props) and return React elements describing what should appear on the screen.

### App Organization ###
Here's how the app is organized:

![image](https://user-images.githubusercontent.com/76498304/116457382-306c0880-a818-11eb-91c2-edf562cd2887.png)

* __`App`__ - The top level container for the entire application. This is the component that will be rendered to the DOM
* __`Search`__ - Responsible for knowing and communicating information about the search input field
* __`VideoPlayer`__ - Responsible for playing a single video and displaying information about it
* __`VideoList`__ - A container component responsible for populating video list entry components
* __`VideoListEntry`__ - A component that shows a thumbnail view for a single video. When the title of this video is clicked, that video will be played in the __`VideoPlayer`__ component

### Project set up ###

#### npm ####
This sprint uses [npm](https://www.npmjs.com/) to manage its dependencies. npm comes bundled with Node, and is another JavaScript package manager that makes it easy for developers to share and reuse code. Even though npm started in the Node ecosystem, it is quickly becoming the default choice for sharing all types of JavaScript code.

Here are a few tips to help get up and running:
* To install all the dependencies run __`npm install`__
* npm's configuration file is __`package.json`__
* npm downloads packages into __`node_modules`__

Install this sprint's dependencies:
  - [ ] [Install Node.js](https://nodejs.org/en/) if you haven't yet.
  - [ ] Run __`npm install`__
 
### Babel ###
In order to take advantage of React's declarative [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) syntax, we need to use a tool called a __transpiler__. A transpiler converts source code written with non-standard syntax, into to a version of JavaScript that will work in all major environments. [Babel](https://babeljs.io/) is a generic transpiler for JavaScript that can convert both JSX and [ES6](https://babeljs.io/docs/en/babel-preset-env/) syntax.

We're going to use Babel's [command line interface](https://babeljs.io/docs/en/babel-cli/) to transpile the source code in this sprint. It is recommended that it be installed locally for each project. It is already included in your package.json file.

The following command will transpile all of the JSX/ES6 files in this sprint into parallel ES5 files in the __`compiled/`__ directory.
```
npx babel . --out-dir compiled --presets=@babel/preset-react --ignore=node_modules,compiled --source-maps inline
```
This command might seem intimidating, but is similar to passing multiple arguments to a function. Let's break it down:
* __`npx`__ is a tool that ships with npm and allows you to run local dependencies as commands. If the dependency doesn't exist (it was not listed in package.json and is therefore not installed in __`node_modules/`__) npx will download it temporarily to run the command.
* __`babel`__ tells npx to search for and run the Babel command-line utility
* __`.`__ tells Babel to transpile all javascript files in the current working directory
* __`--out-dir`__ tells Babel to put the transpiled files into the __`compiled/`__ folder
* __`--presets`__ tells Babel what kind of transformations to make. The preset, __`@babel/preset-react`__, transpiles JSX. Each preset is installed as its own package, with the naming convention __`@babel/preset-*`__. In a config file and in this command, it is possible to write @babel/react since it is explicitly a preset with the flag or in the a config file.
* __`--ignore tells`__ Babel to not transpile any files in the the __`node_modules`__ and compiled directories
* __`--source-maps`__ tells Babel to include [source maps](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) with our transpiled code, making debugging much easier.

Inside of __`index.html`__ and __`SpecRunner.html`__, the ___compiled___ files are loaded in the script tags. After making any changes to the files in the __`src/`__ directory, you must transpile them to see the changes reflected when you refresh your html files.
  - [ ] Run the __`babel`__ command to transpile all the source files into the __`compiled`__ directory
This is arduous to do manually after every change. Luckily, Babel has an option that makes this much easier.
  - [ ] Find a way to make __`babel`__ compile files as they are changed
 
### Live reloading server ###
In order to boost productivity when developing rich client side applications, this sprint uses a live development server to automatically refresh the browser page as you make changes to your source code.

Try it out:
  - [ ] In a new Terminal tab, start the Recast.ly app by running __`live-server`__
  - [ ] Make a change in one of the JavaScript files in the __`src/`__ directory
  - [ ] Be amazed as your browser should magically refresh with the compiled changes
 
___We'll be covering servers later in extensive detail. For now you can just run this command and ignore the complexity of what it means or how it works.___

#### npm scripts ####
npm comes with a handy [scripting](https://docs.npmjs.com/misc/scripts/) feature that lets you define shell commands inside of __`package.json`__. If you want to improve your application's build process, consider completing the following optional task:
  - [ ] Write an npm __`start`__ script that combines the previous two build steps together
  
#### React Dev Tools ####
  - [ ] Install the [React Dev Tools](https://github.com/facebook/react-devtools) extension for Chrome to make debugging this sprint easier.
  
### Try the Problem ###
During the "Try the Problem" phase, you should:
  - [ ] Work through the React Components primer solo
  - [ ] Read this [guide](https://reactjs.org/docs/thinking-in-react.html) about thinking in React components.
  
### Bare Minimum Requirements ###
  - [ ] Inside of __`src/index.js`__, render the __`App`__ component to the DOM and explore the codebase to get an understanding of each component's responsibility
  - [ ] Use ES6. There are a few new features that play very nicely with React. Insist on using them throughout this sprint:
     * [Import Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 
     * [Export Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) 
     * [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 
     * [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), especially to exploit its quality of binding __`this`__ to the lexical scope
     * [Shorthand](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) object property and method syntax 
     * [Template](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) strings 
     * [Default](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) parameters 
     * [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 
     
#### Create a dynamic Video List component ####
When building out front-end applications, it can be productive to temporarily ignore the complexity of working with real data, and mock out "fake" data instead. __[Stateless functional components](https://reactjs.org/blog/2015/10/07/react-v0.14.html#stateless-functional-components)__ make this easy because they render the same with "real" data from a live API or "fake" data from a file.

You're going to use the sample data in __`src/data/exampleVideoData.js`__ to build out the stateless functional __`VideoList`__ and __`VideoListEntry`__ components.
  - [ ] Include __`src/data/exampleVideoData.js`__ in __`index.html`__ so it can be used by your React components
  - [ ] Pass __`exampleVideoData`__ into the VideoList component
  - [ ] Refactor the __`VideoList`__ component to dynamically render one __`VideoListEntry`__ component for each video object in __`exampleVideoData`__
  - [ ] Refactor the __`VideoListEntry`__ component to dynamically render based on the video object it receives
  - [ ] Make sure the tests for __`VideoList`__ and __`VideoListEntry`__ are passing. You can open the tests with __`npm test`__
  
When it's all set up, you should see the titles, thumbnails, and descriptions of some React Tutorials on the page. If you notice a ___Warning___ in the console about a "unique 'key' prop", know that this has to do with [React's performance](https://reactjs.org/docs/composition-vs-inheritance.html#dynamic-children) , but you can ignore it if you wish.

#### Create a dynamic Video Player component ####
Videos are played by passing a source url to the __`iframe tag`__ inside the __`VideoPlayer`__ component. The video associated with the id included after __`https://www.youtube.com/embed/`__ will get played. Because this is also a stateless functional component, we can build it out with our example data.
   - [ ] Pass a single video from __`exampleVideoData`__ into __`VideoPlayer`__
   - [ ] Update __`VideoPlayer`__ to play the video it is passed and display its title and descriptions
   - [ ] Make sure the tests for __`VideoPlayer`__ are passing. You can open the tests with __`npm test`__
   
#### Hook together the Video List and Video Player components ####
Now it's time to make the stateless functional components interact. In React, sibling components can not directly access each other, so they need the help of a parent component to manage communication between them. In this case, __`App`__ is the parent component for the sibling components __`VideoList`__ and __`VideoPlayer`__.
   - [ ] If you haven't already, complete __[Course]6ees6ees6ees__.
   - [ ] Refactor __`App`__ into a [class component](https://reactjs.org/docs/components-and-props.html#es6-classes) using ES6 classes
   - [ ] Initialize the __`state`__ of __`App`__ to keep track of all the videos in the video list and the current video in the player. Pass this __`state`__ down as props to its children components. Continue to use the example data.
   - [ ] Make it so that when the title of a __`VideoListEntry`__ is clicked, that video is displayed in the player. __`Do not`__ add __`state`__ to any of the functional components.
   - [ ] Make sure all the active tests for __`App`__ are passing. You can open the tests with __`npm test`__
   
#### Set up interactions with the YouTube API ####
You'll need a developer key in order to access videos from the YouTube Data API. This is common practice with third party APIs because they want to keep track of who is accessing their data, enforce rate limits, and even sometimes make money. Access to the YouTube API is free, all you need is a Google Account.
   - [ ] Go to [Google's YouTube API](https://console.cloud.google.com/apis/library/youtube.googleapis.com?pli=1)
   - [ ] If prompted, select a project or create a new one. It doesn't matter what you name a new project
   - [ ] Click __`Enable`__ and then __`Go to Credentials`__
   - [ ] Select __`Web browser`__ from the drop-down and the __`Public data`__ radio button
   - [ ] Give your key any name, leave the optional field blank, and click __`Create`__.
   - [ ] Make your key available to the rest of your application from a new file, __`src/config/youtube.js`__
   
#### Create a reusable API helper ####
To search for YouTube videos, you'll use the API's [Search:list](https://developers.google.com/youtube/v3/docs/search/list) endpoint. To help keep your code organized, write a helper function that is solely responsible for interacting with this endpoint. In __`lib/searchYouTube.js`__ fill out the __`searchYouTube`__ function. It should:
   - [ ] Use jQuery to send a __`GET`__ request to the search endpoint. __This is the only time you should use jQuery in this sprint__
   - [ ] Accept a __`callback`__ function that is invoked with the videos array that is returned from hitting the endpoint
   - [ ] Accept an __`options`__ object with the following properties:
     - [ ] __`query`__ - the string to search for
     - [ ] __`max`__ - the maximum number of videos to get, which should default to 5
     - [ ] __`key`__ - an authorized YouTube Browser API key
   - [ ] Only __`GET`__ embeddable videos
   - [ ] Make sure all the tests for __`searchYouTube`__ are passing. You can open the tests with __`npm test`__
   
#### Initialize the app with live data ####
Before integrating live data, you should take a minute to appreciate how far you got with the __`exampleVideoData`__. Now you can tackle the complexity of starting to use actual data in isolation, and assuming the shape of the live data is the same as the data you mocked out, everything will continue working. If you made your helper correctly, this following section should be simple.
   - [ ] As you've done with other modules, make __`searchYouTube`__ available for consumption and pass it as a prop to your app
   - [ ] Replace __`exampleVideoData`__ from the initial __`state`__ of __`App`__ with empty initial values, appropriate to the type of values it is expecting
   - [ ] Utilize the __[`componentDidMount`](https://reactjs.org/docs/react-component.html#mounting-componentdidmount)__ lifecycle hook to render your app with live videos returned from __`searchYouTube`__
   - [ ] Remove the __`x`__ from the pending tests in __`AppSpec.jsx`__, and make sure all the __`App`__ tests are passing. You can open the tests with __`npm test`__
   
#### Implement live-search ####
Build out __`Search`__ and update other components:
  - [ ] As a user types into the input box, the __`VideoList`__ and __`VideoPlayer`__ components are updated with videos from the YouTube data API that match the value of the input
  - [ ] Debounce ajax requests triggered by the __`Search`__ component to occur _`at most`_ once every 500ms. (Imagine if YouTube's API wasn't free :O)
  - [ ] Make sure all the tests for __`Search`__ are passing. You can open the tests with __`npm test`__
