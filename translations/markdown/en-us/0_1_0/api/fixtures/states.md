An array containing state descriptions. For instance, if your layer order looks like this:

```js
['base', 'eyes', 'mouth']
```

Then your states might look like this:

```js
[{
  key: { pose: 'standing' },
  layers: {
    base: 'diy-standing'
  }
}, {
  key: { pose: 'standing', expression: 'neutral' },
  layers: {
    eyes: 'diy-standing-eyes-open',
    mouth: 'diy-standing-mouth-neutral'
  }
}, {
  key: { pose: 'standing', expression: 'happy' },
  layers: {
    eyes: 'diy-standing-eyes-open',
    mouth: 'diy-standing-mouth-smiling'
  }
}, {
  key: { pose: 'standing', expression: 'sad' },
  layers: {
    eyes: 'diy-standing-eyes-closed',
    mouth: 'diy-standing-mouth-frown'
  }
}, {
  key: { pose: 'sitting' },
  layers: {
    base: 'diy-sitting'
  }
}, {
  key: { pose: 'sitting', expression: 'neutral' },
  layers: {
    eyes: 'diy-sitting-eyes-open',
    mouth: 'diy-sitting-mouth-neutral'
  }
}]
```

In case of a conflict, the latter definition will override the earlier one.
