import React from 'react';
import {IoCallSharp} from 'react-icons/io5';
import {BsCameraVideoFill,BsWhatsapp} from 'react-icons/bs';
import {FaBook} from 'react-icons/fa6'
import {RiWaterPercentFill} from 'react-icons/ri'
import {BiSolidDownload} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineYoutube} from 'react-icons/ai'
import {TbWorldWww} from 'react-icons/tb'
import "./Submission.css"

const SubmissionP = () => {
  return (
    <>
        <div className='submission-container'>
            
            <p className='s-heading'><strong>UPSC</strong> PATHSALA</p>
           
            <div className='container-1'>
                <div className='c1-heading'>
                    <p >Thank you for taking the first step towards</p>
                    <p>UPSC Preparation!</p>
                </div>
                <div className='c1'>
                    <div>
                        <img src="./Img/img1.png" alt="newimg" width={350} height={250}/>
                    </div>
                    <div className='c1-info'>
                        <h3>What's next?</h3>
                        <p ><IoCallSharp/>  You will get a call within 12 hours.</p>
                        <p ><BsCameraVideoFill/>  Don't miss this call. Ask for the Free Demo.</p>
                        <p ><FaBook/>  Attend the Demo and experience our teaching methods.</p>
                        <p ><RiWaterPercentFill/>  Ask if you are elgible for any scholarship or discounts.</p>
                    </div>
                </div>
            </div>

            <p className='s-heading'>Our Star Students</p>
            <div className='container-2'>
                <div className='c2'>
                    <div className='inside-c2'>
                        <img src="./Img/face.png" alt="face" />
                        <div className='c2-info1'>
                            <p>Akshay Agarwal</p>
                            <h4>AIR 43 in UPSC CSE 2019</h4>
                        </div>
                    </div>
                    
                    <p className='c2-info2'>"UPSC Pathsala's coverage of current affairs was
                        something that I found very helpful. It covered
                        everything in General Studies syllabus."</p>
                </div>
                <div className='social-logo'>
                    <span className='social-p'><CgProfile/></span>
                    <span className='social-w'><BsWhatsapp/></span>
                    <p>Chat with us</p>
                </div>              
            </div>
            
            <div className='container-3'>
                <p>Our students vouch for us. Hear them speak.</p>
                <iframe width="650" height="300"
                src="https://www.youtube.com/embed/Tcbz3K3trh4">
                </iframe>
            </div>
            
            <div className='container-4'>
                <img src="./Img/book.png" alt="books" width={350} height={250} />
                <div className='c4'>
                    <h2>Our Newest Feature</h2>
                    <p>Monthly Current Affairs Magazine - Edition Dec 2020</p>
                    <button><BiSolidDownload/> Download for Free here</button>
                    <p>You will get this monthly magazine</p>
                    <p>when you enroll with us</p>
                </div>              
            </div>

            <h3 className='c5-heading'>What more you will get?</h3>
            <div className='container-5'>
                <div className='c5'>
                    <p className='p1'>Personal Mentorship</p>
                    <p className='p2'>Mock Quizzes</p>
                    <p className='p3'>1000+ hours of Video content</p>
                    <button className='b1'><TbWorldWww/> Website</button>
                </div>
                <div>
                    <p className='p1'>Daily Live Classes</p>
                    <p className='p2'>interview Preparation</p>
                    <p className='p3'>Help in filling DAF</p>
                    <button className='b2'><AiOutlineYoutube/> Youtube</button>
                </div>
                <div className='social-logo'>
                    <span className='social-p'><CgProfile/></span>
                    <span className='social-w'><BsWhatsapp/></span>
                    <p>Chat with us</p>
                </div>                
            </div>

        </div>
    </>
  )
}

export default SubmissionP;