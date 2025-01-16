import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 min-h-full min-w-full object-cover"
                aria-label="Video de fondo mostrando procedimientos dentales"
            >
                <source src="/video.mp4" type="video/mp4" />
                Tu navegador no soporta el tag de video.
            </video>

            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center">
                    <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                        Radiografías Dentales 100% Digitales
                    </h1>
                    <p className="mb-8 text-lg text-white sm:text-xl md:text-2xl">
                        Contamos con la última tecnología dental para tratamientos exitosos
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Button 
                            size="lg" 
                            className="bg-primary text-white hover:bg-primary/90 min-w-[44px] min-h-[44px]"
                        >
                            <a href="mailto:contacto@tuimagenrx.cl" className="px-4 py-2">
                                Contáctanos
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
