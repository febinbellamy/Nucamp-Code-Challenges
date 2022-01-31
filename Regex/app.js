function validate() {
  let inputStr = document.getElementById("username").value;

  const myReg = /^[A-Za-z0-9]{1,}[0-9]$/;

  if (myReg.test(inputStr)) alert("Username accepted");
  else
    alert(
      "Username must contain only alphanumeric characters, contain a mininum of two characters, and end with a digit."
    );
}
