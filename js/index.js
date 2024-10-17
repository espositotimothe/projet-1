// Get the search input field and autocomplete container
const searchInput = document.querySelector('.google-search-input');
const autocompleteContainer = document.querySelector('.google-search-autocomplete');

// Function to toggle autocomplete visibility
function toggleAutocomplete() {
  if (searchInput.value.trim() === "") {
    autocompleteContainer.style.display = "none";
  } else {
    autocompleteContainer.style.display = "block";
  }
}

// Add event listener to search input field
searchInput.addEventListener('input', toggleAutocomplete);

// Hide the autocomplete by default on page load
window.addEventListener('load', () => {
  autocompleteContainer.style.display = 'none';
});