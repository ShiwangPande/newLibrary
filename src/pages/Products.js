
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
import Clock from "../components/Clock";
// Import Swiper styles
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Products.css";
import Cards from "../components/gate/Gatecard1"
import Loader from "../components/Loader";

import "../components/styles.css";
// import required modules
import { Mousewheel, Pagination } from "swiper";
import React, { Component, useRef, useEffect, useState } from 'react'
export default function Products() {
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
                <div style={{ margin: "50px", marginTop: "100px" }}>
                  <Cards /></div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive1 === 'tab3'}>
                <div style={{ margin: "50px", marginTop: "100px" }}>
                  <Cards /></div>

              </MDBTabsPane>
            </MDBTabsContent>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: '#101313', color: "#eeeeee" }}><strong>2nd semester</strong></h2>
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
                <div style={{ margin: "50px", marginTop: "100px" }}>
                  <Cards /></div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive1 === 'tab3'}>
                <div style={{ margin: "50px", marginTop: "100px" }}>
                  <Cards /></div>

              </MDBTabsPane>
            </MDBTabsContent>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: '#101313', color: "#eeeeee" }}><strong>3rd semester</strong></h2>
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
                <div style={{ margin: "50px", marginTop: "100px" }}>
                  <Cards /></div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive1 === 'tab3'}>
                <div style={{ margin: "50px", marginTop: "100px" }}>
                  <Cards /></div>

              </MDBTabsPane>
            </MDBTabsContent>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: '#101313', color: "#eeeeee" }}><strong>4th semester</strong></h2>
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
                <div style={{ margin: "50px", marginTop: "100px" }}>
                  <Cards /></div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive1 === 'tab3'}>
                <div style={{ margin: "50px", marginTop: "100px" }}>
                  <Cards /></div>

              </MDBTabsPane>
            </MDBTabsContent>
          </SwiperSlide>
        </Swiper>
      }
    </>
  );
}
