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
    const { ref, inView } = useInView( {
        triggerOnce: true,
        threshold: 0,
        rootMargin: '100px 0px',
    } );

    return (
        <div
            ref={ ref }
            className={ `relative w-full max-w-md transform-gpu transition-all duration-700 ease-out px-4
                ${ inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full" }` }
            style={ { transitionDelay: `${ delay }s` } }
        >
            <Card className="group relative h-[225px] w-[350px] p-6 rounded-lg shadow-lg transition-transform hover:scale-[1.02] flex flex-col items-center justify-center text-center">
                <CardHeader className="flex flex-col items-center justify-center space-y-4 p-0">
                    <div className="rounded-full bg-primary/10 p-4 flex items-center justify-center">
                        { icon }
                    </div>
                    <CardTitle className="text-lg font-bold text-primary">{ title }</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col items-center justify-center text-center">
                    <CardDescription className="text-sm text-muted-foreground">
                        { description }
                    </CardDescription>
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
            className="relative py-12 bg-cover bg-center min-h-screen w-full overflow-hidden flex items-start lg:px-48"
            style={ { backgroundImage: "url('/calidad.webp')" } }
        >
            <div className="container mx-auto flex justify-start">
                <div className="grid grid-cols-1 gap-6">
                    { flipBoxes.map( ( box, index ) => (
                        <FlipBox
                            key={ index }
                            icon={ box.icon }
                            title={ box.title }
                            description={ box.description }
                            delay={ Math.min( index * 0.1, 0.4 ) }
                        />
                    ) ) }
                </div>
            </div>
        </section>
    );
}