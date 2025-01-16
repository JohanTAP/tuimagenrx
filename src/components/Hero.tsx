import { Button } from "@/components/ui/button"

export function Hero ()
{
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 min-h-full min-w-full object-cover"
            >
                <source src="/video.mp4" type="video/mp4" />
                Tu navegador no soporta el tag de video.
            </video>

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center">
                    <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl break-words">
                        RADIOGRAFÍAS DENTALES 100% DIGITALES
                    </h1>
                    <p className="mb-8 text-lg text-white/90 sm:text-xl md:text-2xl break-words">
                        Contamos con la última tecnología dental para tratamientos exitosos
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <a href="mailto:contacto@tuimagenrx.cl">Contáctanos</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
