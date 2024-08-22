
import "../styles/navlinks.css"
export default function NavBar() {
    return (
        <div className="navbar navbar-expand-sm">
            <a href="/" className="navbar-brand text-light"> Jenga</a>
            <button className="navbar-toggler" data-bs-target="#links" data-bs-toggle="collapse">

                <span className="bi bi-list"></span>
            </button>
            <div className="navbar-collapse collapse" id="links">
                <ol className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Works</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Team</a>
                    </li>

                </ol>

            </div>

        </div>
    )
}