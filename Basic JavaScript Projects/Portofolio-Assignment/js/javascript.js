document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 56,
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name) {
            alert('Name is required');
            return;
        }

        if (!email) {
            alert('Email is required');
            return;
        }

        if (!message) {
            alert('Message is required');
            return;
        }

        alert('Form submitted successfully!');
    });

    const loader = document.getElementById('loading');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 2000); 
});
