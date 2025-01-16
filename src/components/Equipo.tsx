"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

const teamMembers = [
    {
        name: "Dra. Paula Ortiz Cantos",
        title: "Directora Clínica del centro radiológico",
        description: "Radióloga Oral y Maxilofacial",
        image: "/paula-ortiz-cantos-476x381-1.webp",
        alt: "Dra. Paula Ortiz Cantos",
    },
    {
        name: "Dr. Alejandro Hidalgo Rivas",
        title: "",
        description: "Radiólogo Oral y Maxilofacial",
        image: "/alejandro-hidalgo-radiologo-tu-imagen-476x381-1.webp",
        alt: "Dr. Alejandro Hidalgo Rivas",
    },
    {
        name: "Dra. Joseline Fritz Cifuentes",
        title: "",
        description: "Radióloga Oral y Maxilofacial",
        image: "/joseline-fritz-radiologa-tu-imagen-476x381-1.webp",
        alt: "Dra. Joseline Fritz Cifuentes",
    },
];

interface TeamCardProps
{
    name: string;
    title: string;
    description: string;
    image: string;
    alt: string;
    delay: number;
}

const TeamCard: React.FC<TeamCardProps> = ( { name, title, description, image, alt, delay } ) =>
{
    const { ref, inView } = useInView( { triggerOnce: true, threshold: 0.1 } );

    return (
        <div
            ref={ ref }
            className={ `w-full transition-all duration-700 ease-out transform 
                ${ inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10" }` }
            style={ { transitionDelay: `${ delay }s` } }
        >
            <Card className="group relative h-[390px] flex flex-col justify-between overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]">
                <div
                    className="h-40 w-full bg-cover bg-center flex-shrink-0"
                    style={ { backgroundImage: `url(${ image })` } }
                >
                    <img
                        src={ image }
                        alt={ alt }
                        width={ 476 }
                        height={ 381 }
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col flex-grow p-3">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-primary">{ name }</CardTitle>
                        { title && <p className="text-muted-foreground text-sm">{ title }</p> }
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardDescription className="text-sm text-muted-foreground">{ description }</CardDescription>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
};

const Equipo = () => (
    <section
        id="equipo"
        className="py-12 relative bg-fixed bg-center text-foreground"
        style={ {
            backgroundImage: `url('/equipo.webp')`,
        } }
    >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">
                    <span
                        style={ {
                            fontSize: "50px",
                            transform: "skew(-10deg)",
                            display: "inline-block",
                            fontWeight: "bold",
                            color: "hsl(var(--primary))",
                        } }
                    >
                        Nuestro Equipo
                    </span>
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                { teamMembers.map( ( member, index ) => (
                    <TeamCard
                        key={ index }
                        name={ member.name }
                        title={ member.title }
                        description={ member.description }
                        image={ member.image }
                        alt={ member.alt }
                        delay={ Math.min( index * 0.15, 0.6 ) }
                    />
                ) ) }
            </div>
        </div>
    </section>
);

export default Equipo;
