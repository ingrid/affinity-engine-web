Queues an animation. Expects an object as its only argument, whose attributes are defined by the animation engine you're using. For instance, if you're using the [velocity](#/plugins/animator-velocity) animation engine, your object might look like:

```js
direction.transition({
  effect: { opacity: 0.5 },
  duration: 500,
  loop: 3
});
```
