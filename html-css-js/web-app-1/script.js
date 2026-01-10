function dispMessage() {
  // a=10
  // b=20
  // c=a+b
  //alert("Hello")
  // alert(document.getElementById("txtEmail").value)
  // lblMessage.innerHTML = document.getElementById("txtEmail").value + "-" + document.getElementById("txtPassword").value
  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPassword").value
  if (email === "john@gmail.com" && password === "1234") {
    lblMessage.innerHTML = "Welcome";
  } else {
    lblMessage.innerHTML = "Access Denied";
  }
}
