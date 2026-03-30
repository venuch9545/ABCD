import { useState } from "react";
import { Layout } from "../components/Layout";
import { Certifications } from "../components/Certifications";
import { motion } from "motion/react";

const certData: Record<string, { title: string; subtitle: string; image: string; details: string[] }> = {
  iec: {
    title: "IEC Certificate",
    subtitle: "Importer-Exporter Code",
    image: "/certificates/iec-certificate.jpg",
    details: [
      "IEC: CNNPC5978H",
      "Firm Name: SOUTH STONE EXPORTS",
      "Nature: Proprietorship",
      "Date of Issue: 01/02/2026",
      "Signatory: Challa Venu",
      "Address: Chimkurthy Ramnagar 6th Line, Chimakurthy, PRAKASAM, ANDHRA PRADESH, 523226",
      "File Number: VSPIECPAPPLY00006762AM26",
    ],
  },
  gst: {
    title: "GST Certificate",
    subtitle: "Goods & Services Tax Registration",
    image: "/certificates/gst-certificate.jpg",
    details: [
      "GSTIN: 37CNNPC5978H1ZF",
      "Legal Name: CHALLA VENU",
      "Trade Name: SOUTH STONE EXPORTS",
      "Constitution: Proprietorship",
      "Address: Building No. 163, Ramnagar 6th Line, Chimakurthy, Prakasam, Andhra Pradesh, 523226",
      "Period of Validity From: 19/12/2025",
      "Period of Validity To: Not Applicable",
      "Type of Registration: Regular",
      "Date of Issue: 19/12/2025",
    ],
  },
};

function CertDetailView({ type, onBack }: { type: string; onBack: () => void }) {
  const cert = certData[type];
  if (!cert) return null;

  return (
    <div className="py-16 lg:py-24 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <svg className="w-6 h-6 text-stone-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span className="text-[11px] tracking-[0.2em] uppercase text-stone-gold font-semibold">{cert.subtitle}</span>
          </div>
          <h1 className="text-[clamp(2rem,4.5vw,4rem)] font-black leading-[0.95] tracking-[-0.03em] uppercase text-foreground">{cert.title}</h1>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-7">
            <div className="bg-white border border-border p-4 lg:p-6 shadow-sm">
              <img src={cert.image} alt={cert.title} className="w-full h-auto" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="lg:col-span-5">
            <div className="bg-white border border-border p-8 lg:p-10">
              <h2 className="text-[14px] font-bold tracking-[0.1em] uppercase text-foreground mb-6">Certificate Details</h2>
              <div className="space-y-4">
                {cert.details.map((detail, i) => {
                  const colonIdx = detail.indexOf(": ");
                  const hasLabel = colonIdx > -1;
                  return (
                    <div key={i} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                      {hasLabel ? (
                        <>
                          <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-semibold block mb-1">{detail.substring(0, colonIdx)}</span>
                          <span className="text-[14px] text-foreground font-medium">{detail.substring(colonIdx + 2)}</span>
                        </>
                      ) : (
                        <span className="text-[14px] text-muted-foreground leading-relaxed">{detail}</span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
                <svg className="w-5 h-5 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-[12px] tracking-[0.1em] uppercase font-semibold text-foreground">Verified & Active</span>
              </div>
            </div>
            <button onClick={onBack} className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
              Back to all certifications
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function CertificationsPage() {
  const [viewCert, setViewCert] = useState<string | null>(null);

  // Expose the showCert function so the Certifications component can call it
  if (typeof window !== "undefined") {
    (window as any).__showCert = (type: string) => setViewCert(type);
  }

  return (
    <Layout>
      {viewCert ? (
        <CertDetailView type={viewCert} onBack={() => setViewCert(null)} />
      ) : (
        <Certifications />
      )}
    </Layout>
  );
}
