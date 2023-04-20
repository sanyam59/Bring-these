import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://playground-bd812-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDb = ref(database, "items");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

onValue(itemsInDb, function (snapshot) {
  if (snapshot.exists()) {
    let itemsEntries = Object.entries(snapshot.val());
    clearShoppingListEl();
    for (let i = 0; i < itemsEntries.length; i++) {
      let currentItem = itemsEntries[i];
      let currentItemID = currentItem[0];
      let currentItemValue = currentItem[1];
      appendItemToshoppingListEl(currentItem);
    }
  } else {
    shoppingListEl.innerHTML = "No items here yet.";
  }
});

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  push(itemsInDb, inputValue);
  clearInputFieldEl();
});

function clearInputFieldEl() {
  inputFieldEl.value = " ";
}

function appendItemToshoppingListEl(item) {
  // shoppingListEl.innerHTML += `<li>${itemValue}</li>`
  let newEl = document.createElement("li");
  let itemID = item[0];
  let itemValue = item[1];
  newEl.textContent = itemValue;
  newEl.addEventListener("click", function () {
    let exactLocationOfTheItemToBeRemovedInDB = ref(
      database,
      `items/${itemID}`
    );
    remove(exactLocationOfTheItemToBeRemovedInDB);
  });
  shoppingListEl.append(newEl);
}

function clearShoppingListEl() {
  shoppingListEl.innerHTML = " ";
}
