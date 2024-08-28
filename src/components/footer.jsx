
import "../styles/footer.css"
import Box8 from "./box8"
import Box9 from "./box9"
export default function Footer() {
    return (
        <div className="footerBox">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <Box8 />

                </div>
                <div className="col-lg-6 col-sm-12">
                    <Box9 />
                </div>
            </div>
        </div>
    )
}