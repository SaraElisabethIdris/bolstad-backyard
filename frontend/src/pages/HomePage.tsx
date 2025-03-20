import backgroundImage from "./IMG_1623.jpg";
import KartPinIkon from '../img/kart-pin-ikon.svg?react';
import KalenderIkon from '../img/kalender-ikon.svg?react';
import KaninIkon from '../img/kanin-ikon.svg?react';
import FirkantPilHoyreIkon from '../img/firkant-pil-høyre-ikon.svg?react';
import FirkantPilNedIkon from '../img/firkant-pil-ned-ikon.svg?react';
import TidtakerIkon from '../img/tidtaker-ikon.svg?react';
import BrillerIkon from '../img/briller-ikon.svg?react';
import NotatblokkPennIkon from '../img/notatblokk-penn-ikon.svg?react';
import PokalIkon from '../img/pokal-ikon.svg?react';
import KartIkon from '../img/kart-ikon.svg?react';
import TogIkon from '../img/tog-ikon.svg?react';
import SparklesIkon from '../img/sparkles-ikon.svg?react';
import {SectionComponent} from "../components/SectionComponent.tsx";
import {ShortInfoSection} from "../components/ShortInfoSection.tsx";
import {useState} from "react";
import Register from "./Register.tsx";


export const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-azure-radiance-10 items-center">
            <div className="h-200 bg-center bg-cover bg-fixed justify-center grid grid-cols-1"
                 style={{backgroundImage: `url(${backgroundImage})`, height: '40rem', width: '100%'}}>
                <h1 className="text-white md:text-7xl text-3xl p-4 font-family-serif font-bold justify-center content-center ml-4">
                    Bolstad <br/> Backyard
                </h1>
                <div className="left p-8 text-white grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-end">
                    <ShortInfoSection icon={<KalenderIkon className="size-10"/>} title={"Når?"}
                                      bodyText={"1. juni - kl 08.00 "}/>
                    <ShortInfoSection icon={<NotatblokkPennIkon className="size-10"/>} title={"Hvor?"}
                                      bodyText={"Bolstadgata 21, Sande"}/>
                    <ShortInfoSection icon={<KaninIkon className="size-10"/>} title={"Gira?"}
                                      bodyText={<a onClick={() => setIsModalOpen(true)} href="#" className="flex flex-row gap-2 group">
                                          Meld deg på her <span className="transform transition-transform group-hover:translate-x-1"><FirkantPilHoyreIkon/></span></a>}/>
                </div>
            </div>
            <div className="grid grid-cols-1 w-3/4 gap-4">
                <div className="md:h-96 grid grid-cols-1 md:grid-cols-4 w-full gap-4 h-auto">
                    <div className="md:col-start-1 md:col-end-5">
                        <h2 className="text-5xl font-family-serif text-center pt-24">Velkommen til Bolstad Backyard</h2>
                    </div>
                    <SectionComponent title={"Klar for 12 runder?"} bodyText={"jggfdg"}
                                      icon={<TidtakerIkon className="size-20 stroke-1"/>}/>
                    <SectionComponent title={"Taktikk og lavterskel"} bodyText={"nfdsgdsg"}
                                      icon={<BrillerIkon className="size-20 stroke-1"/>}/>
                    <SectionComponent title={"Praktisk informasjon"} bodyText={"nfdsgdsg"}
                                      icon={<KartPinIkon className="size-20 stroke-1"/>}/>
                    <SectionComponent title={"Premiering"} bodyText={"nfdsgdsg"}
                                      icon={<PokalIkon className="size-20 stroke-1"/>}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-1">
                        <KartIkon className="size-20 stroke-1 bg-tea-green-200 rounded-full p-4 text-tea-green-900"/>
                        <h2 className="text-4xl font-family-serif">Løypa</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate gravida massa,
                            id luctus sapien. Cras arcu quam, mollis ac nulla dictum, consectetur vestibulum justo.
                            Maecenas felis tellus, sodales euismod dolor ac, scelerisque porta mauris. Donec mi sem,
                            faucibus ac enim ac, hendrerit porttitor augue. Ut sodales, enim vitae mollis auctor, orci
                            metus ultricies nunc, cursus molestie metus diam sed elit. Sed ipsum leo, malesuada eu
                            suscipit eu, laoreet sit amet felis. Integer pulvinar tellus eu malesuada semper. Mauris
                            eleifend ipsum vitae elit ullamcorper gravida. Phasellus tincidunt commodo feugiat.
                            Phasellus non iaculis quam. Mauris dapibus varius leo, semper aliquam nisl lacinia ut. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor sodales consequat. Proin
                            pulvinar libero nec nisl congue luctus. Pellentesque ac orci faucibus, ultricies turpis nec,
                            commodo ante. Integer sed hendrerit ex. Vivamus malesuada, risus at imperdiet sagittis,
                            magna sapien sodales quam, et pellentesque lacus ipsum vel sem. Nulla facilisi. Pellentesque
                            rhoncus, lectus dignissim consequat pretium, turpis sapien finibus velit, sit amet tristique
                            tortor mi non risus. Phasellus vehicula diam at convallis condimentum. Ut laoreet elit
                            felis, quis semper nunc semper tempor. Aenean volutpat purus est, ut dictum libero facilisis
                            quis.
                        </p>
                        <div className="pt-8">
                            <TogIkon className="size-20 stroke-1 bg-tea-green-200 rounded-full p-4 text-tea-green-900"/>
                            <h2 className="text-4xl font-family-serif">Transport</h2>
                            <p>Masse tekst om transport</p>
                            <div className="pt-8 grid grid-cols-1 w-fit">
                                <a className="text-2xl text-azure-radiance-900 col-span-1"
                                   href="https://www.strava.com/routes/3330161502548327134?utm_medium=web_embed&utm_source=route_embed&strava_deeplink_url=strava%3A%2F%2Froutes%2F3330161502548327134&_branch_match_id=1423631875306586571&_branch_referrer=H4sIAAAAAAAAA32OSw6CMBCGT1OWPFpAY2KM0XADF66aFgYhtJRMW9h5dgsYlyazmJkv%2F6NzbrKnJLEOxSxiMU2x6schEeKZPvQMi5UXQvNWKCVFPXCP6tytGsKuhFZhvsra6HCg8Q5sWBhjaVZmRUqL%2FMjoIWM5YZV3mmtoeq8Juy8gOWgJDaHlCqzxWEMAm8mOot2dNwDT2mvL33%2B%2FAv8yozdCC4j9%2BOISzWIBz7cOjYYPalnH7fkAAAA%3D">
                            <span className="group flex items-center">
                                Se løypa i strava <span className="ml-2 transform transition-transform group-hover:translate-x-1"><FirkantPilHoyreIkon/></span>
                            </span>
                                </a>
                                <a download={"bolstad-backyard-ultra.gpx"}
                                   href="https://www.strava.com/routes/3330161502548327134/export_gpx"
                                   className="text-2xl text-azure-radiance-900 col-span-1">
                            <span className="group flex items-center">
                                Last ned .GPX fil <span className="ml-2 transform transition-transform group-hover:translate-y-1"><FirkantPilNedIkon/></span>
                            </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="justify-items-center max-w-120">
                        <iframe className="h-150 w-full"
                                src="https://strava-embeds.com/route/3330161502548327134?style=standard&amp;fromEmbed=false#ns=ba684180-e223-4cb0-831a-0a980dc8bacd&amp;">
                        </iframe>
                    </div>
                </div>
                <div className="flex flex-col pt-8">
                    <SparklesIkon className={"size-20 stroke-1 bg-tea-green-200 rounded-full p-4 text-tea-green-900"} />
                    <h2 className="text-4xl font-family-serif">Litt om Sande</h2>
                    <p>test</p>
                </div>
            </div>

            <footer className="w-full h-20 bg-azure-radiance-10 mt-10"></footer>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500/10 backdrop-blur-sm transition-opacity flex items-center justify-center"
                     onClick={(e) => {
                         if (e.target === e.currentTarget) {
                             setIsModalOpen(false);
                         }
                     }}
                >
                    <Register setIsModalOpen={setIsModalOpen} />
                </div>
            )}
        </div>)
}