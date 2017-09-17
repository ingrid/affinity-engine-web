The animation to use for each letter. The definition will vary depending on which animator you're using. If you are using the [velocity](#/api/plugins/animator-velocity) animator, it might look like:

```js
direction.configure({
  lxlAnimation: {
    effect: {
      opacity: [1, 0]
    },
    duration: 0,
    rate: 25
  }
})
```
