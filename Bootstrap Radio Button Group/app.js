function order() {
    const message = document.querySelector("#message");
    const checkedInput = document.querySelector("input:checked");
    if (checkedInput) {
      message.textContent = `You have placed an order for ${checkedInput.value}.`;
    } else {
      message.textContent = "Unknown order.";
    }
  }