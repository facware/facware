/**
 * Script de diagnóstico rápido para el sistema de traducción
 * INSTRUCCIONES:
 * 1. Abre index.html en tu navegador
 * 2. Presiona F12 para abrir las herramientas de desarrollo
 * 3. Ve a la pestaña "Console" (Consola)
 * 4. Copia y pega todo este código en la consola
 * 5. Presiona Enter
 */

console.clear();
console.log('%c=== DIAGNÓSTICO DEL SISTEMA DE TRADUCCIÓN ===', 'color: blue; font-size: 16px; font-weight: bold');
console.log('');

// Test 1: Verificar jQuery
console.log('%c1. Verificando jQuery...', 'color: orange; font-weight: bold');
if (typeof jQuery !== 'undefined') {
    console.log('%c   ✅ jQuery está cargado (versión: ' + jQuery.fn.jquery + ')', 'color: green');
} else {
    console.log('%c   ❌ jQuery NO está cargado', 'color: red');
    console.log('%c   SOLUCIÓN: Verifica que assets/js/vendor/jquery-3.5.1.min.js exista', 'color: yellow');
}

// Test 2: Verificar API de idiomas
console.log('%c2. Verificando API de idiomas...', 'color: orange; font-weight: bold');
if (typeof window.FacwareLanguage !== 'undefined') {
    console.log('%c   ✅ API de idiomas está disponible', 'color: green');
} else {
    console.log('%c   ❌ API de idiomas NO está disponible', 'color: red');
    console.log('%c   SOLUCIÓN: Verifica que assets/js/language-switcher.js exista y se cargue', 'color: yellow');
}

// Test 3: Verificar botones
console.log('%c3. Verificando botones de idioma...', 'color: orange; font-weight: bold');
if (typeof jQuery !== 'undefined') {
    const buttons = jQuery('.lang-btn');
    console.log(`   Botones encontrados: ${buttons.length}`);
    if (buttons.length > 0) {
        console.log('%c   ✅ Botones encontrados', 'color: green');
        buttons.each(function(index) {
            const lang = jQuery(this).data('lang');
            const isActive = jQuery(this).hasClass('active');
            console.log(`   - Botón ${index + 1}: ${lang.toUpperCase()} ${isActive ? '(ACTIVO)' : ''}`);
        });
    } else {
        console.log('%c   ❌ No se encontraron botones', 'color: red');
    }
}

// Test 4: Verificar elementos con clases de idioma
console.log('%c4. Verificando elementos con idiomas...', 'color: orange; font-weight: bold');
if (typeof jQuery !== 'undefined') {
    const esElements = jQuery('.lang-es');
    const enElements = jQuery('.lang-en');
    console.log(`   Elementos con clase .lang-es: ${esElements.length}`);
    console.log(`   Elementos con clase .lang-en: ${enElements.length}`);
    
    if (esElements.length > 0 || enElements.length > 0) {
        console.log('%c   ✅ Elementos de idioma encontrados', 'color: green');
        
        // Contar visibles
        const esVisible = esElements.filter(':visible').length;
        const enVisible = enElements.filter(':visible').length;
        console.log(`   Elementos ES visibles: ${esVisible}`);
        console.log(`   Elementos EN visibles: ${enVisible}`);
    } else {
        console.log('%c   ❌ No se encontraron elementos de idioma', 'color: red');
    }
}

// Test 5: Verificar localStorage
console.log('%c5. Verificando localStorage...', 'color: orange; font-weight: bold');
const savedLang = localStorage.getItem('facware_language');
if (savedLang) {
    console.log(`%c   ✅ Idioma guardado: ${savedLang.toUpperCase()}`, 'color: green');
} else {
    console.log('%c   ⚠️ No hay idioma guardado (usará español por defecto)', 'color: orange');
}

// Test 6: Probar cambio de idioma
console.log('%c6. Probando cambio de idioma...', 'color: orange; font-weight: bold');
if (typeof window.FacwareLanguage !== 'undefined' && typeof jQuery !== 'undefined') {
    console.log('%c   Intentando cambiar a inglés...', 'color: cyan');
    try {
        window.FacwareLanguage.setLanguage('en');
        const enVisible = jQuery('.lang-en:visible').length;
        const esVisible = jQuery('.lang-es:visible').length;
        console.log(`   Después del cambio - EN visibles: ${enVisible}, ES visibles: ${esVisible}`);
        
        if (enVisible > 0 && esVisible === 0) {
            console.log('%c   ✅ ¡Cambio de idioma funciona correctamente!', 'color: green');
        } else {
            console.log('%c   ❌ El cambio de idioma no funcionó correctamente', 'color: red');
        }
        
        // Volver a español
        console.log('%c   Regresando a español...', 'color: cyan');
        window.FacwareLanguage.setLanguage('es');
    } catch (e) {
        console.log('%c   ❌ Error al cambiar idioma: ' + e.message, 'color: red');
    }
} else {
    console.log('%c   ❌ No se puede probar (falta jQuery o API)', 'color: red');
}

// Test 7: Verificar event listeners
console.log('%c7. Verificando event listeners de botones...', 'color: orange; font-weight: bold');
if (typeof jQuery !== 'undefined') {
    const buttons = jQuery('.lang-btn');
    if (buttons.length > 0) {
        const events = jQuery._data(buttons[0], 'events');
        if (events && events.click) {
            console.log('%c   ✅ Event listeners configurados', 'color: green');
        } else {
            console.log('%c   ❌ No hay event listeners en los botones', 'color: red');
            console.log('%c   SOLUCIÓN: El script language-switcher.js podría no haberse ejecutado', 'color: yellow');
        }
    }
}

// Resumen
console.log('');
console.log('%c=== RESUMEN ===', 'color: blue; font-size: 16px; font-weight: bold');
console.log('');
console.log('%cSi todos los tests pasan ✅, el sistema debería funcionar.', 'color: green');
console.log('%cSi hay errores ❌, revisa las soluciones sugeridas arriba.', 'color: orange');
console.log('');
console.log('%cPara probar manualmente:', 'color: blue; font-weight: bold');
console.log('1. Busca los botones ES | EN en la esquina superior derecha');
console.log('2. Haz clic en EN para cambiar a inglés');
console.log('3. Haz clic en ES para volver a español');
console.log('');
console.log('%cO prueba desde la consola:', 'color: blue; font-weight: bold');
console.log('window.FacwareLanguage.setLanguage("en"); // Cambiar a inglés');
console.log('window.FacwareLanguage.setLanguage("es"); // Cambiar a español');
