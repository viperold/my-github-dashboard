export default function About() {
  return (
    <section id="about" className="py-24 px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Sobre mí
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Soy Fernando Gómez, estudiante de Ingeniería en Informatica de Inacap Valdivia, con una pasión por la tecnología 
            y el desarrollo de software. Aumentando mi experiencia en el desarrollo de aplicaciones móviles y arquitectruas de
            software, además del desarrollo de webs, y con un fuerte enfoque en la creación de sistemas escalables.
            Desde joven, me ha fascinado cómo la tecnología puede transformar ideas en soluciones tangibles, lo que me llevó a 
            crear CeroUno.
            
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