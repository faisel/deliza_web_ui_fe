"use client";

import React, { useState } from "react";

import Image from "next/image";
const images = [
    "/assets/images/gallery/06.webp",
    "/assets/images/gallery/07.webp",
    "/assets/images/gallery/08.webp",
    "/assets/images/gallery/09.webp",
    "/assets/images/gallery/10.webp",
];
function GalleryTwo() {
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
            {/* rts galllery area start */}
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
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts galllery area end */}

            {/* Modal */}
            {open && (
                <div className="gallery-modal" onClick={closeModal}>
                    <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
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

    )
}

export default GalleryTwo