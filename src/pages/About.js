import React from "react";

export default function About() {
  return (
    <div className="container mt-3 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="about-header mb-5">My Profile</h1>
          <h2 className="about-header2 mb-3">My Story</h2>
          <p className="about-p">
            Hello! Welcome to On The DL. So glad you’re here.
          </p>
          <p className="about-p">
            My name is Dayzha Leigh. I’ve been selling things online for quite
            some time now, about 6 years. It all started in high school, I
            posted items straight from my closet onto an Instagram account I
            called @dls.btq. I had them up, for sale to anyone in a community of
            these “boutique” owners. When I got to college in 2019, I decided to
            use apps like Mercari and Facebook Marketplace. I did, however,
            learn over the years that I love being more personable with my
            customers, so here’s my very own website. I love thrifting, and
            shopping in general, so I am always trying to manage the space in my
            wardrobe. I’ve also been getting into dumpster diving so I’ll have
            more to offer you! (Don’t worry, everything is cleaned before they
            are posted here.)
          </p>
          <h2 className="about-header2 mb-3">Mission</h2>
          <p className="about-p">
            Did you know that the United States produces roughly 270 million
            tons of trash throughout the span of a year? My hopes with this
            website are to find homes for items that no longer serve me, or
            other people in my area. Instead of heading toward a landfill,
            usable items get a second chance. Not only are you saving money,
            you’re also preserving energy and natural resources. I understand
            that I won’t be able to sell every product, so those extras will be
            donated to thrift stores and shelters. There is only one Earth that
            we call home, so let’s do our part to save it.
          </p>{" "}
          <br />
          <p className="about-p">Thanks again for showing up on the DL &lt;3</p>
          <p className="about-p">With Love,</p>
          <img src="/signature.png" alt="DL signature" style={{width: '175px'}}/>
        </div>
      </div>
    </div>
  );
}
