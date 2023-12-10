import React from 'react';
import "./style.css";
import Image from 'next/image';
import Link from 'next/link';

const PageOne = () => {
  const pagenumber = 2;
  return (
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
          <div className="item small">
            <section>
              <h3>MISSING:</h3>
            <Image src="/oldman.svg" alt="Header Image" width={300} height={300} />
            </section>
          </div>

          <div className="item small">
            <section>
              <h2>News Section 2</h2>
              <article>
                <h3>Article Title 2</h3>
                <p>Article content...</p>
              </article>
            </section>
          </div>
          

          <div className="item small">
            <section>
              <h2>News Section 3</h2>
              <article>
                <h3>Article Title 3</h3>
                <p>Article content...</p>
              </article>
            </section>
          
          </div>
          

          <div className="small split">
            <div className='item1'>
              <section>
                <h2>News Section 4</h2>
                <article>
                  <h3>Article Title 4</h3>
                  <p>Article content...</p>
                </article>
              </section>
            </div>
            <div className='item2'>
              <section>
                <h2>News Section 4</h2>
                <article>
                  <h3>Article Title 4</h3>
                  <p>Article content...</p>
                </article>
              </section>
              
              <div className='item3'>
                <section>
                  <article>
                    <p>Article content...</p>
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
                <p>Article content...</p>
              </article>
            
            </section>
           
            <div className='item longest'>
            <section>bhb</section>
            </div>
          </div> 
        </div>
        </main>
      <div className="footer">
      </div>
      <div className='pagenumber'>
               
               <Link  className="pagenumber"   href="/pagetwo">
                   {pagenumber}
                   </Link>
           </div>

    </div>
  );
};




export default PageOne;