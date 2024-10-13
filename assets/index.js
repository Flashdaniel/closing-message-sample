const createCloseingMessage = () => {
  const messages = document.querySelectorAll(".message");

  [...messages].forEach((message) => {
    message.children[0].children[1].addEventListener("click", () => {
      message.remove();
    });
  });
};

createCloseingMessage();
