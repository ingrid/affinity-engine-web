Queues a crossfade between the current state and the state provided.

* `state` (**Object**): object describing the new state.
* `durationOrTransition` (**Number**/**Object**|_optional_):
  1. Number: the duration of the crossfade, in milliseconds.
  2. Object: the transition.
    * `in` (**Object**): transition of the incoming keyframe.
    * `state` (**Object**): object describing the new state.
* `twoWayFade` (**Boolean**): if `true` and no duration is provided for the transition, then the incoming image will start at opacity 0 and fade in
