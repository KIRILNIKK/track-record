import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const milestones = [
    {
      year: "2016",
      title: "First Two-Unit House in Brampton",
      summary:
        "Converted a tired bungalow into a functional two-unit rental—proof that sweat equity can overcome limited capital.",
    },
    {
      year: "2017",
      title: "Expanded into St. Catharines",
      summary:
        "Scaled to a second two-unit while working full-time, learning tenant management and capital planning on the fly.",
    },
    {
      year: "2019-2020",
      title: "Hands-On Flip in Pickering",
      summary:
        "Renovated our family home to create an in-law suite and modern finish, demonstrating how design upgrades unlock value.",
    },
    {
      year: "2021-Present",
      title: "Larger BRRRR Executions",
      summary:
        "Focused on heavier rehabs like the Oshawa triplex conversion while exploring opportunities in resilient U.S. markets.",
    },
  ];

  const values = [
    {
      title: "Disciplined Underwriting",
      detail:
        "CFA charterholder with a modelling-first approach—every deal starts with conservative forecasts and multiple exit paths.",
    },
    {
      title: "Hands-On Operator",
      detail:
        "From minor cosmetic lifts to six-figure renovations, I stay close to contractors, permitting, and tenant experience.",
    },
    {
      title: "Long-Term Relationships",
      detail:
        "Building genuine partnerships with investors and trades has been my unfair advantage since those early duplex days.",
    },
  ];

  return (
    <div className="flex flex-col gap-12 pb-12">
      <section className="rounded-3xl bg-white p-10 shadow-sm shadow-slate-200/60">
        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:gap-10">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              Meet Kiril Nikolaev
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Canadian real estate investor turning humble beginnings into lasting
              cash flow.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-7 text-slate-600">
              Based in Pickering, Ontario, I bought my first duplex in 2016 with more
              grit than capital. Since then I have owned or partnered on seven units,
              managed tenant turnovers, navigated full-gut renovations, and exited
              flips that unlocked significant equity. My next chapter: scaling
              Canadian BRRRR experience into resilient U.S. multifamily.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <span>📍 Pickering, Ontario</span>
              <span>📈 Investing since 2016</span>
              <span>🤝 Open to JV conversations</span>
            </div>
          </div>
          <div className="flex justify-center md:flex-none md:justify-end">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-xl shadow-slate-300/50 sm:h-56 sm:w-56">
              <Image
                src="/kiril-headshot.jpg"
                alt="Kiril Nikolaev smiling"
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/portfolio"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
          >
            View My Portfolio
          </Link>
          <a
            href="mailto:liriplex@gmail.com"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
          >
            Connect via Email
          </a>
          <a
            href="http://www.linkedin.com/in/kirilnikolaev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {value.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {value.detail}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Humble beginnings, steady growth.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Each property pushed me to learn a new skill—legal conversions,
              tenant placement, capital improvements, or disciplined exits. That
              compounding experience now fuels my expansion into larger BRRRR and
              small multifamily projects.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-slate-900 underline underline-offset-4 transition hover:text-slate-600"
          >
            Explore the deal-by-deal breakdown →
          </Link>
        </div>
        <ol className="mt-8 space-y-6 border-l border-slate-200 pl-6">
          {milestones.map((milestone) => (
            <li key={milestone.year} className="relative pl-2">
              <span className="absolute -left-[9px] top-3 h-3 w-3 rounded-full border border-slate-300 bg-slate-900/80" />
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  {milestone.year}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {milestone.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-3xl bg-gradient-to-r from-slate-100 via-white to-slate-100 p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Let’s connect</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          I am eager to collaborate with investors, lenders, and operators who
          share the same disciplined approach to value-add real estate. Review my
          BiggerPockets profile, dig into the portfolio numbers, and reach out if
          you would like to explore a deal together.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
          <a
            href="https://www.biggerpockets.com/users/kirilnikolaev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 bg-white px-5 py-3 transition hover:border-slate-400 hover:bg-slate-100"
          >
            BiggerPockets Profile
          </a>
          <a
            href="http://www.investoracademy.org/how-to-grow-your-net-worth-with-residential-rental-real-estate-investing/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 bg-white px-5 py-3 transition hover:border-slate-400 hover:bg-slate-100"
          >
            First Deal Walkthrough
          </a>
        </div>
      </section>
    </div>
  );
}
