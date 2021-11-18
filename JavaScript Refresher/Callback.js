//CALLBACK
function x(y) {
  console.log("Hey");
  console.log(y);
}

x(function y() {
  console.log("Hello");
});

setTimeout(() => {
  console.log("Timeout");
}, 5000);



