Passes in a callback, which can then be used with either the `cb` lxl-tag or the `data-cb` attribute.

```js
script.text('<a data-cb="myClickCb">Click here</a> or wait 3, 2, 1 [[cb someOtherCB foo bar]] Wow!').cb('myClickCb', () => {
  alert('Whoa! You clicked me!');
}).cb('someOtherCB', (arg1, arg2) => {
  alert(arg1 + arg2); // foobar
});
```

* `name` (**String**): the name of the callback.
* `callback` (**Function**): the callback to execute.
