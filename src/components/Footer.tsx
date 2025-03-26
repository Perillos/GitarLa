const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center">
      <a className="footer" href="fernandovr.com">
        fernandovr.com
      </a>
      <p>© 2022 - {currentYear}. Todos los derechos reservados. </p>
    </footer>
  );
};

export default Footer;
