# 📸 CÓMO AGREGAR TUS FOTOS

La invitación ya tiene una **galería elegante de 6 fotos**. Ahora necesitas reemplazar los placeholders con tus propias imágenes.

## OPCIÓN 1: Subir fotos a Internet (Más Fácil) ⭐

### Paso 1: Sube tus fotos a un servicio gratis

**Elige uno:**
- **Imgur.com** (Super fácil)
- **Imgbb.com** (Upload sin registro)
- **Google Drive** (Compartir)

**Ejemplo con Imgur:**
1. Ve a https://imgur.com
2. Click en "New post"
3. Arrastra tus fotos (una o varias)
4. Espera que suban
5. Click derecho en la foto → "Copy image link"
6. Se ve así: `https://i.imgur.com/abc123.jpg`

### Paso 2: Reemplaza en index.html

Abre `index.html` en VS Code y busca (Ctrl+F):

```
https://via.placeholder.com/400x400
```

Hay 6 placeholders (Foto 1, 2, 3, 4, 5, 6).

**REEMPLAZA CADA UNO:**

```html
<!-- ANTES -->
<div class="gallery-image" style="background-image: url('https://via.placeholder.com/400x400/f5e6d3/d4a574?text=Foto+1');">

<!-- DESPUÉS -->
<div class="gallery-image" style="background-image: url('https://i.imgur.com/abc123.jpg');">
```

Reemplaza `https://i.imgur.com/abc123.jpg` con tus links reales.

### Paso 3: Prueba

1. Guarda el archivo (Ctrl+S)
2. Recarga la página (F5)
3. ¡Verás tus fotos!

---

## OPCIÓN 2: Subirlas a tu proyecto (Más Pro)

### Paso 1: Copia tus fotos

1. En Finder, ve a tu carpeta de fotos
2. Selecciona 6 fotos que te gusten
3. Cópialas (Cmd+C)

### Paso 2: Pega en assets/

1. En VS Code, ve a la carpeta `assets/`
2. Clic derecho → "Paste" (Pegar)
3. Debería verse así:
   ```
   assets/
   ├── foto1.jpg
   ├── foto2.jpg
   ├── foto3.jpg
   ├── foto4.jpg
   ├── foto5.jpg
   └── foto6.jpg
   ```

### Paso 3: Actualiza index.html

En el HTML, reemplaza las URLs:

```html
<!-- ANTES -->
<div class="gallery-image" style="background-image: url('https://via.placeholder.com/400x400/f5e6d3/d4a574?text=Foto+1');">

<!-- DESPUÉS -->
<div class="gallery-image" style="background-image: url('./assets/foto1.jpg');">
```

**Importante:** Usa `./assets/nombredelarchivo.jpg`

### Paso 4: Sube a GitHub

En Terminal:
```bash
cd ~/Desktop/catalina-15
git add .
git commit -m "Agregar fotos a la galería"
git push
```

Espera 1-2 minutos. ¡Listo!

---

## 📷 CONSEJOS

### Mejor calidad
- Fotos en **JPG** o **PNG**
- Mínimo **400x400 px**
- Que sean **cuadradas** (1:1 ratio)

### Cómo hacer fotos cuadradas
- iPhone: Abre Fotos → Edit → Crop → el ícono de proporciones → 1:1
- Android: Fotos Google → Edit → Crop → similar

### Orden recomendado
1. Foto actual (selfie)
2. Con amigos
3. En evento
4. Con familia
5. Viajando
6. Tu favorita

---

## 🆘 PROBLEMAS

### "Las fotos no se ven"
- ✅ Verifica que la URL sea correcta
- ✅ Recarga sin cache: Ctrl+Shift+R
- ✅ En Imgur, asegúrate de copiar "Direct Link"

### "Se ve distorsionada"
- ✅ Usa fotos cuadradas (1:1)
- ✅ El CSS la va a ajustar automáticamente

### "No funciona ./assets/foto.jpg"
- ✅ Verifica que el archivo esté en la carpeta `assets/`
- ✅ Escribe bien el nombre (mayúsculas/minúsculas importan)

---

## ✅ CUANDO TERMINES

Tu invitación mostrará 6 fotos hermosas de ti en una galería elegante. ¡Se verá increíble! 🎉

**Necesitas ayuda? Revisa esta guía nuevamente. Todo está bien explicado.**
