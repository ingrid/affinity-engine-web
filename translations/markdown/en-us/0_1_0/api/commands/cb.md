Passes in a callback, which can then be used with either the `cb` lxl-tag or the `data-cb` attribute.

```js
script.text('Hi! If you <a data-cb="myClickCb">click here</a>, something will happen. Also, something will happen in 3, 2, 1 [[cb someOtherCB foo bar]] Wow!').cb('myClickCb', () => {
  alert('Whoa! You clicked me!');
}).cb('someOtherCB', (arg1, arg2) => {
  alert(arg1 + arg2);
});
```

* `name` (**String**): the name of the callback.
* `callback` (**Function**): the callback to execute.
