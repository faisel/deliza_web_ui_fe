"use client";

import React, { useState } from "react";

const images = [
  "/assets/images/gallery/01.webp",
  "/assets/images/gallery/03.webp",
  "/assets/images/gallery/04.webp",
  "/assets/images/gallery/05.webp",
  "/assets/images/gallery/02.webp",
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const openModal = (img: string) => {
    setActiveImage(img);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveImage("");
  };

  return (
    <>
      {/* rts gallery area start */}
      <div className="rts-gallery-area">
        <div className="container-full">
          <div className="row">
            <div className="col-lg-12">
              <div className="gallery-area-main-wrapper-4">
                {images.map((img, index) => (
                  <div className="single-gallery" key={index}>
                    <button
                      type="button"
                      className="thumbnail gallery-image"
                      onClick={() => openModal(img)}
                      style={{ background: "none", border: "none", padding: 0 }}
                    >
                      <img src={img} alt="gallery" />
                    </button>

                    <div className="instagram">
                      <img
                        src="/assets/images/gallery/instagram.svg"
                        alt="instagram"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts gallery area end */}

      {/* Modal */}
      {open && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-close" onClick={closeModal}>
              ✕
            </button>
            <img src={activeImage} alt="preview" />
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
