import React from 'react';
import {IoCallSharp} from 'react-icons/io5';
import {BsCameraVideoFill} from 'react-icons/bs';
import {FaBook} from 'react-icons/fa6'
import {RiWaterPercentFill} from 'react-icons/ri'
import {BiSolidDownload} from 'react-icons/bi'

const SubmissionP = () => {
  return (
    <>
        <div className='submission-container'>
            <p><strong>UPSC</strong> PATHSALA</p>
            <div>
                <p>Thank you for taking the first step towards UPSC Preparation!</p>
                <div>
                    <img src="" alt="newimg" />
                    <h3>What's next?</h3>
                    <p><IoCallSharp/>You will get a call within 12 hours.</p>
                    <p><BsCameraVideoFill/>Don't miss this call. Ask for the Free Demo.</p>
                    <p><FaBook/>Attend the Demo and experience our teaching methods.</p>
                    <p><RiWaterPercentFill/>imgAsk if you are elgible for any scholarship or discounts.</p>
                </div>

            </div>

            <h3>Our Star Students</h3>
            <div>
                <div>
                    <div>
                        <img src="" alt="face" />
                        <div>
                            <p>Akshay Agarwal</p>
                            <h3>AIR 43 in UPSC CSE 2019</h3>
                        </div>
                    </div>
                    
                    <p>"UPSC Pathsala's coverage of current affairs was
                        something that I found very helpful. It covered
                        everything in General Studies syllabus."</p>
                </div>
                <div>
                    <img src="" alt="profile" />
                    <img src="" alt="whatsapp" />
                    <p>Chat with us</p>
                </div>              
            </div>

            <h4>Our students vouch for us. Hear them speak.</h4>
            <div>
                <video src="">hett</video>
            </div>
           
            <div>
                <img src="" alt="books" />
                <div>
                    <h3>Our Newest Feature</h3>
                    <p>Monthly Current Affairs Magazine - Edition Dec 2020</p>
                    <button><BiSolidDownload/>Download for Free here</button>
                    <p>You will get this monthly magazine</p>
                    <p>when you enroll with us</p>
                </div>              
            </div>

            <h3>What more you will get?</h3>
            <div>
                <div>
                    <p>Personal Mentorship</p>
                    <p>Mock Quizzes</p>
                    <p>1000+ hours of Video content</p>
                    <button>Website</button>
                </div>
                <div>
                    <p>Daily Live Classes</p>
                    <p>interview Preparation</p>
                    <p>Help in filling DAF</p>
                    <button>Youtube</button>
                </div>
                <div>
                    <img src="" alt="profile" />
                    <img src="" alt="whatsapp" />
                    <p>Chat with us</p>
                </div>                
            </div>

        </div>
    </>
  )
}

export default SubmissionP;