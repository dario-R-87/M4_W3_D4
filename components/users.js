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
    } catch (e) { console.error(e); }
}

export const filterUsers = () => {
    const filter = localStorage.getItem("filterBy");
    const value = localStorage.getItem("filterValue");
    if (filter && filter !== "select" && value!=="") {
        const filteredUsers = users.filter(
            (user) => user[filter].toLowerCase().indexOf(value.toLowerCase().trim()) !== -1);
        tableBody = getTableRows(filteredUsers);
        table.innerHTML = tableBody;
        } else {
            const select = document.querySelector("#select");
            select.classList.add("error"); 
            alert("Please, select a filter type!") 
        };
};