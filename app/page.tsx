// app/page.tsx
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";

  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
  const isAndroid = /Android/i.test(userAgent);
  const isDesktop = !isIOS && !isAndroid;

  // ✅ iOS → моментальный редирект
  if (isIOS) {
    redirect("https://testflight.apple.com/join/GByGCQ6K");
  }

  // ✅ Android → показываем 2 кнопки
  if (isAndroid) {
    return (
      <div className='home'>

      <img className='logo' src="/logo.svg" alt="appoint" />

      <div className='store'>
        {/* AppStore */}
        <a href="https://testflight.apple.com/join/GByGCQ6K">
          <button className='button'>
            <img className='buttonIcon' src={'/appstore.svg'} />
            <div className='buttonDitail'>
              <p className='buttonCaption'>Загрузить в</p>
              <p className='buttonText'>App Store</p>
            </div>
          </button>
        </a>
        {/* Google Play */}
        <a href="https://play.google.com/store/apps/details?id=xxx">
          <button className='button'>
            <img className='buttonIcon' src={'/googleplay.svg'} />
            <div className='buttonDitail'>
              <p className='buttonCaption'>Скачать из</p>
              <p className='buttonText'>Google Play</p>
            </div>
          </button>
        </a>
        {/* RuStore */}
        <a href="https://www.rustore.ru/catalog/app/com.familyfit.app">
          <button className='button'>
            <img className='buttonIcon' src={'/rustore.svg'} />
            <div className='buttonDitail'>
              <p className='buttonCaption'>Скачать из</p>
              <p className='buttonText'>RuStore</p>
            </div>
          </button>
        </a>
      </div>
    </div>
    );
  }

  // ✅ Desktop → показываем 3 кнопки
  return (
    <div className='home'>

      <img className='logo' src="/logo.svg" alt="appoint" />

      <div className='store'>
        {/* AppStore */}
        <a href="https://testflight.apple.com/join/GByGCQ6K">
          <button className='button'>
            <img className='buttonIcon' src={'/appstore.svg'} />
            <div className='buttonDitail'>
              <p className='buttonCaption'>Загрузить в</p>
              <p className='buttonText'>App Store</p>
            </div>
          </button>
        </a>
        {/* Google Play */}
        <a href="https://play.google.com/store/apps/details?id=xxx">
          <button className='button'>
            <img className='buttonIcon' src={'/googleplay.svg'} />
            <div className='buttonDitail'>
              <p className='buttonCaption'>Скачать из</p>
              <p className='buttonText'>Google Play</p>
            </div>
          </button>
        </a>
        {/* RuStore */}
        <a href="https://www.rustore.ru/catalog/app/com.familyfit.app">
          <button className='button'>
            <img className='buttonIcon' src={'/rustore.svg'} />
            <div className='buttonDitail'>
              <p className='buttonCaption'>Скачать из</p>
              <p className='buttonText'>RuStore</p>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}
