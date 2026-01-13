/**
 * Language Switcher for Facware Website
 * Handles bilingual content (Spanish/English)
 */

(function($) {
    'use strict';

    // Translations object
    const translations = {
        es: {
            nav: {
                home: "Inicio",
                about: "Nosotros",
                services: "Servicios",
                features: "Características",
                contact: "Contacto"
            },
            about: {
                title: "Sobre Nosotros",
                subtitle: "Transformando ideas en soluciones digitales desde Chihuahua, México",
                story: {
                    title: "Construyendo el Futuro Digital"
                },
                mission: {
                    title: "Nuestra Misión"
                },
                vision: {
                    title: "Nuestra Visión"
                },
                values: {
                    title: "Nuestros Valores"
                }
            },
            hero: {
                title: "Diseño y Desarrollo de Software",
                subtitle: "Especialistas en diseño y desarrollo de soluciones de software innovadoras",
                cta: "Obtén una cotización GRATIS sin compromiso"
            },
            services: {
                title: "Servicios IT Confiables para Negocios"
            },
            features: {
                title: "Características de Soporte IT Empresarial"
            },
            contact: {
                title: "Contáctanos",
                subtitle: "¿Tienes un proyecto en mente?",
                cta: "Obtén una consulta gratuita",
                email: "Envíanos un correo",
                location: "Chihuahua, Chihuahua, México"
            },
            certifications: {
                title: "Certificaciones y Partners",
                subtitle: "Trabajamos con las mejores tecnologías y plataformas del mercado",
                techStack: "Tecnologías que dominamos:"
            }
        },
        en: {
            nav: {
                home: "Home",
                about: "About",
                services: "Services",
                features: "Features",
                contact: "Contact"
            },
            about: {
                title: "About Us",
                subtitle: "Transforming ideas into digital solutions from Chihuahua, Mexico",
                story: {
                    title: "Building the Digital Future"
                },
                mission: {
                    title: "Our Mission"
                },
                vision: {
                    title: "Our Vision"
                },
                values: {
                    title: "Our Values"
                }
            },
            hero: {
                title: "Software Design & Development",
                subtitle: "Specialists in designing and developing innovative software solutions",
                cta: "Get a FREE no-obligation quote"
            },
            services: {
                title: "Reliable IT Services for Businesses"
            },
            features: {
                title: "Business IT Support Features"
            },
            contact: {
                title: "Contact Us",
                subtitle: "Have a project in mind?",
                cta: "Get a free consultation",
                email: "Email us",
                location: "Chihuahua, Chihuahua, Mexico"
            },
            certifications: {
                title: "Certifications & Partners",
                subtitle: "We work with the best technologies and platforms in the market",
                techStack: "Technologies we master:"
            }
        }
    };

    // Initialize language system
    function initLanguage() {
        // Get saved language or default to Spanish
        let currentLang = localStorage.getItem('facware_language') || 'es';
        
        // Set initial language
        setLanguage(currentLang, false);
        
        // Update active button
        updateActiveButton(currentLang);
    }

    // Set language
    function setLanguage(lang, savePreference = true) {
        console.log('setLanguage called with:', lang);
        
        // Save preference
        if (savePreference) {
            localStorage.setItem('facware_language', lang);
            console.log('Language saved to localStorage:', lang);
        }

        // Update HTML lang attribute
        $('html').attr('lang', lang);

        // Show/hide content based on language - FORCE DISPLAY CHANGES
        if (lang === 'es') {
            console.log('Switching to Spanish...');
            const esElements = $('.lang-es');
            const enElements = $('.lang-en');
            console.log('ES elements found:', esElements.length);
            console.log('EN elements found:', enElements.length);
            
            // FORCE SHOW ES ELEMENTS
            esElements.each(function() {
                $(this).removeAttr('style'); // Remove all inline styles
                $(this).show();
                this.style.setProperty('display', 'block', 'important');
            }).prop('disabled', false).attr('required', function() {
                return $(this).data('required') === true;
            });
            
            // FORCE HIDE EN ELEMENTS
            enElements.each(function() {
                $(this).removeAttr('style'); // Remove all inline styles
                $(this).hide();
                this.style.setProperty('display', 'none', 'important');
            }).prop('disabled', true).removeAttr('required');
            
            console.log('ES elements visible:', $('.lang-es:visible').length);
            console.log('EN elements visible:', $('.lang-en:visible').length);
        } else {
            console.log('Switching to English...');
            const esElements = $('.lang-es');
            const enElements = $('.lang-en');
            console.log('ES elements found:', esElements.length);
            console.log('EN elements found:', enElements.length);
            
            // FORCE HIDE ES ELEMENTS
            esElements.each(function() {
                $(this).removeAttr('style'); // Remove all inline styles
                $(this).hide();
                this.style.setProperty('display', 'none', 'important');
            }).prop('disabled', true).removeAttr('required');
            
            // FORCE SHOW EN ELEMENTS
            enElements.each(function() {
                $(this).removeAttr('style'); // Remove all inline styles
                $(this).show();
                this.style.setProperty('display', 'block', 'important');
            }).prop('disabled', false).attr('required', function() {
                return $(this).data('required') === true;
            });
            
            console.log('ES elements visible:', $('.lang-es:visible').length);
            console.log('EN elements visible:', $('.lang-en:visible').length);
        }

        // Update i18n elements
        $('[data-i18n]').each(function() {
            const key = $(this).data('i18n');
            const translation = getTranslation(translations[lang], key);
            if (translation) {
                $(this).text(translation);
            }
        });

        // Update active button
        updateActiveButton(lang);
        console.log('Language change complete. Active button:', lang);
        
        // Trigger custom event for other scripts
        $(document).trigger('languageChanged', [lang]);
    }

    // Get translation by key path (e.g., "about.title")
    function getTranslation(obj, path) {
        const keys = path.split('.');
        let current = obj;
        for (let key of keys) {
            if (current && current.hasOwnProperty(key)) {
                current = current[key];
            } else {
                return null;
            }
        }
        return current;
    }

    // Update active button styling
    function updateActiveButton(lang) {
        $('.lang-btn').removeClass('active');
        $(`.lang-btn[data-lang="${lang}"]`).addClass('active');
    }

    // Initialize when DOM is ready
    function init() {
        console.log('Language switcher: Initializing...');
        console.log('Current language on init:', localStorage.getItem('facware_language') || 'es');
        
        // Mark required fields for language switching
        $('input[required], textarea[required], select[required]').each(function() {
            $(this).data('required', true);
        });
        
        // Initialize language
        initLanguage();

        // Get buttons
        const buttons = document.querySelectorAll('.lang-btn');
        console.log('Found buttons:', buttons.length);
        
        buttons.forEach(function(btn, index) {
            const lang = btn.getAttribute('data-lang');
            console.log('Button ' + index + ' - lang:', lang, '- text:', btn.textContent.trim());
            
            // FORCE REMOVE ALL EXISTING HANDLERS
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            // Add MULTIPLE handlers for maximum compatibility
            newBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                const clickedLang = this.getAttribute('data-lang');
                console.log('===== CLICK EVENT FIRED! =====');
                console.log('Language:', clickedLang);
                setLanguage(clickedLang);
                return false;
            }, true);
            
            newBtn.addEventListener('mousedown', function(e) {
                e.preventDefault();
                const clickedLang = this.getAttribute('data-lang');
                console.log('===== MOUSEDOWN EVENT FIRED! =====');
                console.log('Language:', clickedLang);
                setLanguage(clickedLang);
                return false;
            }, true);
            
            newBtn.ontouchstart = function(e) {
                e.preventDefault();
                const clickedLang = this.getAttribute('data-lang');
                console.log('===== TOUCHSTART EVENT FIRED! =====');
                console.log('Language:', clickedLang);
                setLanguage(clickedLang);
                return false;
            };
            
            console.log('All handlers attached to:', lang);
        });
        
        console.log('Language switcher: Initialized');
        
        // DIAGNOSTIC: Test if buttons are clickable
        setTimeout(function() {
            const testButtons = document.querySelectorAll('.lang-btn');
            testButtons.forEach(function(btn) {
                const rect = btn.getBoundingClientRect();
                const lang = btn.getAttribute('data-lang');
                console.log('Button ' + lang + ' position:', {
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height,
                    visible: rect.width > 0 && rect.height > 0
                });
            });
        }, 500);
    }

    // Document ready
    $(document).ready(function() {
        // Wait a bit for other scripts to load
        setTimeout(function() {
            init();
            
            // WORKAROUND: Add click handler to parent div to catch blocked clicks
            $('.language-switcher').off('click').on('click', function(e) {
                const target = e.target;
                const clickX = e.clientX;
                const clickY = e.clientY;
                
                // Find which button was intended
                const buttons = document.querySelectorAll('.lang-btn');
                buttons.forEach(function(btn) {
                    const rect = btn.getBoundingClientRect();
                    if (clickX >= rect.left && clickX <= rect.right &&
                        clickY >= rect.top && clickY <= rect.bottom) {
                        const lang = btn.getAttribute('data-lang');
                        console.log('===== WORKAROUND CLICK! =====');
                        console.log('Detected click on:', lang);
                        setLanguage(lang);
                    }
                });
            });
            
            console.log('Workaround click handler installed');
        }, 100);
    });
    
    // Also try with window.load as backup
    $(window).on('load', function() {
        setTimeout(function() {
            const buttons = $('.lang-btn');
            if (buttons.length > 0) {
                const hasEvents = $._data(buttons[0], 'events');
                if (!hasEvents || !hasEvents.click) {
                    console.log('Language switcher: Re-initializing after window load');
                    init();
                }
            }
        }, 200);
    });

    // Expose to global scope
    window.FacwareLanguage = {
        setLanguage: setLanguage,
        getCurrentLanguage: function() {
            return localStorage.getItem('facware_language') || 'es';
        },
        init: init
    };

})(jQuery);
