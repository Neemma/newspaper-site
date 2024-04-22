"use client"
import React from 'react';
import "./style.css";
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Coupon from '../coupon/page';
import { useState } from 'react';
import useSound from 'use-sound';
import { useSwipeable } from 'react-swipeable';


const PageOne = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [modalVisible, setModalVisible] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [play, { stop }] = useSound('/hum.mp3', { loop: true });

  const handleOpenModal = () => {
    play();
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    stop();
    setModalVisible(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal')) {
      stop();
      setModalVisible(false);
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const funkyHoverAnimation = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { type: 'spring', stiffness: 1000 },
      duration: 'infinite'

    }
  };

  const images = [
    {
      src: "/oldman.svg",
      caption: "WANTED: For Crimes Against Humanity",
      info: "If you have any information, contact the police immediately.",
      details: "Name: Klaus Poppe <br /> Alias: Franz Bonaparta",
      warning: "Do not attempt to converse with this man"
    },
    {
      src: "/shou.jpg",
      caption: "WANTED: For Crimes Against Humanity",
      info: "If you have any information, contact the police immediately.",
      details: "Name: Shou Tucker <br />",
      warning: "Do not attempt to converse with this thing"
    },
    {
      src: "/oikawa.jpg",
      caption: "WANTED: For Crimes Against Humanity",
      info: "If you have any information, contact the police immediately.",
      details: "Name: Oikawa Tooru  <br />",
      warning: "If seen, please call local authorities"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwiped: (event) => {
      setCurrentIndex((prevIndex) => (prevIndex + (event.dir === 'Left' ? 1 : -1) + images.length) % images.length);
      setShowSwipeHint(false);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const swipeHintAnimation = {
    visible: {
      opacity: 1,
      scale: [1, 1.2, 1],
      transition: {
        scale: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.8
        }
      }
    },
    hidden: { opacity: 0, scale: 0.5 }
  };

  const pagenumber = 2;
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.95 }
      }}
    >
      <div className="container" onClick={handleOutsideClick}>
        <div className="headercontainer">
          <div className="header1">
            <div className="ticker-wrapper">
              <div className="ticker-content">
                <Image src="/pointfriend.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/pointjohan.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/pointeren.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/handfriend.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/handjohan.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/handkira.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/handlelouch.jpg" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/satfriend.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/satjohan.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/satthorfinn.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/lookeren.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/lookgeto.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/lookcanute.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/lookeren.jpg" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/throwballeren.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/clapjohan.jpg" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/deadjohan.jpg" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/deaderen.jpg" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/deadkira.jpg" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/guts.jpg" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/musashi.jpg" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/freedom.jpg" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/zeke.jpg" alt="Image 1" width={300} height={200} className="ticker-image" />

                <Image src="/pointeren.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/lookcanute.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/throwballeren.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/pointjohan.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/pointeren.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/pointfriend.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/handfriend.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/handjohan.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/handkira.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/satfriend.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/satjohan.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/throwballeren.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/satthorfinn.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/lookeren.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/lookgeto.png" alt="Image 1" width={300} height={200} className="ticker-image" />
                <Image src="/lookcanute.png" alt="Image 1" width={300} height={200} className="ticker-image" />

              </div>

            </div>
          </div>

          <div className="header2container">
            <div className="header2">
              <h1 className='big'>ISSUE 81</h1>
            </div>

            <div className="header3">
              <h1 className='lessbig'><u> CULTS:</u></h1>
            </div>
          </div>

        </div>


        <div className='line'>

        </div>

        <div className="heading">
          <p className='heading'>THE AGE OF FANATICS</p>
        </div>

        <main>
          <div className="grid">

            <div className='stack'>
              <div {...handlers} className="item small c" style={{ position: 'relative' }}>
                <section className='small'>
                  <h3 className='blacktext'>{images[currentIndex].caption}</h3>
                  <Image className='oldman' src={images[currentIndex].src} alt="Header Image" width={300} height={300} />
                  <p className='infoc'>{images[currentIndex].info}</p>
                  <p className='details' dangerouslySetInnerHTML={{ __html: images[currentIndex].details }}></p>
                  <p className='danger'>{images[currentIndex].warning}</p>
                  {showSwipeHint && (
                    <motion.div
                      variants={swipeHintAnimation}
                      initial="visible"
                      animate={showSwipeHint ? "visible" : "hidden"}
                      className="swipe-hint"
                    >
                      <Image src="/swipe2.svg" alt="Header Image" width={50} height={20} />
                    </motion.div>
                  )}
                </section>
              </div>
              <div className="item smallll f">
                {/* <Image src="/trace.svg" alt="Header Image" width={200} height={90} /> */}
                <div className="image-container">
                  <motion.div
                    variants={funkyHoverAnimation}
                    initial="initial"
                    whileHover="hover"
                    style={{ width: 200, height: 90, position: 'relative' }}
                  >
                    <Image src="/trace.svg" alt="Header Image" layout="fill" objectFit="contain" />
                  </motion.div>
                </div>
                <div className="coupon-container">
                  <p className='coupon' onClick={handleOpenModal}> REEDEM COUPON <br></br>
                    HERE</p>
                </div>

                {modalVisible && (
                  <div className="modal">
                    <div className='glasseffect'>
                      <Coupon />
                      <span className="close" onClick={handleCloseModal}>&times;</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="item small a">
              <section>
                <h2>FREEDOM</h2>
                <article>
                  <h3>Dedicate Your Hearts</h3>
                  <p>Articspiciat Sed utSed d ut perspiciati
                    Sed utSed ut perspici consequunturatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat volupta perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Sdantiuia nsequunturntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam qua Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.erat voluptatem.ntent...</p>

                </article>
              </section>
            </div>

            <div className="item small b">
              <section>
                <h2>EQUALITY: THE FEVER DREAM</h2>
                <article>
                  <h3>A Monkey&apos;s Evolution</h3>
                  <p>Articspiciat Sed utSed d ut perspiciati
                    Sed utSed ut perspici consequunturatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat volupta perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Sdantiuia nsequunturntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam qua Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.erat voluptatem.ntent...</p>

                </article>
              </section>

            </div>


            <div className="small split">
              <div className='item1'>
                <section>
                  <h2>BECOMING A BETTER PERSON</h2>
                  <article>
                    <h3>When are dreams too big?</h3>
                    <p>Ar Sed ut perspiciati iste qui s unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                      Sed ut iunde omnis o quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam qua                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.erat voluptatem.
                      ticle</p>
                  </article>
                </section>
              </div>

              <div className='item2'>
                <section>
                  <article>
                    <h2>VACANCIES</h2>
                    <p>LOCAL TRUCK DRIVER WANTED<br></br>
                      60+ HOURS/WK  <br></br>
                      CALL: 0722772277
                      DRIVER&apos;S LICENSE REQUIRED
                      <br></br><br></br>         
                      WAITER/WAITRESS WANTED<br></br>
                      KFC KANGEMI <br></br>
                      CALL: 0711111222
                      <br></br><br></br>
                      SALES REP WANTED<br></br>
                      10,000+ COMMISSION <br></br>
                      CALL: 0788888822
                     
                    </p>
                  </article>
                </section>

                <div className='item3'>
                  <section>
                    <article>
                      <p> Wishing Jonathan Kinyanjui a Happy 76th Birthday! 
                      <br></br>From Your Cousins- John and James.
                        <br></br><br></br>
                        NEED SOME QUICK CASH? <br></br>
                        CALL: 0722772277
                        FOR NEXT TO ZERO INTEREST LOANS!
                        <br></br><br></br>
                        HOUSES FOR RENT <br></br>
                        BEDSITTER: 15,000 <br></br>
                        ONE BEDROOM: 25,000 <br></br>
                        CALL: 0711111222
                        KANGEMI, EQUITY
                        {/* WATER AND ELECTRICITY INCLUDED */}

                      </p>
                    </article>
                  </section>
                </div>
              </div>

            </div>



            <div className="item medium d">
              <section>
                <article>
                  <h3>And The World Fell Into Ruin </h3>
                  <p>Ar Sed iciatit voluptatem accusantium doloremque lau
                    erspiciat iciatit voluptatem accusantium doloremque lau
                    erspiciciatit voluptatem accusantium doloremque lau
                    erspiciat iciatit voluptatem accusantium doloremque lau
                    erspiciat iciatit voluptatem accusantium doloremque lau
                    erspiciat iciatit voluptatem accusantium doloremque lau
                    erspiciat iciatit voluptatem accusantium doloremque lau
                    erspiciat iat ut persiciatit voluptatem accusantium doloremque lau
                    erspiciat piciatis unde omnis iste natus Sed ut perspiciatis unde omnis isteSed ut perspiciatis unde omnis iste natuSed ut perspiciatis unde omnis iste natu natuSed ut perspiciatis unde omnis iste natuerror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non nused quia non numquam eius t labore et dolore magnam aliquam quaerat voluptatem.
                    Sed ut perSediciatit voluptatem accusantium doloremque lau
                    erspiciat iciatit voluptatem accusantium doloremque lau
                    erspiciat iciatit voluptatem accusantium doloremque lau
                    erspiciat  ut perspiciatis unde omnis iste natuSed ut perspiciatis unde omnis iste natuspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam alised quia non numquam eius sed quia non numquam eius quam quaerat
                  </p>
                </article>

              </section>

              <div className='item longest e'>
                <section> <p>Ar Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  Ssed quia non numquam eius sed quia non numquam eius sed quia non numquam eius sed quia non numquam eius sed quia non numquam eius sed quia non numquam eius ed ut Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  Sed ut perspiciataut fugit, sed de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  Sed ut Sed ut perspiciatis unde omniSed ut perspiciatis unde omnis iste natus iste natus error sit voluptatem accusantium doloremque lauue ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p></section>

              </div>
            </div>
          </div>
        </main>



        <div className="footerr">
        </div>

        <div className='pagenumber'>
          <a className="pagenumber" href="/pagetwo">
            {pagenumber}
          </a>
        </div>

      </div>
    </motion.div>
  );
};


export default PageOne;