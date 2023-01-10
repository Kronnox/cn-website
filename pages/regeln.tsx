import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Header from "../components/header";

type Props = {

}

export default function Regeln({}: Props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>Cube-Nation - Der Minecraft Server mit dem Wohlfühleffekt!</title>
                </Head>
                <Header />
                <Container>
                    <div className="relative w-full h-full pt-20 pb-12">
                        <div className="flex justify-between relative">

                            <div className="shrink-0 hidden lg:block px-10 pb-12 pt-4 rounded-lg bg-gray-100 dark:bg-midnight-700 drop-shadow-md w-80 h-fit">
                                <h5 className="font-bold text-lg mt-6 mb-1">Allgemeines</h5>
                                <div className="flex items-center ml-2 border-l-2 border-gray-300">
                                    <span className="text-gray-600 dark:text-gray-400 font-semibold -mt-0.5 ml-3">Umgangston</span>
                                </div>
                                <div className="flex items-center ml-2 border-l-2 border-gray-300">
                                    <span className="text-gray-600 dark:text-gray-400 font-semibold -mt-0.5 ml-3">Rechtliches</span>
                                </div>
                                <h5 className="font-bold text-lg mt-6 mb-1">Fehlverhalten</h5>
                                <h5 className="font-bold text-lg mt-6 mb-1">Strafen</h5>
                                <h5 className="font-bold text-lg mt-6 mb-1">Sprachchat</h5>
                                <h5 className="font-bold text-lg mt-6 mb-1">Minecraft</h5>
                                <div className="flex items-center ml-2 border-l-2 border-gray-300">
                                    <span className="text-gray-600 dark:text-gray-400 font-semibold -mt-0.5 ml-3">Allgemeines</span>
                                </div>
                                <div className="flex items-center ml-2 border-l-2 border-gray-300">
                                    <span className="text-gray-600 dark:text-gray-400 font-semibold -mt-0.5 ml-3">Bauordnung</span>
                                </div>
                                <div className="flex items-center ml-2 border-l-2 border-gray-300">
                                    <span className="text-gray-600 dark:text-gray-400 font-semibold -mt-0.5 ml-3">Wirtschaft und Handel</span>
                                </div>
                                <div className="flex items-center ml-2 border-l-2 border-gray-300">
                                    <span className="text-gray-600 dark:text-gray-400 font-semibold -mt-0.5 ml-3">Pandora</span>
                                </div>
                            </div>

                            <div className="shrink px-12 py-6">
                                <h1 className="text-4xl font-bold mt-2 mb-4 underline">Serverregeln</h1>

                                Die Nutzung von Cube-Nation als Webseite, der Minecraft-Server und aller weiteren Dienste, wie beispielsweise dem TeamSpeak-Server, ist kostenfrei und wird vom Betreiber als Freizeitprojekt unterhalten.

                                Der Staff wünscht sich daher ein ein angenehmes Miteinander und einen reibungslosen Ablauf auf den Servern.

                                Aus diesem Grund haben wir dieses Regelwerk entwickelt, das ein friedliches Zusammenspiel gewährleisten soll. Wir bitten Euch, die Regeln aufmerksam durch zu lesen und Euch auch daran zu halten. Vielen Dank!

                                <h2 className="text-3xl font-bold mt-6 mb-2">§ 1 – Allgemeines</h2>
                                Wir pflegen ein angenehmes und respektvolles Miteinander.
                                Die Verwendung von rassistischen, nationalsozialistischen, jugendgefährdenden, sexistischen, sexuell anstößigen oder sonstwie sittenwidrigen Namen und Medien (Bilder, Videos, etc.) ist verboten und wird mit einem permanenten Ausschluss geahndet.
                                Bedenkt, dass Minderjährige auf dem Server unterwegs sein können, achtet daher auf Eure Sprachgepflogenheiten.
                                Der Chat ist von Spam und Werbung frei zu halten.
                                Cube-Nation und dessen Team steht in keinem Zusammenhang mit Mojang AB / Xbox Game Studios / Microsoft Corp. Auf Grund des privaten Charakters des Projektes besteht keinerlei Anspruch irgendeiner Art gegen den Betreiber. Es gilt insbesondere das (virtuelle) Hausrecht.
                                <h2 className="text-3xl font-bold mt-6 mb-2">§ 2 – Fehlverhalten</h2>
                                Jeder Nutzer ist berechtigt, und dazu angehalten, Fehlverhalten beim Staff anzuzeigen.
                                Dies kann entweder per privater Chatnachricht oder Ticket geschehen.
                                Screenshots, auf denen Fehlverhalten ersichtlich wird, dienen der Beweisführung und sollten generell immer angefertigt werden.
                                Das öffentliche Anprangern anderer Spieler ist untersagt.
                                <h2 className="text-3xl font-bold mt-6 mb-2">§ 3 – Strafen</h2>
                                Je nach Härte eines begangenen Verstoßes erhält ein Nutzer eine Verwarnung einer bestimmten Stufe. Summieren sich diese Stufen auf und überschreiten einen Schwellwert, folgt die nächste Sanktionsstufe.
                                Ein zeitweiliger Ausschluss vom Spielgeschehen wird nach Ermessen des Staffs ausgesprochen. Nach Ablauf der Zeit ist eine Teilnahme am Spielgeschehen wieder möglich. Temporäre Ausschlüsse haben keine weiteren Folgen.
                                Ein vollständiger Ausschluss wird nach Ermessen des Staffs ausgesprochen und verhindert endgültig die weitere Teilnahme des Spielers (genauer des Accounts) am Spielgeschehen. Da diese Maßnahme nur ausgesprochen wird, wenn ein Spieler wiederholt negativ den Frieden stört, wird diese Maßnahme auch nicht wieder aufgehoben und bleibt permanent bestehen.
                                <h2 className="text-3xl font-bold mt-6 mb-2">§ 4 – Teamspeak / Discord</h2>
                                Die Nutzung von eigenen Rängen im Namen ist nicht erlaubt.
                                Lasst andere Nutzer aussprechen und sprecht ihnen nicht dazwischen.
                                Werden Channel nicht genutzt können sie jederzeit gelöscht werden. Neue Channel können jederzeit wieder beantragt werden.
                                In Channelbeschreibungen können grundsätzlich Farben und Bilder benutzt werden, sollen aber nicht unnötig missbraucht werden.
                                Stadt- und Community-Projekte dürfen nicht moderiert werden, da es sich um öffentliche Channel handelt.
                                Stadt-Channel müssen wie die Stadt heißen
                                Ein Channel kann grundsätzlich abgeschlossen werden, es ist jedoch Sorge dafür zu tragen den Channel wieder öffnen bevor man den Teamspeak Server verlässt.
                                <h2 className="text-3xl font-bold mt-6 mb-2">§ 5 – Minecraft</h2>
                                <h3 className="text-2xl font-bold mt-4 mb-1">§ 5.1 – Allgemeines</h3>
                                Das Ausnutzen von Bugs ist verboten. Ebenso Modifizierungen des Spieleclients, die einen ungleichen Vorteil verschaffen, beispielsweise X-Ray, Flyhacks etc). Bei Unsicherheiten wendet Euch bitte an den Staff.
                                Das Erzeugen/Die Nutzung von Items, welche nicht herstellbar (Crafting) oder über das Creative-Inventar zu erhalten sind, wird nicht geduldet. Ausgenommen davon sind Items die von Cube-Nation zur Verfügung gestellt werden, beispielsweise im Rahmen von Events. Dazu gehören unter anderem Kommandoblöcke, Dracheneier, Tränke mit mehreren Effekten, unerreichbare Verzauberungen usw.
                                Das absichtliche Zerstören (Griefing) von Bauten oder Items anderer Spieler ist verboten. Unter Griefing fällt ebenfalls die Verunstaltung der Landschaft (Krater etc), Diebstahl sowie Töten von Spielern bzw. Tieren von Spielern.
                                Der Missbrauch des LWC-Plugins (Sichern von Schildern, Öfen, Kisten etc) zum Abschließen ganzer Gebäudekomplexe oder Wände ist verboten.
                                <h3 className="text-2xl font-bold mt-4 mb-1">§ 5.2 – Bauordnung</h3>
                                Die sichtbare natürliche Umgebung soll so gut wie möglich erhalten bleiben. Die Ränder von bebauten Flächen müssen daher an die Umgebung angepasst werden.
                                Creeper-Löcher müssen wieder aufgefüllt bzw. abgedeckt werden.
                                In öffentlichen Farmen, auch in Städten, müssen Rohstoffe nachgepflanzt werden.
                                Baumkronen gefällter Bäume dürfen nicht stehen gelassen werden.
                                Gebäude, bzw. Bauwerke mit rassistischem, nationalsozialistischem, sexuellem, beleidigendem oder sonstwie anstößigem Hintergrund sind verboten.
                                Fliegende Bauten sind verboten. Ausnahmen bilden Fluggeräte bzw. vom Staff genehmigte Bauten.
                                Sog. „Cobblestone-Bunker“, bzw. Bauwerke die überwiegend aus einem Material bestehen, sind verboten.
                                Der Nachbarschaftlichkeit halber sollen Bewohnerzonen einen Abstand von ca. 50 Blöcken halten. Unter Absprache mit dem Nachbarn ist dies jedoch nicht verpflichtend. Es empfiehlt sich einen Screenshot der Absprache anzufertigen und aufzubewahren.
                                Redstone-Anlagen welche übermäßig Last erzeugen können vom Staff deaktiviert werden. Der Spieler hat Sorge dafür zu tragen, dass Redstone-Anlagen den Spielbetrieb nicht beeinträchtigen.
                                Das Abschließen einer Farm mit LWC ist in Städten nicht gestattet. Hiervon ausgenommen sind Farmen auf eigenen Zonen. Farmen in Städten müssen für die Stadtbewohner frei zugänglich sein.
                                <h3 className="text-2xl font-bold mt-4 mb-1">§ 5.3 – PvP</h3>
                                Grundsätzlich pflegen wir ein friedliches Miteinander, daher ist PvP (Player vs. Player / Kampfmodus) auch nur in Zonen bzw. Welten und Servern möglich, in bzw. auf denen dies gewünscht ist.
                                Auf dem Pandora-Server und der PvP-Welt des Main-Servers ist PvP allerdings erlaubt und ausdrücklich erwünscht.
                                Auf dem Pandora-Server sind Städte und öffentliche Einrichtungen wie Tunnel generell als Schutzzonen zu betrachten. PvP ist hier verboten.
                                <h3 className="text-2xl font-bold mt-4 mb-1">§ 5.4 – Wirtschaft und Handel</h3>
                                Die Monopolisierung endlicher Rohstoffe ist untersagt.
                                Der Handel, die Preise und das Warenangebot werden vom Staff, abgesehen vom Admin-Shop, nicht reguliert.
                                Zum geregelten Handel sollen die zur Verfügung gestellten Shops genutzt werden. Kleine Pseudo-Shops mit maximal 2 Shopkeepern sind jedoch auf dem eigenen Grundstück erlaubt.
                                Pro Spieler sind maximal 10 Shopkeeper erlaubt.
                                <h3 className="text-2xl font-bold mt-4 mb-1">§ 5.5 – Pandora</h3>
                                In Ballungsgebieten können auf Anfrage Portale zur Hauptstadt erstellt werden.
                                Diese Portale sind öffentlich und müssen dementsprechend für alle Spieler zugänglich sein.
                                Zwischen Portalen muss ein Mindesteabstand von 400 Blöcken sein.
                                Portale zur Mining-, Nether- und End-Welt gibt es nur in der Hauptstadt.
                                Grundstücke, bzw. ein Areal das von einem Pionier bewohnt wird, ist an einem markanten Punkt so zu kennzeichnen, dass ersichtlich wird, wer dort wohnt.
                                Die Bebauung von Pandora-City ist jedem Pionier erlaubt, jedoch sollen sich die Bauwerke in den dort genutzten Baustil einfügen. Der Staff behält sich vor unpassende Bauwerke abzureißen.
                            </div>

                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    )
}
