Queues a crossfade between the current pose and the pose provided. Creates a new animation queue and Promise if none are active.

* `pose` (**String**): name of the new pose.
* `durationOrTransition` (**Number**/**Object**|_optional_):
  1. Number: the duration of the crossfade, in milliseconds.
  2. Object: the transition.
    * `in` (**Object**): transition of the incoming keyframe.
    * `out` (**Object**): transition of the outgoing keyframe.
