# ⚙️ Configuración Formspree - Guía Rápida

## Paso 1: Registrarse en Formspree

1. Abre https://formspree.io
2. Haz click en "Sign Up" (Registrarse)
3. Usa tu email y contraseña
4. Completa el registro

## Paso 2: Crear un Nuevo Formulario

1. En Formspree, click en "Create form"
2. Selecciona "Email" como destino
3. Ingresa el email donde recibirás las confirmaciones: `TU_EMAIL@gmail.com`
4. Elige el nombre: "Catalina 15 años" (opcional)
5. Click en "Create"

## Paso 3: Obtener tu ID

Verás una URL así:
```
https://formspree.io/forms/f/xyzabc123def456/settings
```

Tu ID es la parte después de `/f/`:
```
xyzabc123def456
```

## Paso 4: Actualizar index.html

1. Abre `index.html` en VS Code
2. Presiona `Ctrl+F` (o `Cmd+F` en Mac)
3. Busca: `formspree.io/f/REEMPLAZAR`
4. Reemplaza `REEMPLAZAR` con tu ID

**Ejemplo:**
```html
<!-- ANTES: -->
<form class="confirmation-form" id="confirmationForm" method="POST" action="https://formspree.io/f/REEMPLAZAR">

<!-- DESPUÉS: -->
<form class="confirmation-form" id="confirmationForm" method="POST" action="https://formspree.io/f/xyzabc123def456">
```

5. Guarda el archivo (Ctrl+S)

## Paso 5: Probar el Formulario

1. Abre la página con Live Server
2. Completa el formulario de confirmación
3. Haz click en "ENVIAR CONFIRMACIÓN"
4. Deberías recibir un email en tu bandeja

**¡Listo! El formulario está funcional.**

---

## Troubleshooting

### El formulario no se envía
- ✅ Verifica que el ID esté correcto
- ✅ Mira la consola (F12 → Console) para errores
- ✅ En Formspree, confirma el email (te envían un email de verificación)

### No recibo el email
- ✅ Revisa SPAM
- ✅ En Formspree Settings, verifica el email destino
- ✅ Prueba desde otro dispositivo/navegador

### Cambiar el email destino
1. En Formspree, ve a Settings
2. Cambia el "Recipient email"
3. Confirma el nuevo email
4. ¡Listo!

---

Para más ayuda: https://formspree.io/help
