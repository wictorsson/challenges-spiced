console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!

function showWelcomeMessage(username, userRole) {
  console.log(`Welcome ${username}! You are logged in now as ${userRole}.`);
}

function showErrorMessage(errorMessage) {
  console.log(`Login error: ${errorMessage}`);
}

handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe");

handleUserLogin(
  (username, userRole) => {
    console.log(`Welcome ${username}! You are logged in now as ${userRole}.`);
  },
  (errorMessage) => {
    console.log(`Login error: ${errorMessage}`);
  },
  () => {
    "Jane Doe";
  }
);
