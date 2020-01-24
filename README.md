[Home](../README.md)

# blockly-angular-sample [![Built on Blockly](https://tinyurl.com/built-on-blockly)](https://github.com/google/blockly)

This demo shows an implementation of the [Blockly Code Demo](https://blockly-demo.appspot.com/static/demos/code/index.html) in an [Angular](https://angular.io/) project.

This implementation features:

- a full set of standard blocks
- a custom code block
- the XML toolbox data is being supplied via an Angular service to the Blockly component

## Issues / Concerns

The following should be noted when running the app:

- The `Blockly.inject()` method is currently commented out and the toolbox XML is being rendered direction to the DOM in `all/components/blockly/blockly.component.ts`, as the method doesn't appear to be passing the XML to the browser - see [Angular Sample - XML supplied to Blockly.inject does not appear in browser](https://github.com/google/blockly-samples/issues/50) for further details.
- The features listed below are not currently operating, and are thought to be related to the issue above:
  - The scroll bars are inactive
  - I'm unable to drag blocks around the workspace
  - The wheel doesn't zoom in/out of the workspace.

## Installation

```
npm install
```

## Running

```
npm run start
```

OR

```
ng serve
```

## Browse

Open [http://localhost:3000/](http://localhost:3000/) when using `npm run start`, or [http://localhost:4200/](http://localhost:4200/) when using `ng serve`

Don't ask me why...
