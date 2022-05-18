import "../styles/Footer.css";

const Footer = () => {

  const addButton = () => {
    alert('pop up is going here');
  }

  return (
    <footer className="footer">
      <div className="footer__nav">
        <span className="material-icons">done</span>
        <span className="material-icons">schedule</span>
        <button onClick={addButton}>
          <span className="material-icons">add</span>
        </button>
        <span className="material-icons">delete_outline</span>
        <span className="material-icons">logout</span>
      </div>
    </footer>
  );
};

export default Footer;
