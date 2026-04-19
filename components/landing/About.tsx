export default function About() {
  return (
    <section id="about" className="py-24 px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Sobre mí
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Soy Fernando Gómez, desarrollador fullstack enfocado en la creación
            de sistemas escalables, visualización de datos y soluciones digitales
            modernas.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Fundador de CeroUno, donde combinamos tecnología, diseño y estrategia
            para construir productos digitales de alto impacto.
          </p>
        </div>

        <div className="bg-[#141a20] p-6 rounded-xl border border-white/5">
          <h3 className="mb-4 font-bold text-[#69daff]">
            Especialización
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>• Desarrollo de aplicaciones móviles</li>
            <li>• Arquitectura de software</li>
            <li>• Desarrollo fullstack</li>
            <li>• Sistemas escalables</li>
          </ul>
        </div>

      </div>
    </section>
  );
}