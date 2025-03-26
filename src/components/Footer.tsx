const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center">
      <a className="footer" href="https://fernandovr.com" target="__blanck">
        fernandovr.com
      </a>
      <p>© 2022 - {currentYear}. Todos los derechos reservados. </p>
    </footer>
  );
};

export default Footer;
