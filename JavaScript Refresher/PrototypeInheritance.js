//PROTOTYPE INHERITANCE
let arr = ["Akshay", "Aditya"];

let object = {
  name: "prath",
  city: "mumbai",
  getIntro: function () {
    console.log(this.name + "from" + this.city);
  },
};

let object2 = {
  name: "aditya",
};

object2.__proto__ = object;
