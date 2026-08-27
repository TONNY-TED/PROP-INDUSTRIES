"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

// Inline Icons (Zero external dependencies)
const ChevronLeftIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export interface CarouselItem {
  id?: string | number;
  tag?: string;
  titleLine1: string;
  titleLine2?: string;
  desc?: string;
  img: string;
  fallbackCandidates?: string[];
  ctaText?: string;
  ctaUrl?: string;
}

export const defaultPropProjects: CarouselItem[] = [
  {
    id: "1",
    tag: "#1 SoftwareEngineering",
    titleLine1: "1. ENTERPRISE",
    titleLine2: "WEB PLATFORMS",
    desc: "Scalable cloud-native enterprise web architectures, CRM systems, and real-time client management portals",
    img: "/images/gallery/1.png",
    fallbackCandidates: [
      "/images/gallery/1.png",
      "/images/gallery/1.jpg",
      "/images/gallery/1.jpeg",
      "/images/gallery/1.PNG",
      "/images/gallery/1.JPG",
      "/gallery/1.png",
      "/gallery/1.jpg",
      "/1.png",
      "/1.jpg",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=80"
    ],
    ctaText: "Explore Tech",
    ctaUrl: "#contact",
  },
  {
    id: "2",
    tag: "#2 MobileApps",
    titleLine1: "2. MOBILE APP",
    titleLine2: "DEVELOPMENT",
    desc: "Cross-platform iOS & Android mobile applications built for seamless business workflows and customer engagement",
    img: "/images/gallery/2.png",
    fallbackCandidates: [
      "/images/gallery/2.png",
      "/images/gallery/2.jpg",
      "/images/gallery/2.jpeg",
      "/images/gallery/2.PNG",
      "/images/gallery/2.JPG",
      "/gallery/2.png",
      "/gallery/2.jpg",
      "/2.png",
      "/2.jpg",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&q=80"
    ],
    ctaText: "Explore Tech",
    ctaUrl: "#contact",
  },
  {
    id: "3",
    tag: "#3 IoTRobotics",
    titleLine1: "3. SURVEILLANCE",
    titleLine2: "ROBOT & SENSORS",
    desc: "Remote exploration robotic rover equipped with live video streaming and ultrasonic obstacle avoidance sensors",
    img: "/images/gallery/3.png",
    fallbackCandidates: [
      "/images/gallery/3.png",
      "/images/gallery/3.jpg",
      "/images/gallery/3.jpeg",
      "/images/gallery/3.PNG",
      "/images/gallery/3.JPG",
      "/images/gallery/robot.png",
      "/images/gallery/robot.jpg",
      "/images/gallery/robot.jpeg",
      "/gallery/3.png",
      "/gallery/3.jpg",
      "/3.png",
      "/3.jpg",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&auto=format&fit=crop&q=80"
    ],
    ctaText: "Explore Tech",
    ctaUrl: "#contact",
  },
  {
    id: "4",
    tag: "#4 BrandingDesign",
    titleLine1: "4. CORPORATE",
    titleLine2: "BRAND IDENTITY",
    desc: "High-impact visual branding, premium logo systems, typography, and cohesive digital marketing collateral",
    img: "/images/gallery/4.png",
    fallbackCandidates: [
      "/images/gallery/4.png",
      "/images/gallery/4.jpg",
      "/images/gallery/4.jpeg",
      "/images/gallery/4.PNG",
      "/images/gallery/4.JPG",
      "/gallery/4.png",
      "/gallery/4.jpg",
      "/4.png",
      "/4.jpg",
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=900&auto=format&fit=crop&q=80"
    ],
    ctaText: "Explore Tech",
    ctaUrl: "#contact",
  },
  {
    id: "5",
    tag: "#5 CloudDatabase",
    titleLine1: "5. CLOUD & API",
    titleLine2: "INFRASTRUCTURE",
    desc: "Robust backend database architecture, microservices integrations, and automated DevOps deployment pipelines",
    img: "/images/gallery/5.png",
    fallbackCandidates: [
      "/images/gallery/5.png",
      "/images/gallery/5.jpg",
      "/images/gallery/5.jpeg",
      "/images/gallery/5.PNG",
      "/images/gallery/5.JPG",
      "/gallery/5.png",
      "/gallery/5.jpg",
      "/5.png",
      "/5.jpg",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&auto=format&fit=crop&q=80"
    ],
    ctaText: "Explore Tech",
    ctaUrl: "#contact",
  },
  {
    id: "6",
    tag: "#6 HardwareNetworking",
    titleLine1: "6. NETWORK & IT",
    titleLine2: "CONSULTING",
    desc: "Commercial networking setups, hardware diagnostics, cybersecurity audits, and corporate IT support",
    img: "/images/gallery/6.png",
    fallbackCandidates: [
      "/images/gallery/6.png",
      "/images/gallery/6.jpg",
      "/images/gallery/6.jpeg",
      "/images/gallery/6.PNG",
      "/images/gallery/6.JPG",
      "/gallery/6.png",
      "/gallery/6.jpg",
      "/6.png",
      "/6.jpg",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&auto=format&fit=crop&q=80"
    ],
    ctaText: "Explore Tech",
    ctaUrl: "#contact",
  },
  {
    id: "7",
    tag: "#7 ICTEducation",
    titleLine1: "7. PROGRAMMING",
    titleLine2: "& COMPUTER LESSONS",
    desc: "Hands-on coding bootcamps, Python programming, database literacy, and professional digital skills mentorship",
    img: "/images/gallery/7.png",
    fallbackCandidates: [
      "/images/gallery/7.png",
      "/images/gallery/7.jpg",
      "/images/gallery/7.jpeg",
      "/images/gallery/7.PNG",
      "/images/gallery/7.JPG",
      "/gallery/7.png",
      "/gallery/7.jpg",
      "/7.png",
      "/7.jpg",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&auto=format&fit=crop&q=80"
    ],
    ctaText: "Explore Tech",
    ctaUrl: "#contact",
  },
];

export interface CoverFlowCarouselProps {
  items?: CarouselItem[];
  sectionLabel?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
  onCtaClick?: (item: CarouselItem) => void;
}

export function CoverFlowCarousel({
  items = defaultPropProjects,
  sectionLabel = "INNOVATION & 3D PROJECT SHOWCASE",
  autoplay = true,
  autoplayDelay = 4500,
  className = "",
  onCtaClick,
}: CoverFlowCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageIndices, setImageIndices] = useState<Record<number, number>>({});
  const touchStartX = useRef(0);
  const total = items.length;

  const getResolvedImage = useCallback((item: CarouselItem, itemIdx: number) => {
    const list = item.fallbackCandidates && item.fallbackCandidates.length > 0 
      ? item.fallbackCandidates 
      : [item.img];
    const candidateIdx = imageIndices[itemIdx] || 0;
    return list[candidateIdx] || item.img;
  }, [imageIndices]);

  const handleImageError = useCallback((item: CarouselItem, itemIdx: number) => {
    const list = item.fallbackCandidates && item.fallbackCandidates.length > 0 
      ? item.fallbackCandidates 
      : [item.img];
    const currentCandidateIdx = imageIndices[itemIdx] || 0;
    if (currentCandidateIdx < list.length - 1) {
      setImageIndices(prev => ({
        ...prev,
        [itemIdx]: currentCandidateIdx + 1,
      }));
    }
  }, [imageIndices]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx % total);
  };

  useEffect(() => {
    if (!autoplay || isHovered || total <= 1) return;
    const interval = setInterval(nextSlide, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, isHovered, nextSlide, total]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 45) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
  };

  if (!items || items.length === 0) return null;

  const currentActiveImage = getResolvedImage(items[currentIndex], currentIndex);

  return (
    <section
      id="3d-showcase"
      className={`relative w-full min-h-[760px] flex items-center justify-center overflow-hidden py-14 select-none ${className}`}
      style={{
        backgroundColor: "#160305",
        color: "#ffffff",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src={currentActiveImage}
          alt="ambience background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.18) blur(36px)",
            transform: "scale(1.15)",
            transition: "opacity 1000ms ease, filter 1000ms ease",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(35,4,7,0.45) 0%, rgba(18,2,4,0.95) 100%)",
          }}
        />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 z-10 flex flex-col items-center">
        {/* Eyebrow */}
        {sectionLabel && (
          <div className="flex items-center gap-3 mb-8">
            <span style={{ width: "36px", height: "1px", background: "linear-gradient(90deg, transparent, #A71920)" }} />
            <h3
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#ff8088",
                margin: 0,
              }}
            >
              {sectionLabel}
            </h3>
            <span style={{ width: "36px", height: "1px", background: "linear-gradient(90deg, #A71920, transparent)" }} />
          </div>
        )}

        {/* 3D Coverflow Stage */}
        <div
          className="relative w-full h-[520px] flex justify-center items-center mb-8"
          style={{ perspective: "1400px" }}
        >
          {items.map((item, idx) => {
            const offset = (idx - currentIndex + total) % total;
            const itemImage = getResolvedImage(item, idx);

            let transform = "translateX(0px) scale(0.4) rotateY(0deg)";
            let opacity = 0;
            let zIndex = 0;
            let filter = "brightness(0.4) blur(2px)";
            let isCenter = false;

            if (offset === 0) {
              isCenter = true;
              transform = "translateX(0px) scale(1) rotateY(0deg)";
              opacity = 1;
              zIndex = 30;
              filter = "brightness(1)";
            } else if (offset === 1) {
              transform = "translateX(285px) scale(0.84) rotateY(-24deg)";
              opacity = 0.65;
              zIndex = 20;
              filter = "brightness(0.75)";
            } else if (offset === 2) {
              transform = "translateX(510px) scale(0.68) rotateY(-38deg)";
              opacity = 0.38;
              zIndex = 10;
              filter = "brightness(0.55) blur(1px)";
            } else if (offset === total - 1) {
              transform = "translateX(-285px) scale(0.84) rotateY(24deg)";
              opacity = 0.65;
              zIndex = 20;
              filter = "brightness(0.75)";
            } else if (offset === total - 2) {
              transform = "translateX(-510px) scale(0.68) rotateY(38deg)";
              opacity = 0.38;
              zIndex = 10;
              filter = "brightness(0.55) blur(1px)";
            }

            return (
              <div
                key={idx}
                onClick={() => !isCenter && goToSlide(idx)}
                style={{
                  position: "absolute",
                  width: "330px",
                  height: "500px",
                  borderRadius: "18px",
                  overflow: "hidden",
                  backgroundColor: "#200407",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  transform,
                  opacity,
                  zIndex,
                  filter,
                  transformOrigin: "center center",
                  transition: "all 800ms cubic-bezier(0.25, 1, 0.5, 1)",
                  boxShadow: isCenter
                    ? "0 25px 60px rgba(0,0,0,0.9), 0 0 35px rgba(167,25,32,0.35)"
                    : "0 15px 35px rgba(0,0,0,0.5)",
                  cursor: isCenter ? "default" : "pointer",
                }}
              >
                {/* Photo */}
                <img
                  src={itemImage}
                  alt={item.titleLine1}
                  onError={() => handleImageError(item, idx)}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 20%, rgba(35,4,7,0.72) 60%, rgba(18,2,4,0.98) 100%)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />

                {/* Content Overlay */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    padding: "20px 18px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center",
                    zIndex: 20,
                    opacity: isCenter ? 1 : 0,
                    transform: isCenter ? "translateY(0px)" : "translateY(16px)",
                    transition: "opacity 500ms ease, transform 500ms ease",
                    pointerEvents: isCenter ? "auto" : "none",
                  }}
                >
                  {/* Tag */}
                  <div style={{ textAlign: "right", width: "100%", paddingRight: "4px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        color: "rgba(255,255,255,0.95)",
                        background: "rgba(167,25,32,0.65)",
                        padding: "3px 10px",
                        borderRadius: "9999px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        textShadow: "0 2px 6px rgba(0,0,0,0.8)",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "3px",
                      marginTop: "auto",
                      paddingBottom: "4px",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "1.6rem",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        color: "#ffffff",
                        margin: 0,
                        lineHeight: 1.1,
                        textShadow: "0 3px 12px rgba(0,0,0,0.95)",
                      }}
                    >
                      {item.titleLine1}
                    </h2>

                    {item.titleLine2 && (
                      <span
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          color: "#ffc2c6",
                          lineHeight: 1.2,
                          textShadow: "0 3px 10px rgba(0,0,0,0.9)",
                        }}
                      >
                        {item.titleLine2}
                      </span>
                    )}

                    <div
                      style={{
                        width: "34px",
                        height: "2px",
                        backgroundColor: "#A71920",
                        borderRadius: "2px",
                        margin: "5px auto 4px",
                        boxShadow: "0 0 8px rgba(167,25,32,0.9)",
                      }}
                    />

                    {item.desc && (
                      <p
                        style={{
                          fontSize: "0.82rem",
                          color: "rgba(255,255,255,0.9)",
                          maxWidth: "280px",
                          margin: "0 0 10px",
                          lineHeight: 1.35,
                          textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                        }}
                      >
                        {item.desc}
                      </p>
                    )}

                    <a
                      href={item.ctaUrl || "#contact"}
                      onClick={(e) => {
                        if (onCtaClick) {
                          e.preventDefault();
                          onCtaClick(item);
                        }
                      }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "7px 20px",
                        borderRadius: "9999px",
                        background: "linear-gradient(135deg, #ffffff 0%, #f3f3f3 100%)",
                        color: "#4A0A10",
                        fontSize: "0.74rem",
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.4), 0 0 15px rgba(255,255,255,0.2)",
                        cursor: "pointer",
                        transition: "transform 200ms ease, box-shadow 200ms ease",
                      }}
                    >
                      <span>{item.ctaText || "Explore Tech"}</span>
                      <ArrowRightIcon />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          style={{
            position: "absolute",
            left: "24px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.65)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(8px)",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            zIndex: 40,
            transition: "all 200ms ease",
          }}
        >
          <ChevronLeftIcon />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          style={{
            position: "absolute",
            right: "24px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.65)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(8px)",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            zIndex: 40,
            transition: "all 200ms ease",
          }}
        >
          <ChevronRightIcon />
        </button>

        {/* Pagination Dots */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", zIndex: 30 }}>
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                height: "8px",
                width: idx === currentIndex ? "28px" : "8px",
                borderRadius: "9999px",
                backgroundColor: idx === currentIndex ? "#A71920" : "rgba(255,255,255,0.3)",
                border: "none",
                cursor: "pointer",
                boxShadow: idx === currentIndex ? "0 0 10px rgba(167,25,32,0.9)" : "none",
                transition: "all 300ms ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const Component = CoverFlowCarousel;
export default CoverFlowCarousel;
