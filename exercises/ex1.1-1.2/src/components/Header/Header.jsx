import './Header.css';
import LOGO from './images/LOGO HE VINCI.png';

const Header = (props) => {
  return (
    <div className='header'>
      <img src={LOGO} />
      <h1>{props.course}</h1>
    </div>
  );
};

export default Header
