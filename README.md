# Template for react project

> ✨ Bootstrapped with Create Snowpack App (CSA).
> 
> - snowpack
> - react
> - typescript
> - eslint( airbnb )

### How to use
```
npm install
```
```
npm start
# snowpack dev

npm build
# snowpack build
```

### Eslint customized rule
you can change this settings.
```
"prettier/prettier": [
  "error",
  {
    "endOfLine": "auto",
    "tabWidth": 2,
    "useTabs": false,
    "printWidth": 150,
    "singleQuote": true
  }
],
"react/function-component-definition": [
  "error",
    {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }
  ],
"complexity": ["error", 25],
"no-negated-condition": "off",
"react/prop-types": "off",
"react-hooks/exhaustive-deps": "off",
"import/extensions": "off"
```

### Absolute path settings
you can write path like below.

`root/src/index.tsx` -> `@/index`<br>
`root/src/components/App.tsx` -> `@/components/App`<br>
`root/src/assets/logo.svg` -> `@/assets/logo.svg`
<br><br>

tsconfig.json
```
"compilerOptions": {
  "paths": {
    "@/*": ["./src/*"],
      // If you configured any Snowpack aliases, add them here.
      // Add this line to get types for streaming imports (packageOptions.source="remote"):
      //     "*": [".snowpack/types/*"]
      // More info: https://www.snowpack.dev/guides/streaming-imports
  },
}
```

snowpack.config.mjs
```
alias: {
  "@" : "./src"
},
```
