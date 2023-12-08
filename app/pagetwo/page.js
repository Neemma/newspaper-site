import React from 'react';
import "./style.css";

const PageTwo = () => {
    const pagenumber = 3;
    return (
        <div className="container">

            <div className="headercontainer">
                <div className="header2container">
                    <div className="header2">
                        <h1>AD</h1>
                    </div>

                    <div className="header3">
                        <h1>AD</h1>
                    </div>
                </div>
                <div className="header1">
                    <h1>HEADING</h1>
                </div>

                <div className="header2container">
                    <div className="header2">
                        <h1>AD</h1>
                    </div>

                    <div className="header3">
                        <h1>AD</h1>
                    </div>
                </div>
            </div>

            <div className="line">
            </div>

            <div className="heading">
                LOOK AT THAT! POVERTY IS GONE!
            </div>

            <main>
                <div className="grid">
                    <div className="item large">
                        <section>
                            <h2>News Section 1</h2>
                            <article>
                                <h3>Article Title 1</h3>
                                <p>Article content...</p>
                            </article>
                        </section>
                    </div>



                    <div className="item short">
                        <section>
                            <h2>Image</h2>
                            <article>
                                <h3>Article Title 2</h3>
                                <p>Article content...</p>
                            </article>

                            <div className="smallheading">
                                LOOK AT THAT! POVERTY IS GONE!
                            </div>
                        </section>
                    </div>

                    <div className="item long">
                        <section>
                            <h2>News Section 3</h2>
                            <article>
                                <h3>Article Title 3</h3>
                                <p>Article content...</p>
                            </article>
                        </section>
                    </div>

                    <div className="medium split">
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

                    <div className="item smaller">
                        <section>
                            <h2> ndjd</h2>
                            <article>
                                <h3>Article Title 4</h3>
                                <p>Article content...</p>
                            </article>
                        </section>
                    </div>

                    <div className='item longer'>
                        <section>
                        </section>
                    </div>
                    
                </div>
                <div className="pagenumber">
                        {pagenumber}
                    </div>

            </main>

        </div>
    );
}

export default PageTwo;