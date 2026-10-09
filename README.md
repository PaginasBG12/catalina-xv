# 🎉 Invitación Digital - Catalina 15 Años

Una invitación digital web PROFESIONAL, ELEGANTE y RESPONSIVE para celebrar los 15 años de Catalina.

## 🚀 EMPEZAR AHORA

**Lee primero:** [ULTIMOS_PASOS.md](ULTIMOS_PASOS.md)

Solo necesitas 15 minutos para:
1. ✅ Configurar Formspree (recibir confirmaciones)
2. ✅ Publicar en GitHub Pages (poner online)
3. ✅ Compartir el link con tus invitados

## ✨ Características

- ✅ Diseño elegante, sofisticado y moderno
- ✅ Pantalla inicial con efecto de bienvenida
- ✅ Cuenta regresiva en tiempo real
- ✅ Secciones: Hero, Mensaje, Fecha/Lugar, Álbum, Música, Regalos, Confirmación
- ✅ Formulario de confirmación listo para Formspree
- ✅ Copiar número PREX al portapapeles
- ✅ 100% Responsive (móviles, tablets, desktop)
- ✅ Animaciones suaves y elegantes
- ✅ Tipografías premium (Cormorant Garamond + Montserrat)
- ✅ Colores: oro, champagne, crema sobre fondo oscuro
- ✅ Accesibilidad (aria-labels, navegación por teclado)
- ✅ HTML5, CSS3 y JavaScript puro (sin frameworks)

## 📁 Estructura del Proyecto

```
catalina-15/
├── index.html          # Estructura HTML completa
├── style.css           # Estilos CSS responsive
├── script.js           # JavaScript interactivo
├── README.md           # Este archivo
└── assets/             # Carpeta para futuras imágenes
```

## 🚀 Cómo Usar

### Opción 1: Live Server en VS Code (Recomendado)

1. **Abre la carpeta en VS Code:**
   ```bash
   code ~/Desktop/catalina-15
   ```

2. **Instala la extensión Live Server** (si no la tienes):
   - Ve a Extensions (Ctrl+Shift+X / Cmd+Shift+X)
   - Busca "Live Server"
   - Instala la extensión de Ritwick Dey

3. **Inicia el servidor:**
   - Click derecho en `index.html`
   - Selecciona "Open with Live Server"
   - Se abrirá automáticamente en tu navegador

4. **La página se recargará automáticamente** cuando hagas cambios en los archivos

### Opción 2: Abrir directamente en el navegador

- Simplemente abre `index.html` en tu navegador favorito
- Funciona sin servidor (excepto para Formspree que requiere POST)

## ⚙️ Configurar Formspree (Para el Formulario)

El formulario de confirmación está listo para usar con **Formspree**, un servicio gratuito para recibir formularios por email.

### Pasos:

1. **Ve a https://formspree.io/**

2. **Crea una cuenta y forma nuevo:**
   - Selecciona "Create a new form"
   - Elige "Email" como destino

3. **Obtendrás un ID como: `f/xxxxxx`**

4. **En `index.html` (línea ~215), reemplaza:**
   ```html
   <!-- ANTES (línea 215): -->
   <form class="confirmation-form" id="confirmationForm" method="POST" action="https://formspree.io/f/REEMPLAZAR">

   <!-- DESPUÉS: -->
   <form class="confirmation-form" id="confirmationForm" method="POST" action="https://formspree.io/f/tu_id_aqui">
   ```

5. **Reemplaza `tu_id_aqui` con tu ID de Formspree**

6. **¡Listo!** Los formularios enviados llegarán a tu email

## 📱 Responsividad

La invitación está optimizada para:
- ✅ iPhone 13, 14, 15, 16
- ✅ Android (Samsung, Xiaomi, etc.)
- ✅ Tablets (iPad, etc.)
- ✅ Notebooks y PCs
- ✅ Pantallas pequeñas (320px) a grandes (2560px)

**Sin scroll horizontal en ningún dispositivo.**

## 🎨 Personalización

### Cambiar Colores

En `style.css`, edita las variables CSS (líneas 1-15):
```css
:root {
    --color-dark: #1a1a1a;           /* Fondo oscuro */
    --color-cream: #faf8f3;          /* Texto principal */
    --color-gold: #d4a574;           /* Dorado principal */
    --color-champagne: #f5e6d3;      /* Champagne */
}
```

### Cambiar Tipografías

En `style.css`:
```css
--font-serif: 'Cormorant Garamond', serif;  /* Títulos */
--font-sans: 'Montserrat', sans-serif;      /* Textos */
```

Otras opciones elegantes:
- Serif: Playfair Display, Lora, Garamond
- Sans: Poppins, Raleway, Inter

### Cambiar Contenido

- **Nombre:** Busca "Catalina" en `index.html`
- **Fecha:** "15 de noviembre de 2026"
- **Hora:** "21:00 HS"
- **Lugar:** "Salón Los Álamos"
- **Enlaces:** Mantén los links correctos

## 🔗 Enlaces Configurados

- **Ubicación:** https://maps.app.goo.gl/uQXj8zUwryzZgx9c7?g_st=iwb
- **Álbum de fotos:** https://photos.app.goo.gl/pCmWnvNhmuVXWXJcA
- **Canción:** https://youtu.be/cNGjD0VG4R8?si=9BbWEHxldFso3UJP
- **Número PREX:** 1308674

Todos abren en nueva pestaña.

## 📊 Funcionalidades JavaScript

### Pantalla Splash
- Click en "ABRIR INVITACIÓN"
- O presionar Digite

### Cuenta Regresiva
- Se actualiza cada segundo
- Muestra: DÍAS, HORAS, MINUTOS, SEGUNDOS
- Al llegar la fecha muestra "¡El evento ya comenzó!"

### Copiar PREX
- Click en "COPIAR NÚMERO"
- Se copia al portapapeles
- Muestra confirmación visual
- Fallback para navegadores antiguos

### Formulario
- Validación en tiempo real
- Mensajes de error elegantes
- Integración con Formspree
- Confirmación visual al enviar

### Animaciones Scroll
- Elementos aparecen al hacer scroll
- Respeta `prefers-reduced-motion`
- Suave y elegante

## 🌐 Publicar en GitHub Pages

### Opción 1: Usando GitHub Desktop

1. **Crea un repositorio en GitHub:**
   - Nombre: `catalina-15`

2. **En tu computadora:**
   ```bash
   cd ~/Desktop/catalina-15
   git init
   git add .
   git commit -m "Invitación digital Catalina 15 años"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/catalina-15.git
   git push -u origin main
   ```

3. **En GitHub:**
   - Ve a Settings → Pages
   - Source: main branch
   - Espera 1-2 minutos
   - Tu sitio estará en: `https://TU_USUARIO.github.io/catalina-15/`

### Opción 2: Usando GitHub Desktop (GUI)

1. Abre GitHub Desktop
2. File → Add Local Repository
3. Selecciona la carpeta `catalina-15`
4. Publish repository
5. Configura en Settings → Pages (rama main)

### Opción 3: Drag & Drop

1. Ve a https://github.com/new
2. Crea un repositorio
3. Sube los archivos arrastrando
4. Activa GitHub Pages en Settings

## ✅ Checklist de Validación

- ✅ Sin errores HTML
- ✅ Sin errores CSS
- ✅ Sin errores JavaScript (console limpia)
- ✅ Botones funcionan correctamente
- ✅ Enlaces correctos
- ✅ Cuenta regresiva actualiza cada segundo
- ✅ Copiar PREX funciona
- ✅ Formulario valida campos
- ✅ Responsive en móviles
- ✅ Sin scroll horizontal
- ✅ Listo para GitHub Pages

## 🔍 Testing en Diferentes Dispositivos

### Desde Chrome DevTools:
1. Abre la página
2. Presiona F12 (DevTools)
3. Presiona Ctrl+Shift+M (Toggle Device Toolbar)
4. Prueba diferentes dispositivos

### Dispositivos a probar:
- iPhone 12, 13, 14, 15
- Samsung Galaxy S20, S21
- iPad
- Tablet Android
- Desktop 1920x1080
- Pantallain 320px (iPhone SE)

## 📞 Contacto y Soporte

Si encuentras algún problema:
1. Revisa la consola (F12 → Console)
2. Verifica que Formspree esté configurado
3. Prueba en otro navegador
4. Limpia el cache (Ctrl+Shift+R)

## 📄 Licencia

Esta invitación digital es libre de usar y compartir.

---

**Última modificación:** Octubre 2026
**Creado con ❤️ para Catalina**

¡Que disfrutes tu noche especial! 🎉✨
