// Toggle mobile navigation and dropdowns
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function () {
  // Highlight active nav link
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.href.endsWith(location.pathname)) {
      link.classList.add('active');
    }
  });
  // Dropdown accessibility
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', function () {
      this.querySelector('.dropdown-content').style.display = "block";
    });
    dropdown.addEventListener('mouseleave', function () {
      this.querySelector('.dropdown-content').style.display = "none";
    });
  });
});
