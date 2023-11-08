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