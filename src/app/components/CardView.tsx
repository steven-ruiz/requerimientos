'use client'
import Image from "next/image";
import Link from "next/link";

export default function CardView({img, price, serviceName, serviceLink}: {img: string, price: number, serviceName: string, serviceLink: string}) {
    return (
        <Link className="flex flex-col gap-4" href={serviceLink}>

            <Image 
                src={img} 
                alt={img} 
                width={350} 
                height={400}
                className="w-full h-full object-cover"
            />
            <div className="font-bold">
                <div className='flex justify-between items-center mt-2.5 border-t-2 border-black pt-2.5'>
                    <span className="text-white mx-2">
                        {serviceName}
                    </span>
                    <button className='bg-[#1a187d] border border-black p-2'>
                        <span>Ver detalles</span>
                    </button>
                </div>
            </div>
        </Link>
    )
}