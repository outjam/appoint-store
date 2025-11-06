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
    redirect("https://apps.apple.com/app/idXXXXXXX");
  }

  // ✅ Android → показываем 2 кнопки
  if (isAndroid) {
    return (
      <div>
        <a href="https://play.google.com/store/apps/details?id=xxx">
          <button>Google Play</button>
        </a>
        <a href="https://apps.rustore.ru/app/xxx">
          <button>RuStore</button>
        </a>
      </div>
    );
  }

  // ✅ Desktop → показываем 3 кнопки
  return (
    <div className='home'>

      <a href="https://apps.apple.com/app/idXXXXXXX">
        <button>App Store</button>
      </a>
      <a href="https://play.google.com/store/apps/details?id=xxx">
        <button>Google Play</button>
      </a>
      <a href="https://apps.rustore.ru/app/xxx">
        <button>RuStore</button>
      </a>
    </div>
  );
}
