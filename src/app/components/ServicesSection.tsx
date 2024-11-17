import Cards from "./Cards";
import { servicesData } from "./Constants";

export default function ServicesSection() {
    return (
        <section className='text-center p-5'>
            <h2 className='text-4xl font-bold mb-6'>Servicios</h2>
            <div className= 'flex justify-center gap-5'>
                <Cards services={servicesData} />
            </div>
        </section>
    )
}