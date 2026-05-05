"use client";

import React, { useState } from "react";

import Image from "next/image";
function CareerGallery() {
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
      <div className="career-gallery-area rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-five center mb--40">
                <span className="pre">Gallery</span>
                <h2 className="title rts-text-anime-style-1">
                  Life At Deliza
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-5 mt--5">
            {/* Image 1 */}
            <div className="col-lg-4 offset-lg-1">
              <button
                className="gallery-image"
                onClick={() =>
                  openModal("/assets/images/gallery/11.webp")
                }
              >
                <div className="thumbnail">
                  <Image
                      src="/assets/images/gallery/11.webp"
                      alt="gallery"
                      width={615}
                      height={539}
                  />
                </div>
              </button>
            </div>

            {/* Image 2 (col-lg-6) */}
            <div className="col-lg-6">
              <button
                className="gallery-image"
                onClick={() =>
                  openModal("/assets/images/gallery/12.webp")
                }
              >
                <div className="thumbnail">
                  <Image
                      src="/assets/images/gallery/12.webp"
                      alt="gallery"
                      width={938}
                      height={539}
                  />
                </div>
              </button>
            </div>

            {/* Image 3 */}
            <div className="col-lg-4">
              <button
                className="gallery-image"
                onClick={() =>
                  openModal("/assets/images/gallery/13.webp")
                }
              >
                <div className="thumbnail">
                  <Image
                      src="/assets/images/gallery/13.webp"
                      alt="gallery"
                      width={584}
                      height={539}
                  />
                </div>
              </button>
            </div>

            {/* Image 4 */}
            <div className="col-lg-4">
              <button
                className="gallery-image"
                onClick={() =>
                  openModal("/assets/images/gallery/14.webp")
                }
              >
                <div className="thumbnail">
                  <Image
                      src="/assets/images/gallery/14.webp"
                      alt="gallery"
                      width={632}
                      height={813}
                  />
                </div>
              </button>
            </div>

            {/* Image 5 */}
            <div className="col-lg-4">
              <button
                className="gallery-image"
                onClick={() =>
                  openModal("/assets/images/gallery/15.webp")
                }
              >
                <div className="thumbnail">
                  <Image
                      src="/assets/images/gallery/15.webp"
                      alt="gallery"
                      width={584}
                      height={539}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
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

export default CareerGallery;
