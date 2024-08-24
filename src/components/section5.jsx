import "../styles/section5.css"
import Box5 from "./box5";
import Box6 from "./box6";


export default function SectionBox5(){
    return (
        <div className="section-box5">
            <Box5/>
            <Box6/>
            <div className="sec5-textBox">
                <h2>Keep Watching</h2>
                <p>No more fumbling to unlock your phone and find your</p>
                <p>notes app; Cheatsheet is as easy as pulling down</p>
                <button>Countinue To Portfolio</button>
            </div>
        </div>
    )
}