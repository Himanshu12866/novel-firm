
import { useState } from "react"
import "../styles/header.css"
import NavBar from "./navlinks"
export default function Header() {
    const [styelObj,setStyle] = useState("overlay-vdo1")
    function ChangeStyle(){
        setStyle("overlay-vdo")
    }
function Unchange(){
    setStyle("overlay-vdo1")
}
    return (
        <div className="header">
        <div className={styelObj}>
                <button onClick={Unchange} className="btn  text-light"><span className=" bi bi-x-lg"></span></button>
               <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FYHxewmN9FQ?si=8sJRGL1y8ZIjDRp5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            <NavBar />
            <div className="text-box">
                <div>
                    <h2>We Innovate The</h2>
                    <h2>Future Planet Just</h2>
                    <h2>By Data</h2>

                    <p><b>Massive Dynamic</b> —
                        <span>The only theme covers all aspects;</span>
                        <br></br>
                        <span>beautiful layouts, super customizable, blazing fast, </span>
                        <br></br>
                        <span>customer first approach.</span>
                    </p>
                    <div className="play-btn">
                        <button onClick={ChangeStyle}><span className="bi bi-play-fill"></span></button>
                        <a href="/">Discover Our Magic</a>
                    </div>
                </div>
            </div>
            

        </div>
    )
}