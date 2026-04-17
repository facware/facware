/**
 * Contact Form Handler for Facware
 * Handles form submission with Web3Forms API
 */

(function($) {
    'use strict';

    $(document).ready(function() {
        const form = $('#contact-form');
        const submitBtn = $('#submit-btn');
        const formMessage = $('#form-message');
        
        // Function to get current language
        function getCurrentLanguage() {
            return localStorage.getItem('facware_language') || 'es';
        }

        // Form submission handler
        form.on('submit', function(e) {
            e.preventDefault();

            // Get current language
            const currentLang = getCurrentLanguage();

            // Get only visible (active language) form data
            const formData = new FormData();
            
            // Add access key and hidden fields
            formData.append('access_key', $('input[name="access_key"]').val());
            formData.append('redirect', $('input[name="redirect"]').val());
            formData.append('subject', $('input[name="subject"]').val());
            formData.append('from_name', $('input[name="from_name"]').val());
            
            // Add visible form fields
            form.find('input:visible:not([type="hidden"]), textarea:visible, select:visible').each(function() {
                const field = $(this);
                const name = field.attr('name');
                const value = field.val();
                
                if (name && value && name !== 'botcheck') {
                    formData.append(name, value);
                }
            });

            // Disable submit button
            submitBtn.prop('disabled', true);
            submitBtn.html(currentLang === 'es' ? 
                '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...' : 
                '<i class="fas fa-spinner fa-spin me-2"></i>Sending...'
            );

            // Clear previous messages
            formMessage.removeClass('success error').html('');

            // Submit to Web3Forms
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Success message
                    formMessage.addClass('success').html(
                        currentLang === 'es' ? 
                        '<i class="fas fa-check-circle me-2"></i>¡Mensaje enviado con éxito! Te contactaremos pronto.' :
                        '<i class="fas fa-check-circle me-2"></i>Message sent successfully! We\'ll contact you soon.'
                    );

                    // Reset form
                    form[0].reset();

                    // Show success for 5 seconds
                    setTimeout(() => {
                        formMessage.fadeOut();
                    }, 5000);
                } else {
                    // Error message
                    formMessage.addClass('error').html(
                        currentLang === 'es' ? 
                        '<i class="fas fa-exclamation-circle me-2"></i>Hubo un error. Por favor intenta de nuevo o contáctanos por WhatsApp.' :
                        '<i class="fas fa-exclamation-circle me-2"></i>There was an error. Please try again or contact us via WhatsApp.'
                    );
                }
            })
            .catch(error => {
                console.error('Error:', error);
                formMessage.addClass('error').html(
                    currentLang === 'es' ? 
                    '<i class="fas fa-exclamation-circle me-2"></i>Error de conexión. Verifica tu internet e intenta de nuevo.' :
                    '<i class="fas fa-exclamation-circle me-2"></i>Connection error. Check your internet and try again.'
                );
            })
            .finally(() => {
                // Re-enable submit button
                submitBtn.prop('disabled', false);
                const btnText = currentLang === 'es' ? 'Enviar mensaje' : 'Send message';
                submitBtn.html(btnText);
            });
        });

        // Real-time validation
        const inputs = form.find('input, textarea, select');
        
        inputs.on('blur', function() {
            // Only validate visible fields
            if ($(this).is(':visible')) {
                validateField($(this));
            }
        });

        function validateField(field) {
            const currentLang = getCurrentLanguage();
            
            if (!field[0].checkValidity()) {
                field.addClass('error-field');
                
                // Show error message
                let errorMsg = '';
                if (field.attr('type') === 'email') {
                    errorMsg = currentLang === 'es' ? 
                        'Por favor ingresa un email válido' : 
                        'Please enter a valid email';
                } else if (field.attr('name') === 'name') {
                    errorMsg = currentLang === 'es' ? 
                        'El nombre debe tener al menos 3 caracteres' : 
                        'Name must be at least 3 characters';
                } else if (field.attr('name') === 'message') {
                    errorMsg = currentLang === 'es' ? 
                        'El mensaje debe tener al menos 20 caracteres' : 
                        'Message must be at least 20 characters';
                } else if (field.is('select')) {
                    errorMsg = currentLang === 'es' ? 
                        'Por favor selecciona una opción' : 
                        'Please select an option';
                }
                
                // Show error message below field
                if (!field.next('.field-error').length) {
                    field.after(`<span class="field-error">${errorMsg}</span>`);
                }
            } else {
                field.removeClass('error-field');
                field.next('.field-error').remove();
            }
        }

        // Remove error on input
        inputs.on('input change', function() {
            $(this).removeClass('error-field');
            $(this).next('.field-error').remove();
        });
    });

})(jQuery);
