/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

interface TestimonialsProps {}
export function Testimonials(props: TestimonialsProps) {
  return (
    <section className="bg-primary-50/30">
      <div className="py-16 max-w-7xl px-4 mx-auto">
        <div className="flex flex-col mb-8 justify-center items-center gap-2 max-w-sm mx-auto text-center">
          <h2 className="text-primary-800 uppercase text-sm font-medium">
            Depoimentos
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold">
            O quê nossos usuários estão comentando?
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-md flex flex-col gap-6 shadow-sm p-4">
            <p className="text-sm">
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              hic praesentium sapiente quibusdam, placeat sint aliquid vero,
              illum sequi totam iusto voluptas, maiores possimus iure."
            </p>

            <div className="flex gap-2 items-center">
              <img
                src="https://i.pravatar.cc/48"
                className="rounded-full"
                alt=""
              />
              <div>
                <p className="font-bold text-sm text-gray-900">Nick Diaz</p>
                <p className="text-xs">Ceo</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md flex flex-col gap-6 shadow-sm p-4">
            <p className="text-sm">
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              hic praesentium sapiente quibusdam, placeat sint aliquid vero,
              illum sequi totam iusto voluptas, maiores possimus iure."
            </p>

            <div className="flex gap-2 items-center">
              <img
                src="https://i.pravatar.cc/48"
                className="rounded-full"
                alt=""
              />
              <div>
                <p className="font-bold text-sm text-gray-900">Nick Diaz</p>
                <p className="text-xs">Ceo</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md flex flex-col gap-6 shadow-sm p-4">
            <p className="text-sm">
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              hic praesentium sapiente quibusdam, placeat sint aliquid vero,
              illum sequi totam iusto voluptas, maiores possimus iure."
            </p>

            <div className="flex gap-2 items-center">
              <img
                src="https://i.pravatar.cc/48"
                className="rounded-full"
                alt=""
              />
              <div>
                <p className="font-bold text-sm text-gray-900">Nick Diaz</p>
                <p className="text-xs">Ceo</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md flex flex-col gap-6 shadow-sm p-4">
            <p className="text-sm">
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              hic praesentium sapiente quibusdam, placeat sint aliquid vero,
              illum sequi totam iusto voluptas, maiores possimus iure.
            </p>

            <div className="flex gap-2 items-center">
              <img
                src="https://i.pravatar.cc/48"
                className="rounded-full"
                alt=""
              />
              <div>
                <p className="font-bold text-sm text-gray-900">Nick Diaz</p>
                <p className="text-xs">Ceo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
