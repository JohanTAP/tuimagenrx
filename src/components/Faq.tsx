"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useInView } from "react-intersection-observer";

const faqs = [
    {
        question: "¿Cuál es el horario de atención?",
        answer: "Atendemos de lunes a viernes de 09:00 a 18:30 y sábados de 10:00 a 13:30 (TALCA CENTRO - CHILLÁN - LAS RASTRAS). Lunes a viernes de 09:00 a 18:30 (SANUS). Lunes a viernes de 11:00 a 20:00 (PICHIMAPU)."
    },
    {
        question: "¿Toman radiografías dentales a niños?",
        answer: "Sí, nuestro equipo está capacitado para realizar radiografías a niños, siempre y cuando exista cooperación del paciente."
    },
    {
        question: "¿Hay alguna indicación especial para tomografías volumétricas Cone Beam (scanner)?",
        answer: "No, solo debe retirarse artefactos metálicos de cabeza y cuello y/o prótesis dentales removibles."
    },
    {
        question: "¿Puedo tomarme una radiografía si estoy embarazada?",
        answer: "Sí. Contamos con protección adecuada (delantal plomado) para realizar tu examen radiográfico sin riesgos para ti y tu bebé."
    },
    {
        question: "¿Puedo tomarme una radiografía si tengo un marcapasos?",
        answer: "Sí. Las radiografías dentales utilizan radiación ionizante, que no interfiere con el funcionamiento de marcapasos."
    },
    {
        question: "¿Hay que tomar hora para realizar los exámenes?",
        answer: "No es necesario. Solo debes venir con la orden del dentista en papel o digital."
    },
    {
        question: "¿Hay alguna indicación especial para las radiografías?",
        answer: "Para panorámicas, telerradiografías y tomografía Cone Beam, es necesario retirar cualquier accesorio metálico del cuello hacia arriba."
    },
    {
        question: "No he recibido mi boleta o radiografías en el mail, ¿qué hago?",
        answer: "Revisa la carpeta de spam. Si no las encuentras, escríbenos a examenes@tuimagenrx.cl con el nombre del paciente."
    },
    {
        question: "¿Cuáles son los plazos de entrega?",
        answer: "Las radiografías simples se entregan por email inmediatamente. Estudios ortodóncicos o tomografías Cone Beam tardan hasta 3 días hábiles."
    },
    {
        question: "¿Entregan los exámenes físicamente?",
        answer: "Solo si el dentista lo solicita expresamente. Si es una radiografía retroalveolar unitaria, la entrega es de un día para otro."
    },
    {
        question: "¿Tiene algún costo la impresión de un examen?",
        answer: "La impresión no tiene costo si es que realmente el dentista la requiere físicamente."
    },
    {
        question: "Necesito cotizar radiografías, ¿Cómo lo puedo hacer?",
        answer: "Para cotizar por favor envía un mensaje al WhatsApp de tu sucursal más cercana o al correo contacto@tuimagenrx.cl."
    },
    {
        question: "Tengo Fonasa, Isapre o Caja de Compensación, ¿Hacen descuento?",
        answer: "FONASA, ISAPRES y las cajas de compensación no cubren ninguna presentación dental de este tipo, sin embargo, trabajamos con convenios directos con clínicas y dentistas donde se aplica un descuento a todas nuestras prestaciones."
    },
    {
        question: "Tengo Isapre, ¿cómo lo puedo comprar el bono?",
        answer: "Las isapres no están realizando convenios con centros radiológicos, por lo que se paga directo en nuestra consulta y después de manera personal, según el Plan de salud que la persona tenga, puede solicitar un reembolso si la Isapre lo permite."
    },
    {
        question: "¿Qué medios de pago tienen?",
        answer: "Efectivo, todas las tarjetas crédito/débito o transferencia."
    },
    {
        question: "Tengo seguro complementario, ¿ustedes completan el formulario?",
        answer: "Claro, podemos completar el formulario. Entregamos todos los documentos necesarios como la boleta impresa con los timbres, la orden de radiografías en original y el formulario firmado por la doctora."
    },
    {
        question: "No tengo correo, ¿Cómo me puedes mandar una radiografía?",
        answer: "Si el paciente no tiene un Mail, se le puede enviar todo a su WhatsApp."
    },
    {
        question: "Soy dentista y quiero hacer convenio",
        answer: "Agradecemos tu interés en entregar un gran servicio de radiografía a tus pacientes. Por favor, escríbenos al mail contacto@tuimagenrx.cl para poder coordinar una visita."
    }
];

const Faq = () =>
{
    const { ref, inView } = useInView( { triggerOnce: true, threshold: 0.1 } );

    return (
        <section
            ref={ ref }
            id="preguntas"
            className={ `py-12 bg-background text-foreground transition-all duration-700 ease-out transform 
                ${ inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10" }` }
        >
            <div className="container mx-auto px-48 text-center">
                <h2 className="text-4xl font-bold">
                    <span style={ { fontSize: "50px", transform: "skew(-10deg)", display: "inline-block", fontWeight: "bold", color: "hsl(var(--primary))" } }>
                        Preguntas Frecuentes
                    </span>
                </h2>

                <Accordion type="single" collapsible className="w-full divide-y divide-border mt-10">
                    { faqs.map( ( faq, index ) => (
                        <AccordionItem key={ index } value={ `faq-${ index }` } className="border-none">
                            <AccordionTrigger className="w-full px-4 py-3 text-lg font-semibold text-primary flex justify-between hover:bg-secondary transition-all min-h-[64px]">
                                { faq.question }
                            </AccordionTrigger>
                            <AccordionContent className="px-4 py-3 text-muted-foreground">
                                { faq.answer }
                            </AccordionContent>
                        </AccordionItem>
                    ) ) }
                </Accordion>
            </div>
        </section >
    );
};

export default Faq;