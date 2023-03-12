import React, { useRef, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import Clock from "./Clock";
// Import Swiper styles
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import Card from './cards/Card';
import Card2 from './cards/Card2';
import Card3 from './cards/Card3';
import Card4 from './cards/Card4';
import Card5 from './cards/Card5';
import Card6 from './cards/Card6';
import Card7 from './cards/Card7';
import Card8 from './cards/Card8';
// import Footer from './Footer'
// import logo from '../images/mesa-logo.png'
// import Loader from "./Loader";
import Pyq1 from './PYQ/Pyq1';
import Pyq2 from './PYQ/Pyq2';
import Pyq3 from './PYQ/Pyq3';
import Pyq4 from './PYQ/Pyq4';
import Pyq5 from './PYQ/Pyq5';
import Pyq6 from './PYQ/Pyq6';
import Pyq7 from './PYQ/Pyq7';
import Pyq8 from './PYQ/Pyq8';
import "swiper/css";
import "swiper/css/pagination";
import Loader from "./Loader";

import "./styles.css";


// import required modules
import { Mousewheel, Pagination } from "swiper";


export default function App() {
  const [basicActive1, setBasicActive1] = useState('tab1');

  const handleBasicClick1 = (value: string) => {
    if (value === basicActive1) {
      return;
    }

    setBasicActive1(value);
  };
  const [basicActive2, setBasicActive2] = useState('tab4');

  const handleBasicClick2 = (value: string) => {
    if (value === basicActive2) {
      return;
    }

    setBasicActive2(value);
  };
  const [basicActive3, setBasicActive3] = useState('tab7');

  const handleBasicClick3 = (value: string) => {
    if (value === basicActive3) {
      return;
    }

    setBasicActive3(value);
  };
  const [basicActive4, setBasicActive4] = useState('tab10');

  const handleBasicClick4 = (value: string) => {
    if (value === basicActive4) {
      return;
    }

    setBasicActive4(value);
  };
  const [basicActive5, setBasicActive5] = useState('tab13');
  const handleBasicClick5 = (value: string) => {
    if (value === basicActive5) {
      return;
    }

    setBasicActive5(value);
  };
  const [basicActive6, setBasicActive6] = useState('tab16');
  const handleBasicClick6 = (value: string) => {
    if (value === basicActive6) {
      return;
    }

    setBasicActive6(value);
  };
  const [basicActive7, setBasicActive7] = useState('tab19');
  const handleBasicClick7 = (value: string) => {
    if (value === basicActive7) {
      return;
    }

    setBasicActive7(value);
  };
  const [basicActive8, setBasicActive8] = useState('tab22');
  const handleBasicClick8 = (value: string) => {
    if (value === basicActive8) {
      return;
    }

    setBasicActive8(value);
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index) + "</span>";
    }
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3540)
  }, [])
  return (
    <>
      {loading ?

        <Loader
          // color={'#294a65'}
          loading={loading}
          // cssOverride={override}
          size={300}
        // aria-label="Loading Spinner"
        // data-testid="loader"
        // speedMultiplier={1.5}
        /> :
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          // spaceBetween={30}
          mousewheel={true}
          pagination={pagination}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Clock />
            <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: '#101313', color: "#eeeeee" }}><strong>1st semester</strong></h2>
            <MDBTabs className='mb-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick1('tab1')} active={basicActive1 === 'tab1'}>
                  Syllabus
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick1('tab2')} active={basicActive1 === 'tab2'}>
                  Books
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick1('tab3')} active={basicActive1 === 'tab3'}>
                  Previous Year Papers
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={basicActive1 === 'tab1'}>
                <div className="cardss-list" style={{ justifyContent: 'center' }}>
                  <div className='cards'>
                    <a href='https://drive.google.com/file/d/1lBtjmEvGk-1ulpV8kw1TABt8-LOMsnjR/view?usp=sharing' target="_blank">
                      <img src="https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-3.jpg" alt="" style={{ height: "213px" }} /> </a>

                  </div></div>


              </MDBTabsPane>
              <MDBTabsPane show={basicActive1 === 'tab2'} >
                <div className="cardss-list" >
                  <Card /></div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive1 === 'tab3'}>
                <div className="cardss-list" >
                  <Pyq1 /></div>

              </MDBTabsPane>
            </MDBTabsContent>
            <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>

          </SwiperSlide>
          <SwiperSlide>
            <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: '#101313', color: "#eeeeee" }}><strong>2nd semester</strong></h2>
            <MDBTabs className='mb-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick2('tab4')} active={basicActive2 === 'tab4'}>
                  Syllabus
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick2('tab5')} active={basicActive2 === 'tab5'}>
                  Books
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick2('tab6')} active={basicActive2 === 'tab6'}>
                  Previous Year Papers
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={basicActive2 === 'tab4'}>
                <div className="cardss-list" style={{ justifyContent: 'center' }}>
                  <div className='cards'>
                    <a href='https://drive.google.com/file/d/14Drd3YduDPWBfWRpDU1V3MQ532v84CqQ/view?usp=sharing' target="_blank">
                      <img src="https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-4.jpg" alt="" style={{ height: "213px" }} /> </a>


                  </div></div>


              </MDBTabsPane>
              <MDBTabsPane show={basicActive2 === 'tab5'} >
                <div className="cardss-list" >
                  <Card2 /></div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive2 === 'tab6'}>
                <div className="cardss-list" >
                  <Pyq2 /></div>

              </MDBTabsPane>
            </MDBTabsContent>
            <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: '#101313', color: "#eeeeee" }}><strong> 3rd semester</strong></h2>
            <MDBTabs className='mb-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick3('tab7')} active={basicActive3 === 'tab7'}>
                  Syllabus
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick3('tab8')} active={basicActive3 === 'tab8'}>
                  Books
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick3('tab9')} active={basicActive3 === 'tab9'}>
                  Previous Year Papers
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={basicActive3 === 'tab7'}>
                <div className="cardss-list" style={{ justifyContent: 'center' }}>
                  <div className='cards'>
                    <a href='https://drive.google.com/file/d/1yjAxLe3GtE9uLcbioyo9bewdzJZBXBFx/view?usp=sharing' target="_blank">
                      <img src="https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-2.jpg" alt="" style={{ height: "213px" }} /> </a>


                  </div></div>


              </MDBTabsPane>
              <MDBTabsPane show={basicActive3 === 'tab8'} >
                <div className="cardss-list" >
                  <Card3 /></div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive3 === 'tab9'}>
                <div className="cardss-list" >
                  <Pyq3 /></div>

              </MDBTabsPane>
            </MDBTabsContent>
            <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: '#101313', color: "#eeeeee" }}><strong>4th semester</strong></h2>
            <MDBTabs className='mb-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick4('tab10')} active={basicActive4 === 'tab10'}>
                  Syllabus
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick4('tab11')} active={basicActive4 === 'tab11'}>
                  Books
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick4('tab12')} active={basicActive4 === 'tab12'}>
                  Previous Year Papers
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={basicActive4 === 'tab10'}>
                <div className="cardss-list" style={{ justifyContent: 'center' }}>
                  <div className='cards'>
                    <a href='https://drive.google.com/file/d/1AcevZ7C_PAtnaAahRRR5rhTLJul_KdWs/view?usp=sharing' target="_blank">
                      <img src='https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-5.jpg' alt="" style={{ height: "213px" }} /> </a>

                  </div>
                </div>


              </MDBTabsPane>
              <MDBTabsPane show={basicActive4 === 'tab11'} >
                <div className="cardss-list" >
                  <Card4 /></div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive4 === 'tab12'}>
                <div className="cardss-list" >
                  <Pyq4 /></div>

              </MDBTabsPane>
            </MDBTabsContent>
            <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: '#101313', color: "#eeeeee" }}><strong>5th semester</strong></h2>
            <MDBTabs className='mb-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick5('tab13')} active={basicActive5 === 'tab13'}>
                  Syllabus
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick5('tab14')} active={basicActive5 === 'tab14'}>
                  Books
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick5('tab15')} active={basicActive5 === 'tab15'}>
                  Previous Year Papers
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={basicActive5 === 'tab13'}>
                <div className="cardss-list" style={{ justifyContent: 'center' }}>
                  <div className='cards'>
                    <a href='https://drive.google.com/file/d/1SzXNrNnx9mSF7JWjTQa-z3Sxu5XXyoIK/view?usp=sharing' target="_blank">
                      <img src="https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-6.jpg" alt="" style={{ height: "213px" }} /> </a>

                  </div></div>


              </MDBTabsPane>
              <MDBTabsPane show={basicActive5 === 'tab14'} >
                <div className="cardss-list" >
                  <Card5 /></div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive5 === 'tab15'}>
                <div className="cardss-list" >
                  <Pyq5 /></div>

              </MDBTabsPane>
            </MDBTabsContent>
            <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: '#101313', color: "#eeeeee" }}><strong>6th semester</strong></h2>
            <MDBTabs className='mb-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick6('tab16')} active={basicActive6 === 'tab16'}>
                  Syllabus
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick6('tab17')} active={basicActive6 === 'tab17'}>
                  Books
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick6('tab18')} active={basicActive6 === 'tab18'}>
                  Previous Year Papers
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={basicActive6 === 'tab16'}>
                <div className="cardss-list" style={{ justifyContent: 'center' }}>
                  <div className='cards'>
                    <a href='https://drive.google.com/file/d/1Yg3SAk9p7QlnZceFopb31mQ6mp4Ec4rL/view?usp=sharing' target="_blank">
                      <img src="https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-7.jpg" alt="" style={{ height: "213px" }} /> </a>

                  </div></div>


              </MDBTabsPane>
              <MDBTabsPane show={basicActive6 === 'tab17'} >
                <div className="cardss-list" >
                  <Card6 /></div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive6 === 'tab18'}>
                <div className="cardss-list" >
                  <Pyq6 /></div>

              </MDBTabsPane>
            </MDBTabsContent>
            <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: '#101313', color: "#eeeeee" }}><strong>7th semester</strong></h2>
            <MDBTabs className='mb-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick7('tab19')} active={basicActive7 === 'tab19'}>
                  Syllabus
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick7('tab20')} active={basicActive7 === 'tab20'}>
                  Books
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick7('tab21')} active={basicActive7 === 'tab21'}>
                  Previous Year Papers
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
            <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
            <MDBTabsContent>
              <MDBTabsPane show={basicActive7 === 'tab19'}>
                <div className="cardss-list" style={{ justifyContent: 'center' }}>
                  <div className='cards'>
                    <a href='https://drive.google.com/file/d/1dTUdgSjcvLO4QBc3zEdpGF1JgOVnYvNL/view?usp=sharing' target="_blank">
                      <img src="https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-8.jpg" alt="" style={{ height: "213px" }} /> </a>

                  </div></div>


              </MDBTabsPane>
              <MDBTabsPane show={basicActive7 === 'tab20'} >
                <div className="cardss-list" >
                  <Card7 /></div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive7 === 'tab21'}>
                <div className="cardss-list" >
                  <Pyq7 /></div>

              </MDBTabsPane>
            </MDBTabsContent>

          </SwiperSlide>
          <SwiperSlide>
            <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: '#101313', color: "#eeeeee" }}><strong>8th semester</strong></h2>
            <MDBTabs className='mb-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick8('tab22')} active={basicActive8 === 'tab22'}>
                  Syllabus
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick8('tab23')} active={basicActive8 === 'tab23'}>
                  Books
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick8('tab24')} active={basicActive8 === 'tab24'}>
                  Previous Year Papers
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
            {/* <div className="cardss-list" >
                        <Card7 /></div> */}
            <MDBTabsContent>
              <MDBTabsPane show={basicActive8 === 'tab22'}>
                <div className="cardss-list" style={{ justifyContent: 'center', height: "61.4vh" }}>
                  <div className='cards'>
                    <a href='https://drive.google.com/file/d/1Yg3SAk9p7QlnZceFopb31mQ6mp4Ec4rL/view?usp=sharing' target="_blank">
                      <img src="https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-8.jpg" alt="" style={{ height: "213px" }} /> </a>

                  </div></div>


              </MDBTabsPane>
              <MDBTabsPane show={basicActive8 === 'tab23'} >
                <div className="cardss-list" >
                  <Card8 /></div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive8 === 'tab24'}>
                <div className="cardss-list" >
                  <Pyq8 /></div>

              </MDBTabsPane>
            </MDBTabsContent>


            {/* <div className='NDL'>

            <p className='' style={{ fontSize: "15px", marginLeft: "40px", fontWeight: "600" }}>
              For More Books: <a href="https://www.ndl.gov.in/">https://www.ndl.gov.in/</a>
            </p>

          </div> */}
            <MDBFooter className=' text-center text-white' >
              <MDBContainer className='p-1 pb-0'>
                <section className='mb-0'>
                  <MDBBtn outline color="light" floating className='m-1' target="_blank" href='shiwangpande1@gmail.com' role='button'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" /></svg>

                  </MDBBtn>

                  <MDBBtn outline color="light" floating className='m-1' target="_blank" href='https://twitter.com/Shiwang__Pandey' role='button'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" /></svg>
                  </MDBBtn>

                  {/* <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                  <MDBIcon fab icon='google' />
                </MDBBtn> */}
                  <MDBBtn outline color="light" floating className='m-1' target="_blank" href='https://www.instagram.com/__shiwang/' role='button'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" /></svg>
                  </MDBBtn>

                  <MDBBtn outline color="light" floating className='m-1' target="_blank" href='https://www.linkedin.com/in/shiwang-pandey/' role='button'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </MDBBtn>

                  <MDBBtn outline color="light" floating className='m-1' target="_blank" href='https://github.com/ShiwangPande' role='button'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg>
                  </MDBBtn>
                </section>
              </MDBContainer>

              <div className='text-center p-3' style={{ backgroundColor: 'hsl(216deg 18% 16%)', color: "#eeeeee" }}>
                © 2023 Copyright:
                <a className='text-white' href='https://shiwangpandey.in/'>
                  shiwangpandey.in
                </a>
              </div>
            </MDBFooter>
          </SwiperSlide>
        </Swiper>
      }
    </>
  );
}