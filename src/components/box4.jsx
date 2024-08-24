
import { useState } from "react"
import "../styles/box4.css"
export default function Box4() {
    const [dstyle, setStyle] = useState("slider-1")
    const [dstyle1, setStyle1] = useState("slider-1")
    const [dstyle2, setStyle2] = useState("slider-1")
    function AddStyle(e) {

        setStyle("slider")

    }
    function RemoveStyle() {
        setStyle("slider-1");

    }
    function AddStyle1() {
        setStyle1("slider")
    }
    function RemoveStyle1() {
        setStyle1("slider-1")
    }
    function AddStyle2() {
        setStyle2("slider")
    }
    function RemoveStyle2() {
        setStyle2("slider-1")
    }
    return (
        <div className="box4">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <img alt="pics" src="../images/pic3.jpg"></img>
                    <div className="menu d-flex justify-content-center align-items-center" onClick={AddStyle} id="box_1">
                        <span className="bi  bi-list-nested"></span>
                    </div>
                    <div className="text-box">
                        <h4>Lallan Pathan</h4>
                        <p>Founder</p>
                    </div>
                    <div className={dstyle}>
                        <b className="bi bi-x-lg" onClick={RemoveStyle}></b>
                        <h2>Lallan Pathan</h2>
                        <p>Founder</p>
                        <br></br>
                        <i>A web application, or web app, is a program that is stored on a remote server and delivered to a user's device through a web browser interface.</i>
                        <div className="d-flex justify-content-around align-items-center mt-3">
                            <div><span className="bi bi-github"></span></div>
                            <div><span className="bi bi-twitter-x"></span></div>
                            <div><span className="bi bi-linkedin"></span></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img alt="pics" src="../images/pic4.jpg"></img>
                    <div className="menu d-flex justify-content-center align-items-center" onClick={AddStyle1}>
                        <span className="bi  bi-list-nested"></span>
                    </div>
                    <div className="text-box">
                        <h4>Lotiya Pathan</h4>
                        <p>CEO & Executive</p>
                    </div>
                    <div className={dstyle1}>
                        <b className="bi bi-x-lg" onClick={RemoveStyle1}></b>
                        <h2>Lotiya Pathan</h2>
                        <p>CEO & Executive</p>
                        <br></br>
                        <i>A web application, or web app, is a program that is stored on a remote server and delivered to a user's device through a web browser interface.</i>
                        <div className="d-flex justify-content-around align-items-center mt-3">
                            <div><span className="bi bi-github"></span></div>
                            <div><span className="bi bi-twitter-x"></span></div>
                            <div><span className="bi bi-linkedin"></span></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img alt="pics" src="../images/pic5.jpg"></img>
                    <div className="menu d-flex justify-content-center align-items-center" onClick={AddStyle2}>
                        <span className="bi  bi-list-nested"></span>
                    </div>
                    <div className="text-box">
                        <h4>Nimbu Hatela</h4>
                        <p>Software Engineer</p>
                    </div>
                    <div className={dstyle2}>
                        <b className="bi bi-x-lg" onClick={RemoveStyle2}></b>
                        <h2>Nimbu Hatela</h2>
                        <p>Software Engineer</p>
                        <br></br>
                        <i>A web application, or web app, is a program that is stored on a remote server and delivered to a user's device through a web browser interface.</i>
                        <div className="d-flex justify-content-around align-items-center mt-3">
                            <div><span className="bi bi-github"></span></div>
                            <div><span className="bi bi-twitter-x"></span></div>
                            <div><span className="bi bi-linkedin"></span></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}