import { getTableRows } from "./table.js";

let users = [];
let tableBody = "";
const table = document.querySelector("#table_body");

export const getUsers = async (url) => {
    const response = await fetch(url);
    users = await response.json();
    tableBody = getTableRows(users);

    table.innerHTML = tableBody;
    console.log(users);
}

export const filterUsers = () => {
    const filter = localStorage.getItem("filterBy");
    const value = localStorage.getItem("filterValue");
    const filteredUsers = users.filter(
        (user) => user[filter].toLowerCase().indexOf(value.toLowerCase().trim()) !== -1);
    tableBody = getTableRows(filteredUsers);
    table.innerHTML = tableBody;
};