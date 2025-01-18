function toggleSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.classList.toggle('visible');
    searchInput.focus(); // Automatically focuses the input field
}
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
