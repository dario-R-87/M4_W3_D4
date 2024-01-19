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