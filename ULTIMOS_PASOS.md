<!-- 
    ╔═══════════════════════════════════════════════════════════╗
    ║  INVITACIÓN DIGITAL - CATALINA 15 AÑOS                   ║
    ║  GUÍA RÁPIDA DE FINALIZACIÓN                             ║
    ╚═══════════════════════════════════════════════════════════╝
-->

# ✨ ESTÁ 90% HECHO - SOLO 2 PASOS FINALES

Tu invitación digital está **100% funcional y hermosa**. Solo necesitas:

1. Configurar Formspree (5 min) - Para recibir confirmaciones por email
2. Subir a GitHub Pages (10 min) - Para publicarla en internet

## 🚀 PASO 1: CONFIGURAR FORMSPREE

### ¿Qué es?
Un servicio gratuito que recibe los formularios de confirmación y te envía los datos por email.

### ¿Cómo?

#### 1. Abre https://formspree.io

![Step 1](https://img.shields.io/badge/🔗-formspree.io-blue?style=flat)

#### 2. Haz click en "Sign Up" (Registrarse)

- Email: tu_email@gmail.com
- Contraseña: cualquiera (la usas 1 sola vez)
- Completa el registro

#### 3. Crea un nuevo formulario

- Click en "Create form"
- Selecciona "Email"
- Ingresa tu email: `tu_email@gmail.com`
- Click "Create"

#### 4. Verás tu ID (ejemplo: `f/xyzabc123def456`)

**Copia solo la parte después de `/f/`:**
```
xyzabc123def456
```

#### 5. Edita index.html

Abre `index.html` en VS Code y busca (Ctrl+F):

```
formspree.io/f/REEMPLAZAR
```

Reemplaza `REEMPLAZAR` con tu ID:

```html
<!-- ANTES: -->
action="https://formspree.io/f/REEMPLAZAR"

<!-- DESPUÉS: -->
action="https://formspree.io/f/xyzabc123def456"
```

**Guarda: Ctrl+S**

#### 6. Prueba el formulario

- Abre la página con Live Server
- Completa y envía el formulario
- Deberías recibir un email en 30 segundos

**✅ Formspree configurado**

---

## 🌐 PASO 2: PUBLICAR EN GITHUB PAGES

### ¿Qué es?
Un servicio gratuito de GitHub que publica tu invitación en internet.

### ¿Cómo?

#### Opción A: Línea de Comandos (Más Rápido)

1. **Abre Terminal** (ya estás en la carpeta catalina-15)

2. **Copia y pega esto:**

```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/catalina-15.git
git push -u origin main
```

**Reemplaza `TU_USUARIO` con tu nombre de usuario GitHub**

3. **Cuando te pida contraseña:**
   - Git puede pedir contraseña o token
   - En GitHub: Settings → Developer settings → Personal access tokens
   - Crea un token con permisos `repo`
   - Pegalo cuando te pida "password"

#### Opción B: Sin Línea de Comandos (GitHub Desktop)

1. Descarga GitHub Desktop: https://desktop.github.com
2. File → Add Local Repository
3. Selecciona `/Users/estebanblanc/Desktop/catalina-15`
4. Click "Publish Repository"
5. Indica nombre: `catalina-15`
6. Click "Publish"

### Después del Push

1. Ve a **https://github.com/TU_USUARIO/catalina-15**

2. Click en **Settings**

3. Click en **Pages** (en el menú izquierdo)

4. **Source:**
   - Branch: `main`
   - Folder: `/ (root)`
   - Click **Save**

5. **Espera 1-2 minutos**

6. Verás:
   ```
   Your site is published at:
   https://TU_USUARIO.github.io/catalina-15/
   ```

7. **¡ESE ES TU LINK!** Cópialo y comparte

**✅ Invitación publicada en internet**

---

## 📱 COMPARTIR LA INVITACIÓN

Usa el link: `https://TU_USUARIO.github.io/catalina-15/`

**Por:**
- 💬 WhatsApp
- 📷 Instagram (stories o directo)
- 📧 Email
- 📱 SMS
- 🐦 Twitter/X

**Ejemplo:**
```
¡Hola! Te invito a mis 15 años! 🎉

https://tu_usuario.github.io/catalina-15/

Confirma tu asistencia aquí ✨
```

---

## ✅ CHECKLIST FINAL

- [ ] Formspree configurado con tu email
- [ ] index.html actualizado con ID Formspree
- [ ] Repositorio en GitHub
- [ ] GitHub Pages activado en Settings
- [ ] Link de invitación obtenido
- [ ] Invitación compartida

---

## 🎉 LISTO PARA CELEBRAR

Tu invitación digital está:
- ✅ Hermosa y elegante
- ✅ 100% responsive en móviles
- ✅ Con contador regresivo en tiempo real
- ✅ Con formulario de confirmación funcional
- ✅ Publicada en internet
- ✅ Lista para compartir

**¡Que disfrutes tu noche especial, Catalina!** 🎊✨

---

## 🆘 PROBLEMAS COMUNES

### "No me aparece el link de GitHub Pages"
→ Espera 2-3 minutos, recarga la página

### "El formulario no envía"
→ Verifica que Formspree esté configurado correctamente y que el email esté verificado

### "Cambié algo y no se ve actualizado"
→ Recarga la página sin cache: **Ctrl+Shift+R** (Windows/Linux) o **Cmd+Shift+R** (Mac)

### "¿Puedo cambiar colores o textos?"
→ Sí! Edita `style.css` para colores y `index.html` para texto

---

**Documentos de referencia rápida en la carpeta:**
- `FORMSPREE_SETUP.md` - Guía detallada de Formspree
- `GITHUB_PAGES_SETUP.md` - Guía detallada de GitHub Pages
- `README.md` - Documentación completa del proyecto

**¡Dudas? Revisa esos archivos. Todo está explicado paso a paso!**
