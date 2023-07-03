import logo from '../assets/investment-calculator-logo.png';
import './Header.css';

const Header = () =>{
return   <header className="header">
<img src={logo} alt="logo" />
<h1>Kalkulator inwestycji</h1>
</header>
}
export default Header;