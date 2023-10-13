$(".box") .click (function () {
    $ (".box") .removeClass ("active");
    $ (this) .addClass ("active");
});
Splitting();

setTimeout(() => {
  document.querySelector(".card").focus();
},1500);