"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Laptop, CheckSquare, Clock, Smile } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface FlipBoxProps
{
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: number;
}

const FlipBox: React.FC<FlipBoxProps> = ( { icon, title, description, delay } ) =>
{
    const { ref, inView } = useInView( { triggerOnce: true, threshold: 0.2 } );

    return (
        <div
            ref={ ref }
            className={ `relative w-full max-w-sm transform-gpu transition-all duration-500 ease-out 
                ${ inView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0" }` }
            style={ { transitionDelay: `${ delay }s` } }
        >
            <Card
                className="group relative rounded-lg shadow-lg transition-transform hover:scale-105 overflow-visible"
            >
                <CardHeader className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-gray-100 p-4">{ icon }</div>
                    <CardTitle className="text-lg font-semibold text-foreground">{ title }</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-sm text-foreground/60">{ description }</CardDescription>
                </CardContent>
            </Card>
        </div>
    );
};

export function Calidad ()
{
    const flipBoxes = [
        {
            icon: <Laptop className="h-8 w-8 text-primary" />,
            title: "Digitales",
            description: "De alta definición, 100% amigables con el medio ambiente."
        },
        {
            icon: <CheckSquare className="h-8 w-8 text-primary" />,
            title: "Diagnósticos certeros",
            description: "Nuestro equipo de profesionales entrega informes detallados."
        },
        {
            icon: <Clock className="h-8 w-8 text-primary" />,
            title: "Rapidez",
            description: "Entregamos los exámenes en el menor tiempo posible."
        },
        {
            icon: <Smile className="h-8 w-8 text-primary" />,
            title: "Calidad Humana",
            description: "Destacamos por nuestra experiencia y buen trato al usuario."
        }
    ];

    return (
        <section
            id="calidad"
            className="relative py-12 bg-cover bg-center"
            style={ {
                backgroundImage: "url('/public/calidad.webp')",
            } }
        >
            <div className="grid gap-3 px-4 sm:px-8 md:px-16 lg:px-48">
                { flipBoxes.map( ( box, index ) => (
                    <FlipBox
                        key={ index }
                        icon={ box.icon }
                        title={ box.title }
                        description={ box.description }
                        delay={ Math.min( index * 0.15, 0.6 ) }
                    />
                ) ) }
            </div>
        </section>
    );
}
