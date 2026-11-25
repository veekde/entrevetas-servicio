import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useLanguage } from "@/i18n/LanguageContext";
import galleryPorton from "@/assets/gallery-porton.webp";
import galleryCaseta from "@/assets/gallery-caseta.webp";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import galleryPergola from "@/assets/gallery-pergola.webp";
import galleryDeckPergola from "@/assets/gallery-deck-pergola.webp";
import galleryEscaleraAntes from "@/assets/gallery-escalera-antes.webp";
import galleryEscaleraObra from "@/assets/gallery-escalera-obra.webp";
import galleryEscaleraDespues from "@/assets/gallery-escalera-despues.webp";
import galleryDeckComposite from "@/assets/gallery-deck-composite.webp";
import video1 from "@/assets/video-1.mp4";
import galleryProceso from "@/assets/gallery-proceso.webp";
import galleryBg from "@/assets/gallery-bg.mp4";

type GalleryItem =
  | { type: "image"; src: string; alt: string; labelKey: string; altKey: string; span?: string }
  | { type: "video"; src: string; labelKey: string; altKey: string; span?: string }
  | { type: "slider"; slides: { src: string; labelKey: string; altKey: string }[]; span?: string };

type Slide = { src: string; labelKey: string; altKey: string };

const GallerySlider = ({ slides, t }: { slides: Slide[]; t: (k: string) => string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full h-full">
      <div ref={emblaRef} className="overflow-hidden w-full h-full">
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={i} className="relative flex-[0_0_100%] min-w-0 h-full">
              <img src={slide.src} alt={t(slide.altKey)} loading="lazy" className="w-full h-full object-cover select-none" draggable={false} />
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex items-end justify-between gap-4">
        <div>
          <div className="h-[1px] w-8 bg-accent mb-3" />
          <span className="text-sm tracking-widest uppercase text-primary-foreground">{t(slides[index].labelKey)}</span>
        </div>
        <div className="flex items-center gap-1.5 pb-1">
          {slides.map((_, i) => (
            <button key={i} onClick={() => emblaApi?.scrollTo(i)} aria-label={`${i + 1} / ${slides.length}`}
              className={`h-[6px] rounded-full transition-all duration-300 ${i === index ? "w-5 bg-primary-foreground" : "w-[6px] bg-primary-foreground/50 hover:bg-primary-foreground/80"}`} />
          ))}
        </div>
      </div>
      {[{ fn: prev, side: "left-3 md:left-4", label: "Previous", d: "M15 18l-6-6 6-6" }, { fn: next, side: "right-3 md:right-4", label: "Next", d: "M9 18l6-6-6-6" }].map((b) => (
        <button key={b.label} onClick={b.fn} aria-label={b.label}
          className={`absolute top-1/2 -translate-y-1/2 ${b.side} w-10 h-10 md:w-11 md:h-11 rounded-full bg-background/80 hover:bg-background backdrop-blur-sm flex items-center justify-center shadow-sm transition-colors`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d={b.d} /></svg>
        </button>
      ))}
    </div>
  );
};

const Gallery = () => {
  const { t } = useLanguage();

  const projects: GalleryItem[] = [
    // Row 1-2: portón (grande) + altillo + taller video
    { type: "image", src: galleryPorton, alt: "Portón verja de madera", labelKey: "gallery.7", altKey: "gallery.7.alt", span: "md:col-span-1 md:row-span-2" },
    { type: "image", src: gallery2, alt: "Altillo de madera maciza", labelKey: "gallery.2", altKey: "gallery.2.alt" },
    { type: "image", src: galleryCaseta, alt: "Caseta de madera", labelKey: "gallery.8", altKey: "gallery.8.alt" },
    // Row 2 cont: video + celosía
    { type: "video", src: video1, labelKey: "gallery.5", altKey: "gallery.5.alt" },
    { type: "image", src: gallery1, alt: "Celosía de listones de madera", labelKey: "gallery.1", altKey: "gallery.1.alt" },
    // Row 3: pérgola (ancha) + foto proceso
    { type: "image", src: galleryPergola, alt: "Pérgola de madera exterior", labelKey: "gallery.4", altKey: "gallery.4.alt", span: "md:col-span-2" },
    { type: "image", src: galleryProceso, alt: "Proceso de instalación", labelKey: "gallery.6", altKey: "gallery.6.alt" },
    // Row 4-5: tarima y pérgola (alta) + slider escalera antes / en obra / después + tarima composite
    { type: "image", src: galleryDeckPergola, alt: "Tarima y pérgola", labelKey: "gallery.9", altKey: "gallery.9.alt", span: "md:col-span-1 md:row-span-2" },
    {
      type: "slider",
      span: "row-span-2 md:col-span-2 md:row-span-2",
      slides: [
        { src: galleryEscaleraAntes, labelKey: "gallery.10", altKey: "gallery.10.alt" },
        { src: galleryEscaleraObra, labelKey: "gallery.11", altKey: "gallery.11.alt" },
        { src: galleryEscaleraDespues, labelKey: "gallery.12", altKey: "gallery.12.alt" },
        { src: galleryDeckComposite, labelKey: "gallery.13", altKey: "gallery.13.alt" },
      ],
    },
  ];

  return (
    <section id="gallery" className="relative py-[70px] md:py-[100px] lg:py-[120px] px-6 md:px-10 overflow-hidden">
      {/* Background video */}
      <video
        src={galleryBg}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      <div className="max-w-[1300px] mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[28px] md:text-[clamp(32px,3vw,40px)] tracking-tight mb-10 md:mb-12 text-foreground"
        >
          {t("gallery.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 auto-rows-[260px] md:auto-rows-[300px]">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden ${project.type === "slider" ? "" : "cursor-pointer"} ${project.span || ""}`}
            >
              {project.type === "slider" ? (
                <GallerySlider slides={project.slides} t={t} />
              ) : project.type === "image" ? (
                <img
                  src={project.src}
                  alt={t(project.altKey)}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
              ) : (
                <video
                  src={project.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  ref={(el) => { if (el) el.playbackRate = 1; }}
                  aria-label={t(project.altKey)}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
              )}
              {project.type !== "slider" && (
                <>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                    <div className="h-[1px] w-8 bg-accent mb-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 origin-left" />
                    <span className="text-sm tracking-widest uppercase text-primary-foreground">
                      {t(project.labelKey)}
                    </span>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
