import {router} from "./router.tsx";
import {ROUTE_PATHS} from "./constants.ts";
import {Button} from "@mui/material";
import backgroundImage from "./IMG_1483.jpg";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";


export const HomePage = () => {
const handleOnClick = () => {
    router.navigate(ROUTE_PATHS.ADD_PARTICIPANT);
}
    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-cover bg-center h-160 relative" style={{backgroundImage: `url(${backgroundImage})`}}><h1
                className="text-white text-4xl p-4 font-family-sans">
                    Bolstad Backyard
                </h1>
                <div className="absolute bottom-0 left p-4 text-white grid grid-cols-3 gap-8 w-full">
                    <div className="col-span-1 mb-4">
                        <FaCalendarAlt className="mr-2"/>
                        <h2 className="text-2xl font-bold font-family-sans">Når?</h2>
                        <p className="text-lg font-family-sans">1.juni - kl 10.00</p>
                    </div>
                    <div className="col-span-2 mb-4">
                        <FaMapMarkerAlt className="mr-2" />
                        <h2 className="text-2xl font-bold font-family-sans">Hvor?</h2>
                        <p className="text-lg font-family-sans">Bolstadgata 21, Sande</p>
                    </div>
                </div>
            </div>
            <div className="bg-olivine-100 h-96 grid grid-cols-4 w-full">
                <div className="col-start-1 col-end-5">
                    <h2 className="text-4xl font-family-sans text-center p-4">Velkommen til Bolstad Backyard</h2>
                </div>
                <div className="col-span-1">
                    <p className="m-2 flex justify-center">
                        Masse tekst om arrangementet
                    </p>
                </div>
                <div className="col-span-1">
                    <p className="m-2 flex justify-center">
                        Masse tekst om arrangementet
                    </p>
                </div>
                <div className="col-span-1">
                    <p className="m-2 flex justify-center">
                        Masse tekst om arrangementet
                    </p>
                </div>
                <div className="col-span-1">
                    <p className="m-2 flex justify-center">
                        Masse tekst om arrangementet
                    </p>
                </div>
            </div>
            <div className="bg-olivine-200 h-96 flex flex-grow justify-center items-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="col-span-1 right">
                        <div>
                            <h2>Løypa</h2>
                            <p>
                                Masse tekst om løypa
                            </p>
                        </div>
                        <div>
                            <h2>Transport</h2>
                            <p>Masse tekst om transport</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <iframe className="h-120"
                                src="https://strava-embeds.com/route/3330161502548327134?style=standard&amp;fromEmbed=false#ns=ba684180-e223-4cb0-831a-0a980dc8bacd&amp;"></iframe>
                    </div>
                    <a href="https://strava-embeds.com/public/css/embed.css">Se løypa i strava</a>
                </div>
            </div>
        </div>

    );
}