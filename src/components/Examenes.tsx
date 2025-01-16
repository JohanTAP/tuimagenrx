import React from "react";

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
}

const ServiceCard: React.FC<ServiceCardProps> = ( {
    title,
    description,
    image,
    alt,
} ) => (
    <div className="group relative w-full sm:w-1/2 lg:w-1/3 p-4">
        <div
            className="flex flex-col h-full overflow-hidden rounded-lg bg-card text-card-foreground shadow-lg transition-transform transform group-hover:scale-105"
            style={ {
                borderRadius: "var(--radius)",
            } }
        >
            <div
                className="h-64 bg-cover bg-center"
                style={ {
                    backgroundImage: `url(${ image })`,
                } }
                role="img"
                aria-label={ alt }
            ></div>
            <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-xl font-bold text-primary mb-2">{ title }</h3>
                <p className="text-muted-foreground">{ description }</p>
            </div>
        </div>
    </div>
);

const Examenes = () => (
    <section id="examenes" className="py-12 bg-background text-foreground">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                    <span
                        style={ {
                            fontSize: "69px",
                            transform: "skew(-10deg)",
                            display: "inline-block",
                            fontWeight: "bold",
                            color: "hsl(var(--primary))", // Asegurar color primario
                        } }
                    >
                        Nuestros Servicios
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap -mx-4">
                { services.map( ( service, index ) => (
                    <ServiceCard
                        key={ index }
                        title={ service.title }
                        description={ service.description }
                        image={ service.image }
                        alt={ service.alt }
                    />
                ) ) }
            </div>
        </div>
    </section>
);

export default Examenes;