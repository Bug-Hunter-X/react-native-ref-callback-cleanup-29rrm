# React Native useRef Callback After Unmount

This repository demonstrates a common error in React Native when using the `useRef` hook: the callback function within `useRef` executes after the component has unmounted. This leads to errors as the component no longer exists in the DOM.

## The Problem

The `useRefBug.js` file shows an example where an asynchronous operation (simulated by a `setTimeout`) completes after the component unmounts.  The callback attempts to update state, leading to an error since the component instance is no longer valid.

## The Solution

The solution in `useRefBugSolution.js` demonstrates how to prevent this error by adding a check to see if the component is still mounted before executing the callback function.  This prevents errors when dealing with asynchronous tasks within `useRef`.

## How to run

1. Clone this repository
2. Navigate to the repository directory
3. Run `npm install`
4. Run `npx react-native run-android` (or `npx react-native run-ios`)

You can then switch between the bug and solution to see how the error is prevented.