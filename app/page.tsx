import React from 'react';
const HomePage = () => {
  const pagenumber = 1;
  return (

    <div className="container">
      <div className="header">
        <h1>Welcome to My Newspaper Website</h1>
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

          <div className="item long">
            <section>
              <h2>Image</h2>
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
         {pagenumber}
      </div>

    </div>
  );
};

export default HomePage;
