export default function AboutUs() {
    return (
        <div className="min-h-screen p-8 flex flex-col gap-8 max-w-[1200px] mx-auto">
            <section className="text-center">
                <h1 className="text-4xl font-bold mb-6">Acerca de Nosotros</h1>
                <p className="text-lg max-w-3xl mx-auto">
                    Somos un equipo dedicado de profesionales comprometidos con brindar servicios de la más alta calidad. Nuestra misión es ayudar a nuestros clientes a verse y sentirse mejor, ofreciendo una experiencia personalizada y resultados excepcionales.
                </p>
            </section>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/5 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
                    <p>Proporcionar servicios excepcionales que mejoren la confianza y el bienestar de nuestros clientes, utilizando las últimas técnicas y productos de la más alta calidad.</p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
                    <p>Ser reconocidos como el referente principal en servicios de belleza y bienestar, destacando por nuestra excelencia, innovación y atención personalizada.</p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Nuestros Valores</h2>
                    <ul className="list-disc list-inside">
                        <li>Excelencia en el servicio</li>
                        <li>Profesionalismo</li>
                        <li>Innovación continua</li>
                        <li>Atención personalizada</li>
                        <li>Compromiso con el cliente</li>
                    </ul>
                </div>
            </section>

            <section className="text-center">
                <h2 className="text-3xl font-bold mb-6">Nuestro Equipo</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white/5 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Steven Ruiz</h3>
                        <p className="text-sm mb-4">Ingeniero de Software</p>
                        <p>Más de 10 años de experiencia en el desarrollo de software.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Alejandro Naranjo</h3>
                        <p className="text-sm mb-4">Gerente de Proyectos</p>
                        <p>Experto en las últimas técnicas y tendencias del sector.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Alejandro Vargas</h3>
                        <p className="text-sm mb-4">Gerente General</p>
                        <p>Dedicado a asegurar la mejor experiencia para nuestros clientes.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}