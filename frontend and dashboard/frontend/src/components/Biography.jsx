import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            SatyaCare Medical Institute was founded with a vision to redefine healthcare through innovation, compassion, and excellence. Rooted in the core values of trust, integrity, and empathy, we have built a reputation as a trusted healthcare provider in the community.

            Our mission is simple: to deliver the best medical care while nurturing a relationship of trust and comfort with our patients. We are more than just a hospital — we are a family of caregivers dedicated to improving lives, one patient at a time.


          </p>

          <p> What sets us apart:</p>
          <p>
            Holistic Healing Philosophy: At SatyaCare, we believe health is more than just the absence of disease. We focus on physical, emotional, and mental well-being.
            Community Engagement: We actively engage with the community through health camps, awareness programs, and initiatives that promote wellness for all.
            A Legacy of Care: From the moment you walk through our doors, you’ll experience the warmth, expertise, and commitment that define SatyaCare.
            At SatyaCare Medical Institute, you are not just a patient — you are part of our journey to create a healthier world. Together, we aim to inspire hope and build a foundation for a healthier tomorrow.
          </p>

        </div>
      </div>
    </>
  );
};

export default Biography;
