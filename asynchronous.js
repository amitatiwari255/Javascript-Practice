const axios = require ("axios")
async function getData(){
    let Data = await axios.get ("https://jsonplaceholder.typicode.com/users");
    console.log( Data);
}
getData();
