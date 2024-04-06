# vue-color-detect
A simple hook for detecting the color scheme a users browser is in

Uses `matchMedia` to detect what color scheme the user is in, and it can even pickup when the user switches color schemes on the fly!

## Install

```cli
npm i vue-color-detect
```

## Return Value
Vue Color Detect returns back a ref

The value of this ref will either be `DARK` or `LIGHT` based on the users current color scheme

**If `vue-color-detect` cannot find a `matchMedia` key on the window it will default to returning back `LIGHT`**

## Usage

Simply import the hook into your component and use away!


```vue
<script setup>
  import useDetectColorScheme from 'vue-color-detect'

  const colorScheme = useDetectColorScheme()
</script>

<template>
  <p>{{ colorScheme }}</p>
<template>
```
