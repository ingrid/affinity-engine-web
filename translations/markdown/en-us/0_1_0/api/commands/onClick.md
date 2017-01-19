Specify a callback to execute when the visible area of an image is clicked. For instance:

```js
image.onClick((event) => {
  if (event.which === 3) {
    data.incrementProperty('rightClicks');
  }
});
```

* `callback` (**Function**)
