State points are created whenever the player arrives at a checkpoint, such as a new scene. Unlike autosaves, a state point does not appear as its own save for players to load. Instead, players can rewind the game to previous state points.

This value determines how many state points will be recorded. If the number is ever exceeded, the oldest state point will be overwritten.

If set to `false`, then there is no limit to the number of state points that can be created.
