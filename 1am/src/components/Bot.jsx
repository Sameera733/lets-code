import React from 'react';
import key from "../assets/key.png";
import "../styles/bot.css";
import dot from "../assets/dot.png";
import ext from "../assets/ext.svg";
import js from "../assets/js.png";
import lap from "../assets/lap.svg";
import dev from "../assets/dev.png";
import Vector from "../assets/Vector.svg";
import Discord from "../assets/Discord.png"
import am from "../assets/logo.svg";
import soon from "../assets/soon.png";
import horzline from "../assets/horzline.svg";
import Ellipse from "../assets/Ellipse.svg";
import social from "../assets/social.svg"
import Polygon from "../assets/Polygon.svg";
import discordnew from "../assets/Discord New.png";
import overlay from "../assets/overlay.png";

const Bot = () => {


    return (
        <>
            <div className="dev">
                <div className="left">
                    <p>
                        Your go-to platform for mastering code is now in your pocket. With <span> 1AMcreators.com </span>,access world-class chatbot both free and premium, designed to elevate your skills, no matter where you are. Join a global community of passionate learners and start creating with confidence.
                    </p>
                    <button >Chat Bot <span> <img src={discordnew} /></span></button>
                </div>
                <div className="right">
                    <img src={key} />
                </div>
            </div>
            <div className="alone">
                <div className="txt">
                    <p class="small" id="a">Stuck While Coding</p>
                    <p class="b">why code alone</p>
                    <p class="small" id="c">code, build, deploy</p>
                </div>
                <div className="temp">
                <img className='dot' src={dot} alt='dot'/>
                
                </div>
                <div className="exp">
                    <p class="exe">Explore the <span>1AM</span> way </p>
                    <img src={ext} alt='line' />
                    <p id="le"><span>learn</span></p>
                    <p id="in">instantly and interactively</p>
                    <p id="out">Learn from carefully curated learning path with up-to-date interactive courses, and receive 24x7 AI assistance as you develop your coding skills</p>
                </div>
                <div className="js">
                    <img src={js} alt='jsx' />
                    <div className="hands">
                        <img src={lap} />
                        <p id="han">hands-on practice</p>
                        <p id='at'>At 1AM, you get to learn by doing. Escape tutorial hell by solving real-world challenges in our interactive labs, all within your browser. </p>
                    </div>
                    </div>
                    <div className="cod">
                    <p class="off">code, build, deploy </p>
                    <img src={ext} alt='line' />
                    <p id="of"><span>grow</span></p>
                    <p id="on">expand your potential</p>
                </div>
                <div className="do">
                <img src={dev} alt='doo' />
                <img src={overlay} alt='overlay' className="overlay-image"/>
                </div>
                <div className="da">
                    <p class="jo">Join the community of developers changing the world  </p>
                    <p id="joo">Transform the way you learn coding and connect with other like minded developers across the globe</p>
                    <img src={Vector} alt='Vector' />
                    <p class="ro">Make something great </p>
                    <p id="roo">Start a playground, invite your friends and build your projects collaboratively, from anywhere around the globe.</p>
                    <img src={Discord} alt='Discord' />
                    <p class="bo">Connect on Discord</p>
                    <p id="boo">find developers, mentors, and new friends. Attend exclusive events  organized by 1AM and have fun while growing your skills </p>
               
              </div>
                
              <div className="all">
                    <button>start your coding journey</button>
                    <p class="ce">code, build, deploy</p>
                    <img src={am}/>
                    <img src={soon}/>
             </div>
             
             <div className="footer">
             <div className="foot">
                    <img src={horzline}/>
                    <p class="foo">Got a project? Want to collaborate? </p>
                    <p class="fin">Discuss your project <span><img src={Polygon}/></span></p>
                    
                    <img src={Ellipse}/>
                    
                    <p class="fe">Terms & Conditions</p>
                    <p class="few">let’s work together</p>     
                    </div>
                    <div className="foots">
                    <p class="fly" >Contact</p>
                    <p  id="lif"></p>
                    <p class="flo">Maaz.codes1@gmail.com</p>
                    <p class="fap">faizafatima742@gmail.com</p>
                    <p class="fp">sameerabegum324@gmil.com</p>
                    </div>
                    <div className="fot">
                    <p id ="fan">© Copyright 2024. 1AM. All rights reserved.</p>
                    </div>
                    <div className="fonts">
                    <p id="count">Hyderabad, India </p>
                    <img src={social}/>
                    </div>
                    
             </div>
            </div >
        </>
    )
}

export default Bot
