// ========================================
// SCRIPT DE DIAGNÓSTICO - Sistema de Traducción Facware
// Copia y pega este código en la consola del navegador (F12)
// mientras estás en index.html
// ========================================

(function() {
    console.clear();
    console.log('%c🔧 DIAGNÓSTICO DEL SISTEMA DE TRADUCCIÓN', 'background: #086AD8; color: white; font-size: 20px; padding: 10px;');
    console.log('');
    
    const tests = [];
    
    // Test 1: jQuery
    const jQueryLoaded = typeof jQuery !== 'undefined';
    tests.push({
        name: 'jQuery está cargado',
        pass: jQueryLoaded,
        details: jQueryLoaded ? `✅ jQuery ${jQuery.fn.jquery}` : '❌ jQuery no encontrado'
    });
    
    // Test 2: API de idiomas
    const apiLoaded = typeof window.FacwareLanguage !== 'undefined';
    tests.push({
        name: 'API de idiomas disponible',
        pass: apiLoaded,
        details: apiLoaded ? '✅ window.FacwareLanguage existe' : '❌ API no encontrada'
    });
    
    // Test 3: localStorage
    let localStorageWorks = false;
    try {
        localStorage.setItem('test', 'ok');
        localStorageWorks = localStorage.getItem('test') === 'ok';
        localStorage.removeItem('test');
    } catch(e) {
        localStorageWorks = false;
    }
    tests.push({
        name: 'localStorage funcional',
        pass: localStorageWorks,
        details: localStorageWorks ? '✅ localStorage funciona' : '❌ localStorage bloqueado'
    });
    
    // Test 4: Idioma actual
    const currentLang = localStorage.getItem('facware_language') || 'no definido';
    tests.push({
        name: 'Idioma guardado',
        pass: currentLang === 'es' || currentLang === 'en',
        details: `Idioma actual: ${currentLang}`
    });
    
    // Test 5: Elementos lang-es
    const esElements = document.querySelectorAll('.lang-es').length;
    tests.push({
        name: 'Elementos en español',
        pass: esElements > 0,
        details: `${esElements} elementos con clase .lang-es`
    });
    
    // Test 6: Elementos lang-en
    const enElements = document.querySelectorAll('.lang-en').length;
    tests.push({
        name: 'Elementos en inglés',
        pass: enElements > 0,
        details: `${enElements} elementos con clase .lang-en`
    });
    
    // Test 7: Botones de idioma
    const langButtons = document.querySelectorAll('.lang-btn').length;
    tests.push({
        name: 'Botones de idioma',
        pass: langButtons >= 2,
        details: `${langButtons} botones encontrados`
    });
    
    // Test 8: Script cargado
    const scriptLoaded = Array.from(document.querySelectorAll('script'))
        .some(s => s.src.includes('language-switcher'));
    tests.push({
        name: 'Script de traducción',
        pass: scriptLoaded,
        details: scriptLoaded ? '✅ language-switcher.js cargado' : '❌ Script no encontrado'
    });
    
    // Test 9: Elementos visibles
    const visibleES = document.querySelectorAll('.lang-es:not([style*="display: none"])').length;
    const visibleEN = document.querySelectorAll('.lang-en:not([style*="display: none"])').length;
    tests.push({
        name: 'Elementos visibles',
        pass: visibleES > 0 || visibleEN > 0,
        details: `${visibleES} en español, ${visibleEN} en inglés visibles`
    });
    
    // Mostrar resultados
    const passed = tests.filter(t => t.pass).length;
    const total = tests.length;
    
    console.log('');
    console.log(`%c📊 RESULTADOS: ${passed}/${total} pruebas pasadas`, 
        passed === total ? 'background: #28a745; color: white; font-size: 16px; padding: 5px;' : 
                          'background: #dc3545; color: white; font-size: 16px; padding: 5px;');
    console.log('');
    
    tests.forEach((test, i) => {
        const icon = test.pass ? '✅' : '❌';
        const color = test.pass ? 'color: green' : 'color: red';
        console.log(`%c${icon} ${test.name}`, color);
        console.log(`   ${test.details}`);
    });
    
    // Recomendaciones
    console.log('');
    console.log('%c💡 COMANDOS ÚTILES:', 'background: #ffc107; color: black; font-size: 14px; padding: 5px;');
    console.log('');
    console.log('Ver idioma actual:');
    console.log('%cwindow.FacwareLanguage.getCurrentLanguage()', 'color: blue');
    console.log('');
    console.log('Cambiar a español:');
    console.log('%cwindow.FacwareLanguage.setLanguage("es")', 'color: blue');
    console.log('');
    console.log('Cambiar a inglés:');
    console.log('%cwindow.FacwareLanguage.setLanguage("en")', 'color: blue');
    console.log('');
    console.log('Ver elementos visibles:');
    console.log('%c$(".lang-es:visible").length', 'color: blue');
    console.log('%c$(".lang-en:visible").length', 'color: blue');
    console.log('');
    
    // Soluciones
    if (passed < total) {
        console.log('%c🔧 SOLUCIONES:', 'background: #dc3545; color: white; font-size: 14px; padding: 5px;');
        console.log('');
        
        if (!jQueryLoaded) {
            console.log('%c❌ jQuery no cargado:', 'color: red; font-weight: bold');
            console.log('   1. Verifica que assets/js/vendor/jquery-3.5.1.min.js existe');
            console.log('   2. Recarga la página con Ctrl+F5');
            console.log('');
        }
        
        if (!apiLoaded) {
            console.log('%c❌ API de idiomas no disponible:', 'color: red; font-weight: bold');
            console.log('   1. Verifica que assets/js/language-switcher.js existe');
            console.log('   2. Revisa la consola por errores de JavaScript');
            console.log('   3. Recarga con Ctrl+F5');
            console.log('');
        }
        
        if (esElements === 0 && enElements === 0) {
            console.log('%c❌ No hay elementos traducibles:', 'color: red; font-weight: bold');
            console.log('   ⚠️  Estás en la página correcta? (index.html)');
            console.log('   Si estás en test-traduccion.html, ve a index.html primero');
            console.log('');
        }
        
        if (langButtons === 0) {
            console.log('%c❌ Botones de idioma no encontrados:', 'color: red; font-weight: bold');
            console.log('   Los botones ES | EN deben estar en el header');
            console.log('   Busca en la esquina superior derecha');
            console.log('');
        }
    } else {
        console.log('');
        console.log('%c🎉 ¡TODO FUNCIONA CORRECTAMENTE!', 'background: #28a745; color: white; font-size: 16px; padding: 10px;');
        console.log('');
        console.log('Ahora puedes:');
        console.log('1. Hacer clic en los botones ES | EN en la esquina superior derecha');
        console.log('2. Ver cómo todo el contenido cambia de idioma');
        console.log('3. Probar el formulario de contacto en ambos idiomas');
        console.log('');
    }
    
    // Retornar resumen
    return {
        passed,
        total,
        percentage: Math.round((passed / total) * 100),
        tests,
        allPassed: passed === total
    };
})();
