import { servicesData } from "@/app/components/Constants";

export default function Service({params}: {params: {slug: string}}) {
    const service = servicesData.find(service => service.serviceLink === `/service/${params.slug}`);
    return(
        <div>
            <h1>{service?.serviceName}</h1>
        </div>
    )
}