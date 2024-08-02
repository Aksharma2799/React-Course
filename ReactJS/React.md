### Basic Questions

1. **What is React?**
   - **Answer:** React is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components.

2. **What are the main features of React?**
   - **Answer:** The main features of React include JSX, Virtual DOM, component-based architecture, and one-way data binding.

3. **What is JSX?**
   - **Answer:** JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It is used with React to describe what the UI should look like.

4. **What is the Virtual DOM?**
   - **Answer:** The Virtual DOM is a lightweight copy of the actual DOM. It allows React to efficiently update and render components by comparing the virtual DOM with the actual DOM and applying the minimal number of changes.

5. **What is a React component?**
   - **Answer:** A React component is a self-contained module that renders some output. Components can be functional or class-based.

### Intermediate Questions

6. **What is the difference between a functional component and a class component?**
   - **Answer:** Functional components are stateless and defined as plain JavaScript functions. Class components are stateful and defined as ES6 classes.

7. **What are props in React?**
   - **Answer:** Props are inputs to components. They are passed down from parent to child components and are immutable.

8. **What is state in React?**
   - **Answer:** State is an object that represents the dynamic parts of a component. It is managed within the component and can change over time, typically in response to user actions.

9. **What is the purpose of the `key` prop in React?**
   - **Answer:** The `key` prop is used to identify elements in a list. It helps React to efficiently update and reorder elements.

10. **What are lifecycle methods in React?**
    - **Answer:** Lifecycle methods are special methods in class components that allow you to hook into different phases of a component's life (mounting, updating, and unmounting).

### Advanced Questions

11. **What is Redux, and why would you use it with React?**
    - **Answer:** Redux is a state management library that helps manage application state in a predictable way. It is used with React to handle complex state interactions and maintain a single source of truth.

12. **What is the Context API?**
    - **Answer:** The Context API is a React feature that allows you to share state across multiple components without passing props through every level of the component tree.

13. **What are hooks in React?**
    - **Answer:** Hooks are functions that let you use state and other React features in functional components. Common hooks include `useState`, `useEffect`, and `useContext`.

14. **What is `useState`?**
    - **Answer:** `useState` is a hook that allows you to add state to functional components. It returns an array with the current state and a function to update it.

15. **What is `useEffect`?**
    - **Answer:** `useEffect` is a hook that allows you to perform side effects in functional components. It is a replacement for lifecycle methods in class components.

### Performance Optimization

16. **How do you optimize performance in a React application?**
    - **Answer:** Techniques include memoization with `React.memo` and `useMemo`, lazy loading components with `React.lazy`, using the `useCallback` hook, and optimizing component rendering by avoiding unnecessary re-renders.

17. **What is code splitting, and how do you implement it in React?**
    - **Answer:** Code splitting is a technique to split your code into smaller bundles, which can be loaded on demand. In React, you can implement it using `React.lazy` and `Suspense`.

18. **What is React.memo?**
    - **Answer:** `React.memo` is a higher-order component that memoizes the output of a functional component. It helps to prevent unnecessary re-renders by comparing props.

19. **How do you handle large lists in React?**
    - **Answer:** You can use windowing libraries like `react-window` or `react-virtualized` to efficiently render large lists by only rendering the visible items.

20. **What is `useCallback` and when would you use it?**
    - **Answer:** `useCallback` is a hook that returns a memoized callback function. It helps to prevent unnecessary re-renders by memoizing functions that are passed as props.

### Testing

21. **How do you test React components?**
    - **Answer:** Use testing libraries like Jest and React Testing Library. Jest provides a testing framework, and React Testing Library offers utilities for testing React components by interacting with the DOM.

22. **What is snapshot testing?**
    - **Answer:** Snapshot testing is a technique where a component's rendered output is saved as a snapshot and compared against future renders to detect changes.

23. **How do you mock API calls in React testing?**
    - **Answer:** Use libraries like `jest-fetch-mock` or `axios-mock-adapter` to mock API calls and control their responses during testing.

24. **What is the purpose of `enzyme`?**
    - **Answer:** `enzyme` is a testing utility for React that allows you to assert, manipulate, and traverse React components' output.

25. **How do you perform integration testing in React?**
    - **Answer:** Use tools like React Testing Library to test how components interact with each other and with the DOM, simulating user interactions and verifying the output.

### Routing

26. **What is React Router?**
    - **Answer:** React Router is a library for handling routing in React applications. It allows you to define routes and navigate between different components based on the URL.

27. **How do you pass parameters to routes in React Router?**
    - **Answer:** Use dynamic segments in route paths (e.g., `/user/:id`) and access the parameters via the `useParams` hook or route props.

28. **What is the purpose of `BrowserRouter` and `HashRouter`?**
    - **Answer:** `BrowserRouter` uses the HTML5 history API to keep the UI in sync with the URL, while `HashRouter` uses the hash portion of the URL to manage routing.

29. **How do you handle nested routes in React Router?**
    - **Answer:** Define nested `Route` components within a parent route and use `Outlet` to render child routes inside the parent component.

30. **What is the `useHistory` hook?**
    - **Answer:** The `useHistory` hook provides access to the history instance, allowing you to navigate programmatically in React Router.

### State Management

31. **What are the core principles of Redux?**
    - **Answer:** The core principles of Redux are a single source of truth, state is read-only, and changes are made with pure functions (reducers).

32. **What is a reducer in Redux?**
    - **Answer:** A reducer is a pure function that takes the current state and an action as arguments and returns a new state based on the action type.

33. **How do you handle asynchronous actions in Redux?**
    - **Answer:** Use middleware like `redux-thunk` or `redux-saga` to handle asynchronous actions. `redux-thunk` allows you to write action creators that return functions, and `redux-saga` uses generator functions to manage side effects.

34. **What is the Context API, and how does it differ from Redux?**
    - **Answer:** The Context API provides a way to pass data through the component tree without passing props down manually at every level. Unlike Redux, which provides a more structured state management approach with a global store, actions, and reducers, the Context API is more flexible and suitable for simpler state management needs.

35. **What is `useReducer` and when would you use it?**
    - **Answer:** `useReducer` is a hook that provides a way to manage state using a reducer function, similar to Redux. It is useful for managing complex state logic in functional components.

### Advanced Topics

36. **What are higher-order components (HOCs)?**
    - **Answer:** Higher-order components are functions that take a component and return a new component, enhancing the original component with additional props or behavior.

37. **What is the purpose of `React.forwardRef`?**
    - **Answer:** `React.forwardRef` is used to forward a ref through a component to one of its children, enabling parent components to access the child's DOM node or React instance.

38. **How do you handle error boundaries in React?**
    - **Answer:** Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log the errors, and display a fallback UI. They are created using class components that implement `componentDidCatch` and `getDerivedStateFromError` lifecycle methods.

39. **What is the difference between controlled and uncontrolled components?**
    - **Answer:** Controlled components have their form data controlled by the parent component's state, while uncontrolled components store their own state internally. Controlled components use state to manage the form inputs, and uncontrolled components use refs.

40. **What are render props?**
    - **Answer:** Render props are a technique for sharing code between React components using a prop whose value is a function. This function returns a React element and allows for dynamic rendering.

### React Ecosystem

41. **What is Next.js?**
    - **Answer:** Next.js is a React framework that provides server-side rendering, static site generation, and other advanced features out of
