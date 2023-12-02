/* eslint-disable @next/next/no-img-element */
interface SponsoredProps {}
export function Sponsored(props: SponsoredProps) {
  return (
    <section className="px-6 py-16">
      <div className="flex flex-col gap-4">
        <h2 className="text-center uppercase font-semibold mb-4">
          Patrocinado por
        </h2>
        <div className="flex items-center justify-around">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png"
            alt=""
            className="h-6 md:h-12  opacity-40"
          />
          <img
            src="https://odontocompanyvilardosteles.com.br/wp-content/uploads/2020/07/LOGO-vilar.png"
            alt=""
            className="h-6 md:h-12  opacity-40"
          />
          <img
            src="https://www.freepnglogos.com/uploads/company-logo-png/file-mobile-apps-development-company-logo-25.png"
            alt=""
            className="h-6 md:h-12  opacity-40"
          />
          <img
            src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png"
            alt=""
            className="h-6 md:h-12  opacity-40"
          />
        </div>
      </div>
    </section>
  );
}
