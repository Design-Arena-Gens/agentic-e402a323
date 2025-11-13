import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-100 to-amber-200 px-6 py-12 font-sans text-zinc-900">
      <main className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-amber-200">
        <div className="relative flex flex-col gap-12 md:flex-row">
          <div className="relative h-80 w-full shrink-0 overflow-hidden md:h-auto md:w-2/3">
            <Image
              src="/lion.jpg"
              alt="Lion majestueux dans la savane"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-10">
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Voici une image d’un lion
              </h1>
              <p className="mt-3 max-w-md text-sm text-white/80 md:text-base">
                Symbole de force et de majesté, ce lion profite du soleil
                namibien. L’image provient de Wikimedia Commons.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between gap-6 p-6 md:w-1/3 md:p-10">
            <div className="space-y-4 text-sm leading-6 text-zinc-600 md:text-base">
              <p>
                Les lions vivent principalement en Afrique subsaharienne. Ils se
                regroupent en familles soudées, appelées
                <span className="font-medium text-amber-700"> hardes</span>.
              </p>
              <p>
                Leur rugissement peut être entendu à plus de 8 kilomètres, un
                rappel puissant de leur présence dans la savane.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900 shadow-inner">
              <h2 className="text-base font-semibold text-amber-800 md:text-lg">
                À propos de l’image
              </h2>
              <p>
                Source : <span className="font-medium">Wikimedia Commons</span>
              </p>
              <p>Photographe : Luca Galuzzi</p>
              <p>Licence : CC BY-SA 2.5</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
