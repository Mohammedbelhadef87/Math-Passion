// زر الوضع الليلي
const toggleDark = document.getElementById('toggle-dark');
const darkIcon = document.getElementById('dark-icon');

function setDarkMode(on) {
    if (on) {
        document.body.classList.add('dark-mode');
        darkIcon.textContent = '☀️';
        localStorage.setItem('darkMode', 'on');
    } else {
        document.body.classList.remove('dark-mode');
        darkIcon.textContent = '🌙';
        localStorage.setItem('darkMode', 'off');
    }
}

// عند تحميل الصفحة
if (localStorage.getItem('darkMode') === 'on') setDarkMode(true);

toggleDark.onclick = function() {
    setDarkMode(!document.body.classList.contains('dark-mode'));
};

// زر العودة للأعلى
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.onclick = () => window.scrollTo({top:0, behavior:'smooth'});

// WhatsApp Button Function
function openWhatsApp() {
    window.open('https://wa.me/1234567890?text=مرحبا%20أستاذ،%20أحتاج%20مساعدة%20في%20مادة%20الرياضيات', '_blank');
}

document.querySelector('.floating-button').addEventListener('click', openWhatsApp);

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    // For demo, we'll just show an alert
    alert(`شكرًا ${name} على رسالتك! سنتواصل معك قريبًا على ${email}`);
    
    // Reset the form
    contactForm.reset();
});

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.post-card, .resource-card, .video-container');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.querySelectorAll('.post-card, .resource-card, .video-container').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Trigger once on page load
window.addEventListener('load', animateOnScroll);
document.addEventListener('DOMContentLoaded', function() {
    const lessonTitles = document.querySelectorAll('.lesson-title');
    
    lessonTitles.forEach(title => {
        title.addEventListener('click', function() {
            this.classList.toggle('active');
            const subLessons = this.nextElementSibling;
            subLessons.classList.toggle('active');
        });
    });
    
    // فتح أول درس تلقائياً
    if (lessonTitles.length > 0) {
        lessonTitles[0].classList.add('active');
        lessonTitles[0].nextElementSibling.classList.add('active');
    }
});