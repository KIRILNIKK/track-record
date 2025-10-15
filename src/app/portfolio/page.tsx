import Image from "next/image";
import { PropertyCarousel } from "@/components/PropertyCarousel";

export default function PortfolioPage() {
  const deals = [
    {
      name: "Brampton Two-Unit Conversion",
      location: "Brampton, Ontario",
      strategy: "Buy & Hold",
      purchaseDate: "October 2016",
      purchasePrice: "$497,000",
      renovation: "$5,000 minor refresh",
      exit: "Refinanced and held for long-term cash flow",
      keyPoints: [
        "Originally a single-family home—added a self-contained basement apartment to boost rental income.",
        "Stabilized quickly with reliable tenants attracted by the refreshed interiors.",
        "Early proof-of-concept that thoughtful layout changes and strong screening can create durable income.",
      ],
      media: {
        galleryImages: [
          {
            src: "/portfolio/brampton/photo-1.jpg",
            alt: "Brampton open living and dining area",
          },
          {
            src: "/portfolio/brampton/photo-2.jpg",
            alt: "Brampton living room with sectional",
          },
          {
            src: "/portfolio/brampton/photo-3.jpg",
            alt: "Brampton kitchen stainless fridge",
          },
          {
            src: "/portfolio/brampton/photo-4.jpg",
            alt: "Brampton kitchen stove and backsplash",
          },
          {
            src: "/portfolio/brampton/photo-5.jpg",
            alt: "Brampton kitchen galley view",
          },
          {
            src: "/portfolio/brampton/photo-6.jpg",
            alt: "Brampton renovated bathroom",
          },
          {
            src: "/portfolio/brampton/photo-7.jpg",
            alt: "Brampton upstairs bedroom",
          },
          {
            src: "/portfolio/brampton/photo-8.jpg",
            alt: "Brampton twin bedroom layout",
          },
          {
            src: "/portfolio/brampton/photo-9.jpg",
            alt: "Brampton children bedroom",
          },
          {
            src: "/portfolio/brampton/photo-10.jpg",
            alt: "Brampton basement suite bedroom",
          },
        ],
      },
    },
    {
      name: "St. Catharines Two-Unit Hold",
      location: "St. Catharines, Ontario",
      strategy: "Buy & Hold",
      purchaseDate: "June 2017",
      purchasePrice: "$305,000",
      renovation: "$40,000 prior to sale",
      exit: "Sold June 2025 for $535,000",
      keyPoints: [
        "Purchased with two existing suites that provided immediate cash flow.",
        "Managed tenant turnovers over several years before investing in targeted upgrades ahead of sale.",
        "Exited in 2025 to recycle capital into larger projects while capturing appreciation.",
      ],
      media: {
        beforeImages: [
          {
            src: "/portfolio/st-catharines/before-1.jpg",
            alt: "St. Catharines house",
          },
          {
            src: "/portfolio/st-catharines/before-2.jpg",
            alt: "St. Catharines front door entrance before renovations",
          },
          {
            src: "/portfolio/st-catharines/before-3.jpg",
            alt: "St. Catharines main living space before renovations",
          },
          {
            src: "/portfolio/st-catharines/before-4.jpg",
            alt: "St. Catharines kitchen before updates",
          },
          {
            src: "/portfolio/st-catharines/before-5.jpg",
            alt: "St. Catharines bathroom before updates",
          },
          {
            src: "/portfolio/st-catharines/before-6.jpg",
            alt: "St. Catharines bedroom before renovations",
          },
          {
            src: "/portfolio/st-catharines/before-7.jpg",
            alt: "St. Catharines second bedroom before renovations",
          },
          {
            src: "/portfolio/st-catharines/before-8.jpg",
            alt: "St. Catharines third bedroom before update",
          },
          {
            src: "/portfolio/st-catharines/before-9.jpg",
            alt: "St. Catharines shared laundry area before upgrade",
          },
        ],
        afterPlaceholder: "St. Catharines refreshed finishes",
        afterImages: [
          {
            src: "/portfolio/st-catharines/after-1.jpg",
            alt: "St. Catharines house after renovations",
          },
          {
            src: "/portfolio/st-catharines/after-2.jpg",
            alt: "St. Catharines entryway and living room post-renovation",
          },
          {
            src: "/portfolio/st-catharines/after-3.jpg",
            alt: "St. Catharines main living space after renovations",
          },
          {
            src: "/portfolio/st-catharines/after-4.jpg",
            alt: "St. Catharines kitchen with updated finishes",
          },
          {
            src: "/portfolio/st-catharines/after-5.jpg",
            alt: "St. Catharines bathroom after remodel",
          },
          {
            src: "/portfolio/st-catharines/after-6.jpg",
            alt: "St. Catharines bedroom post-upgrade",
          },
          {
            src: "/portfolio/st-catharines/after-7.jpg",
            alt: "St. Catharines second bedroom post-upgrade",
          },
          {
            src: "/portfolio/st-catharines/after-8.jpg",
            alt: "St. Catharines third bedroom refreshed with new finishes",
          },
          {
            src: "/portfolio/st-catharines/after-9.jpg",
            alt: "St. Catharines laundry area after renovation",
          },
        ],
      },
    },
    {
      name: "Pickering Flip",
      location: "Pickering, Ontario",
      strategy: "Fix & Flip",
      purchaseDate: "October 2019",
      purchasePrice: "$643,500",
      renovation: "$60,000 full interior overhaul",
      exit: "Sold December 2020 for $823,000",
      keyPoints: [
        "Converted the basement into a self-contained unit while modernizing the main floor living areas.",
        "Managed design and most of the renovation work personally with part-time contractors and family support.",
        "Achieved a clean exit inside 14 months while living on-site—a true hands-on project.",
      ],
      media: {
        beforePlaceholder: "Pickering original living areas",
        afterPlaceholder: "Pickering modernized flip finish",
      },
    },
    {
      name: "Oshawa Triplex Conversion",
      location: "Oshawa, Ontario",
      strategy: "BRRRR / Value-Add",
      purchaseDate: "May 2021",
      purchasePrice: "$608,000",
      renovation: "$200,000 extensive rebuild",
      exit: "Refinanced and held for long-term cash flow",
      keyPoints: [
        "Acquired as a legal duplex and executed a conversion to a fully-legal triplex.",
        "Upgraded mechanicals, fire separation, and finishes to support three high-quality units.",
        "Working closely with contractors and the city to navigate complex approvals and maximize refinancability.",
      ],
      media: {
        beforeImages: [
          {
            src: "/portfolio/oshawa/before-1.jpg",
            alt: "Oshawa kitchen before renovation",
          },
          {
            src: "/portfolio/oshawa/before-2.jpg",
            alt: "Oshawa bedroom before renovation",
          },
          {
            src: "/portfolio/oshawa/before-3.jpg",
            alt: "Oshawa bathroom before renovation",
          },
          {
            src: "/portfolio/oshawa/before-4.jpg",
            alt: "Oshawa cluttered bedroom before renovation",
          },
          {
            src: "/portfolio/oshawa/before-5.jpg",
            alt: "Oshawa primary bedroom before renovation",
          },
          {
            src: "/portfolio/oshawa/before-6.jpg",
            alt: "Oshawa secondary bathroom before renovation",
          },
          {
            src: "/portfolio/oshawa/before-7.jpg",
            alt: "Oshawa kids room before renovation",
          },
          {
            src: "/portfolio/oshawa/before-8.jpg",
            alt: "Oshawa main living room before renovation",
          },
          {
            src: "/portfolio/oshawa/before-9.jpg",
            alt: "Oshawa basement during construction",
          },
          {
            src: "/portfolio/oshawa/before-10.jpg",
            alt: "Oshawa stairwell before finishing",
          },
          {
            src: "/portfolio/oshawa/before-11.jpg",
            alt: "Oshawa secondary kitchen before renovation",
          },
        ],
        afterImages: [
          {
            src: "/portfolio/oshawa/after-1.jpg",
            alt: "Oshawa renovated kitchen",
          },
          {
            src: "/portfolio/oshawa/after-2.jpg",
            alt: "Oshawa renovated bathroom with tile surround",
          },
          {
            src: "/portfolio/oshawa/after-3.jpg",
            alt: "Oshawa basement kitchen after renovation",
          },
          {
            src: "/portfolio/oshawa/after-4.jpg",
            alt: "Oshawa bright living room after renovation",
          },
          {
            src: "/portfolio/oshawa/after-5.jpg",
            alt: "Oshawa updated stairwell and flooring",
          },
          {
            src: "/portfolio/oshawa/after-6.jpg",
            alt: "Oshawa refreshed bedroom with new flooring",
          },
          {
            src: "/portfolio/oshawa/after-7.jpg",
            alt: "Oshawa second bedroom after renovation",
          },
          {
            src: "/portfolio/oshawa/after-8.jpg",
            alt: "Oshawa bedroom with mirrored closet after renovation",
          },
          {
            src: "/portfolio/oshawa/after-9.jpg",
            alt: "Oshawa finished kitchen with island",
          },
          {
            src: "/portfolio/oshawa/after-10.jpg",
            alt: "Oshawa feature wall bedroom after renovation",
          },
          {
            src: "/portfolio/oshawa/after-11.jpg",
            alt: "Oshawa combined laundry and bathroom after renovation",
          },
        ],
      },
      videos: [
        {
          label: "Unit 1 Walkthrough",
          url: "https://youtu.be/BNfMNLN7Tps",
          videoId: "BNfMNLN7Tps",
        },
        {
          label: "Unit 2 Walkthrough",
          url: "https://youtu.be/GSvnqfVwtQ8",
          videoId: "GSvnqfVwtQ8",
        },
        {
          label: "Unit 3 Walkthrough",
          url: "https://youtu.be/Ogi-onylMgg",
          videoId: "Ogi-onylMgg",
        },
      ],
    },
  ];

  const metrics = [
    {
      label: "Years Active",
      value: "9",
      detail: "Investing since 2016 with consistent deal flow in Ontario.",
    },
    {
      label: "Units Transacted",
      value: "7",
      detail: "Purchased, renovated, or managed across duplex and triplex projects.",
    },
    {
      label: "Capital Deployed",
      value: "$1.55M+",
      detail: "Across purchases and renovation budgets using a mix of savings and financing.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 pb-12">
      <section className="rounded-3xl bg-white p-10 shadow-sm shadow-slate-200/60">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
          Portfolio Overview
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Real assets built with patience, sweat equity, and investor-grade
          discipline.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-7 text-slate-600">
          These transactions chart my path from a first duplex conversion in
          Brampton to more sophisticated BRRRR executions. Every project refined
          my underwriting, renovation management, and tenant relations playbooks
          while compounding capital for the next opportunity.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              {metric.label}
            </p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">
              {metric.value}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {metric.detail}
            </p>
          </div>
        ))}
      </section>

      <section className="space-y-8">
        {deals.map((deal) => (
          <article
            key={deal.name}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/40"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {deal.strategy}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  {deal.name}
                </h2>
                <p className="text-sm text-slate-600">{deal.location}</p>
              </div>
              <div className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-slate-900">Purchased</p>
                  <p>{deal.purchaseDate}</p>
                  <p>{deal.purchasePrice}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Renovation</p>
                  <p>{deal.renovation}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="font-semibold text-slate-900">Exit</p>
                  <p>{deal.exit}</p>
                </div>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
              {deal.keyPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {deal.media && (
              <div className="mt-6 space-y-6">
                {deal.media.galleryImages &&
                  deal.media.galleryImages.length > 0 && (
                    <div className="mx-auto w-full max-w-2xl">
                      <PropertyCarousel
                        title="Property Photos"
                        images={deal.media.galleryImages}
                      />
                    </div>
                  )}

                {deal.media.beforeImages && deal.media.beforeImages.length > 0 ? (
                  <div className="grid gap-6 lg:grid-cols-2">
                    <PropertyCarousel
                      title="Before Photos"
                      images={deal.media.beforeImages}
                    />
                    {deal.media.afterImages && deal.media.afterImages.length > 0 ? (
                      <PropertyCarousel
                        title="After Photos"
                        images={deal.media.afterImages}
                      />
                    ) : deal.media.afterPlaceholder ? (
                      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center text-sm text-slate-500">
                        <p className="font-semibold text-slate-900">After Photo</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                          Placeholder
                        </p>
                        <p className="mt-3">{deal.media.afterPlaceholder}</p>
                      </div>
                    ) : null}
                  </div>
                ) : deal.media.beforePlaceholder ? (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center text-sm text-slate-500">
                    <p className="font-semibold text-slate-900">Before Photo</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                      Placeholder
                    </p>
                    <p className="mt-3">{deal.media.beforePlaceholder}</p>
                  </div>
                ) : null}

                {deal.media.afterImages && deal.media.afterImages.length > 0 ? (
                  !deal.media.beforeImages ||
                  deal.media.beforeImages.length === 0 ? (
                    <PropertyCarousel
                      title="After Photos"
                      images={deal.media.afterImages}
                    />
                  ) : null
                ) : deal.media.afterPlaceholder ? (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center text-sm text-slate-500">
                    <p className="font-semibold text-slate-900">After Photo</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                      Placeholder
                    </p>
                    <p className="mt-3">{deal.media.afterPlaceholder}</p>
                  </div>
                ) : null}
              </div>
            )}
            {deal.videos && (
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Walkthrough Videos
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {deal.videos.map((video) => (
                    <a
                      key={video.url}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                    >
                      <div className="relative h-36 w-full overflow-hidden">
                        <Image
                          src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                          alt={`${video.label} thumbnail`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-1 px-4 py-3 text-sm text-slate-700">
                        <span className="font-semibold text-slate-900">
                          {video.label}
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                          Watch on YouTube
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-gradient-to-r from-slate-100 via-white to-slate-100 p-8">
        <h2 className="text-2xl font-semibold text-slate-900">
          What&apos;s next
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
          I am actively sourcing the next repositioning opportunity—ideally a 
          small to medium multifamily asset in Ohio or a resilient Midwest market with
          solid fundamentals. I will be launching a fund soon and I am also open to joint 
          ventures where I can bring underwriting, permitting know-how, contractor, and 
          value-add oversight to the table. Reach out if you would like to receive deal 
          memos as they come together.
        </p>
      </section>
    </div>
  );
}
