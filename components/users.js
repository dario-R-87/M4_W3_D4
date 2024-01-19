import { getTableRows } from "./table.js";

let users = [];

export const getUsers = async (url) => {
    const response = await fetch(url);
    users = await response.json();
    const tableBody = getTableRows(users);
    const table = document.querySelector("#table_body");
    table.innerHTML = tableBody;
    console.log(users);
}

export const filterUsers = () => {
    const filter = localStorage.getItem("filterBy");
    const value = localStorage.getItem("filterValue");
    // console.log(typeof value);
    const filteredUsers = users.filter(
        (user)=>  user[filter].toLowerCase().indexOf(value.toLowerCase().trim())!==-1);
    console.log(filteredUsers);
};