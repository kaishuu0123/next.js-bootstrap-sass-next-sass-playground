import Link from 'next/link';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarEexample">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Next.js & bootstrap-sass & next-sass Example</a>
      </div>

      <div className="collapse navbar-collapse" id="navbarEexample">
        <ul className="nav navbar-nav">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
