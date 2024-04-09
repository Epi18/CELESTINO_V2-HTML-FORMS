// JavaScript to close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  }
  
  // JavaScript to handle submenu display
  document.addEventListener('DOMContentLoaded', function () {
    var submenus = document.querySelectorAll('.submenu');
  
    submenus.forEach(function (submenu) {
      var parentLink = submenu.previousElementSibling;
  
      parentLink.addEventListener('mouseenter', function () {
        submenu.style.display = 'block';
      });
  
      parentLink.addEventListener('mouseleave', function () {
        submenu.style.display = 'none';
      });
  
      submenu.addEventListener('mouseenter', function () {
        submenu.style.display = 'block';
      });
  
      submenu.addEventListener('mouseleave', function () {
        submenu.style.display = 'none';
      });
    });
  });
  