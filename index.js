import {getUsers, filterUsers, toggleLoader} from "./components/users.js";

const url ="https://jsonplaceholder.typicode.com/users";
const select = document.querySelector("#select");
const input = document.querySelector("#search");
input.value=localStorage.getItem("filterValue") ? localStorage.getItem("filterValue") : "";
select.value=localStorage.getItem("filterBy") ? localStorage.getItem("filterBy") : "select";
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", filterUsers);
const deleteBtn = document.querySelector("#empty");

getUsers(url);

const storeFilterSelected = (event) => {
    if(event.target.value!=="select")
        select.classList.remove("error"); 
    localStorage.setItem("filterBy",event.target.value);
}

const storeInputValue = (event) => {
    if(event.target.value!=="select")
         input.classList.remove("error"); 
    localStorage.setItem("filterValue",event.target.value);
 }

 const deleteFilter = ()=>{
    toggleLoader(true);
    getUsers(url);
    input.value="";
    select.value="select"
    localStorage.setItem("filterBy","select");
    localStorage.setItem("filterValue","");
    toggleLoader(false);
 };

input.addEventListener("keyup", (e)=>{
    storeInputValue(e);
});

select.addEventListener("change", (e)=>{
    storeFilterSelected(e);
});

deleteBtn.addEventListener("click", deleteFilter);