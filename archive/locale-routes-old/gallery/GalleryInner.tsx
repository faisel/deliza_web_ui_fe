"use client";

import React, { useState } from "react";

import Image from "next/image";
const images = [
  "/assets/images/gallery/01.webp",
  "/assets/images/gallery/03.webp",
  "/assets/images/gallery/04.webp",
  "/assets/images/gallery/05.webp",
  "/assets/images/gallery/02.webp",
  "/assets/images/gallery/06.webp",
];

function GalleryInner() {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openModal = (img: string) => {
    setActiveImage(img);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveImage(null);
  };

  return (
    <>
      <div className="rts-gallery-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="gallery-area-main-wrapper-4">
                <div className="row g-5">
                  {images.map((img, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="single-gallery">
                        <button
                          type="button"
                          aria-label="Open image preview"
                          className="thumbnail gallery-image"
                          onClick={() => openModal(img)}
                          style={{ background: "none", border: "none", padding: 0 }}
                        >
                          <Image
                              src={img}
                              alt="gallery"
                              width={800}
                              height={600}
                          />
                        </button>

                        <div className="instagram">
                          <Image
                              src="/assets/images/gallery/instagram.svg"
                              alt="instagram"
                              width={85}
                              height={85}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && activeImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="gallery-close" onClick={closeModal}>
              ✕
            </button>
            <Image
                src={activeImage}
                alt="preview"
                width={800}
                height={600}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryInner;
