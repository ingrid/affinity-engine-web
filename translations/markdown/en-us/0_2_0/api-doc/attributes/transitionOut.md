The animation to run when the direction is transitioning out. Creates a new animation queue and Promise if none are active.

* `effect` (**Object**): depends on the animation engine you're using, such as [Velocity.js](#/api/plugins/animator-velocity).
* `duration` (**Number**|_optional_): how long the transition takes to complete, in milliseconds.
* `queue` (**String**|_optional_): name of the transition queue.
* other options: depending on the animation engine you're using, you may be able to pass in other options.

Often, bundles and quickstarts use Velocity.js by default. If you're using it, your `transitionOut` might look like:

```js
direction.configure({
  transitionIn: {
    effect: {
      translateX: '-100vw'
    },
    duration: 500,
    loop: 3 // a velocity.js option
  }
})
```
