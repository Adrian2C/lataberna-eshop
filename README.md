# 🛒 La Taberna - Tienda E-commerce React

**La Taberna** es una tienda online desarrollada en **React.js** que permite a los usuarios explorar productos, añadirlos al carrito y realizar compras simuladas. Además, incluye un panel de administrador con autenticación para gestionar productos fácilmente.

---

## 🚀 Características

- 🛍️ Catálogo de productos dinámico
- 🔎 Buscador con filtrado en tiempo real
- 🛒 Carrito de compras con persistencia local
- 🧑‍💼 Login seguro de administrador
- 🧠 Panel CRUD completo para productos
- 🧩 Gestión global de estado con Context API
- 📱 Interfaz responsive con menú hamburguesa en mobile
- 🔐 Rutas protegidas según autenticación
- 🎉 Notificaciones con React Toastify y SweetAlert2
- 🔍 SEO básico con `react-helmet-async`
- 🌐 Integración con [MockAPI](https://mockapi.io/)

---

## 📁 Estructura del Proyecto

src/
├── assets/ # Estilos y recursos estáticos
├── components/ # Componentes reutilizables (Header, Cart, Productos, etc.)
├── context/ # Contextos globales: Cart, Admin, Auth
├── pages/ # Páginas principales (Home, Admin, Contacto, etc.)
├── App.jsx # Definición de rutas
├── main.jsx # Punto de entrada del proyecto
└── index.css # Estilos base

yaml
Copiar
Editar

---

## 🧪 Tecnologías Usadas

- ⚛️ React 18+
- 📦 Vite
- 🌐 React Router DOM
- 📡 MockAPI
- 📦 Context API
- 🔐 LocalStorage
- 💨 Tailwind CSS (o utilitarios propios)
- 🛎️ React Toastify
- 📢 SweetAlert2
- 🔍 react-helmet-async

---

## 🧑‍💻 Instalación

1. Cloná el repositorio:

```bash
git clone https://github.com/tuusuario/la-taberna.git
cd la-taberna
Instalá las dependencias:

bash
Copiar
Editar
npm install
Ejecutá el servidor de desarrollo:

bash
Copiar
Editar
npm run dev
El sitio estará disponible en http://localhost:5173

🔐 Acceso como Administrador
Para ingresar al panel de administración:

Ir a /login

Ingresar credenciales válidas (ver data/users.json)

Una vez autenticado, el usuario será redirigido automáticamente al panel /admin.

🧠 Funcionalidades del Administrador
Crear, editar y eliminar productos

Edición en modal con validación

Confirmaciones con SweetAlert

Paginación de productos

Responsive en todas las vistas

👨‍🏫 Autor
Adrián Coceres
📧 coceres.adrian@gmail.com
🐙 GitHub
📅 Proyecto desarrollado en 2025

📝 Licencia
Este proyecto está bajo la licencia MIT. Libre para uso, modificación y distribución con fines educativos o comerciales.