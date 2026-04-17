// Copia y pega este código completo en la consola del navegador (F12 → Console)
// mientras estás en index.html

console.clear();
console.log('%c=== TEST DE BOTONES DE IDIOMA ===', 'color: blue; font-size: 16px; font-weight: bold');

// 1. Verificar jQuery
console.log('\n1. jQuery:');
console.log('   typeof jQuery:', typeof jQuery);
console.log('   Versión:', jQuery ? jQuery.fn.jquery : 'N/A');

// 2. Verificar botones
console.log('\n2. Botones:');
const buttons = jQuery('.lang-btn');
console.log('   Botones encontrados:', buttons.length);
buttons.each(function(i) {
    console.log(`   Botón ${i+1}:`, this, 'lang:', jQuery(this).data('lang'));
});

// 3. Verificar event listeners
console.log('\n3. Event Listeners:');
if (buttons.length > 0) {
    const events = jQuery._data(buttons[0], 'events');
    console.log('   Events en primer botón:', events);
    if (!events || !events.click) {
        console.log('%c   ❌ NO HAY EVENT LISTENERS REGISTRADOS', 'color: red; font-weight: bold');
        console.log('%c   Este es el problema - los eventos no se registraron', 'color: orange');
    } else {
        console.log('%c   ✅ Event listeners OK', 'color: green');
    }
}

// 4. Verificar si el script language-switcher.js se cargó
console.log('\n4. API de idiomas:');
console.log('   window.FacwareLanguage:', typeof window.FacwareLanguage);
if (typeof window.FacwareLanguage !== 'undefined') {
    console.log('%c   ✅ API cargada', 'color: green');
} else {
    console.log('%c   ❌ API NO cargada', 'color: red');
}

// 5. Intentar registrar manualmente el evento
console.log('\n5. Probando registrar evento manualmente...');
jQuery('.lang-btn').off('click').on('click', function(e) {
    e.preventDefault();
    const lang = jQuery(this).data('lang');
    console.log('%c   ¡Clic detectado! Idioma:', 'color: green', lang);
    
    if (typeof window.FacwareLanguage !== 'undefined') {
        window.FacwareLanguage.setLanguage(lang);
        console.log('%c   ✅ Idioma cambiado a: ' + lang, 'color: green; font-weight: bold');
    } else {
        console.log('%c   ❌ No se puede cambiar idioma (API no disponible)', 'color: red');
    }
});

console.log('%c\n✅ Eventos registrados manualmente. Ahora prueba hacer clic en los botones ES/EN', 'color: green; font-size: 14px; font-weight: bold');
console.log('\nSi funciona ahora, el problema es que language-switcher.js no se está ejecutando correctamente.');
