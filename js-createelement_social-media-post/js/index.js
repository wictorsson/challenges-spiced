console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const headline = document.createElement("h1");
document.body.append(headline);
headline.textContent = "Social Media Post";

const articleElement = document.createElement("article");
document.body.append(articleElement);
articleElement.className = "post";

const postContent = document.createElement("p");
articleElement.append(postContent);
postContent.className = "post__content";
postContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const footerElement = document.createElement("footer");
articleElement.append(footerElement);
footerElement.className = "post__footer";

const footerText = document.createElement("span");
footerElement.append(footerText);
footerText.className = "post__username";
footerText.textContent = "@username";

const buttonElement = document.createElement("button");
footerElement.append(buttonElement);
buttonElement.className = "post__button";
buttonElement.textContent = " ♥ Like";
buttonElement.setAttribute("data-js", "like-button");
buttonElement.type = "button";

buttonElement.addEventListener("click", () => {
  if (buttonElement.className === "post__button") {
    buttonElement.className = "post__button post__button--liked";
  } else {
    buttonElement.className = "post__button";
  }
});
