#### 1. Vite or Parcel -> Bundler

#### 2. React is a library of JS

#### 3. 
 * react + react-dom -> Website Applications
 * react + react-native -> Mobile Applications


### 4. npx 
-> node package executer

### 5. create-react-app 
-> utility or software (Bulky utility)

### 6. Disadvantages of React
1. SEO
2. Routing

#### 7. React is fast beacuasae it builds Single Page Application(SPA)

#### 8. JSX elements/components should start with a uppercase letter

#### 9. <></> -> Fragments

### 10. UI 
-> Should be handled by react not by us

#### 11. React react karta hai variable updation pe

### 12. Hooks 
-> Special methods provided by react 

####  13. We can pass any value inside the useState hooks parenthesis

#### 14. React does not use virtual DOM as of today.

### 15. React Fiber(Latest approach)
-> React fiber is a reimplementation of React's core algorithm

* The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

* Other key features include :
The ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

### 16. Reconcilation:
The algorithm react uses to diff one tree with another to determine which part to be changed.

#### 17. 'setState' eventually results in a re-render

### 18. Tailwind CSS : 
A utility-first CSS framework

### 19. devui.io

### 20. useCallback:
useCallback is a React Hook that lets you cache a function definition between re-renders.

#### Reference:
* useCallback(fn, dependencies) 

#### Usage:
1. Skipping re-rendering of components
2. Updating state from a memoized callback
3. Preventing an Effect from firing too often
4. Optimizing a custom Hook

### 21. useState:
useState is a React Hook that lets you add a state variable to your component.

``` const [state, setState] = useState(initialState)```

#### Reference:
* useState(initialState)
* set functions, like setSomething(nextState)

#### Usage:
1. Adding state to a component
2. Updating state based on the previous state
3. Updating objects and arrays in state
4. Avoiding recreating the initial state
5. Resetting state with a key
6. Storing information from previous renders

### 22. useEffect:
useEffect is a React Hook that lets you synchronize a component with an external system.

#### Reference:
* useEffect(setup, dependencies?)

#### Usage:
1. Connecting to an external system
2. Wrapping Effects in custom Hooks
3. Controlling a non-React widget
4. Fetching data with Effects
5. Specifying reactive dependencies
6. Updating state based on previous state from an Effect
7. Removing unnecessary object dependencies
8. Removing unnecessary function dependencies
9. Reading the latest props and state from an Effect
10. Displaying different content on the server and the client

### 23. useRef:
useRef is a React Hook that lets you reference a value that’s not needed for rendering.

``` const ref = useRef(initialValue) ```

#### Reference:
* useRef(initialValue)

#### Usage:
1. Referencing a value with a ref
2. Manipulating the DOM with a ref
3. Avoiding recreating the ref contents

### 24. Custom Hooks:
custom hooks are nothing but user made javascript function which can return js elements or jsx elements

* custom hooks can also use built in hooks of react.

#### 25. Whenever using hooks on JSX , you should give a key

## 26. React-router-dom:

#### React Router Dom is not an essential core part of react, it is a 3rd party library.

#### Do not use <a> tag, because it refreshes the whole page.In react we use <Link> tag.


#### In <Navlink> we use only className and pass a callback function into it.We also get isActive inside <Navlink>.


## 27. Context API:
* There was a major issue for data paasing in react.We have to pass props under props and so on.So this was not an optimized way.That's where the concept of Context API came first.

* It comes by default with react library.

* This problem is known as Prop drilling.

#### N.B.
1. Redux
2. react-Redux
3. Redux-toolkit(RTK)

## 28. useContext:
useContext is a React Hook that lets you read and subscribe to context from your component.

```const value = useContext(SomeContext)```

### Reference:
* useContext(SomeContext)

### Usage:
1. Passing data deeply into the tree
2. Updating data passed via context
3. Specifying a fallback default value
4. Overriding context for a part of the tree
5. Optimizing re-renders when passing objects and functions


#### 29. We can pass variables as well as methods inside React.createContext().Although we can pass nothing inside it that is also possible.


### 30. localstorage:
* getItems(key)
* setItems(key, value)

### 31. Redux - 1.State Management Library
###             2. A state container for js apps.
* react-redux : A bridge for connecting redux with react

* Flux - Developed by Facebook

* Dataflow in context api is not as good as Redux or Flux

* Redux was inspired by Flux

* Redux-toolkit : More abstraction, slicing concept introduced, store configuration made easy


#### 1. store, 2. reducers, 3. useSelector, 4.useDispatch

#### useDispatch and useSelector come from react-redux

#### useDispatch uses reducers to make some changes in the store


### Steps :
1. create a store
  * import configureStore and give the access of all reducers to the store.
2. create a slice
    * name:
    * initial state:
    * reducers: 
3. export all reducers individually
4. make components and use the reducers by importing them(N.B. - useSelector(to take) and useDispatch(to give))
5. import the components in the app.jsx
6. in the main.jsx wrap the app using provider whice is imported from react-redux(Provider neeed a value as store which we built earlier)