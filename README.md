# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

<!-- Please document your code & design decisions here. -->
## Tech Stack
* React
* Tailwind and Postcss


The reason for using Tailwind CSS is that it includes a responsive design that allows the creation of layouts that adapt to different screen sizes. In addition, it provides utility classes, enabling you to specify styles based on breakpoints.

## Testing
There are three types of tests: unit, integration, and end-to-end.

In this project, it was decided that unit tests were appropriate given the time and the goal of verifying the individual components.

Once a CICD pipeline is implemented, integration and end-to-end testing can be added.

## Design Decisions
* Mobile first responsive design
* Awareness of accessibility when creating components
* Use of best practices of React (ex hooks)
* Use of custom hooks was used to reuse and apply SRP
* A component path alias was added to make imports cleaner
* Code organization was achieved by creating a clean directory structure.
* No hard coding of pixes.
* Use Tailwind for styling
* Use Figma as a UI design guide
* Use the screen size breakpoints provided by Tailwind
* Test components and hooks



## Nice to have (time permitting)
* Pagination for the listing page
* The theme include a color pallet, so colors don't have to be hardcoded.
* Use of typescript
* Move the code to cache in localstorage into a service like "storage"

## Recommendations
* use a framework like Next.js
* use Typescript


## How to run the App

* yarn
* enter environment variables in the file .env
```env
REACT_APP_SIMPLY_RETS_KEY=
REACT_APP_SIMPLY_RETS_SECRET=
REACT_APP_SIMPLY_RETS_URL=
```
* yarn run test // to run test
* yarn run start // to start on a browser