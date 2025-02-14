// Example: Smooth scroll to a section
document.querySelector('.cta-button').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#coffee-products').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add more JavaScript animations or interactive features as needed
