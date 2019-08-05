// Essentials
import { useRouter } from 'next/router';
import Link from 'next/link';

// Styles
import headerStyle from './Header.scss';

const Header = () => {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <header className={headerStyle.Header}>
      {isHome && <img src="/static/veronica.jpg" className={headerStyle.Picture} />}
      <Link href="/">
        <a>
          <h1>Verónica Vicente Storm</h1>
          <p>Milch oder Müsli zuerst?</p>
        </a>
      </Link>
    </header>
  );
}

export default Header;
