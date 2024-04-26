# State and Props

- State is about internal component management and dynamic behavior.
- Props are about external data and communication between components.

---

- State can be modified within the component through React's state management mechanisms (e.g., setState, useState, useReducer). Changing state generally triggers a re-render.

- Props cannot be modified within the component that receives them. Any changes to props must occur in the parent component, which then re-renders the child component with the updated props.

---

- State is typically used to manage component-specific data that changes as users interact with the component or as the application logic dictates. It's useful for components that require dynamic behavior.

- Props are used to pass data and event handlers from parent components to child components. Props are often used to configure a component, providing it with necessary data, context, or behavior without needing direct access to the component's internal logic.
