'use client';

import React, { useState } from 'react';

import Image from "next/image";
type BusinessGoalThreeProps ={
  id?: string;
}

function BusinessGoalThree({ id }: BusinessGoalThreeProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'profile' | 'contact'>('home');
  const [isFading, setIsFading] = useState(false);

  const handleTabChange = (tab: 'home' | 'profile' | 'contact') => {
    if (tab === activeTab) return;

    setIsFading(true);

    setTimeout(() => {
      setActiveTab(tab);
      setIsFading(false);
    }, 300); // fade duration
  };

  return (
    <div id={id} className="rts-business-goal-area-wrapper-6 rts-section-gap">
      <div className="container">

        {/* Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-five center">
              <span className="pre">Our Services</span>
              <h2 className="title">Effective Services</h2>
            </div>
          </div>
        </div>

        <div className="row g-0 g-md-5 mt--10 align-items-center">

          {/* LEFT TABS */}
          <div className="col-lg-5 pr--60 pr_md--0 pr_sm--0">
            <div className="nav flex-column">

              <div
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => handleTabChange('home')}
              >
                <div className="business-goal-main-wrapper-6">
                  <div className="left-icon-number">1</div>
                  <div className="inner-content">
                    <h5 className="title">Financial Planning</h5>
                    <p className="disc">Purus dui eget sollicitudin curae leo proin platea cras</p>
                  </div>
                </div>
              </div>

              <div
                className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => handleTabChange('profile')}
              >
                <div className="business-goal-main-wrapper-6">
                  <div className="left-icon-number">2</div>
                  <div className="inner-content">
                    <h5 className="title">Business Investment</h5>
                    <p className="disc">Purus dui eget sollicitudin curae leo proin platea cras</p>
                  </div>
                </div>
              </div>

              <div
                className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                onClick={() => handleTabChange('contact')}
              >
                <div className="business-goal-main-wrapper-6">
                  <div className="left-icon-number">3</div>
                  <div className="inner-content">
                    <h5 className="title">Management Planning</h5>
                    <p className="disc">Purus dui eget sollicitudin curae leo proin platea cras</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-7">
            <div className={`tab-pane-custom ${isFading ? 'fade-out' : 'fade-in'}`}>
              <div className="thumbnail-area-wrapper-inner-6">
                {activeTab === 'home' && (
                  <Image
                      src="/assets/images/business-goal/03.webp"
                      alt="Financial Planning"
                      width={913}
                      height={625}
                  />
                )}
                {activeTab === 'profile' && (
                  <Image
                      src="/assets/images/business-goal/03.webp"
                      alt="Business Investment"
                      width={913}
                      height={625}
                  />
                )}
                {activeTab === 'contact' && (
                  <Image
                      src="/assets/images/business-goal/03.webp"
                      alt="Management Planning"
                      width={913}
                      height={625}
                  />
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BusinessGoalThree;
