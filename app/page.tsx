"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import "./styles.css";
import Link from 'next/link';



const HomePage = () => {

  const comicImages = [
    "/weird.svg",
    "/noidont.svg",
    "/zurump.svg",
    "/opmm.svg",
    "/veges.svg",
    "/scary.svg",
    "/guugl.png",
    "/wakeup.svg",
    "/fresh.svg",
    "/smile.svg",


  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 < comicImages.length ? prevIndex + 1 : 0
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : comicImages.length - 1
    );
  };


  const pagenumber = 1;
  return (

    <div className="container">
      <div className="header">
        <div className='cont'>
          <p className="title">
            THE 1198TH MOST TRUSTED NEWSPAPER IN THE WORLD
          </p>
          <div>
            <p className="issue">
              ISSUE 51
            </p>
            <p className='price'>
              KSHS. 50.00
            </p>
          </div>
          <div className='top'>
            <p className="date">
              TUESDAY, 9TH APRIL 2024
            </p>
            <p className="location">
              NAIROBI, KENYA
            </p>
          </div>

        </div>

        <h2 className='newstitle'> WEDNESDAY NOT-TIMES</h2>
        {/* 
        <h3 className='imagedecor'>
          I mean, why are you ruining this for me dude.
          These are just pretty buildings in the distance man.
          Gosh. Font:WaveFro</h3> */}

        <h2 className='h2right1'> A STANDARD NEWSPAPER</h2>



      </div>

      {/* <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav> */}

      <main>
        <div className="grid set">
          <div className="item small clear">
            <section>
              <h2 className='set headerr'>CHASING VANITY</h2>
              <article>
                <h3 className='set headerr'>Existence is Base</h3>
                <p>Article contntent...Lorem ipsum dolor sit a uundeSed ut persSed ut perspiciatis uunde omSed umet, consectetur adiptis .Lorem ut perspiciatis uunde omnis iste sLorem ips ipsum dolor sit amet,ipsum dolor sit ametntium consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Sed ut persSent...Lo quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit aorm dolor sit a uundeSed ut persSed ut perspiciatis uunde omSed umet, consectetur adiptis .Lorem ut perspiciatis uunde omnis iste sLorem ips ipsum dolor sit amet,ipsum dolor sit ametntium consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, suaborum.
                .</p>
              </article>
            </section>
          </div>
          
          <div className='centre'>
            <div className="Image">
              <section className='ClimberImage'>
                <h3 className='set headerrr'>The Climber</h3>
                <Image className='centerimage' src="/crop.svg" alt="Climber" width={500} height={500} />
              </section>
              <h3 className='captionn'>-Shin-ichi Sakamoto</h3>
            </div>
          </div>


          <div className="item clear small">
            <section>
              <article>

                <p>Article content...Lorem ipsum dolor sit amet, cons..Lorem ipsum dolor sit amet, consectetur adiptis .Lorem ut perspiciatis uunde omnis iste sLorem ips ipsum dolor sit amet,ipsum dolor sit ametntium consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboectetur adiptis .Lorem ut perspiciatis uunde omnis iste sLorem ips ipsum dolor sit amet,ipsum dolor sit ametntium consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaem id est labo
                  laboectetur adiptis adiptis .Lohshhaaaaaaa sn perspiciatis uunde omnis.Lorem ut perspiciatis uunde omnis.Lorem ut perspiciatis uunde omnis.Lorem ut perspiciatis uunde omnisametntium consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                </p>  <h3 className='set headerr left'>-Eliza P.</h3>
              </article>
            </section>
          </div>


          <div className="item clear long">
            <section>
              <h2 className='set headerr'>Ugly Section</h2>
              <article>
                <h3 className='set headerr'>Colleagues vs Countenance</h3>
                <p>Article content..Lorem ipsum dolor sit amet, consecteturunt in culpa qui officisum dolor sit amet,unt in culpa qui officisum dolor sit amet,unt in culpa qui officisum dolor sit amet,unt in culpa qui officisum dolor sit amet, adipisciSed ut perspiciatis und Article content..Lorem ipsum dArticle contentng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Sed ut perspiciatis und Artic t perspiciatis unde omniolor sit e omt perspiciatis unde omniolor sit e omniAniA Sed ut perspiciatis uArticle contentle content..Lorem ipsum dArticle content..Lorem iunt in culpa qui officisum dolor sit amet,psum dolor siunt in culpa qui officisum dolor sit amet,t amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Sed ut perspiciatis Sed ut perspiciSed ut perspiciatis unde omniolor sit eSed ut perspiciatis unde omniSed ut perspiciatis unde omniolor sit eSed ut perspiciatis unde omniolor sit eolor sit eatis uArticle contunt in culpa qui officisum dolor sit amet,entSed ut perspiciatis uArticle contentunde omniolor sit e Sed ut perspiciatis und Article content..Lorem ipsum dArticle content..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Se unde omniolor proident, sunt in culpa qui officisum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exeunt in culpa qui officisum dolor sit ameunt in culpa qui officisum dolor sit amet,t,rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
                </p>
                <h3 className='set headerr left'>-Jane A.</h3>

              </article>
            </section>
          </div>


          <div className="medium split">
            <div className="itemsmall clear">
              <section>
                <h2 className='set headerr'>FREE WILL</h2>
                <article>
                  <h3 className='set headerr'>Twice Two Makes Four</h3>
                  <p>Perspiciatis omnis  Sed unt in cunt in culpa qui officisum dolor sit amet,ulpa qui officisum dolor sit amet,ut de omniolor sit amediontent..korem ipsum dArticSed ut perspiciatis unde omniolor sit amele content..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te Sed ut persSed ut perspiciatis uunde omSed u Sed ut persSed ut perspiciatis uunde omSed umpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Sed ut de omniolor sit amediontent..Lorem ipsum dArticle content..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendeiatis uArticle contentv omniolor sit amet, consectetur adpiscing elit, s Sed ut persSed ut perspiciatis uunde omSed u Sed ut persSed ut perspiciatis uunde omSed ued do eiusmo Sed ut persSed ut perspiciatisd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.

                  </p>
                </article>
              </section>
            </div>

            <div className="itemsmall clear">
              <section>
                <h2 className='set headerr invisible'>HUMAN MOTIVATION</h2>
                <article>
                  <h3 className='set headerr invisible'>Spite</h3>
                  <p>Perspiciatis omnis  Sed ut de omniolor sit amediontent..korem ipsum dArticSed ut perspiciatis unde omniolor sit amele content..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te Sed ut persSed ut perspiciatis uunde omSed u Sed ut persSed ut perspiciatis uunde omSed umpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Sed ut de omniolor sit amediontent..Lorem ipsum dArticle content..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendeiatis uArticle contentv omniolor sit amet, consectetur adpiscing elit, s Sed ut persSed ut perspiciatis uunde omSed u Sed ut persSed ut perspiciatis uunde omSed ued do eiusmo Sed ut persSed ut perspiciatisd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.

                  </p>
                  <h3 className='set headerr left'>-Nikolai G.</h3>

                </article>
              </section>
            </div>
          </div>

          <div className="item clear medium">
            <section>
              <h2 className='set headerr'>CONCIOUSNESS</h2>
              <article>
                <h3 className='set headerr'>Consious Inertia</h3>
                <p>Article content..Sed ut perspiciatSed ut perspiciatis  ed ut perspiciatis unde omnisSed ut perspiciatis uArticle contenunSed ut perspiciatis unde omnis.de omnis.is unde omniLorem i ed ut perspiciatis unde omnisSed ut perspiciatis uArticle conten ed ut perspiciatis unde omnisSed ut perspiciatis uArticle contenpsum dArticle content..Sed ut perspiciatis unde omniolSed ut perspiciatis uArticle contentSed ut perspicSed ut perspicSed ut perspiciSed ut perspiciatis uArticle contentatis uArticle contentiatis uArticle conte  Sed ut perspit perspiciatis unde omciatSed ut perspiciatis unSed ut perspiciatis unde omnis.de o  Sed ut perspiciatSed ut perspiciatis unSed ut perspiciatis unde omnis.de omnis.is unde omnismnis.is unde omnisntiatis uArticle contentor sit ameLorem ipsum dolor sit amet, consectetur adipis omniolor sit amet, consectetur adipiscing elit, sed do eiusmod tempocing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  ed ut persp ed ut perspiciatis unde omnisSed ut perspiciatis uArticle conteniciatis unde omnisSed ut perspiciatis uArt ed ut perspiciatis unde omnisSed ut perspiciatis uArticle contenicle contentSed ut perspici.</p>
              </article>
            </section>
          </div>


          <div className="item set">
        
            <h2 className='cartoon'>Comic Corner</h2>

            <div className='split gallery set'>
              <Image
                src="/arrow.svg"
                alt="Previous"
                width={80}
                height={50}
                onClick={prevImage}
                className="navigation-arrow"
              />


              <Image
                src={comicImages[currentImageIndex]}
                alt="Comic Image"
                width={350}
                height={400}
                className='comic'
              />


              <Image
                src="/arrow.svg"
                alt="Next"
                width={50}
                height={50}
                onClick={nextImage}
                className="navigation-arrow2"
              />
            </div>
          </div>

          <div className="item long clear">
            <section>
              <h2 className='set headerr'>THE PALACE OF CRYSTAL</h2>
              <article>
                <h3 className='set headerr'>Living All Your Capacities</h3>
                <p>Article content..Lorem ipsum dolor sit amet, consectetur  Sed ut perspiciatisd ut perspiciatis unde omniolor sit amet, c unde omnisLorem ipsum dolor sit amd ut perspiciatis unde omniolor sit amet, cetadipiscingd ut perspiciatis unde omniolor sit amet, c elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Sed ut perspicrticicle Sed ut persp uArticle contentcontent.. sit amet, conseper sit amet, c unde omniolor sit aspiciatisperspiciatisctetur adipis omniolor sit amet, consectetur adipiscing elit, sed do eiusmod tempocing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Sspiciatis ut amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nuomniolod ut perspiciatis unde omniolor sit amet, cr sit amet, cciatis unde omniolor sit amet, cd ut perspiciatis unde omniolor sit amet, consectetur adipiscing elit, sed do eiusmod  omniolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <h3 className='set headerr left'>-Jackson M.</h3>

              </article>
            </section>
          </div>

          <div className="item clear small">
            <h3 className='cartt'>LIMITED OFFER ! !</h3>
            <h2 className='cartoon'>Sakamoto Ramen</h2>
            <h3 className='cart'>Now available in Nakumatt</h3>
            <section className='Imageset'>
              <Image className='sakamoto' src="/sakamoto.svg" alt="Ad" width={200} height={200} />
              <h3 className='cartt'>KSHS. 58.00 ONLY</h3>
            </section>
          </div>

          <div className="item clear medium">
            <section>
              <h2 className='set headerr'>AN OUTBREAK OF MONOTONY</h2>
              <article>
                <h3 className='set headerr'>The Perpetual Disease</h3>
                <p>Article content..Lorem ipsum dArticle content..Lorem ipsum dolor sit amet, consectetur adipis omniolor sit amet, consectetur adipiscing elit, sed do eiusmod tempocing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Sed ut perspiciatis unde omniolor sit amet, consectetur adipiscing elit, sed do eiusmSed ut perspiciatis unde omniolor sit ameSed ut perspiciatis unde omniolor sit ameSed ut perspiciatis unde omniolor sit ameod  omniolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  uptate velit esse cillum dolore eu fugSed ut perspiciatis uArticle contentSed ut Sed ut perspiciatis uArticle contentSed ut perspiciatis uArticle contentperspiciatis uArticle contentiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  iusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ctetur adipiscing elit, sed do ectetur adipiscing elit, sed do e.
                </p>
              </article>
            </section>
          </div>



        </div>
      </main>
      <div className="footer">

      </div>
      <div className='pagenumber'>

        <Link className="pagenumber" href="/pageone">
          {pagenumber}
        </Link>
      </div>

    </div>
  );
};

export default HomePage;
