Specify a callback to execute when the visible area of the direction is clicked. For instance:

```js
direction.configure('onClick', (event) => {
  if (event.which === 3) {
    data.incrementProperty('rightClicks');
  }
});
```
