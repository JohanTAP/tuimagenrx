"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Mail, Clock, Phone } from "lucide-react";
import { useInView } from "react-intersection-observer";

const branches = [
    {
        name: "Talca Centro",
        address: "Uno Sur 690, Of. 715 - Piso 7",
        building: "Edif. Plaza Talca",
        whatsapp: "+5671 225 0794",
        whatsappLink: "https://api.whatsapp.com/send?phone=56712250794",
        email: "contacto@tuimagenrx.cl",
        mapLink: "https://maps.app.goo.gl/KFa7piJNLRVbJLfQ8",
        hours: [ "Lun - Vie de 09:00 a 18:30", "Sábados de 10:00 a 13:30" ],
        image: "/edificio-plaza.webp",
    },
    {
        name: "Talca Las Rastras",
        address: "Av. 30 Oriente 1546, Of. 704 - Piso 7",
        building: "Edif. Centro Las Rastras II",
        whatsapp: "+5671 274 0353",
        whatsappLink: "https://api.whatsapp.com/send?phone=56712740353",
        email: "contacto@tuimagenrx.cl",
        mapLink: "https://maps.app.goo.gl/qEecv72QVDCJ8oCN8",
        hours: [ "Lun - Vie de 09:00 a 14:00 y 15:00 a 18:30", "Sábados de 10:00 a 13:30" ],
        image: "/edificio-centro-las-rastras.webp",
    },
    {
        name: "Chillán",
        address: "Bulnes 847, Of. 102 - Piso 1",
        building: "Edif. Alicura",
        whatsapp: "+569 4960 6716",
        whatsappLink: "https://api.whatsapp.com/send?phone=56949606716",
        email: "contacto@tuimagenrx.cl",
        mapLink: "https://maps.app.goo.gl/5McqFJH4riCVhgeV7",
        hours: [ "Lun - Vie de 09:00 a 18:30", "Sábados de 10:00 a 13:30" ],
        image: "/chillan.webp",
    },
    {
        name: "Talca Pichimapu",
        address: "Av. Las Rastras 1285, Of. 404 - Piso 4",
        building: "Edif. Especialidades Pichimapu",
        whatsapp: "+5671 298 1717",
        whatsappLink: "https://api.whatsapp.com/send?phone=56712981717",
        email: "contacto@tuimagenrx.cl",
        mapLink: "http://maps.app.goo.gl/8Q87wTrSmVcDBuHD7",
        hours: [ "Lun - Vie de 10:00 a 14:00 y 15:00 a 19:00", "Sábado Cerrado" ],
        image: "/centro-pichimapu.webp",
    },
];

interface BranchCardProps
{
    name: string;
    address: string;
    building: string;
    whatsapp: string;
    whatsappLink: string;
    email: string;
    mapLink: string;
    hours: string[];
    image: string;
    delay: number;
}

const BranchCard: React.FC<BranchCardProps> = ( { name, address, building, whatsapp, whatsappLink, email, mapLink, hours, image, delay } ) =>
{
    const { ref, inView } = useInView( { triggerOnce: true, threshold: 0.1 } );

    return (
        <div
            ref={ ref }
            className={ `w-full transition-all duration-700 ease-out transform 
                ${ inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10" }` }
            style={ { transitionDelay: `${ delay }s` } }
        >
            <Card className="group relative flex sm:flex-row h-80 overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]">
                <div className="w-1/3 h-full">
                    <img
                        src={ image }
                        alt={ name }
                        width={400}
                        height={300}
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-2/3 p-6 flex flex-col justify-center">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-primary">{ name }</CardTitle>
                        <p className="text-sm text-muted-foreground flex items-center">
                            <MapPin className="w-4 h-4 mr-2" /> { address }
                        </p>
                        <p className="text-sm text-muted-foreground">{ building }</p>
                    </CardHeader>

                    <CardContent>
                        <div className="space-y-1 text-sm">
                            <a href={ whatsappLink } className="flex items-center text-primary hover:underline">
                                <Phone className="w-4 h-4 mr-2" /> { whatsapp }
                            </a>
                            <a href={ `mailto:${ email }` } className="flex items-center text-primary hover:underline">
                                <Mail className="w-4 h-4 mr-2" /> { email }
                            </a>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <div className="text-muted-foreground">
                                    { hours.map( ( line, index ) => (
                                        <p key={ index }>{ line }</p>
                                    ) ) }
                                </div>
                            </div>
                        </div>

                        <div className="mt-3">
                            <a href={ mapLink } className="inline-block bg-primary text-primary-foreground px-3 py-2 text-sm rounded-lg shadow-md hover:bg-primary/90 transition">
                                Ver en Google Maps
                            </a>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
};

const Sucursales = () => (
    <section id="sucursales" className="py-12 bg-gradient-to-b from-[#fdfdfd] to-[#e6e4f1] text-foreground relative">
        <div className="container mx-auto px-6">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold">
                    <span style={ { fontSize: "50px", transform: "skew(-10deg)", display: "inline-block", fontWeight: "bold", color: "hsl(var(--primary))" } }>
                        Nuestras Sucursales
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                { branches.map( ( branch, index ) => (
                    <BranchCard key={ index } { ...branch } delay={ Math.min( index * 0.15, 0.6 ) } />
                ) ) }
            </div>
        </div>
    </section>
);

export default Sucursales;
