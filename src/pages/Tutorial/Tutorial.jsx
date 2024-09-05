import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import './Tutorial.css';
import '@justinribeiro/lite-youtube/lite-youtube.js';

export const Tutorial = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const faqData = [
        {
            question: "¿Por qué la app me pide compartir mi ubicación?",
            answer: "La app necesita acceder a tu ubicación para poder mostrarte la hora local exacta y ajustar el fondo de la app según tu zona horaria y las condiciones climáticas de tu ubicación. Esto permite una experiencia más personalizada y precisa."
        },
        {
            question: "¿Tiene en cuenta horario de verano y diferencias horarias entre países y zonas?",
            answer: "Sí, el convertor horario está siempre actualizado y toma en cuenta el horario de verano en aquellos países y zonas que lo aplican. Esto asegura que la hora que te mostramos sea siempre precisa, sin importar las diferencias horarias estacionales."
        },
        {
            question: "¿Cómo utilizo el Convertor Horario?",
            answer: "Simplemente ingresa la ciudad o la zona horaria que deseas consultar, y la app te mostrará la hora actual en ese lugar. También puedes comparar múltiples zonas horarias al mismo tiempo."
        },
        {
            question: "¿Es compatible con dispositivos móviles y de escritorio?",
            answer: "Sí, el Convertor Horario es compatible tanto con dispositivos móviles como de escritorio, permitiéndote acceder a la información desde cualquier lugar y en cualquier momento."
        },
        {
            question: "¿El Convertor Horario funciona sin conexión a internet?",
            answer: "No, necesitas una conexión a internet para que la app pueda acceder a la base de datos de zonas horarias y mantener la información actualizada."
        },
        {
            question: "¿El Convertor Horario es gratuito?",
            answer: "Sí, la aplicación es completamente gratuita."
        }
    ];

    const toggleQuestion = (index) => {
        setActiveQuestion(prev => prev === index ? null : index);
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">¿Cómo se usa?</h2>
                </div>
                <div className="card-content">
                    <p className="intro-text">
                        Si tienes dudas de cómo usar el conversor horario o el generador de invitaciones,
                        puedes revisar este video, donde te explicamos paso a paso el funcionamiento de la aplicación.
                    </p>
                    <div className="video-placeholder">
                        <lite-youtube videoid="LII8Nfu1sOE"></lite-youtube>
                    </div>
                    <section className="faq-section">
                        <h3 className="faq-title">Preguntas Frecuentes</h3>
                        <div className="faq-grid">
                            {faqData.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-card ${activeQuestion === index ? 'active' : ''}`}
                                >
                                    <div
                                        className="faq-card-header"
                                        onClick={() => toggleQuestion(index)}
                                    >
                                        <h4 className="faq-question">{faq.question}</h4>
                                        {activeQuestion === index ? (
                                            <ChevronUpIcon className="icon" />
                                        ) : (
                                            <ChevronDownIcon className="icon" />
                                        )}
                                    </div>
                                    {activeQuestion === index && (
                                        <div className="faq-card-content">
                                            <p className="faq-answer">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};