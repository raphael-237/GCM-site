// ===== HEADER SCROLL EFFECT =====
let lastScrollTop = 0;
const mainHeader = document.getElementById('mainHeader');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll down - hide header
        if (mainHeader) mainHeader.classList.add('header-hidden');
    } else {
        // Scroll up - show header
        if (mainHeader) mainHeader.classList.remove('header-hidden');
    }
    
    lastScrollTop = scrollTop;
});

// ===== STATS : compteur + cercle animé =====
var statsAnimated = false;
var circumference = 2 * Math.PI * 50;

function animateStats() {
    if(statsAnimated) return;
    var section = document.querySelector('.stats-section');
    if(!section) return;
    var rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
        statsAnimated = true;

        // Compteur chiffres
        document.querySelectorAll('.stat-value[data-target]').forEach(function(el){
            var target = parseInt(el.getAttribute('data-target'));
            var suffix = el.querySelector('span') ? el.querySelector('span').outerHTML : '';
            var duration = 1800;
            var step = Math.ceil(target / (duration / 16));
            var current = 0;
            var timer = setInterval(function(){
                current = Math.min(current + step, target);
                el.innerHTML = current + suffix;
                if(current >= target) clearInterval(timer);
            }, 16);
        });

        // Cercles SVG progress
        document.querySelectorAll('.progress[data-percent]').forEach(function(circle){
            var percent = parseInt(circle.getAttribute('data-percent'));
            var dasharray = (percent / 100) * circumference;
            circle.style.strokeDasharray = dasharray + ' ' + circumference;
        });
    }
}

window.addEventListener('scroll', animateStats);
animateStats();

// ===== BACK TO TOP =====
var backBtn = document.getElementById('backToTop');
if (backBtn) {
    window.addEventListener('scroll', function(){
        if(window.scrollY > 400){
            backBtn.classList.add('visible');
        } else {
            backBtn.classList.remove('visible');
        }
    });
    backBtn.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== SMOOTH SCROLL NAVBAR =====
document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
        var target = document.querySelector(this.getAttribute('href'));
        if(target){
            e.preventDefault();
            var offset = 70;
            var top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: top, behavior: 'smooth' });
            // Ferme le menu mobile si ouvert
            var navCollapse = document.getElementById('navbarNav');
            if(navCollapse && navCollapse.classList.contains('show')){
                navCollapse.classList.remove('show');
            }
        }
    });
});

// ===== ACTIVE NAV LINK AU SCROLL =====
var sections = document.querySelectorAll('section[id], div[id="contact"], div[id="accueil"]');
var navLinks = document.querySelectorAll('.main-navbar .nav-link');
window.addEventListener('scroll', function(){
    var scrollPos = window.scrollY + 100;
    sections.forEach(function(sec){
        if(sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos){
            navLinks.forEach(function(l){ l.parentElement.classList.remove('active'); });
            var active = document.querySelector('.main-navbar a[href="#'+sec.id+'"]');
            if(active) active.parentElement.classList.add('active');
        }
    });
});

// ===== CHANGEMENT IMAGE PRODUIT (VERSION AMÉLIORÉE) =====
function changeMain(mainId, thumbElement) {
    var mainImg = document.getElementById(mainId);
    if (mainImg) {
        // Récupérer l'URL de l'image depuis l'élément thumb
        var thumbImg = thumbElement.querySelector('img');
        var newSrc = thumbImg.src;
        
        // Animation de fondu
        mainImg.style.opacity = '0';
        mainImg.style.transform = 'scale(0.9) rotate(-2deg)';
        
        setTimeout(() => {
            mainImg.src = newSrc;
            mainImg.style.opacity = '1';
            mainImg.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
        
        // Gestion des classes actives pour les miniatures
        var thumbsContainer = thumbElement.closest('.product-thumbs');
        if (thumbsContainer) {
            var allThumbs = thumbsContainer.querySelectorAll('.thumb-item');
            allThumbs.forEach(function(thumb) {
                thumb.classList.remove('active');
                thumb.style.transform = 'scale(1)';
            });
            
            thumbElement.classList.add('active');
            thumbElement.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
                thumbElement.style.transform = 'scale(1)';
            }, 200);
        }
    }
}

// Rendre la fonction accessible globalement
window.changeMain = changeMain;

// ===== PRÉCHARGEMENT DES IMAGES POUR UN CHANGEMENT PLUS FLUIDE =====
document.addEventListener('DOMContentLoaded', function() {
    // Précharger toutes les images des miniatures
    document.querySelectorAll('.thumb-item img').forEach(img => {
        const preloadImg = new Image();
        preloadImg.src = img.src;
    });
});

// ===== EFFET DE SURVOL POUR LES MINIATURES =====
document.querySelectorAll('.thumb-item').forEach(thumb => {
    thumb.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
            this.style.transform = 'translateY(-8px) scale(1.15)';
            this.style.zIndex = '30';
        }
    });
    
    thumb.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '10';
        }
    });
});

// ===== BOUTONS DEMANDER UN DEVIS =====
document.querySelectorAll('.service-link, .btn-primary-custom, .btn-outline-custom').forEach(link => {
    link.addEventListener('click', function(e) {
        // Ne pas ouvrir le modal pour les liens externes (ALL-WORKER)
        if (this.classList.contains('btn-outline-custom') && this.getAttribute('href') === 'https://all-worker.com') {
            return;
        }
        // Ne pas ouvrir le modal pour les liens d'ancrage
        if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
            return;
        }
        e.preventDefault();
        document.getElementById('rdvModalOverlay').classList.add('open');
    });
});

// ===== MODAL RDV + FORMSPREE AJAX =====
var rdvForm = document.getElementById('rdvForm');
if(rdvForm){
    rdvForm.addEventListener('submit', function(e){
        e.preventDefault();
        var btn = rdvForm.querySelector('.rdv-submit-btn');
        var originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        btn.disabled = true;

        var data = new FormData(rdvForm);
        fetch(rdvForm.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(function(res){
            if(res.ok){
                rdvForm.style.display = 'none';
                document.getElementById('rdvSuccess').style.display = 'block';
                
                // Animation de succès
                setTimeout(() => {
                    rdvForm.reset();
                }, 100);
            } else {
                btn.innerHTML = originalText;
                btn.disabled = false;
                alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
            }
        }).catch(function(){
            btn.innerHTML = originalText;
            btn.disabled = false;
            alert('Erreur réseau. Veuillez vérifier votre connexion et réessayer.');
        });
    });
}

// Réinitialiser le modal RDV à la fermeture
var rdvModalOverlay = document.getElementById('rdvModalOverlay');
if (rdvModalOverlay) {
    rdvModalOverlay.addEventListener('transitionend', function(){
        if(!this.classList.contains('open')){
            document.getElementById('rdvSuccess').style.display = 'none';
            if(rdvForm){
                rdvForm.style.display = '';
                rdvForm.reset();
                var btn = rdvForm.querySelector('.rdv-submit-btn');
                if(btn){ btn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer ma demande'; btn.disabled = false; }
            }
        }
    });
}

// ===== MODAL AVIS + FORMSPREE AJAX =====
var avisForm = document.getElementById('avisForm');
if(avisForm){
    avisForm.addEventListener('submit', function(e){
        e.preventDefault();
        var btn = avisForm.querySelector('.avis-submit-btn');
        var originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        btn.disabled = true;

        var data = new FormData(avisForm);
        fetch(avisForm.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(function(res){
            if(res.ok){
                avisForm.style.display = 'none';
                document.getElementById('avisSuccess').style.display = 'block';
            } else {
                btn.innerHTML = originalText;
                btn.disabled = false;
                alert('Une erreur est survenue. Veuillez réessayer.');
            }
        }).catch(function(){
            btn.innerHTML = originalText;
            btn.disabled = false;
            alert('Erreur réseau. Vérifiez votre connexion et réessayez.');
        });
    });
}

// Réinitialiser le modal avis à la fermeture
var avisModalOverlay = document.getElementById('avisModalOverlay');
if (avisModalOverlay) {
    avisModalOverlay.addEventListener('transitionend', function(){
        if(!this.classList.contains('open')){
            document.getElementById('avisSuccess').style.display = 'none';
            if(avisForm){
                avisForm.style.display = '';
                avisForm.reset();
                // Réinitialiser les étoiles
                document.querySelectorAll('.star-rating input').forEach(function(i){ i.checked = false; });
                var btn = avisForm.querySelector('.avis-submit-btn');
                if(btn){ btn.innerHTML = '<i class="fas fa-star"></i> Envoyer mon avis'; btn.disabled = false; }
            }
        }
    });
}

// ===== ANIMATIONS AU SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .formation-card, .service-card, .trust-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== PRELOADER POUR LES IMAGES =====
window.addEventListener('load', function() {
    // Animation d'entrée pour les éléments
    document.body.style.opacity = '1';
    
    // Initialisation des tooltips Bootstrap si présents
    if (typeof $ !== 'undefined' && $.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }
});

// ===== GESTION DU CAROUSEL AUTO + MANUEL =====
if (typeof $ !== 'undefined') {
    $('.carousel').carousel({
        interval: 4000,
        pause: false
    });
}

// ===== GESTION DU LIEN ACTIF SUR LA PAGE ACTUALITÉS =====
if (window.location.pathname.includes('actualites.html')) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    const newsLink = document.querySelector('a[href="actualites.html"]');
    if (newsLink) {
        newsLink.parentElement.classList.add('active');
    }
}

// ===== RESPONSIVE MENU FERMETURE AUTOMATIQUE =====
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarToggler && navbarCollapse && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

// ===== GESTION DU SCROLL POUR LA NAVBAR =====
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (navbar) {
        if (window.scrollY > 150) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }
});

// ===== INITIALISATION DES OUTILS =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les tooltips
    if (typeof $ !== 'undefined' && $.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }
    
    // Initialiser les popovers
    if (typeof $ !== 'undefined' && $.fn.popover) {
        $('[data-toggle="popover"]').popover();
    }
    
    // Ajouter une classe pour les écrans tactiles
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
});