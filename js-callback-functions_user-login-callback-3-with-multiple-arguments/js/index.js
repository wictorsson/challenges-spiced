console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!

function showWelcomeMessage(username, userRole) {
  console.log(`Welcome ${username}! You are logged in now as ${userRole}.`);
}

handleUserLogin(showWelcomeMessage);

handleUserLogin((username, userRole) => {
  console.log(`Welcome ${username}! You are logged in now as ${userRole}.`);
});
