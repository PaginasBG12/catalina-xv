# 🚀 Publicar en GitHub Pages

## Opción 1: Línea de Comandos (Más Rápido)

Copia y pega esto en la terminal:

```bash
cd ~/Desktop/catalina-15
git config --global user.email "tu_email@gmail.com"
git config --global user.name "Tu Nombre"
git init
git add .
git commit -m "Invitación digital Catalina 15 años"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/catalina-15.git
git push -u origin main
```

**Reemplaza:**
- `tu_email@gmail.com` → Tu email
- `Tu Nombre` → Tu nombre
- `TU_USUARIO` → Tu usuario de GitHub

## Opción 2: GitHub Desktop (GUI - Sin Línea de Comandos)

1. **Descarga GitHub Desktop:**
   - https://desktop.github.com

2. **Abre GitHub Desktop**

3. **File → Add Local Repository**

4. **Selecciona la carpeta:** `/Users/estebanblanc/Desktop/catalina-15`

5. **Publish Repository**
   - Name: `catalina-15`
   - Description: "Invitación digital para los 15 años de Catalina"
   - Haz click en "Publish Repository"

6. **¡Listo!** El repositorio está en GitHub

## Paso 3: Activar GitHub Pages

1. Ve a https://github.com/TU_USUARIO/catalina-15 (reemplaza TU_USUARIO)

2. Click en **Settings** (Configuración)

3. En el menú izquierdo, haz click en **Pages**

4. **Source (Origen):**
   - Branch: `main`
   - Folder: `/ (root)`
   - Click Save

5. **Espera 1-2 minutos**

6. Verás un banner azul que dice:
   ```
   Your site is published at:
   https://TU_USUARIO.github.io/catalina-15/
   ```

7. **¡Copla ese link!** Es tu invitación pública

---

## Probar tu Sitio

Abre en el navegador:
```
https://TU_USUARIO.github.io/catalina-15/
```

¿Funciona perfecto? ✅ Ahora puedes compartir el link con todos.

---

## Compartir la Invitación

Puedes enviar el link por:
- WhatsApp
- Instagram
- Email
- Redes sociales
- SMS

**Ejemplo:**
```
¡Hola! Te invito a mis 15 años:

https://tu_usuario.github.io/catalina-15/

Confirma tu asistencia aquí 🎉✨
```

---

## Si necesitas hacer Cambios Después

1. Edita los archivos en VS Code
2. Guarda (Ctrl+S)
3. En terminal (en la carpeta catalina-15):
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push
   ```
4. Espera 30 segundos
5. Recarga la página: Ctrl+Shift+R (reload sin cache)

---

## Troubleshooting

### No veo la página publicada
- ✅ Espera 2 minutos después de hacer push
- ✅ Ve a Settings → Pages y verifica que esté en "main"
- ✅ Recarga la página

### La página no se actualiza
- ✅ Recarga sin cache: Ctrl+Shift+R (o Cmd+Shift+R en Mac)
- ✅ Abre en modo incógnito (Ctrl+Shift+N)

### 404 - Página no encontrada
- ✅ Verifica el nombre del repositorio
- ✅ Verifica que sea público (no privado)
- ✅ Haz push de nuevo

---

Para más ayuda: https://pages.github.com/
