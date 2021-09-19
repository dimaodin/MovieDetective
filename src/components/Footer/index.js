import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer({}) {
  return (
    <footer className={styles.footerContainer} >
      <div className={styles.footer}>
          <h1>© 2021 חוקר הסרטים, כל הזכויות שמורות.</h1>
        <Link href="https://github.com/dimaodin">
        <h1>האתר פותח ע"י דימה אודינצוב.</h1>
        </Link>
      </div>
    </footer>
  );
}
