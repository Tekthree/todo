# todo
# Lab - Class 31


## Author: Tek Jones

## Deployment and test
  * [test report]()
  * [deployment lab31](https://codesandbox.io/s/confident-nightingale-irutc)
  * [deployment lab32](https://codesandbox.io/s/gallant-taussig-x0cup)


## About
- To do list manager
- A Web Application for securely managing a To Do List


## Setup


## Running the app
  * npm start

## Test
* npm test



### Phase 1
- our goal is to setup a foundational system using React hooks that we can build upon in later phases, adding databases, logins, and more advanced features.

### User Stories
- As a user, I would like an easy way to add a new to do item using an online interface
- As a user, I would like my to do items to have an assignee, due date, difficulty meter, status and the task itself
- As a user, I would like to delete to do items that are no longer needed
- As a user, I would like to easily mark to do items as completed
- As a user, I would like to edit an existing to do item

### Technical Requirements
- Convert the architecture from Class Based Components into Functional Components
- Apply styling and layout using React Bootstrap Components
- Ensure the current functionality works unchanged
- Manage state using the useState() hook
- Use a useEffect() hook to change the title of the browser with the complete/incomplete counts
- Use a useEffect() hook to pre-load the seeded To Do Items
- Match the provided mockup for the design
   - Use react-bootstrap components and theming
   - Some interactivity notes:
     - Each item in list should show the text of the item as well as the assignee
     - When clicked, toggle the “complete” status of the item.
     - Items should be styled differently when complete/incomplete making their status visually obvious

## UML
![UML](./UML-phase1.png)

---

### Phase 2
- we're going to extend the functionality of our application by allowing the user to make some decisions on how they would like the application to function. Specifically, we'll let them make changes to 2 settings.

### User Stories
- As a user I would like to have global settings for changing how many to do Items to display at once
- As a user, I would like to be able to show or not show completed items

### Technical Requirements

Based on global configuration

  - Show a maximum of a certain number of items per screen in the <List /> component
      - Provide "next" and "previous" links to let the users navigate a long list of items
  - Hide or show completed items in the list
  - Optional: Sort the items based on any of the keys (i.e. difficulty)

Implement this using context

  - Create a context for managing application settings and provide this at the application level
  - Display or Hide completed items (boolean)
  - Number of items to display per screen (number)
  - Default sort field (string)
  - Create a function in your context that saves user preferences (for the above) to local storage
  - Implement a useEffect() (or componentDidMount()) in your context to read from local storage and set the values for those 2 state properties on application load

Pagination Notes

  - Only display the first n items in the list, where n is the number to display per screen in your context.
    - If you have more than n items in the list, add a button labeled Next that will replace the list with the next n items in the list.
    - If you are past the first n items (i.e. on page 2 or higher), add a button labeled Previous that will replace the list with the previous n items in the list.

## UML
![UML2](./UML-phase2.png)
