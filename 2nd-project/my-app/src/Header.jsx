import earthLogo from './assets/earth.png'; // Tell webpack this JS file uses this image

export default function Header() {
  return (
    <div className="header-1">
        <img src={earthLogo} alt="Logo" />
        <div className="inner-header-1">my travel journal.</div>
    </div>
  )
}

