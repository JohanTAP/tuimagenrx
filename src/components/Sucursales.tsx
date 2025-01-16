import { MapPin, Mail, Clock, Phone } from "lucide-react";

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
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/03/edificio-plaza.webp",
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
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/02/edificio-centro-las-rastras.jpg",
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
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/03/chillan.webp",
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
        image: "https://tuimagenrx.cl/wp-content/uploads/2024/03/centro-pichimapu.webp",
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
}

const BranchCard: React.FC<BranchCardProps> = ( { name, address, building, whatsapp, whatsappLink, email, mapLink, hours, image } ) => (
    <div className="group relative w-full h-full">
        <div className="flex flex-col sm:flex-row h-full max-w-2xl overflow-hidden rounded-lg bg-card text-card-foreground shadow-lg border border-border transition-transform transform group-hover:scale-[1.02]">
            <div
                className="w-full sm:w-1/3 h-48 sm:h-auto bg-cover bg-center"
                style={ { backgroundImage: `url(${ image })` } }
                role="img"
                aria-label={ name }
            ></div>
            <div className="w-full sm:w-2/3 p-6 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-foreground">{ name }</h3>
                <p className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="w-4 h-4 mr-2" /> { address }
                </p>
                <p className="text-sm text-muted-foreground">{ building }</p>

                <div className="mt-2 space-y-1 text-sm">
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
            </div>

        </div>
    </div>
);

const Sucursales = () => (
    <section
        id="sucursales"
        className="py-12 bg-gradient-to-b from-[#e9e6f3] to-[#ffffff] text-foreground relative"
    >
        <div className="container mx-auto px-6">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">
                    <span
                        style={ {
                            fontSize: "50px",
                            transform: "skew(-10deg)",
                            display: "inline-block",
                            fontWeight: "bold",
                        } }
                    >
                        Nuestras Sucursales
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                { branches.map( ( branch, index ) => (
                    <BranchCard key={ index } { ...branch } />
                ) ) }
            </div>
        </div>
    </section>
);

export default Sucursales;