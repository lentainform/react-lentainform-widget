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
    return <LentainformWidget id='M284163ScriptRootC983763' src='https://jsc.lentainform.com/s/i/site-lentainform-1.0.com.1189521.js'/>
  }
}
```
## Props
Name                   | Type 
-----------------------|----------:
**id**            |string
**src**           |string
