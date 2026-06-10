document.addEventListener('DOMContentLoaded', () => {
    console.log('SIM Owner Details site loaded');
    
    // Internal linking logic or any dynamic UI enhancements can go here
    // For example, smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
