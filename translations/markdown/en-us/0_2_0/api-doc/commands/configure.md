Configures a direction's attribute. For instance:

```js
script.text('I will have a name!').configure('name', 'My name!');
script.text('My name will be to the right!').configure( { name: 'Me too!', namePosition: 'right' });
```

* `hashOrKey` (**String/Object**): when a hash, it applies all provided key/value pairs; when a string, it will change the key with that name.
* `value`: required if a key is provided.
