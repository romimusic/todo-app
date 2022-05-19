import "../styles/Footer.css";

const Footer = ({ setShowModal, showModal }) => {
  const addButton = () => {
    setShowModal(!showModal);
  };

  return (
    <footer className="footer">
      <div className="footer__nav">
        <button onClick={addButton}>
          <span className="material-icons">add</span>
        </button>

      </div>
    </footer>
  );
};

export default Footer;
