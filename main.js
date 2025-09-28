// main.js for Die Brücke German Language School
// Advanced JavaScript: Navbar scroll effect, Enroll button animation, and smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    // Navbar shadow on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if(window.scrollY > 10) {
            nav.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)';
        } else {
            nav.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
        }
    });

    // Enroll button pulse animation on hover
    const enrollBtn = document.getElementById('enrollBtn');
    enrollBtn.addEventListener('mouseenter', function() {
        enrollBtn.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.08)' },
            { transform: 'scale(1)' }
        ], {
            duration: 400,
            iterations: 1
        });
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            if(href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if(target) {
                    window.scrollTo({
                        top: target.offsetTop - nav.offsetHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Enroll button click: show modal (example advanced interaction)
    enrollBtn.addEventListener('click', function() {
        let modal = document.getElementById('enrollModal');
        if(!modal) {
            modal = document.createElement('div');
            modal.id = 'enrollModal';
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100vw';
            modal.style.height = '100vh';
            modal.style.background = 'rgba(0,0,0,0.4)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.innerHTML = `
                <div style="background:#fff;padding:2.5rem 2rem;border-radius:18px;box-shadow:0 8px 32px rgba(0,0,0,0.18);max-width:350px;text-align:center;">
                    <h2 style="margin-bottom:1.2rem;">Enroll Now</h2>
                    <p style="margin-bottom:1.5rem;">Thank you for your interest! Enrollment will open soon.</p>
                    <button id="closeModal" style="background:#0077b6;color:#fff;border:none;padding:0.6rem 1.3rem;border-radius:8px;font-size:1rem;cursor:pointer;">Close</button>
                </div>
            `;
            document.body.appendChild(modal);
            document.getElementById('closeModal').onclick = function() {
                modal.remove();
            };
        }
    });
});
