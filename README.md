# Kodigo Music 🎵

Una SPA de música inspirada en Spotify, Deezer y Apple Music, construida con React + Vite.

## 📌 Características

- ✅ Diseño atractivo y completamente responsive.
- ✅ Rutas implementadas con `react-router-dom`:
  - `/` → Home / Descubrimiento
  - `/library` → Biblioteca personal
- ✅ Formulario validado:
  - Registro de usuario / Búsqueda / Crear playlist
  - Validación manual o con `react-hook-form`
- 🆙 Gestión de estado (Context API)
- 🚀 Deploy en producción (Vercel)

## 🔐 Autenticación con Firebase

Se implementará registro e inicio de sesión usando Firebase Authentication:

- 📧 Registro con correo y contraseña
- 🔑 Inicio de sesión con email/password
- 🔍 Protección de rutas
- ⚙️ Configuración segura vía variables de entorno (`.env`)

## 🛠 Tecnologías

- [Vite](https://vitejs.dev/)
- [React.js](https://reactjs.org/)
- [react-router-dom](https://reactrouter.com/)
- Validación de formularios con React o `react-hook-form`
- CSS con Bootstrap

## 🔧 Instalación

```bash
git clone https://github.com/tu-usuario/kodigo-music.git
cd kodigo-music
npm install
npm run dev

