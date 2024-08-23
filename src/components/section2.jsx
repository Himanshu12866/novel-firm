import "../styles/section2.css"

export default function SectionBox2() {
    return (
        <div className="section-box2">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <span style={{color:"white"}}>+2000&nbsp;</span>
                    <span> Events</span>
                </div>
                <div className="col-lg-4 col-sm-12">
                     <span style={{color:"white"}}>+300&nbsp;</span>
                     <span> Live Projects</span>
                </div>
                <div className="col-lg-4 col-sm-12">
                <span style={{color:"white"}}>+100<span style={{color:"rgb(147,54,255)",fontSize:"20px"}}>K</span>&nbsp;</span>
                                        <span> Customers</span>
                </div>
            </div>
        </div>
    )
}