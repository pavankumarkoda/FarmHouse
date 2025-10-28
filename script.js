document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu (Hamburger) Toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const closeMobileNavBtn = document.querySelector('.close-mobile-nav');
    const toggleFiltersBtn = document.querySelector('.toggle-filters-btn');
    const filterPanel = document.querySelector('.filter-panel');

    // Open mobile navigation
    hamburgerMenu.addEventListener('click', () => {
        mobileNavOverlay.classList.add('open');
    });

    // Close mobile navigation
    closeMobileNavBtn.addEventListener('click', () => {
        mobileNavOverlay.classList.remove('open');
    });

    // Optional: Close mobile nav if clicking outside the content (on the overlay itself)
    mobileNavOverlay.addEventListener('click', (event) => {
        if (event.target === mobileNavOverlay) {
            mobileNavOverlay.classList.remove('open');
        }
    });

    // 2. Mobile Filter Panel Toggle (within the mobile nav overlay)
    // Initially hide the filter panel on mobile via CSS class
    if (window.innerWidth <= 992px) { // Adjust breakpoint to match CSS @media query
        filterPanel.classList.add('mobile-hidden');
    }

    toggleFiltersBtn.addEventListener('click', () => {
        // Close the mobile nav overlay first
        mobileNavOverlay.classList.remove('open'); 
        
        // Then toggle the visibility of the filter panel
        filterPanel.classList.toggle('mobile-hidden');

        // Optional: Scroll to the filter panel if it's revealed
        if (!filterPanel.classList.contains('mobile-hidden')) {
            filterPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // 3. Amenity/Filter Checkbox Interaction (no special JS needed, default checkbox behavior)
    // The previous 'chip' logic is no longer needed as per the image's checkbox style.
    // If you want to add custom styling for checked states, you'd do it in CSS.
    // Example: label input[type="checkbox"]:checked + span { ... }
});

// Optional: Add event listener to update breakpoint-dependent states on resize
window.addEventListener('resize', () => {
    const filterPanel = document.querySelector('.filter-panel');
    if (window.innerWidth > 992px) { // Desktop view
        filterPanel.classList.remove('mobile-hidden');
    } else { // Mobile view
        filterPanel.classList.add('mobile-hidden');
    }
});
