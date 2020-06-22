import React from "react";

const WhatToBringToProtest = ({ title, pageClass }) => {
  return (
    <div className={pageClass}>
      <h1>{title}</h1>
      <div className="container whattobring">
        <p>
          Chances are if you're going out to protest, you'll probably be there for quite a while. To be ready and stay
          ready for a full day of protesting, you should make sure to bring the essentials. With the current climate,
          it's best to be prepared for ANYTHING. Here's a list of some things I would bring if I hit the streets soon:
        </p>

        <ul>
          <li>
            <strong>A comfortable bag/backpack to carry:</strong> I wouldn't sleep on this one guys. This one is
            essential, as you will need to store all of your items safely and have everything you need in one place
            while keeping your hands free and attention on the crowds. You don't have to bring your Gucci backpack, but
            something big enough to carry your supplies. Just be sure that it doesn't weigh you down too much. We are
            going out to protest, not train for an Iron Man.
          </li>
          <li>
            <strong>Plenty of Water:</strong> Listen, guys, this one is self-explanatory. It's summer and things are
            starting to heat up, both literally and figuratively. Make sure you replenish your body with plenty of water
            to make sure you stay active and engaged. Throw a couple of bottles in your bag, and bring an extra for
            someone in need.
          </li>
          <li>
            <strong>Face mask (surgical, cloth, etc.):</strong> I know that our focus has shifted quite a bit in the
            last month, but please don't forget&hellip; we are STILL in a global pandemic. The risks are still very
            real, so don't allow yourself to fall victim, or to put others at risk. For more information, check out the
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wear-cloth-face-coverings.html"
              target="_blank"
              rel="noopener noreferrer">
              CDC guidance on face covers{" "}
            </a>
            . Wearing a mask serves a dual purpose as well. For those of you who are professionals or have a need to
            keep your identity protected, this can prevent others from easily identifying you. The cameras are usually
            rolling, so protect yourself accordingly if necessary.
          </li>
          <li>
            <strong>Hand sanitizer:</strong> This goes right along with the face mask. Chances are, you won't have
            unlimited access to a clean facility to wash your hands. Make sure to keep your hands sanitized and avoid
            touching your mouth, nose, and eyes.&nbsp;
          </li>
          <li>
            <strong>A hat and/or sunglasses:</strong> Once again, if you need to be incognito, this will help do the
            trick. Oh yeah, it will also keep your face shaded from the blazing sun.
          </li>
          <li>
            <strong>Munchies/Snacks/Food:</strong> You'll be out there for a while, so make sure you take a break to
            keep your body nourished!
          </li>
          <li>
            <strong>Signs/Banners:</strong> It's time to let the world hear and see you. Show your support and express
            your voice by bringing a sign to display. Make sure you don't go overboard with your display, especially if
            you'll be lugging it around all day. I recommend choosing a material that is tough but lightweight.
            Something like a foam board should do the trick. It will give you the ability to mount it to a stick or
            handle for easy holding. When you're done with your sign, don't abandon it in the streets. Dispose of it
            correctly or spread the message and hand it to another protester.
          </li>
          <li>
            <strong>Comfortable clothes:</strong> Make sure you check the weather and wear clothes that are appropriate
            for the climate. Also, you might not want to wear your favorite kicks. Swap those for something you don't
            mind getting a bit dirty and can stand in for hours comfortably.
          </li>
          <li>
            <strong>Your cell phone:</strong> Anything can happen, so make sure you bring your cell phone to capture the
            moments if necessary and be prepared for an emergency. In order to stay safe, make sure to keep your phone
            concealed and in a protective case to avoid theft and potential damage.
          </li>
          <li>
            <strong>Identification:</strong>It is crucial now, more than ever, to have proper identification with you. I
            would recommend leaving the bulky wallet at home and keeping only your ID and a small amount of cash. If
            your cards are accessible with Apple Pay or Google Pay, this will be your back up. The point is, don't run
            the risk of losing your debit/credit cards in the crowds and make sure you can properly identify yourself to
            authorities in potential emergencies.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhatToBringToProtest;
