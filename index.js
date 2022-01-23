//1. this внутри функции

// function case1() {
//   return this;
// }
// console.log(case1());

//2.  this стрелочная функция

// const case2 = () => {
//   return this;
// };
// console.log(case2());

// 3. this с конструктором

// function priv(a) {
//   this.a = a;
// }

// let check = new priv(42);
// console.log(check.a);

//4. this c bind
// function hello() {
//   console.log("Hello", this);
// }

// const people = {
//   name: "Maxim",
//   surname: "Lemeshev",
//   sayHello: hello,
//   sayHelloWindow: hello.bind(window),
// };

// console.log(people.sayHelloWindow());

// 5. this c callback ???

// const arrow = () => {
//   console.log(this);
// };

// const arr1 = (arr) => {
//   alert("321");
// };
// console.log(arr1(arrow));

//6.  this c call и apply

// const obj = {
//   d: 5,
//   c: 7,
// };

// function sum(a, b) {
//   return a + b + this.c + this.d;
// }
// console.log(sum.call(obj, 3, 4));
// console.log(sum.apply(obj, [34, 12]));

//7.this  в объекте
// function hello() {
//   console.log("Hello", this);
// }

// const people = {
//   name: "Maxim",
//   surname: "Lemeshev",
//   sayHello: hello,
// };

// console.log(people.sayHello());

//8. this с use strict

// function case8() {
//   "use strict";
//   return this;
// }
// console.log(case8());

//  Задача

class Validator {
  constructor(email, domain, date, phone) {
    this.email = email;
    this.domain = domain;
    this.date = date;
    this.phone = phone;
  }
}

class EmailValidator extends Validator {
  constructor(email) {
    super(email);
  }
  isEmail() {
    if (this.email.slice(-10) == "@gmail.com") {
      return true;
    }
    return false;
  }
}

class DomainAndPhoneAndDateValidator extends Validator {
  constructor(email, domain, date, phone) {
    super(email, domain, date, phone);
  }
  isPhone() {
    if (typeof this.phone == "number") {
      return true;
    }
    return false;
  }
  isDomain() {
    if (this.domain.slice(-4) == ".com" || this.domain.slice(-3) == ".ru") {
      return true;
    }
    return false;
  }
  isDate() {
      console.log(`Я пока не ебу как проверить является ли ${this.date} датой, поэтому пока просто выведу в консоль `)
  }
}
let checkEmail = new EmailValidator("lemeshmah@gmail.com");
console.log(checkEmail.isEmail());
let check2 = new DomainAndPhoneAndDateValidator(
  "lemeshmah@gmail.com",
  "google.com",
  "13.02.2015",
  80296969584
);
console.log(check2.isDomain());
console.log(check2.isPhone());
console.log(check2.isDate());
