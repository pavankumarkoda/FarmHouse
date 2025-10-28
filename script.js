document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // 2. Amenity Chip Toggle
    const chips = document.querySelectorAll('.chip');
    
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Toggles the 'active' class on click
            chip.classList.toggle('active');

            // Optional: Log selected amenities
            updateSelectedAmenities();
        });
    });

    function updateSelectedAmenities() {
        const selected = Array.from(chips)
            .filter(chip => chip.classList.contains('active'))
            .map(chip => chip.dataset.amenity);
        
        console.log('Selected Amenities:', selected);
        // In a real application, you would update a hidden form field or a data model here.
    }
});
