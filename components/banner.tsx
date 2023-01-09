import Image from "next/image";
import Container from "./container";

const HeroPost = () => {
    return (
        <section>
            <div className="w-full bg-[url('/assets/banner/banner-1.png')]">
                <div className="md:pt-32 pt-24 pb-10 mb-8 md:mb-16 bg-black bg-opacity-20 backdrop-blur-sm">
                    <Container>
                        <div className="md:my-24 md:mr-96 text-white">
                            <h1 className="text-3xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">Willkommen auf <span className="text-green-500">Cube-Nation</span>!</h1>
                            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">Dem Minecraft Server mit dem Wohlfühleffekt.</h2>
                            <p className="mt-12">
                                Cube-Nation bietet dir mit seinem gut durchdachten und stetig weiterentwickelten Konzept ein Minecraft-Spielerlebnis, das du bald nicht mehr vermissen möchtest. Gemeinsam mit den Spielern haben wir seit 2011 einen der freundlichsten Minecraft-Server im deutschsprachigen Raum entwickelt. Zur Community gehört nicht nur das kompetente Server-Team, sondern selbstverständlich auch jeder einzelne Cube-Nation-Spieler!
                                Denn erst die Community macht den Server zu dem, was er heute ist – nämlich zum Server mit dem Wohlfühleffekt!
                            </p>
                            <div>
                                <div className="mt-12 flex space-x-2 justify-left">
                                    <button
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="inline-block mr-2 px-7 py-3 bg-green-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                                    > Neu hier?
                                    </button>
                                    <button
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="inline-block mr-2 px-7 py-3 bg-neutral-500 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-neutral-600 hover:shadow-lg focus:bg-neutral-760 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-700 active:shadow-lg transition duration-150 ease-in-out"
                                    > Unser Konzept
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default HeroPost
