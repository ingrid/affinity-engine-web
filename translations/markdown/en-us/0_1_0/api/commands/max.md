Sets a maximum value for the key which cannot be exceeded. For instance:

```js
data.max('foo', 5);
data.set('foo', 10);
data.get('foo'); // 5
data.incrementProperty('foo', 20);
data.get('foo'); // 5
```
