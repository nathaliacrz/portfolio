import './index.scss'
import LogoN from '../../../assets/images/logo-home.png'

const Logo = () => {
    return (
      <div className="logo-container">
        <img
          className="solid-logo"
          src={LogoN}
          alt="LogoN"
        />       
     </div>
    )
  }

export default Logo