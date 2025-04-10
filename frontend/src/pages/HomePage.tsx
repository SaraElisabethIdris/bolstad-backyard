import backgroundImage from "./IMG_1623.jpg";

import KartPinIkon from "../img/kart-pin-ikon.svg?react";
import KalenderIkon from "../img/kalender-ikon.svg?react";
import KaninIkon from "../img/kanin-ikon.svg?react";
import FirkantPilHoyreIkon from "../img/firkant-pil-høyre-ikon.svg?react";
import FirkantPilNedIkon from "../img/firkant-pil-ned-ikon.svg?react";
import TidtakerIkon from "../img/tidtaker-ikon.svg?react";
import BrillerIkon from "../img/briller-ikon.svg?react";
import NotatblokkPennIkon from "../img/notatblokk-penn-ikon.svg?react";
import PokalIkon from "../img/pokal-ikon.svg?react";
import KartIkon from "../img/kart-ikon.svg?react";
import TogIkon from "../img/tog-ikon.svg?react";
import KryssIkon from "../img/kryss-ikon.svg?react";

import { SectionComponent } from "../components/SectionComponent.tsx";
import { ShortInfoSection } from "../components/ShortInfoSection.tsx";
import Register from "./Register.tsx";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "./constants.ts";

export const HomePage = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();

  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };
  return (
    <div className="flex flex-col min-h-screen bg-azure-radiance-10 items-center">
      <div
        className="h-200 bg-center bg-cover bg-fixed justify-center grid grid-cols-1"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "40rem",
          width: "100%",
        }}
      >
        <h1 className="text-white md:text-7xl text-3xl p-4 font-family-serif font-bold justify-center content-center ml-4">
          Bolstad <br /> Backyard
        </h1>

        <div className="left p-8 text-white grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-end">
          <ShortInfoSection
            icon={<KalenderIkon className="size-10" />}
            title={"Når?"}
            bodyText={"7. juni - kl 09.00 "}
          />
          <ShortInfoSection
            icon={<NotatblokkPennIkon className="size-10" />}
            title={"Hvor?"}
            bodyText={"Bolstadgata 21, Sande"}
          />
          <ShortInfoSection
            icon={<KaninIkon className="size-10" />}
            title={"Gira?"}
            bodyText={
              <>
                <button
                  type={"button"}
                  onClick={openModal}
                  className="flex flex-row gap-2 group"
                >
                  Meld deg på her
                  <span className="transform transition-transform group-hover:translate-x-1">
                    <FirkantPilHoyreIkon />
                  </span>
                </button>
                <button
                  type={"button"}
                  onClick={() => navigate(ROUTE_PATHS.PARTICIPANTS_LIST)}
                  className="flex flex-row gap-2 group"
                >
                  Deltakerliste
                  <span className="transform transition-transform group-hover:translate-x-1">
                    <FirkantPilHoyreIkon />
                  </span>
                </button>
              </>
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-1 w-3/4 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-4 h-auto">
          <div className="md:col-start-1 md:col-end-5">
            <h2 className="text-5xl font-family-serif text-center pt-24">
              Velkommen til Bolstad Backyard
            </h2>
          </div>
          <SectionComponent
            title={"Klar for 12 runder?"}
            bodyText={
              "Det skal løpes en småkupert runde på ca 6.7 km hver hele time (80,4 km fullført alle 12 runder).\n" +
              "\n" +
              "Alle som ikke klarer å starte på neste runden hver hele time er slått ut og henvises til «after run- lokalet» for å heie på de resterende deltagerne.\n" +
              "\n" +
              "Siste løper som kan starte vinner, dog er det satt maks 12 runder slik at om det er flere deltagere igjen på siste runde vil første deltager i mål kåres som vinner av Bolstad Backyard."
            }
            icon={<TidtakerIkon className="size-20 stroke-1" />}
          />
          <SectionComponent
            title={"Taktikk og lavterskel"}
            bodyText={
              "Det gjelder å legge opp et smart løp. Løper du fort kan du nyte en pause i et varmt lokale før neste start. Løper du rolig sparer du energi. Hva velger du?\n" +
              "\n" +
              "Vi legger opp til at det skal være et sosialt arrangement med lav deltagerterskel. Om du deltar kun for å løpe en runde, klare flere runder enn naboen, eller stålsetter deg for seier, er opp til deg! 🙂"
            }
            icon={<BrillerIkon className="size-20 stroke-1" />}
          />
          <SectionComponent
            title={"Praktisk informasjon"}
            bodyText={
              "Vi serverer brød, div pålegg, snack, kaffe, brus og vann. Grilling på ettermiddag hvis været tillater.\n" +
              "\n" +
              "Parkering. WC. Egen hvileplass.\n" +
              "\n" +
              "Obligatorisk med egen kopp! Obligatorisk å ha med hodelykt og refleksvest!\n" +
              "\n" +
              "For å feste startnummer anbefales «race belt», slik at det blir enkelt å ha startnummeret ytterst hvis du skal skifte klær i pausene. "
            }
            icon={<KartPinIkon className="size-20 stroke-1" />}
          />
          <SectionComponent
            title={"Premiering"}
            bodyText={
              "Topp 3 dame og herre, etter først i mål på siste runden.\n" +
              "\n" +
              "Topp 3 raskeste dame og herre basert på alle rundene. Altså sammenlagt tid"
            }
            icon={<PokalIkon className="size-20 stroke-1" />}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <KartIkon className="size-20 stroke-1 bg-tea-green-200 rounded-full p-4 text-tea-green-900" />
            <h2 className="text-4xl font-family-serif">Løypa</h2>
            <p>
              Løypeprofilen er en runde som starter og slutter ved Bolstad gård.
              Underlaget varierer mellom grus og asfalt hvor mesteparten er
              asfalt. Det er en god kneik i løypa, men til gjengjeld avsluttes
              runden med slakt nedover. Total stigning er 84m.
            </p>
            <div className="pt-8">
              <TogIkon className="size-20 stroke-1 bg-tea-green-200 rounded-full p-4 text-tea-green-900" />
              <h2 className="text-4xl font-family-serif">Transport</h2>
              <p>
                {
                  "Bolstadgata 21 ligger 3km fra Sande Stasjon. \n Det tar cirka 50min med tog eller bil fra Oslo S."
                }
              </p>
              <div className="pt-8 grid grid-cols-1 w-fit">
                <a
                  className="text-2xl text-azure-radiance-900 col-span-1"
                  href="https://www.strava.com/routes/3330161502548327134?utm_medium=web_embed&utm_source=route_embed&strava_deeplink_url=strava%3A%2F%2Froutes%2F3330161502548327134&_branch_match_id=1423631875306586571&_branch_referrer=H4sIAAAAAAAAA32OSw6CMBCGT1OWPFpAY2KM0XADF66aFgYhtJRMW9h5dgsYlyazmJkv%2F6NzbrKnJLEOxSxiMU2x6schEeKZPvQMi5UXQvNWKCVFPXCP6tytGsKuhFZhvsra6HCg8Q5sWBhjaVZmRUqL%2FMjoIWM5YZV3mmtoeq8Juy8gOWgJDaHlCqzxWEMAm8mOot2dNwDT2mvL33%2B%2FAv8yozdCC4j9%2BOISzWIBz7cOjYYPalnH7fkAAAA%3D"
                >
                  <span className="group flex items-center">
                    Se løypa i strava
                    <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                      <FirkantPilHoyreIkon />
                    </span>
                  </span>
                </a>
                <a
                  download={"bolstad-backyard-ultra.gpx"}
                  href="https://www.strava.com/routes/3330161502548327134/export_gpx"
                  className="text-2xl text-azure-radiance-900 col-span-1"
                >
                  <span className="group flex items-center">
                    Last ned .GPX fil{" "}
                    <span className="ml-2 transform transition-transform group-hover:translate-y-1">
                      <FirkantPilNedIkon />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="justify-items-center max-w-120">
            <iframe
              title={"Kart for løypa"}
              className="h-150 w-full"
              src="https://strava-embeds.com/route/3330161502548327134?style=standard&amp;fromEmbed=false#ns=ba684180-e223-4cb0-831a-0a980dc8bacd&amp;"
            />
          </div>
        </div>
        {/* <div className="flex flex-col pt-8">
                    <SparklesIkon className={"size-20 stroke-1 bg-tea-green-200 rounded-full p-4 text-tea-green-900"} />
                    <h2 className="text-4xl font-family-serif">Litt om Sande</h2>
                    <p>test</p>
                </div>*/}
      </div>

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            dialogRef.current?.close();
          }
        }}
        onKeyUp={(e) => {
          if (e.key === "Esc" || e.key === " ") {
            dialogRef.current?.close();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Esc" || e.key === " ") {
            dialogRef.current?.close();
          }
        }}
      >
        <div className="fixed inset-0 bg-gray-500/10 backdrop-blur-sm transition-opacity flex items-center justify-center">
          <div className="relative">
            <Register />
            <button
              type={"button"}
              onClick={() => dialogRef.current?.close()}
              className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 m-2"
            >
              <KryssIkon />
            </button>
          </div>
        </div>
      </dialog>
      <footer className="w-full h-20 bg-azure-radiance-10 mt-10" />
    </div>
  );
};
