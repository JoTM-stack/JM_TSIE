  // LinkedIn modal functions
        function showLinkedInMessage(event) {
            event.preventDefault();
            document.getElementById('linkedinModal').style.display = 'block';
        }

        function closeLinkedInModal() {
            document.getElementById('linkedinModal').style.display = 'none';
        }

        // Close modal when clicking outside of it
        window.onclick = function(event) {
            const modal = document.getElementById('linkedinModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                document.getElementById('linkedinModal').style.display = 'none';
            }
        });

        // Add fade-in animation to projects as they come into view
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe all project elements and about section
        document.querySelectorAll('.project, .about-section').forEach(element => {
            observer.observe(element);
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
