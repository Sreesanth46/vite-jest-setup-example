# Configuring jest in React.

### Install jest

```js
npm i jest -D
```

### Add test script to package.json

```js
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "jest"
  },
```

### Add babel presets .babelrc to your project for JSX support

```js
yarn add -D @babel/preset-env @babel/preset-react
```

Create a `.babelrc` file:

```js
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

### Add react testing library dependencies

```js
npm i @testing-library/react @testing-library/jest-dom -D
```

### To support web environment API, install jest-environment-jsdom add into jest config in package.json:

```js
npm i jest-environment-jsdom -D
```

```js
  "jest": {
    "testEnvironment": "jsdom",
  }
```

### Configure setupTests.js and add to jest config in package.json:

```js
  "jest": {
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": [
      "<rootDir>/setupTests.js"
    ]

  }
```

Create setupTests.js file:

```js
import "@testing-library/jest-dom";
```

## Start test with: 
```js
npm run test
```


## Adding user event to testing library: 

```js
npm i @testing-library/user-event@latest -D
```

## install @types/jest for utility function suggestions
```js
npm install --save-dev @types/jest
```


# Utility functions for querying and interacting with components

- `getBy` queries:
  - `getByText`
  - `getByPlaceholderText`
  - `getByLabelText`
  - `getByAltText`
  - `getByTestId`
  //  throws an error if the element is not found. 

- `queryBy` queries:
  - return null if element not found 

- `findBy` queries:
  - asynchronous versions of the `getBy`
  - should use async await

- `getAllBy`

- `queryAllBy`

- `findAllBy`

- `within`
  - Allows you to narrow the scope of your queries to a specific element, useful for testing within specific sections of your component.

- `UserEvent`

- `fireEvent`

- `screen`