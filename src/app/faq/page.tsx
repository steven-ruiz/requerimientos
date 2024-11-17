import { faqData } from "../components/Constants";
export default function FAQ() {
    return (
        <div className="mt-24 px-10">
            <h1 className="text-4xl font-bold mb-8 pt-4">Preguntas Frecuentes</h1>
            <div className="flex flex-col gap-6">
                {faqData.map((faq, index) => (
                    <div key={index} className="bg-white/10 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
                        <p className="text-gray-300">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}