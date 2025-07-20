import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 text-gray-800 dark:text-gray-300 px-6 md:px-16 pt-10 pb-10">
      {/* Línea superior y columnas con espacio */}
      <div className="border-t border-zinc-800 pt-6 pb-10 border-b">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 justify-between">
          {/* Columna 1 */}
          <div>
            <h2 className="text-xl font-bold mb-2">APNA</h2>
            <p className="text-sm">
              Tu tienda de pijamas online. Encuentra los mejores pijamas para toda la familia con calidad y estilo al mejor precio.
            </p>
          </div>

          {/* Columna 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Enlaces rápidos</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Hombres</a></li>
              <li><a href="#">Mujeres</a></li>
              <li><a href="#">Niños</a></li>
              <li><a href="#">Accesorios</a></li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Información</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Políticas y privacidad</a></li>
              <li><a href="#">Términos y condiciones</a></li>
            </ul>
          </div>

          {/* Columna 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              Contacto
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Calle 123<br />
              Bogotá<br />
              info@apna.com<br />
              Teléfono: +57 300 122 3344
            </p>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-sky-500 transition">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pie de página final */}
      <div className="text-center mt-8 text-sm text-gray-400">
        <p>© 2025 APNA. Todos los derechos reservados.</p>
        <p className="text-blue-400 mt-1">Diseñado con amor por APNA.</p>
      </div>
    </footer>
  );
}
