import Link from 'next/link';

function NavBar() {
  return (
    <nav className="navBar">
      <div className="container">
        <Link href="/">
          <a>Twkim</a>
        </Link>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
