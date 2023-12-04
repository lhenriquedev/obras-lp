/* eslint-disable @next/next/no-img-element */
interface SponsoredProps {}
export function Sponsored(props: SponsoredProps) {
  return (
    <section className="px-6 py-16 bg-gray-100">
      <div className="flex flex-col gap-4">
        {/* <div className="bg-primary-50 w-fit mx-auto py-1 px-4 rounded-md text-center flex items-center justify-center">
          <h2 className="text-center uppercase text-primary-600 text-[10px] font-semibold">
            Patrocinado por
          </h2>
        </div>
         */}
        <div className="flex items-center justify-around">
          <img
            src="https://omnifood.dev/img/logos/techcrunch.png"
            alt=""
            className="h-4 brightness-0 opacity-50 md:h-8"
          />
          <img
            src="https://omnifood.dev/img/logos/business-insider.png"
            alt=""
            className="h-4 brightness-0 opacity-50 md:h-8"
          />
          <img
            src="https://omnifood.dev/img/logos/the-new-york-times.png"
            alt=""
            className="h-4 brightness-0 opacity-50 md:h-8"
          />
          <img
            src="https://omnifood.dev/img/logos/usa-today.png"
            alt=""
            className="h-4 brightness-0 opacity-50 md:h-8"
          />
        </div>
      </div>
    </section>
  );
}
