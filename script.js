document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    // Gets the button that opens/closes the menu and the menu element itself.
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    /**
     * Toggles the 'open' class on the navigation menu when the hamburger icon is clicked.
     * The 'open' class is what the CSS uses to show the menu on mobile.
     */
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // 2. Amenity Chip Toggle
    // Gets all elements with the class 'chip'
    const chips = document.querySelectorAll('.chip');
    
    /**
     * Iterates over all amenity chips to add a click listener.
     */
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Toggles the 'active' class to change the chip's styling (CSS handles the color change).
            chip.classList.toggle('active');

            // Optionally call a function to log or update the selected data.
            updateSelectedAmenities();
        });
    });

    /**
     * Function to track which amenities are currently selected (for console logging).
     * In a real application, this logic would update a hidden form field before submission.
     */
    function updateSelectedAmenities() {
        const selected = Array.from(chips)
            // Filter down to only those chips that currently have the 'active' class
            .filter(chip => chip.classList.contains('active'))
            // Map the filtered elements to their data-amenity attribute value
            .map(chip => chip.dataset.amenity);
        
        console.log('Selected Amenities:', selected);
    }

    // 3. Optional: Auto-Set Date Picker type on focus for better UX
    // This ensures the placeholder text is visible until the user clicks/taps the field.
    const dateInputs = document.querySelectorAll('.date-picker input');
    dateInputs.forEach(input => {
        input.addEventListener('focus', () => {
            // Change input type to 'date' only when the field is focused
            input.type = 'date';
        });
        input.addEventListener('blur', () => {
            // Revert input type to 'text' if it's empty to show the placeholder again
            if (!input.value) {
                input.type = 'text';
            }
        });
    });

});
