Determines which keys the direction responds to:

* `keys` (**Object**):
  * `accept` (**Array**)
  * `escape` (**Array**)
  * `up` (**Array**)
  * `right` (**Array**)
  * `down` (**Array**)
  * `left` (**Array**)

```js
direction.configure({
  keys: {
    accept: ['Enter', 'Space'],
    escape: ['Escape'],
    up: ['ArrowUp', 'KeyW'],
    right: ['ArrowRight', 'KeyD'],
    down: ['ArrowDown', 'KeyS'],
    left: ['ArrowLeft', 'KeyA']
  }
});
```
