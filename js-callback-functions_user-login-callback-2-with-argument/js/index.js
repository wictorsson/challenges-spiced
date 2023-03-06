console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

function showWelcomeMessage(username) {
  console.log(`Welcome ${username} You are logged in now.`);
}

handleUserLogin(showWelcomeMessage);

handleUserLogin((username) => {
  console.log(`Welcome ${username} You are logged in now.`);
});
