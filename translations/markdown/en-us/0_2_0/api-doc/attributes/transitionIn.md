The animation to run when the direction is transitioning in. Creates a new animation queue and Promise if none are active.

* `effect` (**Object**): depends on the animation engine you're using, such as [Velocity.js](#/api/plugins/animator-velocity).
* `duration` (**Number**|_optional_): how long the transition takes to complete, in milliseconds.
* `queue` (**String**|_optional_): name of the transition queue.
* other options: depending on the animation engine you're using, you may be able to pass in other options.

Often, bundles and quickstarts use Velocity.js by default. If you're using it, your `transitionIn` might look like:

```js
direction.configure({
  transitionIn: {
    effect: {
      opacity: 1, // be sure to set opacity to 1, or else it won't fade in
      translateX: [0, '-100vw'] // velocity.js [forcefeeding](http://velocityjs.org/#forcefeeding), which sets the element's initial value to the second number and transitions towards the first
    },
    duration: 500,
    loop: 3 // a velocity.js option
  }
})
```

**IMPORTANT:** As noted in the example, be sure to increase the element's `opacity`. It starts at 0 and will remain invisible if you don't change it.
