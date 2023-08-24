console.log("Hello From Client 👀");

const addNewButton = document.querySelector("button");

const addNewUser = async () => {
  const nameInput = document.querySelector("#name");
  const ageInput = document.querySelector("#age");
  const errorMessage = document.querySelector("#error");

  const name = nameInput.value;
  const age = ageInput.value;

  if (!name || !age) {
    return (errorMessage.innerHTML = "Please enter valid values");
  }

  await fetch("http://localhost:8080/users", {
    method: "POST",
    body: JSON.stringify({ name, age }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Rest inputs
  nameInput.value = ageInput.value = errorMessage.innerHTML = "";
};

addNewButton.addEventListener("click", (e) => {
  e.preventDefault();
  addNewUser();
});
