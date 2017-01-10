Sets a minimum value for the key which it cannot fall beneath. For instance:

```js
data.min('foo', -5);
data.set('foo', -10);
data.get('foo'); // -5
data.decrementProperty('foo', 20);
data.get('foo'); // -5
```
