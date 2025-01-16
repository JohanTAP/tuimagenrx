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

export const Footer = () =>
{
    return (
        <footer id="contacto" className="bg-muted py-5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="flex flex-col items-start">
                        <img
                            src="/Logo-Transparente.webp"
                            alt="TuImagenRx Logo"
                            width={192}
                            height={80}
                            loading="lazy"
                            className="w-48 h-20"
                        />
                        <p className="text-zinc-700 text-sm mt-3">
                            Radiografías dentales digitales en Talca y Chillán
                        </p>
                    </div>

                    <div className="col-span-2">
                        <h2 className="text-lg font-bold text-primary mb-2">Sucursales</h2>
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
                        <h2 className="text-lg font-bold text-primary mb-2">Contáctanos</h2>
                        <div className="flex items-center mb-1">
                            <Mail className="w-5 h-5 text-primary mr-2" aria-hidden="true" />
                            <a 
                                href="mailto:contacto@tuimagenrx.cl" 
                                className="text-sm text-zinc-700 hover:underline min-w-[44px] min-h-[44px] flex items-center"
                            >
                                contacto@tuimagenrx.cl
                            </a>
                        </div>

                        <h2 className="text-lg font-bold text-primary mb-2">Síguenos</h2>
                        <div className="flex space-x-4">
                            <a 
                                href="http://facebook.com/tuimagenrx" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="min-w-[44px] min-h-[44px] flex items-center justify-center"
                                aria-label="Síguenos en Facebook"
                            >
                                <Facebook className="w-6 h-6 text-primary hover:scale-110 transition-transform" aria-hidden="true" />
                            </a>
                            <a 
                                href="http://instagram.com/tuimagenrx" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="min-w-[44px] min-h-[44px] flex items-center justify-center"
                                aria-label="Síguenos en Instagram"
                            >
                                <Instagram className="w-6 h-6 text-primary hover:scale-110 transition-transform" aria-hidden="true" />
                            </a>
                            <a 
                                href="http://tiktok.com/@tuimagenrx" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="min-w-[44px] min-h-[44px] flex items-center justify-center"
                                aria-label="Síguenos en TikTok"
                            >
                                <Music2 className="w-6 h-6 text-primary hover:scale-110 transition-transform" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-3 border-zinc-200" />

                <div className="flex justify-between items-center text-sm text-zinc-700">
                    <span>© { new Date().getFullYear() } Tu Imagen Rx - Todos los derechos reservados</span>
                    <a 
                        href="https://agenciaideaspro.cl" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-bold text-primary hover:underline min-w-[44px] min-h-[44px] flex items-center"
                    >
                        Diseñado por Agencia Ideas Pro
                    </a>
                    <a 
                        href="#top" 
                        className="bg-primary p-3 rounded-full text-white shadow-lg hover:bg-opacity-80 transition min-w-[44px] min-h-[44px] flex items-center justify-center"
                        aria-label="Volver arriba"
                    >
                        <ArrowUp className="w-6 h-6" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
