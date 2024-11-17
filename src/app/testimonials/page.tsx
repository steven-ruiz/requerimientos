import { testimonialsData } from "../components/Constants";

export default function Testimonials() {
    return (
        <div className="mt-24 px-10">
            <h1 className="text-4xl font-bold mb-8 pt-4">Testimonios</h1>
            <div className="grid lg:grid-cols-2 gap-8">
                {testimonialsData.map((testimonial, index) => (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 italic mb-4">"{testimonial.testimonialText}"</p>
                        <div className="font-semibold">
                            <p className="text-sm text-gray-500">{testimonial.testimonialService}</p>
                            <p className="text-gray-500 pt-4">{testimonial.testimonialAuthor}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}