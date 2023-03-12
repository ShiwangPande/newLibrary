import React from 'react'
import "./clock.css"
import Digi from "../images/Digi.png"
import logo from "../images/logo.png"

function Clock() {
    return (
        <body>
            <a href="https://www.shiwangpandey.in/"><img className='logo1' src={logo} alt="" /></a>
            <div class="box">
                <div class="clock-body">
                    <div class="roof"></div>
                    <div class="roof-top"></div>
                    <div class="roof-tower">
                        <div class="tower-top"></div>
                        <div class="tower-beam"></div>
                    </div>
                    <div class="hinge-one">
                        <div class="screw-one"></div>
                        <div class="screw-two"></div>
                    </div>
                    <div class="hinge-two">
                        <div class="screw-one"></div>
                    </div>
                </div>
                <div class="pipe-connector"></div>
                <div class="pipe-connector-hinge"></div>
                <div class="pipe-horizontal-left">
                    <div class="pipe-hinge"></div>
                </div>
                <div class="pipe-horizontal-left-copy"></div>
                <div class="pipe-horizontal-right"></div>
                <div class="pipe-vertical"></div>
                <div class="pipe-connector-horizontal"></div>

                <div class="light-connector"></div>
                <div class="light-connector-hinge"></div>
                <div class="light-pipe-vertical"></div>
                <div class="light-pipe-horizontal"></div>
                <div class="light-base-bottom"></div>
                <div class="light-base-middle"></div>
                <div class="light-base-top"></div>
                <div class="light-bulb">
                    <div class="light-bulb-inner"></div>
                    <div class="filament-one"></div>
                    <div class="filament-two"></div>
                </div>
                <div class="face-inner">
                    <div class="face-middle"></div>
                    <div class="face-number-border">
                        <div class="number-12">XII</div>
                        <div class="number-3">III</div>
                        <div class="number-6">VI</div>
                        <div class="number-9">IX</div>
                    </div>
                    <div class="hand-min"></div>
                    <div class="hand-hour"></div>
                    <div class="hand-second"></div>
                </div>
                <div class="face-cog">
                    <div class="cog-one"></div>
                    <div class="cog-two"></div>
                    <div class="cog-three"></div>
                    <div class="cog-four"></div>
                </div>
                <div class="gear-top-inner"></div>
                <div class="gear-top">
                    <div class="cog-one"></div>
                    <div class="cog-two"></div>
                    <div class="cog-three"></div>
                    <div class="cog-four"></div>
                </div>
                <div class="gear-bottom">
                    <div class="cog-one"></div>
                    <div class="cog-two"></div>
                    <div class="cog-three"></div>
                    <div class="cog-four"></div>
                </div>

                <div class="pipe-inner-horizontal"></div>
                <div class="pipe-inner-angled"></div>
                <div class="screw"></div>
                <div class="screw-inner"></div>

            </div>
            <br />
            <img className='digi' src={Digi} alt="" />
            <h5 style={{ color: "white" }}>Explore the world of books</h5>
        </body>
    )
}

export default Clock