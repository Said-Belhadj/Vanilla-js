const btn = document.getElementById("btn");
const textarea = document.getElementById("content");
const status = document.getElementById("status");
const list = document.getElementById("list-item");

btn.addEventListener("click", () => {
  let obj = getObject();
  console.log(obj);
  createItem();
});

function getObject() {
  let textareaValue = textarea.value;
  let statusValue = status.options[status.selectedIndex].value;
  let item = {
    content: textareaValue,
    status: statusValue,
  };
  return item;
}

function createItem() {
  let text = document.createElement("textarea");
  text.value = getObject().content;

  list.appendChild(text);
  if (getObject().status == "in progress") {
    text.style.backgroundColor = "orange";
  } else if (getObject().status == "done") {
    text.style.backgroundColor = "red";
  } else {
    text.style.backgroundColor = "green";
  }
}
