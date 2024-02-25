// function helloWorld(name) {
//   console.log("Dzień dobry w niedzielę " + name);
// }
// //   <!-- wywołanie funkcji w javascript -->
// helloWorld("Wiki");
// helloWorld("Ania");
function mobileMenu() {
  let mobileMenuIcon = document.getElementById("mobile_menu_icon");
  console.log(mobileMenuIcon);
  let menu = document.getElementById("main_menu");
  // wyswietlanie zmiennej w konsoli przegladarki
  console.log(menu);

  if (mobileMenuIcon) {
    mobileMenuIcon.addEventListener("click", function () {
      menu.classList.toggle("opened");
      mobileMenuIcon.classList.toggle("opened");
    });
  }
}
//wywołanie funkcji
mobileMenu();
