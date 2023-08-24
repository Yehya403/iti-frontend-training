function generateRandomID() {
  return Math.floor(Math.random() * 100);
}

function getCurrentTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  alert("hours: " + hours + " mins: " + minutes + " seconds: " + seconds);
}

function createCard(name, description) {
  const id = generateRandomID();
  const cardDiv = document.createElement('div');
  cardDiv.innerHTML = `
      <h1>Name: ${name}</h1>
      <h1>ID: ${id}</h1>
      <h2>Description: ${description}</h2>
      <button>created at</button>
  `;

  const button = cardDiv.querySelector("button");
  button.addEventListener('click', getCurrentTime);

  document.getElementById('data').appendChild(cardDiv);
}


  const names = ['john', 'alex', 'richard', 'marina'];
  const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntu';
  names.forEach(name => {
      createCard(name, description);
  });

