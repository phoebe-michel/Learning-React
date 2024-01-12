# React Fundamentals

<code>Table of Contents</code>
- [React Fundamentals](#react-fundamentals)
  - [Introduction](#introduction)
    - [What is React?](#what-is-react)
    - [Why Learn React?](#why-learn-react)
    - [Ok, why else?](#ok-why-else)
    - [Prerequisites for Learning React](#prerequisites-for-learning-react)
  - [Creating our First React Application - Hello World](#creating-our-first-react-application---hello-world)
    - [Setting up our Development Environment](#setting-up-our-development-environment)
    - [Creating an application using create-react-app](#creating-an-application-using-create-react-app)
      - [Using npx](#using-npx)
      - [Using npm](#using-npm)
  - [Folder Structure](#folder-structure)
  - [Components](#components)
    - [How Does a Component Translate to Code in our Application?](#how-does-a-component-translate-to-code-in-our-application)
    - [Component Types](#component-types)
      - [Stateless Functional Component](#stateless-functional-component)
      - [Stateless Class Component](#stateless-class-component)
    - [Functional Components](#functional-components)
      - [Creating a Functional Component](#creating-a-functional-component)
    - [Class Components](#class-components)
      - [Creating a Class Component](#creating-a-class-component)
  - [Functional vs. Class Components](#functional-vs-class-components)
    - [Functional Components](#functional-components-1)
    - [Class Components](#class-components-1)
    - [Hooks Update](#hooks-update)
  - [JSX](#jsx)
    - [Why do we need JSX?](#why-do-we-need-jsx)
    - [How does JSX work behind the scenes?](#how-does-jsx-work-behind-the-scenes)
    - [Some Differences in JSX vs. HTML](#some-differences-in-jsx-vs-html)
  - [Props](#props)
    - [Applying Props](#applying-props)
    - [Rendering Unknown Content](#rendering-unknown-content)
    - [Props with Class Components](#props-with-class-components)
  - [State](#state)
    - [Comparing State \& Props](#comparing-state--props)
    - [Using Component State](#using-component-state)
    - [Dos \& Donts of 'State' \&\& 'setState'](#dos--donts-of-state--setstate)
  - [Destructuring Props \& State](#destructuring-props--state)
    - [Destructuring props in a Functional Component](#destructuring-props-in-a-functional-component)
    - [Destructuring props in a Class Component](#destructuring-props-in-a-class-component)
    - [Destructuring state](#destructuring-state)


## Introduction

### What is React?

<code>React is an open source JavaScript <ins>library</ins> for building user interfaces</code>

- NOT a framework, which means it focuses on doing one thing really well; Responsible only for building UI interfaces.
- Doesn't focus on other parts of your website, like Routing or HTTP requests

### Why Learn React?

1. **Huge Community**: Expect to find lots of articles and solutions to most of the problems you'll encounter when getting started with React.
2. **In Demand Skillset**: React is popular among developers and one of the most sought after skillsets right now
3. **Component Based Architecture**: Lets you break down your application into small parts which can then be composed to make up more complex UIs. 
4. **Reusable Code**: A huge plus point for enterprise applications
5. **Declarative**: 

   - Tell React what you want the UI to look like and React, with it's <code>react-dom</code> library, will build the actual UI.
   - Will efficiently update and render components when your data changes
   - DOM updates are handled gracefully in REACT

### Ok, why else?

1. Seamlessly integrate react into any of your applications
2. Can be portion of your page, complete page or entire application itself.

### Prerequisites for Learning React

- HTML, CSS & **JavaScript fundamentals**: `this` keyword, `filter`, `map`, and `reduce`
- **ES6**: `let` & `const`, arrow functions, template literals, default parameters, object literals, rest and spread operators and desctructuring assignment.

**Note**: Tutorial is currently using React v16

<div align="right">
<a href="#react-fundamentals">Back to Top &#8593</a>
</div>

## Creating our First React Application - Hello World

### Setting up our Development Environment

- To get started, we need to have two things installed:
  
  1. [Node](nodejs.org) - Make sure it's version 14 or higher
  2. Text Editor of our choice (I'm using [VSCode](code.visualstudio.com))

### Creating an application using create-react-app

<code>[create-react-app](https://github.com/facebook/create-react-app?tab=readme-ov-file#create-react-app--) is a command-line interface tool that allows you to quickly create and run React applications with no configurations</code>

#### Using npx

`npx` is a npm package runner which is installed when you install Node. It allows you to run *`create-react-app`* without having to install it.

When you run <code>npx create-react-app *\<project-name\>*</code> in the command line, an entire application is created for you and the folder is added to your directory.

Let's create an application named *`hello-world`*

```node.js
npx create-react-app hello-world
```

#### Using npm

Alternatively, you can install the `create-react-app` package globally using the following command:

```npm
npm install create-react-app -g
```

Once installed, you can run the following command:

```npm
create-react-app hello-world
```

<div align="right">
<a href="#react-fundamentals">Back to Top &#8593</a>
</div>

## Folder Structure

**root** folder: 

  - **package.json**: contains the depencies and scripts required for the project.
  - **package-lock.json**: ensures consistent installation of your dependencies.
  - **node_modules**: has all of the dependencies. Created when you run either `react-create-app` or `npm install`

**public** folder:
  - **index.html**: only HTML file you're going to have in your application. Contains one div tag with an id named `root`. React will take over this `div` tag and control the UI.

**src** folder: you'll be working with this folder primarily in the application
  - **index.js**: starting point for the react application. 
    - specifies the root component, which is the `App` component, and the DOM element which will be controlled by React. 
    - In our `hello-world` application, it is the previously mentioned `div` element with the id, `root`, in our `index.html` file. 
    - The `App` component is rendered inside of the `root` DOM node.
  - **App.js**: represents the view we see in the browser 
    - responsible for the HTML displayed in the browser
  - **App.css**: automatically generated by `create-react-app` for styling.
  - **App.test.js**: automatically generated by `create-react-app` for unit tests
  - **index.html**: applies style to the body tag
  - **serviceWorker.js**: primarily for PWAs. (we'll circle back to this one later)

<div align="right">
<a href="#react-fundamentals">Back to Top &#8593</a>
</div>

## Components

`A component represents a part of a user interface`

- Components are reusable.
- An application can contain many components, one of them being the component to contain all of the other components. 
- The containing component is known as the `root` component and is usually named as `App` component in your application. 
- Each nested component describes only a part of the UI, but all the components come together to make up the entire app.

### How Does a Component Translate to Code in our Application?

- Component code is placed in a JS file. In our app, `AppComponent` is placed inside `App.js`

**Note**: Component files can also have .jsx extension (we'll circle back to this later).

- How the component code looks in a JS file depends on the type of component.

### Component Types

#### Stateless Functional Component
- JavaScript functions that return HTML that describe the UI.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

#### Stateless Class Component
- Regular ES6 class that extend the `Component` class from the React library.
- Must contain `Render` method which in turn returns HTML

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

The tutorial shows that the App Component in their example is a Class Component. However, in the `App.js` file in our `hello-world` app, you can see that our `App` Component is a Functional Component. It simply returns the HTML that will display to our browser.

<div align="right">
<a href="#react-fundamentals">Back to Top &#8593</a>
</div>

### Functional Components

`Functional Components are simply JavaScript functions.`

- Can optionally accept an input of properties (aka props), and return HTML which describes the UI.
- HTML is known as `JSX`
- Component is simply a JS file

Let's create our first component in our `hello-world` app by adding a JavaScript file, `Greet.js`, in a newly created folder named `components`.

Note: For component file naming, we use pascalCase.

#### Creating a Functional Component

1. Inside of `Greet.js`, import `React`.

    *Greet.js*
    ```js
    import React from 'react';
    ```

1. Create a new function and return the HTML you want rendered in the browser

    *Greet.js*
      ```js
      import React from 'react';

      function Greet() {
        return <h1></h1>
      }
      ```

3. Export the `Greet()` component to make accessible to our application

    *Greet.js*
    ```js
    import React from 'react';

    function Greet() {
      return <h1></h1>
    }

    export default Greet;
    ```

4. Inside the `App.js` file, import the `Greet` component
5. Include the `Greet` component inside the `App` component as a custom HTML tag

    *App.js*
    ```js
    import React from 'react';
    import Greet from './components/Greet'

    function App() {
      return (
        <div className="App">
          <Greet></Greet>
        </div>
      );
    }

    export default App;
    ```

    **Note**: Since there's no content in between the tags, you can change it to a self-closing tag.

    *App.js*
    ```js
    import React from 'react';
    import Greet from './components/Greet'

    function App() {
      return (
        <div className="App">
          <Greet />
        </div>
      );
    }

    export default App;
    ```

    Let's rewrite our `Greet()` function as an ES6 arrow function:

    *Greet.js*
    ```js
    import React from "react";

    const Greet = () => {
        return <h1>Hello, Phoebe</h1>
    }

    export default Greet;
    ```

<div align="right">
<a href="#react-fundamentals">Back to Top &#8593</a>
</div>

### Class Components

`Basically ES6 classes`

- Just like functional components, it receives props as input and returns HTML.
- Can also maintain a private internal state, which means it can maintain *some* information (which is private to that component) and use that information to describe the UI.

#### Creating a Class Component

1. Import React and the Component class from react.

    *Welcome.js*

    ```js
    import React, { Component } from 'react';
    ```

2. Define the class

    ```js
    import React, { Component } from 'react';

    class Welcome {
      
    }
    ```

    In order for this class to become a React component, 
      - it should extend the `Component` class from `react`. 
      - it needs to implement a `render` method, which will either return null or some HTML.
- 
    ```js
    import React, { Component } from 'react';

    class Welcome extends Component {
      render() {
        return <h1>Class Component</h1>
      }
    }
    ```

3. Just like in functional components, export the `Welcome` function

    ```js
    export default Welcome;
    ```

4. Import the `Welcome` component in `App.js` and include the custom tag in the `App` component

    *App.js*
    ```js
    import React from 'react';
    import Greet from './components/Greet'
    import Welcome from './components/Welcome'
    
    function App() {
      return (
        <div className="App">
          <Greet />
          <Welcome />
        </div>
      );
    }
    export default App;
    ```

<div align="right">
<a href="#react-fundamentals">Back to Top &#8593</a>
</div>

## Functional vs. Class Components

### Functional Components

aka <s>Stateless</s>/Dumb/Presentational Components

- Simple Functions
- Try to use them as much as possible: If it is possible to use both approaches, *always* choose functional components

  **Advantages of Functional Components:**
    
    - Absence of `this` keyword
    - ~~Solution without using state~~
    - Mainly responsible for the UI

### Class Components

aka Stateful/Smart/Container

- More feature rich
- ~~Maintain their own private data - state~~
- Complex UI logic
- ~~Provide lifecycle hooks~~

### Hooks Update 

**Note**: Since the introduction ofd React Hooks, `state` and `Hooks`, which were originally exclusive to Class components, can now be used in functional components as well.

<div align="right">
<a href="#react-fundamentals">Back to Top &#8593</a>
</div>

## JSX

`JavaScript XML (JSX) - Extension to the JavaScript language syntax`

- Write XML-like code for elements and components
- Just like XML, JSX tags have a tag name, attributes and children

### Why do we need JSX?

- JSX is not a necessity to write React applications, but JSX makes React code simpler and more elegant
- JSX transpiles to pure JavaScript which is understood by the browser

### How does JSX work behind the scenes?

Here is a component created with JSX:

*Hello.js*

```js
const Hello = () => {
    return (
        <div>
            <h1>Hello Phoebe</h1>
        </div>
    )
}
```

Now, here is the same component written without JSX:

```js
const Hello = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello Phoebe")
  );
};
```

In the above example, The `.createElement()` accepts three parameters:

1. A string value specifying the HTML tag to be rendered. For our example, we need a `div` tag to be rendered.

2. Any optional properties, represented by an object of key/value pairs, used to describe the element. In our case, we aren't passing any props so the value is set to `null`.

3. The children for the HTML element. For our example, we just needed to pass the text `Hello Phoebe`. But since the text is within a nested tag, `<h1>`, we called the `createElement()` method again as the 3rd parameter and set the value as the text in there.

Let's say we wanted to pass props to the 2nd parameter, such as an `id` or `class` attributes. Here is what our component would now look like:

```js
const Hello = () => {
  return React.createElement(
    "div",
    {id: 'hello', className: 'testClass'},
    React.createElement("h1", null, "Hello Phoebe")
  );
};
```

**Note**: Since `class` is considered a special keyword in React used to create components, a CSS class has to be specified using the `className` attribute.

As you can see, it's a much simpler approach to write components with JSX.

When you import React into a component file, JSX translates it into `React.createElement()`, which in turn uses the React library.


### Some Differences in JSX vs. HTML

1. class -> className
2. for -> htmlFor
3. camelCase property naming convention instead of HTML attribute names.
   
   Ex:
   
   - onclick -> onClick
   - tabindex -> tabIndex

<div align="right">
<a href="#react-fundamentals">Back to Top &#8593</a>
</div>

## Props

`Props. aka properties, is the optional input that your component can accept`

`Props` allow the component to be dynamic

`Props` are <ins>**immutable**</ins> - their value cannot be changed.

### Applying Props

Let's say we wanted to pass a name from the `App` component down to the `Greet` component and render that name to the browser. It would look like this:

```js
<Greet name="Phoebe"></Greet>
```

As you can see, we specify props for a component as attributes. In the above example, we are specifying a `name` property to `Greet` as a `name` attribute, and assigning it a value, `Phoebe`.

**To retrieve these values in the `Greet` component**:

1. Add a parameter to the functional component, named `props`:

    ```js
    const Greet = (props) => {
      return <h1>Hello, Phoebe</h1>
    }
    ```

    Note: You can name the parameter anything you want, but it's considered best practice to name it `props`.

2. Use the `props` parameter in the function body.

    `Props` is essentially an object that contains the attributes and their values which have been passed from the parent component. 

    So, if we wanted to display the name that was passed to the `Greet` component from `App`, we would need to use `props.name`:

    ```js
    const Greet = props => {
      return <h1>Hello, {props.name}</h1>
    }
    ```
    The property is wrapped around by curly braces, a JSX feature which is used to evaluate the JSX expression.

    In `App.js`, we can pass different values in the name attribute, which in turn would render in the browser:

    ```js
      <Greet name="Lisa"></Greet> // returns 'Hello, Phoebe'
      <Greet name="Courteney"></Greet> // returns 'Hello, Monica'
      <Greet name="Jennifer"></Greet> // returns 'Hello, Rachel'
    ```

    Let's say we wanted to pass a second prop to the `Greet` component:

    ```js
      <Greet name="Lisa" characterName="Phoebe"></Greet>
      <Greet name="Courteney" characterName="Monica"></Greet>
      <Greet name="Jennifer" characterName="Rachel"></Greet>
    ```

    We would simply modify the functional component in `Greet`:

    ```js
    const Greet = props => {
      return <h1>Hello, {props.name} a.k.a {props.characterName}</h1>
    }
    ```

  ### Rendering Unknown Content

  To render unknown content dynamically within a component, such as unspecified props or HTML, you can use `props.children`.

  ```js
  //Greet.js
  const Greet = props => {
    console.log(props);
    return (
      <div>
         <h1>Hello, {props.name} a.k.a {props.characterName}</h1>
        {props.children}
      </div>
    )
  }
  ```

  If anything is passed to `props.children`, it is rendered in the browser. If nothing is passed, `props.children` simply renders nothing.

  **Note**: Only one HTML element can be returned inside of a component which is why all of our content is enclosed inside of one `<div>` wrapper tag.

  ### Props with Class Components

  Let's say we wanted to add the same prop attributes in our `Welcome` component:

  ```js
 <Welcome name="Lisa" characterName="Phoebe"></Welcome>
  ```

  Unlike in functional components, class components do not specify a `props` parameter. Instead, the properties are available through `this.props`, which is reserved in class components.

  ```js
  class Welcome extends Component {
    render() {
        return <h1>Welcome {this.props.name} a.k.a {this.props.characterName}</h1>
    }
}
  ```

  React is going to bundle all of the attributes into an object, which we, by convention, call it props, and can render in the browser.

<div align="right">
<a href="#react-fundamentals">Back to Top &#8593</a>
</div>

## State

### Comparing State & Props

| props | state |
|-------|-------|
| props get passed to the component | state is managed within the component |
|Function parameters | Variables declared in the function body |
|props are immutable | state can be changed|
|props - Functional Components <br/> this.props - Class Components | useState Hook - Functional Components <br/> this.state - Class Components

Ultimately, <code>both <ins>props</ins> and <ins>state</ins> hold information that influences the UI in the browser</code>

**Note**: In old codebases, you're more likely to come across the `state` object than the `useState` hook, so its essential to have a good understanding of `state` in Class Components

---

<div align="right">
<a href="#react-fundamentals">Back to Top &#8593</a>
</div>

### Using Component State

Let's create a new component named `Welcome` and render it in the `App` component.

Let's say we wanted to have a `Subscribe` button below the text that changes the text from "Welcome Visitor" to "Thank you for subscribing" when clicked.

We can't send the message from the `App` component using `props` because the message won't be able to be changed since `props` are immutable. So, we need to use component state:

**Follow these steps in `Welcome.js`**:

1. Create a state object inside the class constructor and initialize it.

    Since we extend react's Component class, a call has to be made to the base class constructor (aka super).

   ```js
   constructor() {

   //call the super method
    super()

      //create our state object
      this.state = {

        //initialize a property
        message: "Welcome visitor"
      }
    }
   ```

2. Inside the `render` method, bind the state value.
3. Add HTML for a button element
4. Listen to the click event on `Subscribe` button and change the message

```javascript
render() {
  return (    
    <div>
      <h1>{this.state.message}</h1>
      <button onClick={() => this.changeMessage()}>Subscribe</button>
    </div>
  )
}
```
**Note**: The parentheses are required whenever the JSX spans over multiple lines.

After the `constructor` and before the `render` function, define  the `changeMessage` method. Within the function body, call the `setState` method to change the state of the component.

`setState` is used to alter the state of a class component.

`setState` accepts an object, which is the new state of the component. In the new state, we need the 'message' to change to  "thank you for subscribing".

```js
changeMessage() {
  this.setState({

    //change the state of the component
    message: 'Thank you for subscribing'
  })
}
```

So when the user clicks on the `Subscribe` button, we are listening to the click event and executing the `changeMessage` method

<div align="right">
<a href="#react-fundamentals">Back to Top &#8593</a>
</div>

### Dos & Donts of 'State' && 'setState'

- create new component: counter.js (snippet 'rce')
- need a `count` state to keep track of the counter values
  - initialize state in the constructor (snipper: 'rconst')
  - state object should have a property named `count` with an initial value of `0`.
- bind state value with curly braces
- add button to increment count value with click event.
- define `increment` method

-  if you want to execute code after the state has been updated you can pass in a callback function as the second parameter to the `setState` method
1st parameter = state object
2nd parameter = callback function (arrow function)


1. Always make use of setState and never modify the state directly: When you try to modify the state directly and don't use `setState`, react will not rerender the component whenever the state changes.
2. Code has to be executed after the state has been update? Place that code in the callback function, which is the 2nd parameter to the `setState` method:

    ```js
    this.setState(stateObject, callbackFunction); //callback function will be an arrow function
    ```
3. When you have to update the state based on the previous state, pass in a function as an argument instead of the regular object. 

The function has access to the previous state which can be used to calculate the new state.

For example, let's say you create a method that calls the increment method 5x and increases the count by 5 when you click the button

```js
incrementFive() {
  this.increment();
  this.increment();
  this.increment();
  this.increment();
  this.increment();
}
```

React may group multiple `setState` calls in one single go. As a result, the different values do not carry over between the different calls. 

Here is how to pass in the previous state:

```js
increment() {
    this.setState(prevState => ({
        count: prevState.count + 1
    }))
   }
```

<div align="right">
<a href="#react-fundamentals">Back to Top &#8593</a>
</div>

## Destructuring Props & State

`Destructuring is an ES6 feauture that makes it possible to unpack values from arrays or properties from objects into distinct variables`

In React, destructuring props and state improves code readability.

More likely to find destructuring syntax in most of the online material.

### Destructuring props in a Functional Component

In `App.js` , we are passing in `name` and `characterName` as `props` to our `Greet` component.

In the `Greet` component, we are accessing them using `props.name` and `props.characterName`.

**We can destructure the props in two different ways**:

1. In the function parameter directly

    We can basically extract `name` and `characterName` from the `props` object, and use these parameters in the JSX

    ```js
    const Greet = ({name, characterName, children}) => {
      return (
        <div>
          <h1>
            Hello, {name} a.k.a {characterName}
          </h1>
          {children}
        </div>
      );
    };
    ```

2. Destructure in the function body

    ```js
    const Greet = props => {
    const { name, characterName, children } = props;
    return (
      <div>
        <h1>
        Hello, {name} a.k.a {characterName}
        </h1>
        {children}
      </div>
      );
    };
    ```

### Destructuring props in a Class Component

In class components, `props` or `state` are generally deconstructured in the `render` method:

```js
class Welcome extends Component {
    render() {
        const {name, characterName} = this.props
        return <h1>Welcome {name} a.k.a {characterName}</h1>
    }
}
```

From `props`, you only need to extract the ones you want to use in your component, no matter how many are stored in the object.

### Destructuring state

`state` can be destructured in a similar way using the following syntax:

```js
const {state1, state2} = this.state;
```

<div align="right">
<a href="#react-fundamentals">Back to Top &#8593</a>
</div>