// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            nav.classList.toggle('active');
            
            // Toggle menu button appearance
            if (mobileMenuBtn.classList.contains('active')) {
                mobileMenuBtn.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
                mobileMenuBtn.querySelector('span:nth-child(2)').style.opacity = '0';
                mobileMenuBtn.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                mobileMenuBtn.querySelector('span:nth-child(1)').style.transform = 'none';
                mobileMenuBtn.querySelector('span:nth-child(2)').style.opacity = '1';
                mobileMenuBtn.querySelector('span:nth-child(3)').style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav && nav.classList.contains('active') && !e.target.closest('nav') && !e.target.closest('.mobile-menu-btn')) {
            nav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.querySelector('span:nth-child(1)').style.transform = 'none';
            mobileMenuBtn.querySelector('span:nth-child(2)').style.opacity = '1';
            mobileMenuBtn.querySelector('span:nth-child(3)').style.transform = 'none';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Don't scroll if this is a blog article link that should display the article
            if (this.classList.contains('post-read-more')) {
                return;
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    mobileMenuBtn.querySelector('span:nth-child(1)').style.transform = 'none';
                    mobileMenuBtn.querySelector('span:nth-child(2)').style.opacity = '1';
                    mobileMenuBtn.querySelector('span:nth-child(3)').style.transform = 'none';
                }
                
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation
    const emailSignupForms = document.querySelectorAll('.email-signup form');
    
    emailSignupForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const emailValue = emailInput.value.trim();
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailValue)) {
                // Show error
                if (!this.querySelector('.error-message')) {
                    const errorMessage = document.createElement('p');
                    errorMessage.classList.add('error-message');
                    errorMessage.style.color = '#FF3B30';
                    errorMessage.style.fontSize = '0.875rem';
                    errorMessage.style.marginTop = '0.5rem';
                    errorMessage.textContent = 'Please enter a valid email address';
                    this.appendChild(errorMessage);
                }
                emailInput.style.borderColor = '#FF3B30';
                return false;
            }
            
            // Remove any existing error messages
            const errorMessage = this.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
            emailInput.style.borderColor = '';
            
            // Show success message and clear form
            const successMessage = document.createElement('p');
            successMessage.classList.add('success-message');
            successMessage.style.color = '#34C759';
            successMessage.style.fontSize = '0.875rem';
            successMessage.style.marginTop = '0.5rem';
            successMessage.textContent = 'Thank you! Your guide is on its way.';
            
            // Replace form with success message
            const formContainer = this.parentNode;
            formContainer.innerHTML = '';
            formContainer.appendChild(successMessage);
            
            // In a real implementation, you would also submit the form data to a server
            // For this demo, we're just showing the success message
        });
    });
    
    // Social sharing functionality
    document.querySelectorAll('.social-icons a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const url = this.getAttribute('href');
            const width = 600;
            const height = 400;
            const left = (window.innerWidth - width) / 2;
            const top = (window.innerHeight - height) / 2;
            
            window.open(
                url,
                'social-share-dialog',
                `width=${width},height=${height},left=${left},top=${top}`
            );
        });
    });
    
    // Persistent scroll position for blog articles
    // This ensures that when a user clicks on "Read More" and then goes back,
    // they are returned to the same position in the article list
    if (window.location.hash && window.location.hash.includes('article')) {
        // Show the article when hash is present
        const article = document.querySelector(window.location.hash);
        if (article) {
            article.style.display = 'block';
            
            // Scroll to the article with a slight delay to ensure proper positioning
            setTimeout(() => {
                const headerOffset = 80;
                const elementPosition = article.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
    
    // Track article views for analytics purposes
    document.querySelectorAll('.post-read-more').forEach(link => {
        link.addEventListener('click', function(e) {
            const articleId = this.getAttribute('href').substring(1); // Remove the # from the ID
            
            // In a real implementation, you would send this data to your analytics service
            console.log(`Article viewed: ${articleId}`);
            
            // Store the last viewed article in localStorage for personalization
            localStorage.setItem('lastViewedArticle', articleId);
        });
    });
    
    // Implement lazy loading for images to improve performance
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
}); 
