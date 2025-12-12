import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'
import Snow from "./Snowfall";

export default async function Home() {
  const ua = (await headers()).get("user-agent") || "";

  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  // --- CONFIG (легкое управление магазинами) -----------------------
  const STORES = [
    {
      id: "appstore",
      enabled: true,
      labelTop: "Загрузить в",
      labelBottom: "App Store",
      icon: "/appstore.svg",
      url: "https://apps.apple.com/ru/app/appoint-%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B1%D0%B8%D0%BB%D0%B5%D1%82%D0%BE%D0%B2/id6744412820",
    },
    {
      id: "googleplay",
      enabled: false, // ❌ временно отключено
      labelTop: "Скачать из",
      labelBottom: "Google Play",
      icon: "/googleplay.svg",
      url: "https://play.google.com/store/apps/details?id=xxx",
    },
    {
      id: "rustore",
      enabled: true,
      labelTop: "Скачать из",
      labelBottom: "RuStore",
      icon: "/rustore.svg",
      url: "https://www.rustore.ru/catalog/app/com.familyfit.app",
    },
  ];
  // ----------------------------------------------------------------

  // iOS → мгновенный редирект
  if (isIOS) redirect("https://apps.apple.com/ru/app/appoint-%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B1%D0%B8%D0%BB%D0%B5%D1%82%D0%BE%D0%B2/id6744412820");

  // Какие кнопки показывать?
  const visibleStores = STORES.filter((s) => s.enabled);

  return (
    <div className="home">
      {/* <Snow /> */}

      <img className="logo" src="/logo.svg" alt="appoint" />

      <div className="store">
        {visibleStores.map((store) => (
          <a key={store.id} href={store.url}>
            <button className="button">
              <img className="buttonIcon" src={store.icon} />
              <div className="buttonDitail">
                <p className="buttonCaption">{store.labelTop}</p>
                <p className="buttonText">{store.labelBottom}</p>
              </div>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}
