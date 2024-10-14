import React from 'react';
import color from "../img/color.png"
import star from "../img/pngwing.com.png"
import $ from 'jquery';

function infiniteMovement() {
    $("#icon_react").animate({ top: "+=10px" }, 1000)
                         .animate({ top: "-=10px" }, 1000, infiniteMovement);
  }
  
  function b2() {
    $("#icon_ang").animate({ top: "+=10px" }, 1000)
                         .animate({ top: "-=10px" }, 1000, b2);
  }
  

    
  function php() {
    $("#icon_php").animate({ top: "+=10px" }, 1000)
                         .animate({ top: "-=10px" }, 1000, php);
  }

  function boot() {
    $("#icon_boot").animate({ top: "+=10px" }, 1000)
                         .animate({ top: "-=10px" }, 1000, boot);
  }
  $(document).ready(function() {
    infiniteMovement();
    b2();
    php();
    boot();
  });

const Home = () => {


    return (
        <>
            <span  >
                <div className="container">
                    <div className="row m-5 ">
                        <div className="col">
                            <div className="container m-5 ">
                                {/* <h1 className='heading mb-0 display-6' >Hello There ,</h1>
<h1 className='heading mb-0 display-6' >I'm Akshay Patil</h1> */}

                                <div className='heading mb-0 display-6' >Limitless learning at your fingertips</div>
                                <img src={color} className='color position-absolute  start-5' />
                                <p className='bios ' >Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.</p>

                            </div>
                        </div>
                        <div className="col">

                            <img src={star} className='star' />
                            <div id='icon_react'>
                                <img src='https://github.com/Akshay-patil-dav/images_png/blob/main/reactjs.png?raw=true' />
                            </div>
                            <div id='icon_php'>
                                <img src='https://github.com/Akshay-patil-dav/images_png/blob/main/pngwing.com%20(14).png?raw=true' />
                            </div>
                            <div id='icon_boot'>
                                <img src='https://github.com/Akshay-patil-dav/images_png/blob/main/pngwing.com%20(11).png?raw=true' />
                            </div>

                            <div id='icon_ang' style={{position: 'absolute', left: '740px', top: '10px', zIndex: '1'}} >
                                <img src='https://github.com/Akshay-patil-dav/images_png/blob/main/pngwing.com%20(18).png?raw=true' />
                            </div>
                            <div className='box1' >
                                <div style={{ display: 'flex', color: 'white' }} className='mx-3 m-3' >
                                    <div className='email-cur' ><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                    </svg></div>
                                    <div className='mx-2'>
                                        <b>
                                            E-mail <svg className='mx-5 m-1' style={{position: 'relative' , left: '40px', bottom: '1px' , color: 'rgb(89, 255, 100)'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg></b>
                                        <p className='mail-tex-bo' >akshaypatil22082002@gmail.com</p>
                                    </div>
                                </div>

                                <div className='box2-resv'>
                                    
                                                   <div className='Resume-bx'>
                                                   <b className='mx-5 Resume-tx container'>Resume</b>
                                                   <button type="button" class="btn  btn-primary Resume mx-4">Resume</button>
                                                   </div>
                                    </div>
                            </div>
                            <div className='box-border container m-5 '>
                                <img src="https://www.pngall.com/wp-content/uploads/2018/04/Businessman-Transparent.png" className='img-pro' />
                            </div>

                                    

                        </div>
                    </div>
                </div>

                <div className='cur-bol m-5' ></div>

                <div class="star_8"></div>
            </span>
        </>
    );
}

export default Home;
