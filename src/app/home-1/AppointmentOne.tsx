"use client";
import { useTranslation } from "@/i18n/useTranslation";

function AppointmentOne() {
    const { messages } = useTranslation();
    const t = messages.home.appointment;

    return (
        <>
            <div className="appoinment-area-start rts-section-gapBottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="appoinment-wrapper-one-start">
                                <div className="title-style-two mb--40 left">
                                    <span className="bg-content">{t.chip}</span>
                                    <span className="pre">{t.pre}</span>
                                    <h2 className="title">{t.title}</h2>
                                </div>
                                <form action="#">
                                    <div className="single-input-wrapper">
                                        <div className="single-input">
                                            <input type="text" placeholder={t.fields.name} />
                                        </div>
                                        <div className="single-input">
                                            <input type="text" placeholder={t.fields.phone} />
                                        </div>
                                    </div>
                                    <div className="single-input">
                                        <input type="email" placeholder={t.fields.email} />
                                    </div>
                                    <div className="single-input mb--30">
                                        <textarea placeholder={t.fields.message} defaultValue={""} />
                                    </div>
                                    <button className="rts-btn btn-primary" type="submit">{messages.common.buttons.submitMessage}</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="appoinment-thumbnail">
                                <img
                                    loading="lazy"
                                    src="/assets/images/appoinment/01.webp"
                                    alt="appoinment"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointmentOne
