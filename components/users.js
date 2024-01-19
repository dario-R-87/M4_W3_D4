import { getTableRows } from "./table.js";

let users = [];
let tableBody = "";
const table = document.querySelector("#table_body");

export const getUsers = async (url) => {
    try {
        const response = await fetch(url);
        users = await response.json();
        tableBody = getTableRows(users);
        table.innerHTML = tableBody;
        const filter = localStorage.getItem("filterBy") ? localStorage.getItem("filterBy") : "select";
        const value = localStorage.getItem("filterValue") ? localStorage.getItem("filterValue") : "";
        if(value!=="" && filter!=="select"){
            filterUsers();
        }
        setTimeout(()=>{
            document.querySelector(".loader").classList.add("d-none");
            document.querySelector(".table").classList.remove("d-none");
        },1500);
    } catch (e) { console.error(e); }
}

export const filterUsers = () => {

    const filter = localStorage.getItem("filterBy") ? localStorage.getItem("filterBy") : "select";
    const value = localStorage.getItem("filterValue") ? localStorage.getItem("filterValue") : "";

    if(!filter || filter === "select"){
        const select = document.querySelector("#select");
        select.classList.add("error"); 
        alert("Please, select a valid filter type!");
    } else if (value===""){
        const input = document.querySelector("#search");
        input.classList.add("error"); 
        alert("Please, insert text");
    } else {
        document.querySelector(".loader").classList.remove("d-none");
        document.querySelector(".table").classList.add("d-none");
        const filteredUsers = users.filter(
            (user) => user[filter].toLowerCase().indexOf(value.toLowerCase().trim()) !== -1);
        tableBody = getTableRows(filteredUsers);
        table.innerHTML = tableBody;
        setTimeout(()=>{
            document.querySelector(".loader").classList.add("d-none");
            document.querySelector(".table").classList.remove("d-none");
        },1500);
    }
};