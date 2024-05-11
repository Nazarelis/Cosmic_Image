import './LogoItem.css';
import logo from '../../assets/transparent-logo-nasa-removebg-preview.png';

function LogoItem() {
    return (
        <>
            <div className="logo-nasa-container">
                <img className="img-logo-nasa" src={logo} />
            </div>
        </>
    );
}

export default LogoItem;
