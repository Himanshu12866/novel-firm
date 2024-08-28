
import { useState } from "react"
import "../styles/box9.css"
export default function Box9() {
    const [spanStyle , setSpanStyle] = useState("spanStyle")
    function SlideTopSpan(){
        setSpanStyle("span")
    }
    function Unstyled(){
        setSpanStyle("spanStyle")
    }
    return (
        <div className="row" id="Box-1d">
            <div className="col-12">
                <h2>Feel Free To Contact us</h2>
                <h2>Anytime Anywhere</h2>
                <p>No more fumbling to unlock your phone and find your
                    notes app; Cheatsheet is as easy as pulling down
                    center, pulling up the keyboard, or glancing at your
                    Apple Watch.
                </p>
                <div className="row">
                    <div className="col-9">
                    <span className={spanStyle } onClick={SlideTopSpan}>
                    Email Address
                    </span>
                        <input type="text" required onBlur={Unstyled}  onClick={SlideTopSpan} className="input-text"></input>
                    </div>
                    <div className="col-3">
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>
        </div>
    )
}