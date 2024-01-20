import { getTableRows } from "./table.js";
import { getCurrentInputValue } from "../index.js";

let users = [];
let tableBody = "";
const table = document.querySelector("#table_body");
export const getUsers = async (url) => {
  try {
    const response = await fetch(url);
    users = await response.json();
    tableBody = getTableRows(users);
    table.innerHTML = tableBody;
    const values = getCurrentInputValue();
    const filter = values.filterType;
    const value = values.filterValue;
    if (value !== "" && filter !== "select") {
      filterUsers();
    }
    toggleLoader(false);
  } catch (e) {
    console.error(e);
  }
};

export const filterUsers = () => {
  const values = getCurrentInputValue();
  console.log(values);
  const filter = values.filterType;
  const value = values.filterValue;
  console.log(filter);
  console.log(value);

  if (!filter || filter === "select") {
    const select = document.querySelector("#select");
    select.classList.add("error");
    alert("Please, select a valid filter type!");
  } else if (value === "") {
    const input = document.querySelector("#search");
    input.classList.add("error");
    alert("Please, insert text");
  } else {
    toggleLoader(true);
    const filteredUsers = users.filter(
      (user) =>
        user[filter].toLowerCase().indexOf(value.toLowerCase().trim()) !== -1
    );
    tableBody = getTableRows(filteredUsers);
    table.innerHTML = tableBody;
    toggleLoader(false);
  }
};

export const toggleLoader = (flag) => {
  if (flag) {
    document.querySelector(".loader").classList.remove("d-none");
    document.querySelector(".table").classList.add("d-none");
  } else {
    setTimeout(() => {
      document.querySelector(".loader").classList.add("d-none");
      document.querySelector(".table").classList.remove("d-none");
    }, 1500);
  }
};
