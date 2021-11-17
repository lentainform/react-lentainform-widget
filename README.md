# react-lentainform-widget
Embed your Lentainform widget inside a react app 

[![npm version](https://badge.fury.io/js/react-lentainform-widget.svg)](https://badge.fury.io/js/react-lentainform-widget)

## Installation & Usage

```sh
npm install react-lentainform-widget --save
```
### Include the Component

```js
import React from 'react'
import { LentainformWidget } from 'react-lentainform-widget'

class Component extends React.Component {

  render() {
    return <LentainformWidget id='M488966ScriptRootC1229358' src='https://jsc.lentainform.com/e/x/example.lentainform.com.1229358.js'/>
  }
}
```
## Props
Name                   | Type 
-----------------------|----------:
**id**            |string
**src**           |string
