const axios = require("axios");
const fs = require("fs");



async function test() {
  let data = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  let sum = 2 + 2;
  console.log(data.data, sum);
}

function testVariantOne() {
  let data = axios.get("https://jsonplaceholder.typicode.com/todos/1");
  let sum = 2 + 2;
  return [data, sum];
}

async function call() {
  await test();
}

function callOne() {
  let [data, sum] = testVariantOne();
  data.then((data) => console.log(data.data));
  ex();
  // .then((data) => console.log(data))
  // .catch((err) => console.log(err));
  console.log(sum);
}

callOne();

// await call();

function ex() {
  return new Promise((resolve, reject) => {
    resolve("I am comming from resolve ");
    // reject("I am coming from catch ");
  })
}