# 🚀 GITHUB PAGES - INSTRUCCIONES EXACTAS PASO A PASO

## PASO 1: GitHub (Toma 2 minutos)

### Si NO tienes cuenta GitHub:
1. Ve a https://github.com/signup
2. Email: tu_email@gmail.com
3. Contraseña: cualquiera fuerte
4. Username: lo que quieras (ej: "tuesteban")
5. Confirma email (revisa spam)

### Si YA tienes cuenta GitHub:
- Solo loguéate en https://github.com

---

## PASO 2: Crear repositorio (1 minuto)

1. **Ve a:** https://github.com/new

2. **Completa estos campos:**
   - Repository name: `catalina-15`
   - Description: "Invitación digital para los 15 años de Catalina"
   - Public (no privado)
   - NO marques "Add a README" (ya lo tenemos)
   - NO marques "Add .gitignore" (ya lo tenemos)

3. **Click en "Create repository"**

4. **Esperas 5 segundos**

5. **Verás una página que dice:**
   ```
   …or push an existing repository from the command line
   ```

6. **COPIA estas líneas (son específicas para tu repo):**
   ```bash
   git remote add origin https://github.com/TU_USERNAME/catalina-15.git
   git branch -M main
   git push -u origin main
   ```
   
   Reemplaza `TU_USERNAME` con tu nombre de usuario GitHub.

---

## PASO 3: Terminal (2 minutos)

1. **Abre Terminal**

2. **Pega esto (para verificar que git existe):**
   ```bash
   git --version
   ```
   
   Deberías ver: `git version 2.x.x`

3. **Cambia a tu carpeta:**
   ```bash
   cd ~/Desktop/catalina-15
   ```

4. **Pega las líneas que copiaste de GitHub:**
   ```bash
   git remote add origin https://github.com/TU_USERNAME/catalina-15.git
   git branch -M main
   git push -u origin main
   ```

5. **Primera vez te pedirá login en GitHub:**
   - Click en "Authorize via web browser" o similiar
   - O ingresa token (Settings → Developer settings → Personal access tokens)

6. **ESPERA** hasta ver:
   ```
   Enumerating objects...
   Counting objects...
   Writing objects...
   ✅ Everything up to date
   ```

---

## PASO 4: Activar Pages (2 minutos)

1. **Ve a:** https://github.com/TU_USERNAME/catalina-15

2. **Click en "Settings"** (arriba a la derecha)

3. **En el menú de la izquierda, click "Pages"**

4. **Donde dice "Source":**
   - Branch: `main`
   - Folder: `/ (root)`
   - Click **Save**

5. **ESPERA 1-2 MINUTOS**

6. **Recarga la página (F5)**

7. **Verás un banner azul que dice:**
   ```
   ✓ Your site is live at:
   https://TU_USERNAME.github.io/catalina-15/
   ```

8. **¡ESE ES TU LINK!** 🎉

---

## PASO 5: Probar y Compartir (1 minuto)

1. **Abre en navegador:**
   ```
   https://TU_USERNAME.github.io/catalina-15/
   ```

2. **Verifica que funciona:**
   - ✅ Se ve hermoso
   - ✅ Botones funcionan
   - ✅ Formulario completa
   - ✅ Se ve bien en móvil (Ctrl+Shift+I → tap para phone)

3. **Copia el link y COMPARTE:**
   ```
   ¡Hola! Te invito a mis 15 años 🎉
   
   https://tuusername.github.io/catalina-15/
   
   Confirma tu asistencia aquí ✨
   ```

---

## ⏱️ TIEMPO TOTAL: 8 MINUTOS

✅ Cuenta GitHub: 2 min  
✅ Crear repo: 1 min  
✅ Terminal push: 2 min  
✅ Activar Pages: 2 min  
✅ Probar: 1 min  

---

## 🆘 PROBLEMAS COMUNES

### "Command not found: git"
→ Tienes Mac sin git instalado
→ Descarga Xcode Command Line Tools: `xcode-select --install`

### "No veo el banner azul con el link"
→ Espera 2 minutos más
→ Recarga: Ctrl+Shift+R
→ Verifica en Settings → Pages que esté guardado

### "404 when accessing the site"
→ La rama debe ser `main` (no master)
→ Recarga Pages settings y espera 2 min

### "No me pide GitHub login"
→ Ya tenés git configurado globalmente
→ Eso está bien, continúa

---

## ✅ AL FINALIZAR

- ✅ Repositorio en GitHub
- ✅ Página publicada en internet
- ✅ Link listo para compartir
- ✅ ¡LISTO PARA CELEBRAR!

**Cualquier duda, reabre este archivo. Todo está bien explicado.**

🎉 **¡Tu invitación está online!**
