import Image from "next/image";
import Container from "./container";

const HeroPost = () => {
    return (
        <section>
            <div className="w-full bg-[url('/assets/banner/banner-1.png')]">
                <div className="md:pt-32 pt-28 pb-10 bg-black bg-opacity-20 backdrop-blur-sm">
                    <Container>
                        <div className="md:my-24 2xl:mr-96 text-white">
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">Willkommen auf <span className="text-transparent bg-clip-text bg-gradient-to-r from-cn to-cn-l">Cube-Nation</span>!</h1>
                            <h2 className="text-2xl mt-2 md:mt-0 md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">Dem Minecraft Server mit dem Wohlfühleffekt.</h2>
                            <p className="mt-6 md:mt-12">
                                Cube-Nation bietet dir mit seinem gut durchdachten und stetig weiterentwickelten Konzept ein Minecraft-Spielerlebnis, das du bald nicht mehr vermissen möchtest. Gemeinsam mit den Spielern haben wir seit 2011 einen der freundlichsten Minecraft-Server im deutschsprachigen Raum entwickelt. Zur Community gehört nicht nur das kompetente Server-Team, sondern selbstverständlich auch jeder einzelne Cube-Nation-Spieler!
                                Denn erst die Community macht den Server zu dem, was er heute ist – nämlich zum Server mit dem Wohlfühleffekt!
                            </p>
                            <div>
                                <div className="mt-6 md:mt-12 flex space-x-2 justify-left">
                                    <button
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="inline-block mr-2 px-7 py-3 bg-cn text-black font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-cn-d hover:shadow-lg focus:bg-cn-d focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cn-d active:shadow-lg transition duration-150 ease-in-out"
                                    > Neu hier?
                                    </button>
                                    <button
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="inline-block mr-2 px-7 py-3 bg-neutral-300 text-black font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-neutral-600 hover:shadow-lg focus:bg-neutral-760 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-700 active:shadow-lg transition duration-150 ease-in-out"
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
