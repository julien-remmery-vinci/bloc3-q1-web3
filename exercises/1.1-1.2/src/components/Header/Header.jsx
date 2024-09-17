import LOGO from './images/LOGO HE VINCI.png';

const Header = (props) => {
  return (
    <>
      <img src={LOGO} />
      <h1>{props.course}</h1>
    </>
  );
};

export default Header
