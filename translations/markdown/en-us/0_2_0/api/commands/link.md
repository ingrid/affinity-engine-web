Changes the direction's [linked attributes](#/stage/links).

```js
const diy = script.character('diy').fadeIn();

yield diy._.text('I have no name');
yield diy.link('text', 'caption', 'Diy')._.text('Now my name is Diy.');
yield diy._.text('My name is still Diy.');
yield diy.link('text', { caption: 'Diy Variant 1', captionPosition: 'right' })._.text('Now my name is Diy Variant 1 and it appears to the right.');
yield diy.link({ text: attrs: { { caption: 'Diy Variant 2' } }, menu: { attrs: { classNames: 'diys-menu-class' } } })._.text('And now it is Diy Variant 2.')._.menu(['A', 'B', 'C']);
```

* `hashOrType` (**String/Object**): when a hash, it applies all provided key/value pairs; when a string, it will change only the linked directions of that type.
* `hashOrKey` (**String/Object**): when a hash, it applies all provided key/value pairs; when a string, it will change the key with that name.
* `value`: required if a key is provided.
