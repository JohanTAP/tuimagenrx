"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

const services = [
    {
        title: "Retroalveolar",
        description: "Radiografía unitaria de una pieza dental completa",
        image:
            "https://tuimagenrx.cl/wp-content/uploads/2024/03/retroalveolar.webp",
        alt: "Retroalveolar",
    },
    {
        title: "Bite Wing",
        description:
            "Radiografía Dentaria que permite visualizar caries interproximales",
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/03/bitewing.webp",
        alt: "Bite Wing",
    },
    {
        title: "Panorámica",
        description:
            "Radiografía que permite visualizar ambos maxilares con sus piezas dentales",
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/03/panoramica.webp",
        alt: "Panorámica",
    },
    {
        title: "Teleradiografía",
        description:
            "Radiografía Lateral de Cráneo, permite hacer todo tipo de mediciones faciales",
        image:
            "https://tuimagenrx.cl/wp-content/uploads/2024/03/teleradiografia.webp",
        alt: "Teleradiografía",
    },
    {
        title: "Radiografía de mano",
        description: "Radiografía a la mano",
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/03/mano.webp",
        alt: "Radiografía de mano",
    },
    {
        title: "Análisis Cefalométrico",
        description: "Análisis facial con mediciones de puntos craneometricos",
        image:
            "https://tuimagenrx.cl/wp-content/uploads/2024/03/analisiscefalometrico.webp",
        alt: "Análisis Cefalométrico",
    },
    {
        title: "Cone Beam Unitario",
        description:
            "Escáner Dental de zona que permite visualizar estructuras dentales en 3D",
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/03/unitario.webp",
        alt: "Cone Beam Unitario",
    },
    {
        title: "Cone Beam Por Maxilar",
        description: "Escáner de Maxilar o Mandíbula",
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/03/maxilar.webp",
        alt: "Cone Beam Por Maxilar",
    },
    {
        title: "Cone Beam Bimaxilar",
        description: "Escáner 3D de ambos maxilares o dentadura completa",
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/02/cbct-bimax-10.jpg",
        alt: "Cone Beam Bimaxilar",
    },
    {
        title: "Cone Beam Facial Completo",
        description: "Escáner de Cráneo completo",
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/03/facialcompleta.webp",
        alt: "Cone Beam Facial Completo",
    },
    {
        title: "Cone Beam ATM",
        description: "Escáner de Articulación Temporomandibular",
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/03/atm.webp",
        alt: "Cone Beam ATM",
    },
    {
        title: "Fotografías clínicas",
        description: "Set de fotografías clínicas al paciente",
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/03/fotoclinica.webp",
        alt: "Cefalometría",
    },
    {
        title: "Escáner Intraoral",
        description: "Escáner a la dentadura por maxilar o bimaxilars",
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/03/intraoral.webp",
        alt: "Cefalometría",
    },
    {
        title: "Impresión 3D y Guías Quirúrgicas",
        description: "Impresión 3D para planificaciones",
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/02/impresion-3d-de-guias-quirurgicas-para-implantes-dentales.jpg",
        alt: "Cefalometría",
    },
];

interface ServiceCardProps
{
    title: string;
    description: string;
    image: string;
    alt: string;
    delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ( { title, description, image, alt, delay } ) =>
{
    const { ref, inView } = useInView( { triggerOnce: true, threshold: 0.2 } );

    return (
        <div
            ref={ ref }
            className={ `relative w-full h-full transform-gpu transition-all duration-500 ease-out 
                ${ inView ? "opacity-100 scale-100" : "opacity-0 scale-95" }` }
            style={ { transitionDelay: `${ delay }s` } }
        >
            <Card className="relative flex flex-col h-full overflow-hidden rounded-lg shadow-lg transform hover:scale-[1.02]">
                <div className="w-full h-[200px]">
                    <img
                        src={ image }
                        alt={ alt }
                        className="w-full h-full object-cover block"
                    />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                    <CardHeader className="p-0">
                        <CardTitle className="text-base font-bold text-primary">{ title }</CardTitle>
                    </CardHeader>
                    <CardContent className="min-h-[100px] flex items-center p-0">
                        <CardDescription className="text-sm text-muted-foreground">{ description }</CardDescription>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
};

const Examenes = () => (
    <section id="examenes" className="py-10 bg-background text-foreground">
        <div className="container mx-auto px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-primary">
                    <span className="inline-block transform skew-x-[-10deg]">Nuestros Servicios</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                { services.map( ( service, index ) => (
                    <ServiceCard
                        key={ index }
                        title={ service.title }
                        description={ service.description }
                        image={ service.image }
                        alt={ service.alt }
                        delay={ Math.min( index * 0.1, 0.4 ) }
                    />
                ) ) }
            </div>
        </div>
    </section>
);

export default Examenes;