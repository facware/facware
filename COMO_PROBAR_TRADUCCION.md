# 🚀 GUÍA RÁPIDA: Cómo Probar el Sistema de Traducción

## ⚠️ IMPORTANTE: Dónde Hacer las Pruebas

**❌ NO pruebes en**: `test-traduccion.html` (página de información)
**✅ SÍ prueba en**: `index.html` (sitio principal)

---

## 🎯 MÉTODO 1: Prueba Visual (Más Fácil)

### Paso 1: Abre index.html
Ya está abierto en tu navegador.

### Paso 2: Busca los botones de idioma
Están en la **esquina superior derecha** del sitio:
```
[ES] | [EN]
```

### Paso 3: Haz clic en "EN"
- El botón EN debe brillar en azul
- El contenido debe cambiar a inglés
- La sección "Sobre Nosotros" debe estar en inglés
- El formulario debe tener placeholders en inglés

### Paso 4: Haz clic en "ES"
- El botón ES debe brillar en azul
- Todo debe volver a español

### ✅ Si esto funciona: El sistema está OK!

---

## 🔍 MÉTODO 2: Diagnóstico con Consola

### Paso 1: Abre la Consola
Mientras estás en **index.html**:
- Presiona **F12**
- O clic derecho → "Inspeccionar" → pestaña "Console"

### Paso 2: Ejecuta el diagnóstico
Copia y pega este código en la consola:

```javascript
(function() {
    console.log('🔧 Diagnóstico rápido');
    console.log('jQuery:', typeof jQuery !== 'undefined' ? '✅' : '❌');
    console.log('API idiomas:', typeof window.FacwareLanguage !== 'undefined' ? '✅' : '❌');
    console.log('Elementos ES:', $('.lang-es').length);
    console.log('Elementos EN:', $('.lang-en').length);
    console.log('Botones idioma:', $('.lang-btn').length);
    console.log('Idioma actual:', localStorage.getItem('facware_language'));
})();
```

### Paso 3: Verifica los resultados
Debes ver algo como:
```
🔧 Diagnóstico rápido
jQuery: ✅
API idiomas: ✅
Elementos ES: 50+
Elementos EN: 50+
Botones idioma: 2
Idioma actual: es
```

### ✅ Si todos tienen ✅: El sistema está funcionando!

---

## 🎮 MÉTODO 3: Pruebas Interactivas en Consola

### Cambiar a inglés:
```javascript
window.FacwareLanguage.setLanguage('en')
```

### Cambiar a español:
```javascript
window.FacwareLanguage.setLanguage('es')
```

### Ver qué está visible:
```javascript
console.log('Visible ES:', $('.lang-es:visible').length);
console.log('Visible EN:', $('.lang-en:visible').length);
```

### Ver idioma actual:
```javascript
window.FacwareLanguage.getCurrentLanguage()
```

---

## 📍 Dónde Están los Botones de Idioma

```
┌─────────────────────────────────────────┐
│  FACWARE LOGO              [ES] | [EN]  │  ← Aquí
├─────────────────────────────────────────┤
│                                         │
│         Contenido del sitio            │
│                                         │
└─────────────────────────────────────────┘
```

Los botones están en el **header**, arriba a la derecha, junto al menú.

---

## 🐛 Problemas Comunes

### "No veo los botones ES | EN"
**Solución**: 
1. Asegúrate de estar en `index.html`, no en `test-traduccion.html`
2. Mira arriba a la derecha del header
3. Haz scroll hasta arriba de la página

### "Los botones no responden"
**Solución**: 
1. Abre consola (F12)
2. Busca errores en rojo
3. Recarga la página con Ctrl+F5

### "Sale error en consola"
**Solución**:
1. Copia el error completo
2. Verifica que estos archivos existan:
   - `assets/js/vendor/jquery-3.5.1.min.js`
   - `assets/js/language-switcher.js`
   - `assets/js/contact-form.js`

---

## ✅ Checklist de Prueba Rápida

En **index.html**, verifica:

- [ ] Veo los botones ES | EN arriba a la derecha
- [ ] Al hacer clic en EN, el contenido cambia
- [ ] Al hacer clic en ES, el contenido vuelve
- [ ] El botón activo brilla en azul
- [ ] La sección "Sobre Nosotros" cambia de idioma
- [ ] El formulario de contacto cambia de idioma
- [ ] No hay errores en la consola (F12)
- [ ] El idioma se mantiene al recargar la página

---

## 🎯 Resultado Esperado

### Cuando está en ESPAÑOL (ES activo):
```
Sobre Nosotros
Transformando ideas en soluciones digitales...

Nuestra Misión
Empoderar a las empresas mediante...

[Formulario]
Nombre completo *
Correo electrónico *
Selecciona un servicio *
```

### Cuando está en INGLÉS (EN activo):
```
About Us
Transforming ideas into digital solutions...

Our Mission
Empower businesses through...

[Form]
Full name *
Email address *
Select a service *
```

---

## 💡 Tip Final

**Si ves que el contenido cambia al hacer clic en los botones**, el sistema está funcionando correctamente, sin importar lo que diga test-traduccion.html.

La página de test solo sirve para información, el diagnóstico real se hace en index.html.

---

## 📞 ¿Sigue sin funcionar?

Ejecuta este código en la consola (F12) mientras estás en index.html:

```javascript
// Diagnóstico completo
{
    enIndexHTML: window.location.pathname.includes('index.html') || window.location.pathname === '/',
    jquery: typeof jQuery !== 'undefined',
    api: typeof window.FacwareLanguage !== 'undefined',
    elementosES: document.querySelectorAll('.lang-es').length,
    elementosEN: document.querySelectorAll('.lang-en').length,
    botones: document.querySelectorAll('.lang-btn').length,
    idioma: localStorage.getItem('facware_language'),
    erroresConsola: 'Revisa arriba si hay errores en rojo'
}
```

Envíame este resultado y te ayudo a solucionarlo.

---

**Estado**: Sistema implementado y funcional
**Tu tarea**: Abrir index.html y hacer clic en ES | EN
**Resultado esperado**: El contenido debe cambiar de idioma
