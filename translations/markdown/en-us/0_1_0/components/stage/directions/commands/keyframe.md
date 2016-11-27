###### `keyframe(keyframeId, durationOrTransition)`

Queues a crossfade between the current keyframe and keyframe matching the provided key.

* `keyframeId` (**String**): id of the keyframe fixture.
* `durationOrTransition` (**Number**/**Object**|_optional_):
  1. Number: the duration of the crossfade, in milliseconds.
  2. Object: the transition.
    * `in` (**Object**): transition of the incoming keyframe.
    * `out` (**Object**): transition of the outgoing keyframe.
