import { motion } from "framer-motion";
import profilePic from "./assets/profile.jpeg";
import logo from "./assets/logo.svg";

const profile = {
  nombre: "Alonso Castro",
  foto: profilePic,
  titulo: "Desarrollador / Profesional Innovador",
  linkedin: "https://www.linkedin.com/in/alonso-castro-guzman/",
  email: "dracobelo23@gmail.com",
  cv: "/cv.pdf", // coloca tu CV en public/cv.pdf para que este enlace funcione
  objetivo: "Consolidar mi perfil como desarrollador especializado en soluciones de comercio electrónico inteligentes, mejorando la conversión y experiencia del usuario."
};

const competencias = [
  "Desarrollo web con React, Spring Boot y TailwindCSS",
  "Integración de APIs REST y seguridad con OAuth2",
  "Diseño UX/UI para tiendas digitales",
  "Gestión de proyectos ágiles"
];

const experiencias = [
  {
    titulo: "Pasantía Full Stack",
    empresa: "Sapiens Consulting",
    periodo: "2024",
    descripcion: "Desarrollo de funcionalidades front-end y backend para aplicación web interna."
  },

];

const proyectos = [
  {
    titulo: "TaskFlow",
    descripcion: "Aplicación móvil multiplataforma para la gestión de tareas y recordatorios con sincronización en la nube y modo oscuro.",
    imagen: "src/assets/project1.png"
  },
  {
    titulo: "ShopEase",
    descripcion: "Plataforma web de e-commerce moderna con carrito de compras, pasarela de pago segura y panel de administración.",
    imagen: "src/assets/project2.png"
  }
];


const noticias = [
  {
    titulo: "Artículo: Innovación tecnológica en Perú",
    link: "#",
    fuente: "TechLatam"
  },
  {
    titulo: "Artículo: IA en educación",
    link: "#",
    fuente: "EduTech"
  },
  {
    titulo: "AI-powered Web Systems",
    link: "#",
    fuente: "Software Today"
  }
];


export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur z-50 px-8 py-4 flex justify-between items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            {profile.nombre}
          </div>
        </div>
        <ul className="flex space-x-6 text-sm">
          {["Inicio", "Perfil", "Experiencia", "Proyectos", "Noticias", "Contactos"].map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec.toLowerCase()}`}
                className="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
              >
                {sec}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      <main className="pt-28 space-y-32">
        {/* INICIO */}
        <motion.section
          id="inicio"
          className="text-center px-6 py-20 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 text-white"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="Marca" className="w-12 h-12 mx-auto mb-4" />
          <img
            src={profile.foto}
            alt="Foto perfil"
            className="w-36 h-36 mx-auto rounded-full border-4 border-white shadow-lg object-cover"
          />
          <h2 className="text-4xl font-bold mt-6">{profile.titulo}</h2>
          <p className="mt-4 max-w-xl mx-auto leading-relaxed">
            Profesional apasionado por la tecnología, el diseño y la innovación, buscando
            siempre impactar mediante experiencias digitales de valor.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-indigo-50"
            >
              LinkedIn
            </a>

            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-indigo-50"
            >
              CV
            </a>

            <a
              href="#contactos"
              className="px-5 py-3 border border-white text-white rounded-lg hover:bg-white/20"
            >
              Contáctame
            </a>
          </div>
        </motion.section>

        {/* PERFIL */}
        <motion.section
          id="perfil"
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Perfil profesional</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Profesional con enfoque en desarrollo de software, que une diseño, lógica y experiencia de usuario
            para crear soluciones eficientes y atractivas. Mi meta es crecer en roles donde el impacto y la innovación
            sean el centro.
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-medium text-indigo-500">Objetivo profesional</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{profile.objetivo}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-medium text-indigo-500">Competencias</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
              {competencias.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* EXPERIENCIA / LOGROS */}
        <motion.section
          id="experiencia"
          className="bg-gray-100 dark:bg-gray-800 py-20"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Experiencia & Logros</h2>
            <div className="space-y-8">
              {experiencias.map((e, i) => (
                <motion.div
                  key={i}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition"
                  whileHover={{ scale: 1.03 }}
                >
                  <h3 className="text-xl font-semibold">{e.titulo} — {e.empresa}</h3>
                  <p className="text-sm text-indigo-500">{e.periodo}</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{e.descripcion}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* PROYECTOS */}
        <motion.section
          id="proyectos"
          className="max-w-6xl mx-auto px-6 py-20"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Proyectos destacados</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {proyectos.map((p, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.03 }}
              >
                <img src={p.imagen} alt={p.titulo} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{p.titulo}</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{p.descripcion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* NOTICIAS */}
        <motion.section
          id="noticias"
          className="px-6 py-20"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Noticias & Artículos</h2>
          <div className="space-y-4">
            {noticias.map((n, i) => (
              <motion.a
                key={i}
                href={n.link}
                className="block bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:bg-indigo-50 dark:hover:bg-gray-600 transition"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-lg font-semibold text-indigo-600">{n.titulo}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-1">{n.fuente}</p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* CONTACTOS */}
        <motion.section
          id="contactos"
          className="px-6 py-20 bg-indigo-600 text-white"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Contáctame</h2>
          <p className="max-w-lg mx-auto mb-6">Estoy abierto a colaborar en proyectos interesantes, ideas o networking.</p>

          <div className="flex justify-center gap-6 mb-6">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition-transform" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-2.5v-9h2.5v9zm-1.25-10.25c-.828 0-1.5-.673-1.5-1.5s.672-1.5 1.5-1.5 1.5.673 1.5 1.5-.672 1.5-1.5 1.5zm13 10.25h-2.5v-4.75c0-1.134-.02-2.593-1.581-2.593-1.582 0-1.824 1.235-1.824 2.511v4.832h-2.5v-9h2.4v1.236h.034c.334-.632 1.151-1.298 2.37-1.298 2.533 0 3 1.668 3 3.835v5.227z"/>
              </svg>
            </a>

            <a href={`mailto:${profile.email}`} className="text-white hover:scale-110 transition-transform" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.574l-12-8.713v12.426h24v-12.426l-12 8.713z"/>
              </svg>
            </a>
          </div>

        </motion.section>
      </main>

      <footer className="text-center py-6 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} {profile.nombre} — Todos los derechos reservados.
      </footer>
    </div>
  );
}
