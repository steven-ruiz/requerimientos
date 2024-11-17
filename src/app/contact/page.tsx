export default function Contact() {
    return (
        <div className="mt-24 px-10">
            <h1 className="text-4xl font-bold mb-8">Contáctanos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Envíanos un mensaje</h2>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Nombre completo"
                            className="p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            className="p-2 border border-gray-300 rounded"
                        />
                        <textarea
                            placeholder="Mensaje"
                            rows={5}
                            className="p-2 border border-gray-300 rounded"
                        />
                        <button
                            type="submit"
                            className="bg-[#1a187d] text-white py-2 px-4 rounded hover:bg-[#15145f]"
                        >
                            Enviar mensaje
                        </button>
                    </form>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-black">
                    <h2 className="text-2xl font-semibold mb-4">Información de contacto</h2>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="font-semibold">Dirección</h3>
                            <p>San José, Costa Rica</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Teléfono</h3>
                            <p>+506 2222-2222</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <p>info@handyguys.cr</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Horario de atención</h3>
                            <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                            <p>Sábados: 8:00 AM - 2:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}