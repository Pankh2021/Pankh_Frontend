

const Nav = () => 
  <nav>
    <div className='row'>
        <ul>
                 <li><a className="nav-link" href="#">Home</a></li>
                 <li><a className="nav-link" href="#">Drones</a></li>
                 <li><a className="nav-link" href="#">Check In</a></li>
                 <li><a className="nav-link" href="#">Blogs</a></li>
                 <li><a className="nav-link" href="#">Contact Us</a></li>
        </ul>
      </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
      }
      ul{
        list-style: none
      }
      div {
        margin:100px 0px 80px 80px;

      }
      nav{
        display: flex;
      }
      li{
        padding: 0px 100px 0px 83px;
        display: inline;
        style: none;
      }
      a{
        text-decoration: inherit;
        color:inherit;
      }
    `}</style>
  </nav>
;

export default Nav;
