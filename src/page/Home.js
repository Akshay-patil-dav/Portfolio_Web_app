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
$(document).ready(function () {
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


                                <div>
                                    <ul className='fbf'>
                                        <li className='clfbf'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                        </svg>  <b>Front End</b> </li>
                                        <li className='clfbf'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                        </svg><b>Back End</b></li>
                                        <li className='clfbf'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                        </svg><b>Full Stack</b></li>
                                    </ul>

                                    <button className='gResume'>Get Resume</button>
                                </div>
                            </div>
                        </div>
                        <div className="col b2">

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

                            <div id='icon_ang' style={{ position: 'absolute', left: '740px', top: '10px', zIndex: '1' }} >
                                <img src='https://github.com/Akshay-patil-dav/images_png/blob/main/pngwing.com%20(18).png?raw=true' />
                            </div>
                            <div className='box1' >
                                <div style={{ display: 'flex', color: 'white' }} className='mx-3 m-3' >
                                    <div className='email-cur' ><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                    </svg></div>
                                    <div className='mx-2'>
                                        <b>
                                            E-mail <svg className='mx-5 m-1' style={{ position: 'relative', left: '40px', bottom: '1px', color: 'rgb(89, 255, 100)' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
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
            <div class="container box-card">
                <div class=" contener row  row-cols-md-4 g-4">
                    <div class="col cdcol">
                        <div className='card1'>
                            <div className='card-cen '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                                </svg>
                                <div className='card-tex'>
                                    <h2><b>20k</b></h2>
                                    <h6>Project</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col cdcol">
                        <div className='card2'>
                            <div className='card-cen '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
                                </svg>
                                <div className='card-tex'>
                                    <h2><b>0.5 /Y</b></h2>
                                    <h6>experience</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col cdcol">
                        <div className='card3'>
                            <div className='card-cen '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-journal-medical" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v.634l.549-.317a.5.5 0 1 1 .5.866L9 6l.549.317a.5.5 0 1 1-.5.866L8.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L7 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5A.5.5 0 0 1 8 4M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                                </svg>
                                <div className='card-tex'>
                                    <h2><b>B.C.A</b></h2>
                                    <h6>Graduation</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col cdcol">
                        <div className='card4'>
                            <div className='card-cen '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg>
                                <div className='card-tex'>
                                    <h2><b>2+</b></h2>
                                    <h6>certification</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
