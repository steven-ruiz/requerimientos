import { servicesData } from "@/app/components/Constants";
import Image from "next/image";

export default function Service({params}: {params: {slug: string}}) {
    const service = servicesData.find(service => service.serviceLink === `/service/${params.slug}`);
    return(
        <div className="mx-auto p-8 text-center flex flex-col gap-4 items-center max-w-[820px]">
            <h1 className="text-4xl font-bold">{service?.serviceName}</h1>
            <Image src={service?.serviceImage || ""} alt={service?.serviceName || ""} width={800} height={800}/>
            <p className="text-lg">{service?.serviceDescription}</p>
            <div className="flex flex-col justify-between gap-4">
                <div className="flex flex-wrap gap-8">
                    <div>
                        <h2 className="text-2xl font-bold border-b-[1px] border-white pb-2-">Duración</h2>
                        <p className="text-lg pt-5">{service?.serviceDuration} minutos</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold border-b-[1px] border-white pb-2">Ofrecemos en</h2>
                        <ul className="list-inside text-lg pt-5">
                            {service?.serviceLocation.map((location, index) => (
                                <li className="" key={index}>{location}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold border-b-[1px] border-white pb-2">Precio</h2>
                        <p className="text-lg pt-5">{service?.servicePrice.toLocaleString('es-CR', { style: 'currency', currency: 'CRC' })}</p>
                    </div>
                </div>    
                <div>
                    <h2 className="text-2xl font-bold border-b-[1px] border-white pb-2">Empleados</h2>
                    <ul className="list-inside text-lg pt-5">
                        {service?.serviceEmployees.map((employee, index) => (
                            <li className="" key={index}>{employee}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-full max-w-md mt-8">
                <h2 className="text-2xl font-bold border-b-[1px] border-white pb-2 mb-4">Seleccionar Fecha y Hora</h2>
                <input 
                    type="datetime-local" 
                    className="w-full p-2 rounded bg-white/10 text-white border border-white/30 focus:outline-none focus:border-white"
                    min={new Date().toISOString().split('T')[0]}
                />
            </div>
        </div>
    )
}