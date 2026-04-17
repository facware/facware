# 🔧 Guía de Diagnóstico - Botones de Idioma No Funcionan

## ⚡ Solución Rápida (Prueba Primero)

### Paso 1: Abrir la Página Correcta
1. Asegúrate de estar en **index.html** (NO en test-traduccion.html)
2. La URL debe ser algo como: `file:///c:/Projects/facware/index.html`
3. Si estás en otra página, ve a index.html

### Paso 2: Limpiar Caché del Navegador
Los navegadores a veces guardan versiones antiguas de los archivos JavaScript:

**En Chrome/Edge:**
1. Presiona `Ctrl + Shift + R` (Windows) para recargar sin caché
2. O presiona `Ctrl + F5`

**En Firefox:**
1. Presiona `Ctrl + Shift + R` o `Ctrl + F5`

**Método alternativo:**
1. Presiona `Ctrl + Shift + Delete`
2. Selecciona "Imágenes y archivos en caché"
3. Haz clic en "Borrar datos"
4. Recarga la página

### Paso 3: Verificar en Consola
1. Presiona `F12` para abrir herramientas de desarrollo
2. Ve a la pestaña **Console** (Consola)
3. Copia y pega este comando:

```javascript
diagnostico-rapido.js
```

O copia el contenido completo del archivo `diagnostico-rapido.js` en la consola.

---

## 🔍 Diagnóstico Detallado

### Verificación 1: ¿Los Botones Están Visibles?
1. Abre index.html en tu navegador
2. Busca en la **esquina superior derecha** del header
3. Deberías ver: **ES | EN**
4. Si NO los ves, revisa la siguiente sección

### Verificación 2: ¿Hay Errores en la Consola?
1. Presiona `F12`
2. Ve a la pestaña **Console**
3. Busca mensajes en rojo (errores)
4. Errores comunes:
   - `jQuery is not defined` → jQuery no se cargó
   - `language-switcher.js:XX` → Error en el script
   - `404 Not Found` → Archivo faltante

### Verificación 3: ¿Los Archivos Existen?
Verifica que estos archivos existan en tu proyecto:

```
c:\Projects\facware\
  ├── index.html
  └── assets\
      ├── css\
      │   └── custom-facware.css
      └── js\
          ├── vendor\
          │   └── jquery-3.5.1.min.js
          ├── language-switcher.js
          └── contact-form.js
```

**Cómo verificar:**
```powershell
# En PowerShell, ejecuta:
Test-Path "c:\Projects\facware\assets\js\language-switcher.js"
Test-Path "c:\Projects\facware\assets\js\vendor\jquery-3.5.1.min.js"
Test-Path "c:\Projects\facware\assets\css\custom-facware.css"
```

Todos deben devolver `True`.

### Verificación 4: Probar Manualmente desde Consola
1. Abre index.html
2. Presiona `F12` → pestaña **Console**
3. Ejecuta estos comandos uno por uno:

```javascript
// 1. Verificar jQuery
typeof jQuery

// Resultado esperado: "function"

// 2. Verificar API de idiomas
typeof window.FacwareLanguage

// Resultado esperado: "object"

// 3. Verificar botones
jQuery('.lang-btn').length

// Resultado esperado: 2

// 4. Cambiar a inglés manualmente
window.FacwareLanguage.setLanguage('en');

// 5. Verificar elementos visibles
jQuery('.lang-en:visible').length

// Resultado esperado: número mayor a 0

// 6. Volver a español
window.FacwareLanguage.setLanguage('es');
```

---

## 🐛 Problemas Comunes y Soluciones

### Problema 1: "jQuery is not defined"
**Causa:** jQuery no se está cargando correctamente.

**Soluciones:**
1. Verifica que el archivo existe:
   ```
   c:\Projects\facware\assets\js\vendor\jquery-3.5.1.min.js
   ```

2. Si no existe, descárgalo:
   - Ve a https://code.jquery.com/jquery-3.5.1.min.js
   - Guarda como `assets/js/vendor/jquery-3.5.1.min.js`

3. Recarga la página con `Ctrl + F5`

### Problema 2: Los botones no responden al clic
**Causa:** Los event listeners no se configuraron.

**Soluciones:**
1. Limpia el caché: `Ctrl + Shift + R`
2. Verifica en consola:
   ```javascript
   jQuery._data(jQuery('.lang-btn')[0], 'events')
   ```
   Debería mostrar `{click: Array(1)}`

3. Si no hay eventos, verifica que language-switcher.js se carga DESPUÉS de jQuery en index.html (líneas ~1795 y ~1809)

### Problema 3: Los botones cambian pero el contenido no
**Causa:** Los elementos no tienen las clases correctas.

**Soluciones:**
1. Verifica en consola:
   ```javascript
   jQuery('.lang-es').length  // Debería ser > 50
   jQuery('.lang-en').length  // Debería ser > 50
   ```

2. Si los números son 0, los elementos no tienen las clases `lang-es` y `lang-en`

### Problema 4: Solo funciona una vez y luego se congela
**Causa:** Conflicto entre scripts o error en el código.

**Soluciones:**
1. Revisa la consola por errores después del primer clic
2. Verifica que contact-form.js no tenga errores
3. Intenta comentar temporalmente la línea de contact-form.js en index.html para aislar el problema

---

## ✅ Test Completo en Consola

Copia y pega todo esto en la consola del navegador (F12 → Console):

```javascript
console.clear();
console.log('=== TEST DEL SISTEMA DE TRADUCCIÓN ===\n');

// Test completo
let passed = 0;
let failed = 0;

// Test 1: jQuery
if (typeof jQuery !== 'undefined') {
    console.log('✅ jQuery cargado');
    passed++;
} else {
    console.log('❌ jQuery NO cargado');
    failed++;
}

// Test 2: API
if (typeof window.FacwareLanguage !== 'undefined') {
    console.log('✅ API de idiomas disponible');
    passed++;
} else {
    console.log('❌ API de idiomas NO disponible');
    failed++;
}

// Test 3: Botones
const btnCount = jQuery('.lang-btn').length;
if (btnCount === 2) {
    console.log('✅ 2 botones encontrados');
    passed++;
} else {
    console.log(`❌ ${btnCount} botones encontrados (esperado: 2)`);
    failed++;
}

// Test 4: Elementos ES
const esCount = jQuery('.lang-es').length;
if (esCount > 0) {
    console.log(`✅ ${esCount} elementos en español`);
    passed++;
} else {
    console.log('❌ 0 elementos en español');
    failed++;
}

// Test 5: Elementos EN
const enCount = jQuery('.lang-en').length;
if (enCount > 0) {
    console.log(`✅ ${enCount} elementos en inglés`);
    passed++;
} else {
    console.log('❌ 0 elementos en inglés');
    failed++;
}

// Test 6: Cambio a inglés
try {
    window.FacwareLanguage.setLanguage('en');
    const enVisible = jQuery('.lang-en:visible').length;
    if (enVisible > 0) {
        console.log(`✅ Cambio a inglés funciona (${enVisible} visibles)`);
        passed++;
    } else {
        console.log('❌ Cambio a inglés NO funciona');
        failed++;
    }
    
    // Volver a español
    window.FacwareLanguage.setLanguage('es');
} catch (e) {
    console.log('❌ Error al cambiar idioma: ' + e.message);
    failed++;
}

console.log(`\n=== RESULTADO: ${passed}/${passed + failed} pruebas pasadas ===`);

if (failed === 0) {
    console.log('\n🎉 ¡TODO FUNCIONA! Haz clic en los botones ES/EN en la esquina superior derecha.');
} else {
    console.log('\n⚠️ Hay problemas. Revisa los errores arriba.');
}
```

---

## 📞 ¿Sigues con Problemas?

Si después de seguir todos estos pasos el sistema sigue sin funcionar:

1. **Copia el resultado del test de consola** (el output que ves en la consola)
2. **Toma una captura de pantalla** de la consola mostrando los errores
3. **Verifica la URL** de la página (debe ser index.html)
4. **Comparte esta información** para un diagnóstico más específico

---

## 🎯 Próximos Pasos

Una vez que los botones funcionen:

1. ✅ Verifica que todo el contenido cambie correctamente
2. ✅ Prueba el formulario de contacto en ambos idiomas
3. ✅ Configura tu Web3Forms Access Key para recibir emails
4. ✅ Actualiza el número de WhatsApp con tu número real
