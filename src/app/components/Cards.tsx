import CardView from "./CardView";

export default function Cards({services}: {services: JSON[]}) {
    return (
      <div className='grid grid-cols-3 justify-center gap-4'>
        {services.map((service, index) => {
            return (
                <CardView 
                    key={index}
                    img={service.serviceImage} 
                    price={service.servicePrice}
                    serviceName={service.serviceName}
                    serviceLink={service.serviceLink}
                />
            )
        })}
      </div>
    )
}