import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import Header from "./components/header";
import SectionBox1 from "./components/section1";
import SectionBox2 from "./components/section2";
import SectionBox3 from "./components/section3";
import SectionBox4 from "./components/section4";
export default function App(){
  return (
    <div style={{height:"auto"}}>
      <Header />
      <SectionBox1 />
      <SectionBox2/>
      <SectionBox3/>
      <SectionBox4 />
      
    </div>
  )
}
