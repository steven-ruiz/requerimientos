import Image from "next/image";

export default function Home() {
  return (
    <><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-3">Desarrollo Web</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Creamos sitios web modernos y responsivos utilizando las últimas tecnologías.
        </p>
        <div className="flex items-center text-blue-500">
          <span>Más información</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-3">Aplicaciones Móviles</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Desarrollamos apps nativas y multiplataforma para iOS y Android.
        </p>
        <div className="flex items-center text-blue-500">
          <span>Más información</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-3">Consultoría IT</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Asesoramiento experto para optimizar sus procesos tecnológicos.
        </p>
        <div className="flex items-center text-blue-500">
          <span>Más información</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div></>
  );
}
