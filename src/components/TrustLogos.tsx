import { Gem, Hexagon, CircleDot, Triangle, Diamond, Flower2 } from "lucide-react";
import { trustLogos } from "@/lib/data";

const icons = [Diamond, Hexagon, CircleDot, Triangle, Flower2, Gem];

export default function TrustLogos() {
  return (
    <section className="px-5 pb-16 sm:px-8 lg:px-12" aria-label="Trusted by">
      <div className="mx-auto max-w-[1320px] rounded-[28px] border border-border bg-white px-6 py-8 sm:px-10">
        <p className="mb-6 text-center text-xs font-semibold tracking-widest text-text-secondary sm:text-left">
          TRUSTED BY LEARNERS FROM
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent" />
          <div className="flex gap-10 overflow-x-auto sm:justify-between [&::-webkit-scrollbar]:hidden">
            {trustLogos.map((name, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={name}
                  className="flex shrink-0 items-center gap-2 text-text-secondary grayscale transition-all duration-200 hover:grayscale-0"
                >
                  <Icon size={20} className={i % 2 === 0 ? "text-blue" : "text-orange"} />
                  <span className="whitespace-nowrap text-[15px] font-semibold text-navy/80">
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
