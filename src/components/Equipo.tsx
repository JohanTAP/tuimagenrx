const teamMembers = [
    {
        name: "Dra. Paula Ortiz Cantos",
        title: "Directora Clínica del centro radiológico",
        description: "Radióloga Oral y Maxilofacial",
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/02/paula-ortiz-cantos-476x381-1.png",
        alt: "Dra. Paula Ortiz Cantos",
    },
    {
        name: "Dr. Alejandro Hidalgo Rivas",
        title: "",
        description: "Radiólogo Oral y Maxilofacial",
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/02/alejandro-hidalgo-radiologo-tu-imagen-476x381-1.png",
        alt: "Dr. Alejandro Hidalgo Rivas",
    },
    {
        name: "Dra. Joseline Fritz Cifuentes",
        title: "",
        description: "Radióloga Oral y Maxilofacial",
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/02/joseline-fritz-radiologa-tu-imagen-476x381-1.png",
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
}

const TeamCard: React.FC<TeamCardProps> = ( { name, title, description, image, alt } ) => (
    <div className="group relative w-full sm:w-1/2 lg:w-1/3 p-4">
        <div
            className="flex flex-col h-full overflow-hidden rounded-lg bg-card text-card-foreground shadow-md border transition-transform transform group-hover:scale-105"
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
                <h3 className="text-xl font-bold text-foreground mb-2">{ name }</h3>
                { title && <p className="text-muted-foreground mb-1">{ title }</p> }
                <p className="text-muted-foreground">{ description }</p>
            </div>
        </div>
    </div>
);

const Equipo = () => (
    <section
        id="equipo"
        className="py-12 relative bg-fixed bg-center text-foreground"
        style={ {
            backgroundImage: `url('https://tuimagenrx.cl/wp-content/uploads/2024/03/equipo.webp')`,
        } }
    >
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                    <span
                        style={ {
                            fontSize: "69px",
                            transform: "skew(-10deg)",
                            display: "inline-block",
                            fontWeight: "bold",
                        } }
                    >
                        Nuestro Equipo
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap -mx-4">
                { teamMembers.map( ( member, index ) => (
                    <TeamCard
                        key={ index }
                        name={ member.name }
                        title={ member.title }
                        description={ member.description }
                        image={ member.image }
                        alt={ member.alt }
                    />
                ) ) }
            </div>
        </div>
    </section>
);

export default Equipo;
