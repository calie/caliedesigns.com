var password = "hicalie";
if(prompt("Enter password:", "") !== password) {
  alert('Wrong password, try again.');
  window.location = "/";
}