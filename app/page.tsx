import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {

  const pagenumber = 1;
  return (

    <div className="container">
      <div className="header">
        {/* <h3 className='imagedecor'>woah did you actually have to
          find out what this says?
          That's really mortiying, </h3> */}

        <h2 className='h2'> WEDNESDAY NOT-TIMES</h2>
        {/* 
        <h3 className='imagedecor'>
          I mean, why are you ruining this for me dude.
          These are just pretty buildings in the distance man.
          Gosh. Font:WaveFro</h3> */}

        <h2 className='h2right'> A STANDARD NEWSPAPER</h2>



      </div>

      {/* <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav> */}

      <main>
        <div className="grid">
          <div className="item small">
            <section>
              <h2>News Section 1</h2>
              <article>
                <h3>Article Title 1</h3>
                <p>Article content...</p>
              </article>
            </section>
          </div>

          <div className="item long Image">
            <section className='Image'>
              <h3>The Climber</h3>
              <Image src="/climber.svg" alt="Climber" width={400} height={500} />
            </section>
          </div>

          <div className="item small">
            <section>
              <article>
                <p>Article content...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </article>
            </section>
          </div>
          <div className="item long">
            <section>
              <h2>News Section 5</h2>
              <article>
                <h3>Article Title 5</h3>
                <p>Article content...</p>
              </article>
            </section>
          </div>

          <div className="item medium">
            <section>
              <h2>NFOUND</h2>
              <article>
                <h3>Article Title 4</h3>
                <p>Article content...</p>
              </article>
            </section>
          </div>


          <div className=" medium split">
            <div className="itemsmall">
              <section>
                <h2>Below Image Div</h2>
                <article>
                  <h3>Article Title 4</h3>
                  <p>Article content...</p>
                </article>
              </section>
            </div>

            <div className="itemsmall">
              <section>
                <h2>Below Image Div</h2>
                <article>
                  <h3>Article Title 4</h3>
                  <p>Article content...</p>
                </article>
              </section>
            </div>
          </div>

          <div className="item small">
            <section>
              <h2>News Section 4</h2>
              <article>
                <h3>Article Title 4</h3>
                <p>Article content...</p>
              </article>
            </section>
          </div>

          <div className="item small">
            <section>
              <h2>News Section 4</h2>
              <article>
                <h3>Article Title 4</h3>
                <p>Article content...</p>
              </article>
            </section>
          </div>
          <div className="item long">
            <section>
              <h2>NWTF</h2>
              <article>
                <h3>Article Title 4</h3>
                <p>Article content...</p>
              </article>
            </section>
          </div>
          <div className="item small">
            <section>
              <h2>qqqq</h2>
              <article>
                <h3>Article Title 4</h3>
                <p>Article content...</p>
              </article>
            </section>
          </div>
          <div className="item small">
            <section>
              <h2>News Section 4</h2>
              <article>
                <h3>Article Title 4</h3>
                <p>Article content...</p>
              </article>
            </section>
          </div>

        </div>
      </main>
      <div className="footer">

      </div>
      <div className='pagenumber'>
               
                <Link  className="pagenumber"   href="/pageone">
                    {pagenumber}
                    </Link>
            </div>

    </div>
  );
};

export default HomePage;
