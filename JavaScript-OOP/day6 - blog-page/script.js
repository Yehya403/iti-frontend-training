var allItems = [];
var myHttp = new XMLHttpRequest();
myHttp.open("GET", "https://dummyjson.com/products");
myHttp.send();

myHttp.addEventListener("readystatechange", function () {
  if (myHttp.readyState == 4) {
    allItems = JSON.parse(myHttp.response).products;
    displayProducts(allItems);
  }
});

function displayProducts(allItems) {
  var itemsContainer = ``;
  for (var i = 0; i < 18; i++) {
    itemsContainer += `
      <div class="item image text-center my-5 d-flex align-items-center ">
        <img style="width: 45%;" class="mx-5 " src=${allItems[i].thumbnail} alt="" >

        <div class="w-100"> 
        <h2>${allItems[i].title}</h2>
        <button onclick="navigateToEditPage(${i})" class="edit-btn btn btn-warning my-4 w-50 " >Edit</button>
        <button onclick="deleteProduct(${i});" class="delete-btn btn btn-outline-danger mb-3 w-50 " >Delete</button></div>

      </div>
    `;
  }
  document.getElementById("data").innerHTML = itemsContainer;
}

function deleteProduct(productIndex) {
  let userConfirmation = confirm("Are you sure that you want to delete?");
  if (userConfirmation) {
    allItems.splice(productIndex, 1);
    displayProducts(allItems);
  }
}

function navigateToEditPage(productIndex) {
  const photoId = allItems[productIndex].id;
  window.location.href = `edit.html?id=${photoId}`;
}

const urlParams = new URLSearchParams(window.location.search);
const photoId = urlParams.get("id");

fetch(`https://dummyjson.com/products/${photoId}`)
  .then((response) => response.json())
  .then((photo) => {
    // Populate the form fields with the retrieved photo data
    document.getElementById("title").value = photo.title;
    document.getElementById("id").value = photo.id;
    document.getElementById("des").value = photo.description;
  });

document.getElementById("saveBtn").addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const id = document.getElementById("id").value;
  const des = document.getElementById("des").value;

  const updatedPhoto = {
    title: title,
    id: id,
    description: des,
  };

  fetch(`https://dummyjson.com/products/${photoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPhoto),
  })
    .then((response) => response.json())
    .then(() => {
      alert("Photo updated successfully.");
      // Redirect back to the previous page
      window.history.back();
    });
});

document.getElementById("cancelBtn").addEventListener("click", function () {
  window.history.back();
});
