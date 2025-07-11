import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const Contactos = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-druid px-4 py-16 sm:py-24">
        <section className="bg-pergamino/90 backdrop-blur-md max-w-4xl mx-auto p-8 rounded-xl shadow-lg border border-forge">
          <div className="text-center mb-10 ">
            <h1 className="contact-title ">Contáctanos</h1>
            <p className="mt-4 text-lg text-druid">
              Cuéntanos tus necesidades y encontraremos una solución juntos.
            </p>
          </div>

          <form method="POST" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="first-name" className="text-sm font-semibold text-dragon mb-1">
                Nombre
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                placeholder='Nombre'
                required
                className="rounded-md px-4 py-2 bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rune"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="last-name" className="text-sm font-semibold text-dragon mb-1">
                Apellido
              </label>
              <input
                id="last-name"
                name="last-name"
                placeholder='Apellido'
                type="text"
                required
                className="rounded-md px-4 py-2 bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rune"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label htmlFor="email" className="text-sm font-semibold text-dragon mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder='mail@mail.com'
                required
                className="rounded-md px-4 py-2 bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rune"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label htmlFor="phone-number" className="text-sm font-semibold text-dragon mb-1">
                Teléfono
              </label>
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                placeholder="123-456-7890"
                className="rounded-md px-4 py-2 bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rune"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label htmlFor="message" className="text-sm font-semibold text-dragon mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                placeholder='Cuentanos un poco mas...'
                rows={4}
                required
                className="rounded-md px-4 py-2 bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rune"
              ></textarea>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-rune text-bg hover:text-pergamino hover:bg-dragon font-semibold py-3 rounded-md transition duration-300 focus:outline-none"
              >
                Enviar
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Contactos
