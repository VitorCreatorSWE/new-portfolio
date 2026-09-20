const translations = {
    pt: {
        nav_brand: "<Programador/>",
        nav_home: "Home",
        nav_about: "Sobre",
        nav_catalogo: "Catálogo Impeccable",
        nav_intervencoes: "Intervenções v2",
        nav_contacts: "Contatos",
        hero_title: "Full Stack Developer",
        hero_subtitle: "Criando soluções completas, código criativo e experiências excepcionais.",
        hero_cta: "Sobre mim",
        hero_cta_2: "Contato",
        status_available: "Disponível para trabalhar",
        section_label_about: "// about.js",
        about_title: "Sobre mim",
        about_p1: "Olá! Me chamo Vitor.",
        about_p2: "Sou programador Full Stack focado em HTML, CSS, JavaScript e Python, e atualmente curso Análise e Desenvolvimento de Sistemas no IFSP Guarulhos.",
        about_p3: "Gosto de resolver problemas com código e IA, estou em busca da minha próxima oportunidade para crescer como desenvolvedor e contribuir com projetos desafiadores.",
        stat_course: "Cursando",
        stat_school: "Guarulhos",
        stat_focus: "Foco",
        tech_stack: "Stack Tecnológica",
        section_label_contacts: "// contacts.js",
        contact_title: "Contatos",
        contact_name: "Vitor Igor dos Santos",
        contact_phone: "+55 11 94675-0795",
        footer_text: "Feito com HTML, CSS, JS & Bootstrap 5."
    },
    en: {
        nav_brand: "<Programmer/>",
        nav_home: "Home",
        nav_about: "About",
        nav_catalogo: "Impeccable Catalog",
        nav_intervencoes: "v2 Interventions",
        nav_contacts: "Contacts",
        hero_title: "Full Stack Developer",
        hero_subtitle: "Building complete solutions, creative code, and exceptional experiences.",
        hero_cta: "About me",
        hero_cta_2: "Contact",
        status_available: "Available for work",
        section_label_about: "// about.js",
        about_title: "About me",
        about_p1: "Hello! My name is Vitor.",
        about_p2: "I am a Full Stack programmer focused on HTML, CSS, JavaScript, and Python, and I am currently studying Systems Analysis and Development at IFSP Guarulhos.",
        about_p3: "I enjoy solving problems with code and AI, and I am looking for my next opportunity to grow as a developer and contribute to challenging projects.",
        stat_course: "Studying",
        stat_school: "Guarulhos",
        stat_focus: "Focus",
        tech_stack: "Tech Stack",
        section_label_contacts: "// contacts.js",
        contact_title: "Contacts",
        contact_name: "Vitor Igor dos Santos",
        contact_phone: "+55 11 94675-0795",
        footer_text: "Built with HTML, CSS, JS & Bootstrap 5."
    }
};

let currentLang = localStorage.getItem('lang') || 'en';
let typewriterInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    // --- Language Toggle ---
    const langToggleBtn = document.getElementById('langToggle');
    const langSpan = document.getElementById('currentLang');

    langSpan.innerText = currentLang === 'pt' ? 'PT-BR' : 'EN';
    updateLanguage(false); // false = no animation on load

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        localStorage.setItem('lang', currentLang);
        langSpan.innerText = currentLang === 'pt' ? 'PT-BR' : 'EN';
        updateLanguage(true);
        langToggleBtn.style.transform = 'scale(0.9)';
        setTimeout(() => langToggleBtn.style.transform = 'scale(1)', 150);
    });

    // --- Navbar Scroll Effect ---
    const mainNav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    });

    // --- Intersection Observer for animations ---
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skill-item')) {
                    const bar = entry.target.querySelector('.skill-fill');
                    if (bar) bar.style.width = bar.getAttribute('data-width') + '%';
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-item').forEach(el => observer.observe(el));
});

// --- Typewriter Effect ---
function typeWriter(text, elementId, speed = 80) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.innerText = '';
    let i = 0;
    
    if(typewriterInstance) clearTimeout(typewriterInstance);

    function type() {
        if (i < text.length) {
            el.innerText += text.charAt(i);
            i++;
            typewriterInstance = setTimeout(type, speed);
        }
    }
    type();
}

function updateLanguage(animate = true) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (key === 'hero_title') {
                typeWriter(translations[currentLang][key], 'typewriterText');
                return;
            }
            
            if (animate) {
                el.style.opacity = 0;
                setTimeout(() => {
                    el.innerText = translations[currentLang][key];
                    el.style.transition = 'opacity 0.3s ease';
                    el.style.opacity = 1;
                }, 150);
            } else {
                el.innerText = translations[currentLang][key];
            }
        }
    });
}

// --- Particle Network Canvas (Hero) ---
const canvas = document.getElementById('particleCanvas');
const homeSection = document.getElementById('home');

if (canvas && homeSection) {
    const ctx = canvas.getContext('2d');
    
    const setCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = homeSection.offsetHeight;
    };
    setCanvasSize();

    let particlesArray = [];
    const numberOfParticles = Math.min(100, (canvas.width * canvas.height) / 15000);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() * 1 - 0.5) * 0.5;
            this.speedY = (Math.random() * 1 - 0.5) * 0.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.005;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.fillStyle = 'rgba(20, 108, 255, 0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function connectParticles() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                    + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = 'rgba(20, 108, 255,' + opacityValue * 0.15 + ')';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        connectParticles();
        requestAnimationFrame(animateParticles);
    }

    window.addEventListener('resize', () => {
        setCanvasSize();
        initParticles();
    });

    initParticles();
    animateParticles();
}

// --- Contacts Matrix (Green) ---
const contactsMatrixCanvas = document.getElementById('contactsMatrixCanvas');
const githubRainContainer = document.getElementById('github-rain-container');
const whatsappLink = document.getElementById('whatsapp-link');
const githubLink = document.getElementById('github-link');
const contactsCard = document.getElementById('contacts-card');

if (contactsMatrixCanvas) {
    const ctxContacts = contactsMatrixCanvas.getContext('2d');
    const setContactsCanvasSize = () => {
        contactsMatrixCanvas.width = window.innerWidth;
        contactsMatrixCanvas.height = document.getElementById('contacts').offsetHeight;
    };
    setContactsCanvasSize();
    
    const chars = '01';
    const fontSize = 16;
    let columnsContacts = contactsMatrixCanvas.width / fontSize;
    let dropsContacts = [];
    for (let x = 0; x < columnsContacts; x++) dropsContacts[x] = 1;
    
    function drawContactsMatrix() {
        if (contactsMatrixCanvas.style.opacity === '0') return;
        ctxContacts.fillStyle = 'rgba(9, 10, 15, 0.05)';
        ctxContacts.fillRect(0, 0, contactsMatrixCanvas.width, contactsMatrixCanvas.height);
        ctxContacts.fillStyle = '#0f0';
        ctxContacts.font = fontSize + 'px monospace';
        
        for (let i = 0; i < dropsContacts.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctxContacts.fillText(text, i * fontSize, dropsContacts[i] * fontSize);
            if (dropsContacts[i] * fontSize > contactsMatrixCanvas.height && Math.random() > 0.975) {
                dropsContacts[i] = 0;
            }
            dropsContacts[i]++;
        }
    }
    setInterval(drawContactsMatrix, 50);
    window.addEventListener('resize', () => {
        setContactsCanvasSize();
        columnsContacts = contactsMatrixCanvas.width / fontSize;
        dropsContacts = [];
        for (let x = 0; x < columnsContacts; x++) dropsContacts[x] = 1;
    });
}

// --- Github Rain Effect ---
let githubRainInterval;
function createGithubIcon() {
    if (githubRainContainer.style.opacity === '0') return;
    
    const icon = document.createElement('i');
    icon.className = 'bi bi-github';
    icon.style.position = 'absolute';
    icon.style.left = Math.random() * 100 + 'vw';
    icon.style.top = '-50px';
    icon.style.fontSize = (Math.random() * 20 + 20) + 'px';
    icon.style.color = 'rgba(255, 255, 255, 0.15)';
    icon.style.opacity = '0';
    icon.style.transition = 'top 3s linear, opacity 0.5s ease';
    
    githubRainContainer.appendChild(icon);
    setTimeout(() => {
        icon.style.opacity = '1';
        icon.style.top = '110vh';
    }, 50);
    setTimeout(() => icon.remove(), 3000);
}

// --- Hover event listeners ---
if (whatsappLink && githubLink) {
    whatsappLink.addEventListener('mouseenter', () => {
        contactsMatrixCanvas.style.opacity = '0.4';
        githubRainContainer.style.opacity = '0';
        contactsCard.style.borderColor = '#25D366';
        contactsCard.style.boxShadow = '0 20px 60px rgba(37, 211, 102, 0.15)';
    });
    
    whatsappLink.addEventListener('mouseleave', () => {
        contactsMatrixCanvas.style.opacity = '0';
        contactsCard.style.borderColor = '';
        contactsCard.style.boxShadow = '';
    });
    
    githubLink.addEventListener('mouseenter', () => {
        githubRainContainer.style.opacity = '1';
        contactsMatrixCanvas.style.opacity = '0';
        contactsCard.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        
        for(let i=0; i<10; i++) setTimeout(createGithubIcon, i * 200);
        clearInterval(githubRainInterval);
        githubRainInterval = setInterval(createGithubIcon, 150);
    });
    
    githubLink.addEventListener('mouseleave', () => {
        githubRainContainer.style.opacity = '0';
        contactsCard.style.borderColor = '';
        clearInterval(githubRainInterval);
        setTimeout(() => {
            if(githubRainContainer.style.opacity === '0') {
                githubRainContainer.innerHTML = '';
            }
        }, 500);
    });
}
