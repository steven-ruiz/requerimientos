'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardView({img, price, serviceName, serviceLink}: {img: string, price: number, serviceName: string, serviceLink: string}) {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const formattedPrice = price.toLocaleString('es-CR', { style: 'currency', currency: 'CRC' });
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
                    <button className='bg-[#1a187d] border border-black p-2' onClick={() => setSelectedDate(new Date())}>
                        <span className="text-white mx-2">
                            Agendar
                        </span>
                    </button>
                    <span className="text-white mx-2">
                        {serviceName}
                    </span>
                    <span>{formattedPrice}</span>
                </div>
            </div>
        </Link>
    )
}