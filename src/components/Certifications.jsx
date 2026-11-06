"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Award, FileText, ExternalLink, Calendar, CheckCircle2, Eye, X, Download, ArrowRight, ArrowLeft } from "lucide-react";
import { certificationsData } from "@/data/certifications";

const Certifications = ({ limit = 3, isFullPage = false }) => {
  const [activeModalCert, setActiveModalCert] = useState(null);

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModalCert(null);
      }
    };

    if (activeModalCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalCert]);

  const displayedCerts = limit ? certificationsData.slice(0, limit) : certificationsData;
  const hasMore = limit && certificationsData.length > limit;

  return (
    <section id="certifications" className={`${isFullPage ? "pt-28 pb-24" : "py-24"} relative overflow-hidden`}>
      {/* Decorative background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link for Full Page */}
        {isFullPage && (
          <div className="mb-10">
            <Link
              href="/#certifications"
              className="inline-flex items-center gap-2 text-secondary/60 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl bg-secondary/5 border border-secondary/10 hover:border-primary/30"
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-secondary/40 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
            Qualifications
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter mb-4">
            {isFullPage ? "All " : "Licenses & "}
            <span className="text-primary italic">Certifications</span>
          </h2>
          <p className="text-secondary/60 max-w-xl text-sm uppercase tracking-[0.25em] font-medium">
            {isFullPage
              ? `Showing all ${certificationsData.length} verified credentials & technical specializations`
              : "Verified credentials & technical specializations"}
          </p>
          <div className="h-1.5 w-32 bg-primary rounded-full mt-6" />
        </div>

        {/* Certificate Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${isFullPage ? "lg:grid-cols-2 gap-8" : "lg:grid-cols-3 gap-6"} max-w-7xl mx-auto`}>
          {displayedCerts.map((cert, index) => (
            <div
              key={index}
              className={`group flex flex-col bg-bg-dark/40 backdrop-blur-xl border border-secondary/10 ${isFullPage ? "rounded-3xl" : "rounded-2xl"} overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-2xl hover:-translate-y-1.5`}
            >
              {/* PDF Document Showcase Frame */}
              <div className={`relative ${isFullPage ? "p-5 pb-0" : "p-3.5 pb-0"} bg-gradient-to-b from-secondary/5 to-transparent`}>
                <div
                  onClick={() => setActiveModalCert(cert)}
                  className={`relative aspect-[1650/1275] w-full ${isFullPage ? "rounded-2xl" : "rounded-xl"} overflow-hidden bg-white/5 border border-secondary/10 shadow-lg cursor-pointer group/preview`}
                >
                  <img
                    src={cert.previewImage}
                    alt={`${cert.title} Certificate Preview`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/preview:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Interactive Hover Overlay */}
                  <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-center justify-center gap-3">
                    <span className={`inline-flex items-center gap-2 bg-primary text-bg-dark ${isFullPage ? "px-5 py-2.5 text-xs" : "px-4 py-2 text-[11px]"} rounded-full font-black uppercase tracking-widest shadow-2xl transform translate-y-2 group-hover/preview:translate-y-0 transition-transform duration-300`}>
                      <Eye size={isFullPage ? 16 : 14} /> Preview PDF
                    </span>
                  </div>

                  {/* Top-right Verified Tag */}
                  <div className={`absolute ${isFullPage ? "top-3 right-3" : "top-2.5 right-2.5"} z-10`}>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 bg-bg-dark/80 backdrop-blur-md text-primary ${isFullPage ? "text-[10px]" : "text-[9px]"} font-black uppercase tracking-wider rounded-full border border-primary/20 shadow-md`}>
                      <CheckCircle2 size={isFullPage ? 12 : 11} /> Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Certificate Content */}
              <div className={`${isFullPage ? "p-8" : "p-5"} flex flex-col flex-grow`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-primary ${isFullPage ? "text-xs" : "text-[11px]"} font-black uppercase tracking-[0.2em] truncate mr-2`}>
                    {cert.issuer}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 text-secondary/40 ${isFullPage ? "text-xs" : "text-[11px]"} font-bold shrink-0`}>
                    <Calendar size={isFullPage ? 13 : 12} /> {cert.date}
                  </span>
                </div>

                <h3
                  className={`${isFullPage ? "text-2xl mb-3" : "text-lg mb-2 line-clamp-1"} font-black text-secondary group-hover:text-primary transition-colors tracking-tight`}
                  title={cert.title}
                >
                  {cert.title}
                </h3>

                <p className={`text-secondary/60 ${isFullPage ? "mb-6 text-sm leading-relaxed" : "mb-3 text-xs leading-relaxed line-clamp-2"} flex-grow`}>
                  {cert.description}
                </p>

                {/* Skills Chips */}
                <div className={`flex flex-wrap gap-1.5 ${isFullPage ? "mb-8" : "mb-4"}`}>
                  {(isFullPage ? cert.skills : cert.skills.slice(0, 3)).map((skill) => (
                    <span
                      key={skill}
                      className={`bg-secondary/5 text-secondary/50 ${isFullPage ? "px-3 py-1 text-[10px]" : "px-2.5 py-0.5 text-[9px]"} rounded-lg font-bold uppercase tracking-widest border border-secondary/10`}
                    >
                      {skill}
                    </span>
                  ))}
                  {!isFullPage && cert.skills.length > 3 && (
                    <span className="bg-primary/5 text-primary/80 px-2 py-0.5 rounded-lg text-[9px] font-bold">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons: View PDF & Verify Link */}
                <div className={`flex items-center justify-between ${isFullPage ? "pt-6" : "pt-3.5"} border-t border-secondary/5 gap-2`}>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalCert(cert)}
                      className={`inline-flex items-center gap-1.5 bg-primary text-bg-dark ${isFullPage ? "px-4 py-2.5 text-xs" : "px-3 py-1.5 text-[11px]"} rounded-xl font-black uppercase tracking-wider hover:bg-secondary transition-all shadow-md active:scale-95 cursor-pointer`}
                    >
                      <Eye size={isFullPage ? 15 : 13} /> Preview
                    </button>
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-secondary/60 hover:text-primary ${isFullPage ? "px-2.5 py-2 text-xs" : "px-2 py-1.5 text-[11px]"} font-bold uppercase tracking-wider transition-colors`}
                      title="Open full PDF file in a new tab"
                    >
                      <FileText size={isFullPage ? 14 : 13} /> PDF
                    </a>
                  </div>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-secondary/60 hover:text-primary transition-colors ${isFullPage ? "text-xs" : "text-[11px]"} font-bold uppercase tracking-wider`}
                    >
                      Verify <ExternalLink size={isFullPage ? 13 : 12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button on Home Page */}
        {!isFullPage && hasMore && (
          <div className="flex justify-center mt-16">
            <Link
              href="/certifications"
              className="group inline-flex items-center gap-3 bg-secondary/5 hover:bg-primary text-secondary hover:text-bg-dark border border-secondary/15 hover:border-primary px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.25em] transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95"
            >
              <span>View All Certifications ({certificationsData.length})</span>
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        )}
      </div>

      {/* PDF Lightbox / Modal Viewer */}
      {activeModalCert && (
        <div 
          onClick={() => setActiveModalCert(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
        >
          <div
            className="relative w-full max-w-5xl h-[85vh] bg-bg-dark border border-secondary/20 rounded-3xl overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-200 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-secondary/10 bg-bg-dark/95">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Award size={20} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-bold text-secondary truncate">
                    {activeModalCert.title}
                  </h4>
                  <p className="text-xs text-secondary/50 truncate">
                    {activeModalCert.issuer} • {activeModalCert.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={activeModalCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary/5 hover:bg-primary hover:text-bg-dark text-secondary text-xs font-bold transition-all"
                >
                  <Download size={14} /> Open Original
                </a>
                <button
                  onClick={() => setActiveModalCert(null)}
                  className="p-2 rounded-xl bg-secondary/5 hover:bg-secondary/10 text-secondary transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF Viewer */}
            <div className="flex-1 w-full h-full bg-black/40 overflow-hidden relative">
              <iframe
                src={`${activeModalCert.pdfUrl}#toolbar=1&view=FitH`}
                title={`${activeModalCert.title} PDF Document`}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default React.memo(Certifications);
