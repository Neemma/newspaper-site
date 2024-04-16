import React from 'react';
import "./style.css";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import backgroundImage from "../../public/geto.svg";
import texture from "../../public/inked.svg";

const PageTwo = () => {
    const pagenumber = 3;
    return (
        <div className="container"
       >
            <div className="headercontainer"
            >
                <div className="header2container">

                    <div className="header2"
                    
                    >
                        <h3 className='adheading underline'>FRIDAY</h3>
                        <h3 className='adheading underline'>19th April 1985</h3>
                        <h3 className='adheading'>10 Pages</h3>
                    </div>

                    <div className="header3">
                        <h3 className='adheading eighty'>VOL 89</h3>
                    </div>
                </div>
                <div className="header1">
<h2 className='heading fontsize'>The Not-Times</h2>
                </div>

                <div className="header2container">
                    <div className='header2 bordernone' 
                        style={{
                        }}
                    >
                    </div>
                    <p className='weather'>WEATHER:</p>
                    <p className='weather'>As sunny as it gets</p>
                    <div className="borderbottom"> 
                    </div>
                       
                </div>
            </div>


            <div className="line">
            </div>

            <div className="heading">
                <h2 className="heading">DIE AND LIVE: A NEW AGE PHILOSOPHY</h2>

            </div>

            <main>
                <div className="grid">
                    <div className="itemImage large Imagetwo">
                        <h3 className='opotext'>The Kids and Their Absurdism</h3>
                        <i className='caption1'> Is nihilism the answer to our prayers? </i>
                        <Image className='youdied' src={'/todayyoudied.svg'} width={600} height={500} alt="image" />

                    </div>

                    <div className="item short Image">
                        <section>
                            <h2>BUY 2 GET 1 FREE</h2>
                            <Image src={'/radiohead.svg'} width={270} height={270} alt="image" />
                            <p className='ad'>Our spice will spice your life- </p>
                            <p className='ad'>
                                Disclaimer: Spice may cause death!
                            </p>
                            <div className="smallheading">
                                NOW AVAILABLE AT YOUR LOCAL STORE
                            </div>
                        </section>
                    </div>

                    <div className="item long">
                        <section>
                            <h2>LOCAL MAN WINS LOTTERY</h2>
                            <article>
                                <p><b className='b'>A</b>rticle
                                    content...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  Sed ut perspiciatis unde omnis iste natus error sit voluptatem consectetur adipiscing elit, sed incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque   Sed ut perspiciatis unde omnis iste natus error sit voluptatem consectetur laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem consectetur adipiscing   Sed ut perspiciatis unde omnis iste natus error sit voluptatem consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                </p>
                            </article>
                        </section>
                    </div>

                    <div className="medium split">

                        <div className="itemsmall">
                            <section>
                                <article>
                                    <p><b className='b'>A</b>rticle content...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.deserunt mollit anim id est laborum.deserunt mollit anim id, sunt in culpa qui officia dese.
                                    </p>
                                </article>

                            </section>
                        </div>

                        <div className="itemsmall">
                            <section>

                                <article>
                                    <p>consectetur adipiscing elit, sed et . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        Sed ut perspiciatis unde omnis iste natus  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam sed do eiusmod tempor in. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    </p>
                                </article>
                            </section>
                        </div>

                        <div className="itemsmall hide">
                            <section>

                                <article>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.deserunt mollit anim id est laborum.deserunt mollit anim id, sunt in culpa qui officia dese.
                                    </p>
                                </article>
                            </section>
                        </div>
                    </div>


                    <div className="item smaller">
                        <h3 className='opotext'>Disaster Hits The Capital</h3>
                        <div className="split">
                            <div className="itemsmall">
                                <section>
                                    <article>
                                        <p><b className='b'>A</b>rticle content...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                        </p>
                                    </article>
                                </section>
                            </div>
                            <div className="itemsmall">
                                <section>
                                    <article>
                                        <p>Article content...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                        </p>
                                    </article>
                                </section>
                            </div>
                            <div className="itemsmall hide">
                                <section>
                                    <article>
                                        <p>Article content...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                        </p>
                                    </article>
                                </section>
                            </div>
                        </div>
                    </div>

                    <div className="item opo">
                        <section>
                            <h3 className='opotext'> Earthquake </h3>
                            <Image src={'/mobat100.svg'} className='mobb'
                                width={300} height={320} alt="image" />
                            {/* <i className='caption'> A magnitude 5.6 earthquake shook citizens early this week </i> */}
                        </section>
                    </div>

                </div>
            </main>
            <div className="footer">
                <div>
                    <Image src={'/macrmv.png'} width={40} height={40} alt="image" />
                </div>
                <div>
                    <p className='adcaptionred'> <b>OFFER OFFER!!! </b> </p>
                </div>
                <div>
                    <p className='adcaptionred'> <b>OFFER OFFER!!! </b> </p>
                </div>
                <div>
                    <p className='adcaption'> USD <b>2999</b> ONLY</p>
                </div>

                <div >
                    <p className='adcaption'><b> MACINTOSH 128K</b></p>

                </div>

                <div>
                    <p className='adcaption'> BUY NOW AND GET <b> FREE</b> FLOPPY DISKS! </p>
                </div>
                <div>
                    <Image src={'/floppy.svg'} width={30} height={36} alt="image" />
                </div>

                <div>
                    <Image src={'/macrmv.png'} width={40} height={40} alt="image" />
                </div>


            </div >
            <div className='pagenumber'>

                <a className="pagenumber" href="/">
                    {pagenumber}
                </a>
            </div>


        </div>
    );
};

export default PageTwo;