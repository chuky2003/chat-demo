/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      prueba: {
        colors: {
          'mi-azul': '#007bff',
        },
        'bg-blue-500': {
          backgroundColor: '#3b82f6', // Fondo azul
        },
        'text-white': {
          color: '#ffffff', // Texto blanco
        },
        'px-6': {
          paddingLeft: '1.5rem', // Padding horizontal
          paddingRight: '1.5rem', // Padding horizontal
        },
        'py': {
          paddingTop: '0.75rem', // Padding vertical
          paddingBottom: '0.75rem', // Padding vertical
        },
        'rounded-md': {
          borderRadius: '0.375rem', // Bordes redondeados
        },
        'hover:bg-blue-800': {
          '&:hover': {
            backgroundColor: '#1d4ed8', // Fondo azul más oscuro al pasar el ratón
          },
        },
        'hover:cursor-pointer': {
          '&:hover': {
            cursor: 'pointer', // Cambiar el cursor al pasar el ratón
          },
        },
      },
    },
  },
  plugins: [],
}

