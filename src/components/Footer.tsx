"use client";

import { Mail, Facebook, Instagram, Music2, MapPin, ArrowUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const branches = [
    {
        name: "Talca Centro",
        address: "Uno Sur 690, Edif. Plaza Talca, Piso 7, Of. 715",
        link: "https://maps.app.goo.gl/KFa7piJNLRVbJLfQ8",
    },
    {
        name: "Talca Las Rastras",
        address: "Av. 30 Oriente 1546, Edif. Centro Las Rastras II, Piso 7, Of. 704",
        link: "https://maps.app.goo.gl/qEecv72QVDCJ8oCN8",
    },
    {
        name: "Talca Pichimapu",
        address: "Av. Las Rastras 1285, Edif. Especialidades Pichimapu, Piso 4, Of. 404",
        link: "http://maps.app.goo.gl/8Q87wTrSmVcDBuHD7",
    },
    {
        name: "Chillán",
        address: "Bulnes 847, Edif. Alicura, Piso 1, Of. 102",
        link: "https://maps.app.goo.gl/5McqFJH4riCVhgeV7",
    },
];

const Footer = () =>
{
    return (
        <footer id="contacto" className="bg-muted py-5 text-foreground">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="flex flex-col items-start">
                        <img
                            src="https://tuimagenrx.cl/wp-content/uploads/2024/02/Logo-Transparente.png"
                            alt="TuImagenRx"
                            className="w-48 h-auto"
                        />
                        <p className="text-muted-foreground text-sm mt-3">
                            RADIOGRAFÍAS DENTALES DIGITALES EN TALCA Y CHILLÁN
                        </p>
                    </div>

                    <div className="col-span-2">
                        <h6 className="text-lg font-bold text-primary mb-2">Sucursales</h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            { branches.map( ( branch, index ) => (
                                <div key={ index } className="flex items-start">
                                    <MapPin className="w-5 h-5 text-primary mr-2" />
                                    <a href={ branch.link } target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:underline">
                                        <strong>{ branch.name }</strong> <br />
                                        { branch.address }
                                    </a>
                                </div>
                            ) ) }
                        </div>
                    </div>

                    <div>
                        <h6 className="text-lg font-bold text-primary mb-2">Contáctanos</h6>
                        <div className="flex items-center mb-1">
                            <Mail className="w-5 h-5 text-primary mr-2" />
                            <a href="mailto:contacto@tuimagenrx.cl" className="text-sm text-foreground hover:underline">
                                contacto@tuimagenrx.cl
                            </a>
                        </div>

                        <h6 className="text-lg font-bold text-primary mb-2">Síguenos</h6>
                        <div className="flex space-x-4">
                            <a href="http://facebook.com/tuimagenrx" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-6 h-6 text-primary hover:scale-110 transition-transform" />
                            </a>
                            <a href="http://instagram.com/tuimagenrx" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-6 h-6 text-primary hover:scale-110 transition-transform" />
                            </a>
                            <a href="http://tiktok.com/@tuimagenrx" target="_blank" rel="noopener noreferrer">
                                <Music2 className="w-6 h-6 text-primary hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                <Separator className="my-3" />

                <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>© { new Date().getFullYear() } Tu Imagen Rx - Todos los derechos reservados</span>
                    <a href="https://agenciaideaspro.cl" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline">
                        Diseñado por Agencia Ideas Pro
                    </a>
                    <a href="#top" className="bg-primary p-2 rounded-full text-white shadow-lg hover:bg-opacity-80 transition">
                        <ArrowUp className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
