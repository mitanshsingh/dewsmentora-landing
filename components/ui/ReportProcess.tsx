import type { CSSProperties } from "react";
import { ChevronRight } from "lucide-react";
import FrameworkIcon from "@/components/ui/FrameworkIcon";
import type { ProcessItem, ReportProcess as Process } from "@/lib/frameworks";

/**
 * The owner's "How your … report is created" infographics, rebuilt as markup.
 *
 * One DOM serves both of the artwork's layouts. At `nav` and up the stages are
 * columns, and each column is a five-row subgrid (numeral, title, node,
 * bullets, output) so every row lines up across all six, as in the landscape
 * original. Below `nav` the same items fall into a vertical timeline: the node
 * is pinned to the first column and the rest flow down the second, as in the
 * portrait original. From `sm` the output card moves to a third column.
 *
 * Execution Mapping's artwork adds a band of services between the stages and
 * the final deliverables; it uses the same node/title/bullets subgrid.
 *
 * The highlighted phrase in the heading is a marker stroke behind ink rather
 * than yellow text, which would be unreadable on white.
 */

const YELLOW = "bg-[#FEDD02]";

function Item({ item }: { item: ProcessItem }) {
  if (typeof item === "string") return <>{item}</>;
  return (
    <>
      <strong className="font-semibold text-ink">{item.term}</strong> — {item.text}
    </>
  );
}

export default function ReportProcess({ process }: { process: Process }) {
  const [lead, highlight, tail] = process.heading;
  const { stages, services, final, commitment } = process;
  const tiles = final.items.every((d) => d.icon);

  return (
    <div>
      <h4 className="m-0 font-display text-[clamp(28px,3.4vw,50px)] uppercase leading-[1.04]">
        {lead}{" "}
        <span className="box-decoration-clone bg-[linear-gradient(transparent_58%,#FEDD02_58%)] px-[0.08em]">
          {highlight}
        </span>
        {tail && ` ${tail}`}
      </h4>
      <p className="m-0 mt-3 mb-10 max-w-[60ch] font-sans text-[clamp(16px,1.4vw,21px)] leading-[1.4] text-muted-2 nav:mb-12">
        {process.tagline}
      </p>

      <ol
        className="m-0 list-none p-0 nav:grid nav:grid-cols-[repeat(var(--cols),minmax(0,1fr))] nav:grid-rows-[auto_auto_auto_1fr_auto] nav:gap-x-[var(--gap)]"
        style={
          {
            "--cols": stages.length,
            "--gap": "clamp(14px, 1.6vw, 26px)",
            "--node": "clamp(72px, 6.4vw, 96px)",
          } as CSSProperties
        }
      >
        {stages.map((stage, i) => {
          const isLast = i === stages.length - 1;
          return (
            <li
              key={stage.n}
              className="relative grid grid-cols-[52px_minmax(0,1fr)] gap-x-4 pb-9 last:pb-0 sm:max-nav:grid-cols-[64px_minmax(0,1fr)_minmax(190px,0.42fr)] sm:max-nav:gap-x-6 nav:row-span-5 nav:grid-cols-1 nav:grid-rows-subgrid nav:pb-0"
            >
              <p
                aria-hidden="true"
                className="col-start-2 m-0 font-display text-[30px] leading-none text-yellow nav:col-start-auto nav:text-center nav:text-[clamp(40px,3.5vw,56px)]"
              >
                {stage.n}
              </p>

              <h5 className="col-start-2 m-0 mt-1.5 font-sans text-[16px] font-bold uppercase leading-[1.2] nav:col-start-auto nav:mt-2 nav:text-center nav:text-[clamp(13px,1.05vw,16px)]">
                {stage.title}
              </h5>

              <div className="relative col-start-1 row-span-4 row-start-1 nav:col-start-auto nav:row-span-1 nav:row-start-auto nav:my-6 nav:flex nav:justify-center">
                <span
                  className={`relative z-[1] flex h-[52px] w-[52px] items-center justify-center rounded-full ${YELLOW} ring-[5px] ring-[#FEDD02]/25 sm:max-nav:h-16 sm:max-nav:w-16 nav:h-[var(--node)] nav:w-[var(--node)] nav:ring-[7px]`}
                >
                  <FrameworkIcon name={stage.icon} className="h-6 w-6 text-ink sm:max-nav:h-7 sm:max-nav:w-7 nav:h-[42%] nav:w-[42%]" />
                </span>

                {!isLast && (
                  <>
                    {/* Vertical rail to the next node, through this item's
                        bottom padding. Half-pixel lefts centre a 2px dotted
                        border on the 52px and 64px nodes. */}
                    <span
                      aria-hidden="true"
                      className="absolute top-[62px] bottom-[-36px] left-[25px] border-l-2 border-dotted border-ink/35 sm:top-[76px] sm:left-[31px] nav:hidden"
                    />
                    {/* Horizontal connector across the gap to the next
                        column's node, with the chevron chip at its middle. */}
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 hidden -translate-y-1/2 items-center justify-center nav:flex"
                      style={{
                        left: "calc(50% + var(--node) / 2 + 8px)",
                        width: "calc(100% + var(--gap) - var(--node) - 16px)",
                      }}
                    >
                      <span className="absolute inset-x-0 top-1/2 border-t-2 border-dotted border-ink/40" />
                      <span className={`relative flex h-6 w-6 items-center justify-center rounded-full ${YELLOW}`}>
                        <ChevronRight className="h-4 w-4 text-ink" strokeWidth={2.75} />
                      </span>
                    </span>
                  </>
                )}
              </div>

              <ul className="col-start-2 m-0 mt-3 grid list-none content-start gap-1.5 p-0 nav:col-start-auto nav:mt-0">
                {stage.items.map((item) => {
                  const key = typeof item === "string" ? item : item.term;
                  return (
                    <li
                      key={key}
                      className="flex gap-2.5 font-sans text-[15px] leading-[1.4] text-muted-2 nav:gap-2 nav:text-[clamp(12.5px,0.98vw,15px)]"
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-[0.45em] h-[7px] w-[7px] shrink-0 rounded-full ${YELLOW}`}
                      />
                      <span>
                        <Item item={item} />
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="col-start-2 mt-4 rounded-[10px] bg-[#FFF6CF] px-4 py-3 sm:max-nav:col-start-3 sm:max-nav:row-span-3 sm:max-nav:row-start-1 sm:max-nav:mt-0 sm:max-nav:self-center nav:col-start-auto nav:row-span-1 nav:row-start-auto nav:mt-6 nav:self-stretch nav:px-3 nav:py-3.5 nav:text-center">
                <p className="m-0 font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-ink">Output:</p>
                <p className="m-0 mt-0.5 font-sans text-[15px] font-medium leading-[1.3] text-ink nav:text-[clamp(13px,1vw,15px)]">
                  {stage.output}
                </p>
                {stage.outputNote && (
                  <p className="m-0 mt-0.5 font-sans text-[13px] leading-[1.3] text-muted-2 nav:text-[clamp(11.5px,0.9vw,13px)]">
                    {stage.outputNote}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {services && (
        // The pill sits on the panel's top edge from `sm`; on a phone it would
        // wrap there, so it stays inside.
        <section className="mt-12 rounded-[16px] border-2 border-[#FEDD02] p-[22px_18px_26px] sm:relative sm:mt-16 sm:p-[42px_28px_30px] nav:rounded-[18px] nav:p-[44px_10px_32px]">
          <div className="text-center">
            <h5
              className={`m-0 mx-auto w-fit rounded-full px-5 py-2 font-sans text-[16px] font-bold uppercase leading-[1.2] ${YELLOW} sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:whitespace-nowrap sm:px-7 nav:text-[clamp(16px,1.35vw,20px)]`}
            >
              {services.heading}
            </h5>
            <p className="m-0 mt-3 font-sans text-[12px] font-bold uppercase tracking-[0.22em] text-muted-2 sm:mt-0">
              {services.kicker}
            </p>
          </div>

          <ul
            className="m-0 mt-7 grid list-none gap-y-8 p-0 sm:max-nav:grid-cols-2 sm:max-nav:gap-x-8 nav:mt-8 nav:grid-cols-[repeat(var(--services),minmax(0,1fr))] nav:grid-rows-[auto_auto_1fr] nav:gap-y-0"
            style={{ "--services": services.items.length } as CSSProperties}
          >
            {services.items.map((service) => (
              <li
                key={service.title}
                className="grid grid-cols-[48px_minmax(0,1fr)] content-start gap-x-4 nav:row-span-3 nav:grid-cols-1 nav:grid-rows-subgrid nav:border-l nav:border-[#EFE6BF] nav:px-[clamp(12px,1.2vw,20px)] nav:first:border-l-0"
              >
                <span
                  className={`row-span-2 flex h-12 w-12 items-center justify-center rounded-full ${YELLOW} nav:row-span-1 nav:mx-auto nav:mb-3.5 nav:h-16 nav:w-16`}
                >
                  <FrameworkIcon name={service.icon} className="h-6 w-6 text-ink nav:h-7 nav:w-7" />
                </span>
                <p className="m-0 self-center font-sans text-[15px] font-bold uppercase leading-[1.2] text-ink nav:self-end nav:text-center nav:text-[clamp(13px,1.05vw,15px)]">
                  {service.title}
                </p>
                <ul className="col-start-2 m-0 mt-2.5 grid list-none content-start gap-1.5 p-0 nav:col-start-auto nav:mt-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 font-sans text-[15px] leading-[1.4] text-muted-2 nav:gap-2 nav:text-[clamp(12.5px,0.98vw,15px)]"
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-[0.45em] h-[7px] w-[7px] shrink-0 rounded-full ${YELLOW}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Below `nav`: two stacked panels, as in the portrait original. At
          `nav`: one panel split by a hairline, as in the landscape one. */}
      <div
        className="mt-12 grid gap-4 nav:mt-14 nav:grid-cols-[minmax(0,1fr)_minmax(280px,var(--commit))] nav:gap-0 nav:rounded-[18px] nav:border-2 nav:border-[#FEDD02]"
        // Six deliverable tiles need the room more than the commitment does.
        style={{ "--commit": tiles && final.items.length > 4 ? "0.36fr" : "0.5fr" } as CSSProperties}
      >
        <section className="rounded-[16px] border-2 border-[#FEDD02] p-[22px_18px] sm:max-nav:p-7 nav:rounded-none nav:border-0 nav:p-[30px_34px]">
          {tiles ? (
            <>
              <h5 className="m-0 font-sans text-[18px] font-bold uppercase leading-[1.15] nav:text-center nav:text-[clamp(16px,1.35vw,20px)]">
                {final.heading}
              </h5>
              <ul
                className="m-0 mt-6 grid list-none gap-y-7 p-0 grid-cols-2 sm:max-nav:grid-cols-3 nav:grid-cols-[repeat(var(--tiles),minmax(0,1fr))]"
                style={{ "--tiles": final.items.length } as CSSProperties}
              >
                {final.items.map((d) => (
                  <li
                    key={d.title}
                    className="flex flex-col items-center px-2 text-center nav:border-l nav:border-[#EFE6BF] nav:px-3 nav:first:border-l-0"
                  >
                    <span className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full ${YELLOW}`}>
                      {d.icon && <FrameworkIcon name={d.icon} className="h-6 w-6 text-ink" />}
                    </span>
                    <p className="m-0 font-sans text-[14px] font-bold leading-[1.25] text-ink">{d.title}</p>
                    {d.body && <p className="m-0 mt-1 font-sans text-[13px] leading-[1.35] text-muted-2">{d.body}</p>}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="flex gap-5 nav:gap-6">
              <span
                className={`hidden h-16 w-16 shrink-0 items-center justify-center rounded-full sm:flex nav:h-[72px] nav:w-[72px] ${YELLOW}`}
              >
                <FrameworkIcon name="readiness" className="h-7 w-7 text-ink" />
              </span>
              <div className="min-w-0 flex-1">
                <h5 className="m-0 font-sans text-[18px] font-bold uppercase leading-[1.15] nav:text-[clamp(16px,1.35vw,20px)]">
                  {final.heading}
                </h5>
                <ul className="m-0 mt-4 grid list-none gap-x-8 gap-y-2 p-0 sm:grid-cols-2">
                  {final.items.map((d) => (
                    <li key={d.title} className="flex gap-2.5 font-sans text-[15px] leading-[1.4] text-muted-2">
                      <span
                        aria-hidden="true"
                        className={`mt-[0.45em] h-[7px] w-[7px] shrink-0 rounded-full ${YELLOW}`}
                      />
                      {d.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* The icon shares the heading's row so the body keeps the column's
            full width; beside the body it left Story's narrow column at about
            twenty characters a line. */}
        <section className="rounded-[16px] border-2 border-[#FEDD02] p-[22px_18px] sm:max-nav:p-7 nav:my-7 nav:rounded-none nav:border-y-0 nav:border-r-0 nav:border-l nav:border-l-[#E8E2C8] nav:p-[0_34px]">
          <div className="flex items-center gap-4">
            <span
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full nav:h-16 nav:w-16 ${YELLOW}`}
            >
              <FrameworkIcon name="target" className="h-7 w-7 text-ink" />
            </span>
            <h5 className="m-0 font-sans text-[18px] font-bold uppercase leading-[1.15] nav:text-[clamp(16px,1.35vw,20px)]">
              Our commitment
            </h5>
          </div>
          <p className="m-0 mt-3.5 font-sans text-[15px] leading-[1.5] text-muted-2">{commitment}</p>
        </section>
      </div>
    </div>
  );
}
