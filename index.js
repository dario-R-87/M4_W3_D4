import {getUsers, filterUsers} from "./components/users.js";

const url ="https://jsonplaceholder.typicode.com/users";

getUsers(url);

const storeFilterSelected = (event) => {
   localStorage.setItem("filterBy",event.target.value);
}

const storeInputValue = (event) => {
    localStorage.setItem("filterValue",event.target.value);
 }

const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", filterUsers);

const select = document.querySelector("#select");

const input = document.querySelector("#search");
input.addEventListener("keyup", (e)=>{
    storeInputValue(e);
});


select.addEventListener("change", (e)=>{
    storeFilterSelected(e);
});
