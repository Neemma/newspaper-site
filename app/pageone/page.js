"use client"
import React from 'react';
import "./style.css";
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const PageOne = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

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
      <div className="container">
        <div className="headercontainer">
          <div className="header1">


            <Image src="/urahara.svg" alt="Header Image" width={700} height={250} />
          </div>

          <div className="header2container">
            <div className="header2">
              <h1>TITLE</h1>
            </div>

            <div className="header3">
              <h1>TITLE2</h1>
            </div>
          </div>

        </div>
        <div className="caption">
          <p>rrrrrrrrrrddddddd</p>
        </div>
        <div className='line'>

        </div>

        <div className="heading">
          <p className='heading'>TITLE HEADING</p>
        </div>

        <main>
          <div className="grid">

            <div className='stack'>
            <div className="item smalll">
              <section className='smalll'>
                <h3 className='blacktext'>WANTED: For Crimes Against Humanity</h3>
                <Image className='oldman' src="/oldman.svg" alt="Header Image" width={300} height={300} />
                <p>If you have any information, please contact the police.</p>
                <p>
                  Name:  Klaus Poppe  <br></br>
                  Alias: Franz Bonaparta
                </p>
              </section>
            </div>
            <div className="item smallll">
              <p>Coupon:</p>
              <p> REEDEEM AT --- </p>
            </div>
            </div>
           

            <div className="item small">
              <section>
                <h2>News Section 2</h2>
                <article>
                  <h3>Article Title 2</h3>
                  <p>Articspiciatis u dolle co Sed ut perspiciati
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                   Sed ut perspiciatis unde spiciatis unde omnis iste natuccusantsantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam qua Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.erat voluptatem.ntent...</p>
                 
                </article>
              </section>
            </div>


            <div className="item small">
              <section>
                <h2>News Section 3</h2>
                <article>
                  <h3>Article Title 3</h3>
                  <p>Arti Sed ut perspiciatisccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  Sed ut perspiciatis unde omnis isspiciatis unde omnis iste natuccusantium doltespiciatis unde omnis iste natuccusantium dol natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  cle content...</p>
                </article>
              </section>

            </div>


            <div className="small split">
              <div className='item1'>
                <section>
                  <h2>News Section 4</h2>
                  <article>
                    <h3>Article Title 4</h3>
                    <p>Ar Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                 ticle</p>
                  </article>
                </section>
              </div>

              <div className='item2'>
                <section>
                  <article>
                    <h2>VACANCIES</h2>
                    <p>Article coSed ut perspiciatis unde omnis iste natnteed ut perspiciatis unde omnis erspiciatis unde omnis iste natnteed ut perspiciatis unde omnis iste
                       natus error sit voluptatem accusantium doloremque lau
                       erspiciatis unde omnis iste natnteed ut perspiciatis unde omnis istedannt...</p>
                  </article>
                </section>

                <div className='item3'>
                  <section>
                    <article>
                      <p>Article
                      natus error snatus error sit voluptatem accusantium doloremque lau
                       erspiciatit voluptatem accusantium doloremque lau
                       erspiciat conteSed ut perspiciatis unde omnis is Sed ut perspiciatis unde omnis iste ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudante natnt...</p>
                    </article>
                  </section>
                </div>
              </div>

            </div>



            <div className="item medium">
              <section>
                <h2>News Section 1</h2>
                <article>
                  <h3>Article Title 1</h3>
                  <p>Ar Sed ut perspiciatis unde omnis iste natus Sed ut perspiciatis unde omnis isteSed ut perspiciatis unde omnis iste natuSed ut perspiciatis unde omnis iste natu natuSed ut perspiciatis unde omnis iste natuerror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Sed ut perSed ut perspiciatis unde omnis iste natuSed ut perspiciatis unde omnis iste natuspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                 ticle</p>
                </article>

              </section>

              <div className='item longest'>
                <section> <p>Ar Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Sed ut Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Sed ut perspiciataut fugit, sed de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Sed ut Sed ut perspiciatis unde omniSed ut perspiciatis unde omnis iste natus iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
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