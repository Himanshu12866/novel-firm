import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import Header from "./components/header";
import SectionBox1 from "./components/section1";
export default function App(){
  return (
    <div>
      <Header />
      <SectionBox1 />
    </div>
  )
}
