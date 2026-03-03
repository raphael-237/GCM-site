// ===== SYSTÈME DE TRADUCTION COMPLET =====
let currentLang = 'fr';

const translations = {
    fr: {
        'header-slogan': 'La numérisation au service de la Gestion',
        'whatsapp-title': 'Contactez-nous via WhatsApp',
        'nav-home': 'Accueil', 'nav-about': 'À propos', 'nav-services': 'Services',
        'nav-products': 'Nos Produits', 'nav-training': 'Formations',
        'nav-testimonials': 'Témoignages', 'nav-partners': 'Partenaires',
        'nav-contact': 'Contact', 'nav-news': 'Actualités',
        'hero-subtitle': 'Des experts à votre service',
        'hero-title': 'Votre succès, notre engagement',
        'hero-text': 'Des techniciens passionnés, au savoir-faire reconnu, prêts à concrétiser chaque projet.',
        'hero-button': 'Votre avis compte',
        'about-subtitle': 'QUI SOMMES-NOUS',
        'about-title': 'GEC Informatique Sarl, l\'innovation au service de la santé et du numérique au Cameroun',
        'about-lead': 'Fondée en 2016 à Yaoundé par NOUFACK Delmas, GEC Informatique Sarl est une entreprise innovante spécialisée dans les solutions technologiques pour le secteur médical et les services numériques au Cameroun.',
        'about-text1': 'Notre expertise principale repose sur le développement de logiciels de gestion pour les établissements de santé, notamment notre solution phare GCM (Gestion des Centres Médicaux) qui équipe aujourd\'hui plusieurs hôpitaux et cliniques à travers le pays.',
        'about-text2': 'Au-delà du développement logiciel, nous proposons des services de location de lits médicalisés, des installations de vidéosurveillance, ainsi que des formations certifiantes en TIC.',
        'value-gcm': 'Logiciel GCM - Solution complète de gestion pour centres médicaux',
        'value-allworker': 'Plateforme ALL-WORKER - Mise en relation talents-entreprises (www.all-worker.com)',
        'value-beds': 'Location de lits médicalisés - Hospitalisation et garde-malade avec maintenance incluse',
        'value-surveillance': 'Installation vidéosurveillance - Systèmes de sécurité pour particuliers et professionnels',
        'value-training': 'Formations TIC certifiantes - Développement web, réseaux, cybersécurité, bureautique',
        'value-dev': 'Développement sur mesure - Sites web, applications mobiles, logiciels d\'entreprise',
        'mission-text': 'Notre mission est de digitaliser le secteur de la santé au Cameroun et de rendre la technologie accessible à tous.',
        'mission-author': '— NOUFACK Delmas, Fondateur & Directeur de GEC Informatique Sarl',
        'since': 'Depuis 2016',
        'services-subtitle': 'NOTRE SAVOIR-FAIRE',
        'services-title': 'Des services sur mesure pour votre réussite',
        'services-description': 'De l\'infrastructure technique à l\'accompagnement humain, nous offrons une gamme complète de services.',
        'service-carebed-title': 'Location de lits de garde malade',
        'service-carebed-desc': 'Des lits confortables et fonctionnels pour les accompagnants et les gardes malades.',
        'feature-carebed1': 'Lits ergonomiques réglables', 'feature-carebed3': 'Matelas anti-escarres',
        'feature-carebed4': 'Livraison et installation', 'feature-carebed2': 'Moustiquaire intégré',
        'service-hospbed-title': 'Location de lits d\'hospitalisation',
        'service-hospbed-desc': 'Lits médicalisés de haute qualité pour établissements de santé et particuliers.',
        'feature-hospbed1': 'Lits électriques à hauteur variable', 'feature-hospbed2': 'Barrières de sécurité amovibles',
        'feature-hospbed3': 'Location courte ou longue durée', 'feature-hospbed4': 'Assistance technique 24/7',
        'service-surveillance-title': 'Installation vidéo surveillance',
        'service-surveillance-desc': 'Protégez vos biens et vos proches avec nos systèmes de vidéosurveillance dernière génération.',
        'feature-surv1': 'Caméras HD jour/nuit', 'feature-surv2': 'Accès à distance via mobile',
        'feature-surv3': 'Détection de mouvement', 'feature-surv4': 'Enregistrement cloud ou local',
        'service-dev-title': 'Développement logiciel sur mesure',
        'service-dev-desc': 'Des applications web, mobile et logiciels de gestion conçus pour répondre à vos besoins métiers.',
        'feature-dev1': 'Applications web & mobile', 'feature-dev2': 'Logiciels de gestion d\'entreprise',
        'feature-dev3': 'API et intégrations', 'feature-dev4': 'Maintenance évolutive',
        'service-training-title': 'Formation TIC professionnelle',
        'service-training-desc': 'Des programmes certifiants pour développer vos compétences numériques.',
        'feature-training1': 'Développement web & mobile', 'feature-training2': 'Réseaux & cybersécurité',
        'feature-training3': 'Bureautique & Office 365', 'feature-training4': 'Certificats reconnus',
        'service-maintenance-title': 'Maintenance & Support informatique',
        'service-maintenance-desc': 'Assistance technique réactive et contrats de maintenance sur mesure.',
        'feature-maintenance1': 'Support à distance et sur site', 'feature-maintenance2': 'Maintenance préventive',
        'feature-maintenance3': 'Dépannage urgent', 'feature-maintenance4': 'Contrats personnalisés',
        'service-web-title': 'Sites & Plateformes web',
        'service-web-desc': 'Création de sites vitrine, e-commerce et plateformes métier.',
        'feature-web1': 'Design sur mesure', 'feature-web2': 'E-commerce & paiement en ligne',
        'feature-web3': 'Référencement SEO', 'feature-web4': 'Administration simplifiée',
        'products-badge': 'INNOVATION & EXCELLENCE',
        'products-title': 'Nos produits sur le marché',
        'products-description': 'Explorez nos solutions techniques pensées pour vous.',
        'product-gcm-badge': 'Logiciel',
        'product-gcm-title': 'Logiciel de Gestion des Centres Médicaux (GCM)',
        'product-gcm-desc': 'Solution complète de gestion des centres médicaux avec modules intégrés.',
        'feature-patients': 'patients', 'feature-pharmacy': 'Pharmacie', 'feature-lab': 'Laboratoire',
        'feature-stock': 'Suivi de stock', 'feature-invoicing': 'Facturation', 'feature-dashboard': 'Tableau de bord',
        'feature-multiuser': 'Multi-utilisateurs', 'feature-appointments': 'Rendez-vous',
        'product-allworker-badge': 'Plateforme', 'product-allworker-title': 'ALL-WORKER',
        'product-allworker-desc': 'Une tâche, un métier - La plateforme innovante de mise en relation.',
        'feature-profiles': 'Profils détaillés', 'feature-search': 'Recherche ciblée',
        'feature-satisfaction': '100% satisfaction', 'feature-jobs': 'Offres d\'emploi',
        'feature-matching': 'Matching intelligent', 'feature-support': 'Support dédié',
        'feature-stats': 'Statistiques', 'feature-mobile': 'Application mobile',
        'cta-title': 'Prêt à transformer votre entreprise ?',
        'cta-text': 'Contactez nos experts pour une démonstration personnalisée de nos solutions',
        'stats-label': 'Notre bilan en chiffres',
        'stats-title': 'Des résultats qui parlent d\'eux-mêmes',
        'stats-text': 'Chaque chiffre reflète la confiance de nos clients et l\'engagement de nos équipes.',
        'stat-satisfaction': 'Satisfaction client', 'stat-satisfaction-desc': 'Nos clients nous font confiance',
        'stat-projects': 'Projets réalisés', 'stat-projects-desc': 'Des solutions déployées avec succès',
        'stat-clients': 'Clients accompagnés', 'stat-clients-desc': 'Entreprises et particuliers',
        'stat-experience': 'Années d\'expérience', 'stat-experience-desc': 'Une décennie d\'expertise',
        'stat-trained': 'Apprenants formés', 'stat-trained-desc': 'Professionnels et étudiants',
        'stat-partners': 'Partenaires actifs', 'stat-partners-desc': 'Un réseau solide',
        'trust-badge': 'Notre engagement', 'trust-title': 'Pourquoi nous faire confiance ?',
        'trust-text': 'GEC Informatique, c\'est bien plus qu\'un prestataire. C\'est un partenaire engagé à vos côtés.',
        'trust-expertise': 'Expertise reconnue', 'trust-expertise-desc': 'Plus de 10 ans d\'expérience dans le secteur du numérique au Cameroun.',
        'trust-support': 'Support de proximité', 'trust-support-desc': 'Un accompagnement humain et réactif avant, pendant et après chaque projet.',
        'trust-security': 'Solutions fiables', 'trust-security-desc': 'Vos données et celles de vos clients sont protégées à chaque instant.',
        'trust-custom': 'Solutions sur mesure', 'trust-custom-desc': 'Nous adaptons nos services à vos processus métiers spécifiques.',
        'trust-price': 'Tarification transparente', 'trust-price-desc': 'Des devis clairs et des offres adaptées à votre budget.',
        'trust-innovation': 'Innovation continue', 'trust-innovation-desc': 'Nous intégrons les dernières technologies pour des solutions évolutives.',
        'trust-cta-title': 'Prêt à démarrer votre projet avec nous ?', 'trust-cta-text': 'Contactez nos experts dès aujourd\'hui.',
        'formations-badge': 'Centre de formation', 'formations-title': 'Nos formations offertes',
        'formations-text': 'Des programmes pratiques et certifiants pour booster vos compétences numériques.',
        'training-web-title': 'Développement Web & Mobile', 'training-web-duration': '3 mois',
        'training-web-desc': 'Maîtrisez la création d\'applications web modernes et mobiles.',
        'training-network-title': 'Réseaux & Administration', 'training-network-duration': '2 mois',
        'training-network-desc': 'Apprenez à concevoir et sécuriser des infrastructures réseau.',
        'training-security-title': 'Cybersécurité', 'training-security-duration': '2 mois',
        'training-security-desc': 'Protégez les systèmes d\'information contre les cybermenaces.',
        'training-office-title': 'Bureautique & Office 365', 'training-office-duration': '1 mois',
        'training-office-desc': 'Maîtrisez les outils bureautiques essentiels.',
        'training-db-title': 'Base de données & SQL', 'training-db-duration': '6 semaines',
        'training-db-desc': 'Concevez et administrez des bases de données performantes.',
        'training-design-title': 'Design Graphique', 'training-design-duration': '6 semaines',
        'training-design-desc': 'Donnez vie à vos idées créatives avec les meilleurs outils.',
        'level-beginner-expert': 'Débutant → Expert', 'level-intermediate': 'Intermédiaire',
        'level-advanced': 'Avancé', 'level-beginner': 'Débutant', 'level-beginner-advanced': 'Débutant → Avancé',
        'formations-cta-title': 'Vous ne trouvez pas votre formation ?',
        'formations-cta-text': 'Contactez-nous pour un programme personnalisé.',
        'testimonials-badge': 'Ce qu\'ils disent de nous', 'testimonials-title': 'Témoignages de nos clients',
        'testimonials-text': 'La satisfaction de nos clients est notre plus belle récompense.',
        'testimonial1': 'GEC Informatique a transformé la gestion de notre Hopital. Le logiciel GCM est intuitif et le support est toujours disponible.',
        'testimonial1-name': 'Dr. BECOULE Patrick', 'testimonial1-role': 'Hopital de District — Obala',
        'testimonial2': 'Une équipe sérieuse. Ils ont déployé notre infrastructure réseau avec une qualité irréprochable.',
        'testimonial2-name': 'Dr. MINYEM Emmanuel', 'testimonial2-role': 'Hopital de District — Biyem-Assi',
        'testimonial3': 'La formation en développement web a été un tremplin pour ma carrière. Aujourd\'hui je vis de ma passion grâce à eux.',
        'testimonial3-name': 'Jean-Claude Nkodo', 'testimonial3-role': 'Développeur Freelance',
        'testimonial4': 'La refonte de notre site web dépasse nos attentes : design moderne et parfaitement adapté à notre image.',
        'testimonial4-name': 'Arlette Biyong', 'testimonial4-role': 'Responsable Marketing',
        'testimonial5': 'Service client exceptionnel ! Leur réactivité nous a sauvés plus d\'une fois.',
        'testimonial5-name': 'Dr. DAOUDA', 'testimonial5-role': 'Clinique Saint Luc',
        'testimonial6': 'Grâce à ALL-WORKER, j\'ai trouvé des profils qualifiés en quelques jours. Une solution innovante.',
        'testimonial6-name': 'Hélène Fotso', 'testimonial6-role': 'Cabinet RH Pro Solutions',
        'score-average': 'Note moyenne', 'score-reviews': 'Avis collectés',
        'score-satisfaction': 'Satisfaction', 'score-loyalty': 'Clients fidèles',
        'partners-title': 'Ils nous font confiance',
        'btn-quote': 'Demander un devis', 'btn-demo': 'Demander une démo',
        'btn-discover': 'Découvrir la plateforme', 'btn-contact': 'Nous contacter',
        'btn-contact-wa': 'Nous contacter', 'btn-view-training': 'Voir les formations',
        'btn-register': 'S\'inscrire', 'btn-request-program': 'Demander un programme',
        'btn-appointment': 'Prendre RDV', 'btn-submit-review': 'Envoyer mon avis',
        'btn-submit': 'Envoyer', 'btn-close': 'Fermer',
        'modal-review-title': 'Votre avis compte !', 'modal-review-subtitle': 'Partagez votre expérience',
        'modal-appointment-title': 'Prendre Rendez-vous', 'modal-appointment-subtitle': 'Réponse sous 24h',
        'form-name': 'Nom', 'form-position': 'Poste', 'form-email': 'Email', 'form-phone': 'Téléphone',
        'form-service': 'Service', 'form-rating': 'Note', 'form-review': 'Avis', 'form-date': 'Date',
        'form-time': 'Heure', 'form-message': 'Message', 'form-select': '-- Sélectionnez --', 'form-select-time': '--',
        'service-software': 'Développement logiciel', 'service-network': 'Réseaux & Infrastructure',
        'service-maintenance': 'Maintenance & Support', 'service-web': 'Site web',
        'service-training': 'Formation TIC', 'service-gcm': 'Logiciel GCM',
        'service-allworker': 'Plateforme ALL-WORKER', 'service-beds': 'Location de lits',
        'service-surveillance': 'Vidéo surveillance', 'service-other': 'Autre',
        'service-carebed': 'Location lits garde malade', 'service-hospbed': 'Location lits hospitalisation',
        'success-title': 'Merci !', 'success-review': 'Votre avis a bien été transmis.',
        'success-appointment-title': 'Demande envoyée !', 'success-appointment-text': 'Nous vous contacterons sous 24h.',
        'quick-links': 'Liens rapides', 'about': 'À propos', 'contact': 'Contact', 'follow-us': 'Suivez-nous',
        'footer-about': 'GEC Informatique est une entreprise spécialisée dans les services technologiques et la formation.',
        'contact-address': 'Chapelle Ngousso, Yaoundé', 'rights': 'Tous droits réservés.',
        'news-page-title': 'Nos actualités Facebook',
        'news-page-description': 'Retrouvez toutes nos dernières publications, événements et actualités directement depuis notre page Facebook',
        'back-to-home': 'Retour à l\'accueil'
    },
    en: {
        'header-slogan': 'Digitization at the service of Management',
        'whatsapp-title': 'Contact us via WhatsApp',
        'nav-home': 'Home', 'nav-about': 'About', 'nav-services': 'Services',
        'nav-products': 'Our Products', 'nav-training': 'Training',
        'nav-testimonials': 'Testimonials', 'nav-partners': 'Partners',
        'nav-contact': 'Contact', 'nav-news': 'News',
        'hero-subtitle': 'Experts at your service',
        'hero-title': 'Your success, our commitment',
        'hero-text': 'Passionate technicians, with recognized expertise, ready to make every project happen.',
        'hero-button': 'Your opinion matters',
        'about-subtitle': 'WHO WE ARE',
        'about-title': 'GEC Informatique Sarl, innovation serving healthcare and digital in Cameroon',
        'about-lead': 'Founded in 2016 in Yaoundé by NOUFACK Delmas, GEC Informatique Sarl is an innovative company specialized in technological solutions for the medical sector.',
        'about-text1': 'Our main expertise lies in developing management software for healthcare facilities, including our flagship solution GCM which now equips several hospitals and clinics across the country.',
        'about-text2': 'Beyond software development, we offer medical bed rental services, video surveillance installations, as well as certified ICT training.',
        'value-gcm': 'GCM Software - Complete management solution for medical centers',
        'value-allworker': 'ALL-WORKER Platform - Talent-company connection (www.all-worker.com)',
        'value-beds': 'Medical bed rental - Hospitalization and patient care with included maintenance',
        'value-surveillance': 'Video surveillance installation - Security systems for individuals and professionals',
        'value-training': 'Certified ICT training - Web development, networks, cybersecurity, office automation',
        'value-dev': 'Custom development - Websites, mobile applications, business software',
        'mission-text': 'Our mission is to digitize the healthcare sector in Cameroon and make technology accessible to all.',
        'mission-author': '— NOUFACK Delmas, Founder & Director of GEC Informatique Sarl',
        'since': 'Since 2016',
        'services-subtitle': 'OUR EXPERTISE',
        'services-title': 'Tailor-made services for your success',
        'services-description': 'From technical infrastructure to human support, we offer a complete range of services.',
        'service-carebed-title': 'Patient care bed rental',
        'service-carebed-desc': 'Comfortable and functional beds for caregivers and patient attendants in healthcare services.',
        'feature-carebed1': 'Adjustable ergonomic beds', 'feature-carebed2': 'Anti-bedsore mattresses',
        'feature-carebed3': 'Delivery and installation', 'feature-carebed4': 'Maintenance included',
        'service-hospbed-title': 'Hospital bed rental',
        'service-hospbed-desc': 'High-quality medical beds for healthcare facilities and individuals.',
        'feature-hospbed1': 'Electric beds with variable height', 'feature-hospbed2': 'Removable safety rails',
        'feature-hospbed3': 'Short or long term rental', 'feature-hospbed4': '24/7 technical assistance',
        'service-surveillance-title': 'Video surveillance installation',
        'service-surveillance-desc': 'Protect your property and loved ones with our latest generation video surveillance systems.',
        'feature-surv1': 'Day/night HD cameras', 'feature-surv2': 'Remote access via mobile',
        'feature-surv3': 'Motion detection', 'feature-surv4': 'Cloud or local recording',
        'service-dev-title': 'Custom software development',
        'service-dev-desc': 'Web, mobile applications and management software designed to meet your business needs.',
        'feature-dev1': 'Web & mobile applications', 'feature-dev2': 'Business management software',
        'feature-dev3': 'API and integrations', 'feature-dev4': 'Evolutionary maintenance',
        'service-training-title': 'Professional ICT training',
        'service-training-desc': 'Certified programs to develop your digital skills.',
        'feature-training1': 'Web & mobile development', 'feature-training2': 'Networks & cybersecurity',
        'feature-training3': 'Office automation & Office 365', 'feature-training4': 'Recognized certificates',
        'service-maintenance-title': 'IT Maintenance & Support',
        'service-maintenance-desc': 'Responsive technical assistance and customized maintenance contracts.',
        'feature-maintenance1': 'Remote and on-site support', 'feature-maintenance2': 'Preventive maintenance',
        'feature-maintenance3': 'Emergency troubleshooting', 'feature-maintenance4': 'Customized contracts',
        'service-web-title': 'Websites & Platforms',
        'service-web-desc': 'Creation of showcase sites, e-commerce and business platforms.',
        'feature-web1': 'Custom design', 'feature-web2': 'E-commerce & online payment',
        'feature-web3': 'SEO optimization', 'feature-web4': 'Simplified administration',
        'products-badge': 'INNOVATION & EXCELLENCE',
        'products-title': 'Our products on the market',
        'products-description': 'Explore our technical solutions designed for you.',
        'product-gcm-badge': 'Software',
        'product-gcm-title': 'Medical Center Management Software (GCM)',
        'product-gcm-desc': 'Complete medical center management solution with integrated modules.',
        'feature-patients': 'patients', 'feature-pharmacy': 'Pharmacy', 'feature-lab': 'Laboratory',
        'feature-stock': 'Stock management', 'feature-invoicing': 'Invoicing', 'feature-dashboard': 'Dashboard',
        'feature-multiuser': 'Multi-user', 'feature-appointments': 'Appointments',
        'product-allworker-badge': 'Platform', 'product-allworker-title': 'ALL-WORKER',
        'product-allworker-desc': 'One task, one profession - The innovative platform connecting talents.',
        'feature-profiles': 'Detailed profiles', 'feature-search': 'Targeted search',
        'feature-satisfaction': '100% satisfaction', 'feature-jobs': 'Job offers',
        'feature-matching': 'Intelligent matching', 'feature-support': 'Dedicated support',
        'feature-stats': 'Statistics', 'feature-mobile': 'Mobile application',
        'cta-title': 'Ready to transform your business?',
        'cta-text': 'Contact our experts for a personalized demonstration of our solutions',
        'stats-label': 'Our track record in figures',
        'stats-title': 'Results that speak for themselves',
        'stats-text': 'Each figure reflects the trust of our clients and the commitment of our teams.',
        'stat-satisfaction': 'Client satisfaction', 'stat-satisfaction-desc': 'Our clients trust us',
        'stat-projects': 'Projects completed', 'stat-projects-desc': 'Successfully deployed solutions',
        'stat-clients': 'Clients accompanied', 'stat-clients-desc': 'Businesses and individuals',
        'stat-experience': 'Years of experience', 'stat-experience-desc': 'A decade of expertise',
        'stat-trained': 'Learners trained', 'stat-trained-desc': 'Professionals and students',
        'stat-partners': 'Active partners', 'stat-partners-desc': 'A solid network',
        'trust-badge': 'Our commitment', 'trust-title': 'Why trust us?',
        'trust-text': 'GEC Informatique is much more than a service provider. It\'s a committed partner by your side.',
        'trust-expertise': 'Recognized expertise', 'trust-expertise-desc': 'More than 10 years of experience in the digital sector in Cameroon.',
        'trust-support': 'Close support', 'trust-support-desc': 'Human and responsive support before, during and after each project.',
        'trust-security': 'Reliable solutions', 'trust-security-desc': 'Your data and that of your clients are protected at all times.',
        'trust-custom': 'Tailor-made solutions', 'trust-custom-desc': 'We adapt our services to your specific business processes.',
        'trust-price': 'Transparent pricing', 'trust-price-desc': 'Clear quotes and offers adapted to your budget.',
        'trust-innovation': 'Continuous innovation', 'trust-innovation-desc': 'We integrate the latest technologies for scalable solutions.',
        'trust-cta-title': 'Ready to start your project with us?', 'trust-cta-text': 'Contact our experts today.',
        'formations-badge': 'Training Center', 'formations-title': 'Our training programs',
        'formations-text': 'Practical and certified programs to boost your digital skills.',
        'training-web-title': 'Web & Mobile Development', 'training-web-duration': '3 months',
        'training-web-desc': 'Master the creation of modern web and mobile applications.',
        'training-network-title': 'Networks & Administration', 'training-network-duration': '2 months',
        'training-network-desc': 'Learn to design and secure network infrastructures.',
        'training-security-title': 'Cybersecurity', 'training-security-duration': '2 months',
        'training-security-desc': 'Protect information systems against cyber threats.',
        'training-office-title': 'Office Automation & Office 365', 'training-office-duration': '1 month',
        'training-office-desc': 'Master essential office tools.',
        'training-db-title': 'Database & SQL', 'training-db-duration': '6 weeks',
        'training-db-desc': 'Design and administer high-performance databases.',
        'training-design-title': 'Graphic Design', 'training-design-duration': '6 weeks',
        'training-design-desc': 'Bring your creative ideas to life with the best tools.',
        'level-beginner-expert': 'Beginner → Expert', 'level-intermediate': 'Intermediate',
        'level-advanced': 'Advanced', 'level-beginner': 'Beginner', 'level-beginner-advanced': 'Beginner → Advanced',
        'formations-cta-title': 'Can\'t find your training?',
        'formations-cta-text': 'Contact us for a personalized program.',
        'testimonials-badge': 'WHAT THEY SAY ABOUT US', 'testimonials-title': 'Client testimonials',
        'testimonials-text': 'Our clients\' satisfaction is our greatest reward.',
        'testimonial1': 'GEC Informatique transformed the management of our Hospital. The GCM software is intuitive and support is always available.',
        'testimonial1-name': 'Dr. BECOULE Patrick', 'testimonial1-role': 'District Hospital — Obala',
        'testimonial2': 'A professional team. They deployed our network infrastructure with impeccable quality.',
        'testimonial2-name': 'Dr. MINYEM Emmanuel', 'testimonial2-role': 'District Hospital — Biyem-Assi',
        'testimonial3': 'The web development training was a springboard for my career. Today I live my passion thanks to them.',
        'testimonial3-name': 'Jean-Claude Nkodo', 'testimonial3-role': 'Freelance Developer',
        'testimonial4': 'The redesign of our website exceeds our expectations: modern design perfectly adapted to our image.',
        'testimonial4-name': 'Arlette Biyong', 'testimonial4-role': 'Marketing Manager',
        'testimonial5': 'Exceptional customer service! Their responsiveness has saved us more than once.',
        'testimonial5-name': 'Dr. DAOUDA', 'testimonial5-role': 'Saint Luc Clinic',
        'testimonial6': 'Thanks to ALL-WORKER, I found qualified profiles in just a few days. An innovative solution.',
        'testimonial6-name': 'Hélène Fotso', 'testimonial6-role': 'HR Pro Solutions Firm',
        'score-average': 'Average rating', 'score-reviews': 'Reviews collected',
        'score-satisfaction': 'Satisfaction', 'score-loyalty': 'Loyal clients',
        'partners-title': 'They trust us',
        'btn-quote': 'Request a quote', 'btn-demo': 'Request a demo',
        'btn-discover': 'Discover the platform', 'btn-contact': 'Contact us',
        'btn-contact-wa': 'Contact us', 'btn-view-training': 'View trainings',
        'btn-register': 'Register', 'btn-request-program': 'Request a program',
        'btn-appointment': 'Book appointment', 'btn-submit-review': 'Submit my review',
        'btn-submit': 'Submit', 'btn-close': 'Close',
        'modal-review-title': 'Your opinion matters!', 'modal-review-subtitle': 'Share your experience',
        'modal-appointment-title': 'Book an appointment', 'modal-appointment-subtitle': 'Response within 24h',
        'form-name': 'Name', 'form-position': 'Position', 'form-email': 'Email', 'form-phone': 'Phone',
        'form-service': 'Service', 'form-rating': 'Rating', 'form-review': 'Review', 'form-date': 'Date',
        'form-time': 'Time', 'form-message': 'Message', 'form-select': '-- Select --', 'form-select-time': '--',
        'service-software': 'Software development', 'service-network': 'Networks & Infrastructure',
        'service-maintenance': 'Maintenance & Support', 'service-web': 'Website',
        'service-training': 'ICT Training', 'service-gcm': 'GCM Software',
        'service-allworker': 'ALL-WORKER Platform', 'service-beds': 'Bed rental',
        'service-surveillance': 'Video surveillance', 'service-other': 'Other',
        'service-carebed': 'Patient care bed rental', 'service-hospbed': 'Hospital bed rental',
        'success-title': 'Thank you!', 'success-review': 'Your review has been successfully sent.',
        'success-appointment-title': 'Request sent!', 'success-appointment-text': 'We will contact you within 24h.',
        'quick-links': 'Quick links', 'about': 'About', 'contact': 'Contact', 'follow-us': 'Follow us',
        'footer-about': 'GEC Informatique is a company specialized in technological services and training.',
        'contact-address': 'Chapelle Ngousso, Yaoundé', 'rights': 'All rights reserved.',
        'news-page-title': 'Our Facebook News',
        'news-page-description': 'Find all our latest posts, events and news directly from our Facebook page',
        'back-to-home': 'Back to home'
    }
};

// ===== FONCTION DE TRADUCTION SÉCURISÉE =====
function applyTranslation(element, lang) {
    const key = element.getAttribute('data-i18n');
    if (!key || !translations[lang] || !translations[lang][key]) return;
    const value = translations[lang][key];

    // Éléments de formulaire : traduire le placeholder
    if ((element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && element.placeholder) {
        element.placeholder = value;
        return;
    }
    // Options de select
    if (element.tagName === 'OPTION') {
        element.textContent = value;
        return;
    }
    // PROTECTION ICÔNES : si l'élément contient une icône, on ne touche pas au innerHTML
    // Sauf s'il y a un span enfant dédié [data-i18n-text] pour recevoir le texte
    if (element.querySelector('i, svg, img')) {
        const textSpan = element.querySelector('[data-i18n-text]');
        if (textSpan) textSpan.textContent = value;
        return; // Ne rien faire sinon → icônes préservées
    }
    // Texte pur : mise à jour sécurisée
    element.textContent = value;
}

// ===== FONCTION POUR METTRE À JOUR LE DRAPEAU =====
function updateLanguageFlag(lang) {
    const flagImg = document.getElementById('lang-flag-img');
    if (!flagImg) return;
    
    if (lang === 'fr') {
        // Si on est en français, on affiche le drapeau anglais (pour switcher vers l'anglais)
        flagImg.src = 'https://flagcdn.com/w40/gb.png';
        flagImg.alt = 'Switch to English';
        flagImg.title = 'Switch to English';
    } else {
        // Si on est en anglais, on affiche le drapeau français (pour switcher vers le français)
        flagImg.src = 'https://flagcdn.com/w40/fr.png';
        flagImg.alt = 'Passer en français';
        flagImg.title = 'Passer en français';
    }
}

// ===== FONCTION POUR BASCULER LA LANGUE =====
function toggleLanguage() {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    changeLanguage(newLang);
}

// ===== CHANGEMENT DE LANGUE =====
function changeLanguage(lang) {
    try {
        if (!translations[lang]) return;
        currentLang = lang;

        document.querySelectorAll('[data-i18n]').forEach(function(element) {
            applyTranslation(element, lang);
        });

        try { localStorage.setItem('preferred-language', lang); } catch(e) {}
        document.documentElement.lang = lang;
        
        // Mettre à jour le drapeau
        updateLanguageFlag(lang);

    } catch (error) {
        console.error('Erreur de traduction:', error);
    }
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    try {
        let savedLang = 'fr';
        try { savedLang = localStorage.getItem('preferred-language') || 'fr'; } catch(e) {}
        changeLanguage(savedLang);
        
        // Rendre les fonctions globalement accessibles
        window.toggleLanguage = toggleLanguage;
        window.changeLanguage = changeLanguage;
    } catch (error) {
        console.error('Erreur d\'initialisation:', error);
    }
});