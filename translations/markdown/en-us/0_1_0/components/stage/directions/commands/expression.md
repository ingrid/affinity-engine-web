###### `expression(expression, durationOrTransition)`

Queues a crossfade between the current expression and the expression provided.

* `expression` (**String**): name of the new expression.
* `durationOrTransition` (**Number**/**Object**|_optional_):
  1. Number: the duration of the crossfade, in milliseconds.
  2. Object: the transition.
    * `in` (**Object**): transition of the incoming keyframe.
    * `out` (**Object**): transition of the outgoing keyframe.
