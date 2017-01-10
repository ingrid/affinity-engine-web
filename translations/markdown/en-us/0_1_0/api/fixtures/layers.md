An map defining the layers. Each key should match a value defined in the `layerOrder`. For instance, if your layer order looks like this:

```js
['base', 'foreground1', 'foreground2']
```

Then your layer should have these keys:

```js
{
  base: [],
  foreground1: [],
  foreground2: []
}
```

For each layer, you can provide either an array of [stateful `keyframes`](#/engine/fixtures/image?anchor=state) or a single `keyframe` id.
