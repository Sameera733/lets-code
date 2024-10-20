import React from 'react';
import key from "../assets/key.png";
import "../styles/bot.css";
import dot from "../assets/dot.png";
import ext from "../assets/ext.svg";
import js from "../assets/js.png";
import lap from "../assets/lap.svg";





const Bot = () => {


    return (
        <>
            <div className="dev">
                <div className="left">
                    <p>
                        Your go-to platform for mastering code is now in your pocket. With <span> 1AMcreators.com </span>,access world-class chatbot both free and premium, designed to elevate your skills, no matter where you are. Join a global community of passionate learners and start creating with confidence.
                    </p>
                    <button>Chat Bot</button>
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
                    <p id="in">instantly and intractively</p>
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
            </div>
        </>
    )
}

export default Bot
