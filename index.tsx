import { Link } from "wouter";
import { motion } from "motion/react";
import { Layout } from "../components/Layout";
import { getWhatsAppUrl, products } from "../lib/products";

export default function HomePage() {
  return (
    <Layout>
      {/* HERO — full viewport, no top padding offset needed because hero is absolute */}
      <section className="relative -mt-16 lg:-mt-20 h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover" poster="/products/absolute-black.jpg">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-5xl">
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block text-[11px] lg:text-[13px] tracking-[0.4em] uppercase text-white/50 font-medium mb-6 lg:mb-8">
              Premium Indian Granite Exporters
            </motion.span>

            <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.4 }}
              className="text-[clamp(3rem,9vw,8rem)] font-black leading-[0.85] tracking-[-0.04em] text-white uppercase">
              South<br />Stone<br />
              <span className="relative inline-block">
                Exports
                <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                  className="absolute bottom-[0.1em] left-0 w-full h-[3px] lg:h-[4px] bg-stone-gold origin-left" />
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 lg:mt-10 text-[15px] lg:text-[18px] text-white/60 max-w-lg leading-relaxed font-light">
              Authentic Indian granite with zero cracks, premium finishes &amp; direct quarry sourcing — exported globally.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10 lg:mt-14 flex flex-wrap gap-4">
              <Link href="/products" className="inline-flex items-center px-8 py-4 bg-white text-foreground text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-stone-gold hover:text-white transition-colors duration-300">
                Explore Products
              </Link>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-white hover:text-foreground transition-colors duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Get Quote
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-medium">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-[1px] h-8 bg-white/30" />
        </motion.div>
      </section>

      {/* Quick product showcase */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground font-semibold">Featured Granites</span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.95] tracking-[-0.03em] uppercase text-foreground mt-4">
                Our <span className="text-stone-gold">Premium</span> Collection
              </h2>
            </div>
            <Link href="/products" className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase font-bold text-foreground hover:text-stone-gold transition-colors">
              View All Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {products.slice(0, 4).map((p) => (
              <Link key={p.id} href="/products" className="group">
                <div className="relative overflow-hidden aspect-[4/3] bg-border">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-[16px] font-bold uppercase text-white">{p.name}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick trust section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-black tracking-[-0.02em] uppercase text-foreground mb-12">
            Why <span className="text-stone-gold">Choose</span> Us
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "0%", lbl: "Cracks & Variation" },
              { val: "Global", lbl: "Vietnam, UAE, US, UK & More" },
              { val: "Direct", lbl: "Quarry Sourcing" },
              { val: "Full", lbl: "Export Documentation" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="text-[clamp(1.8rem,3.5vw,3rem)] font-black tracking-[-0.02em] text-foreground">{s.val}</div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground font-medium mt-1">{s.lbl}</div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/about" className="inline-flex items-center gap-2 btn text-[11px] tracking-[0.2em] uppercase font-bold bg-foreground text-white px-8 py-4 hover:bg-stone-gold transition-colors duration-300">
              Learn Our Story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
