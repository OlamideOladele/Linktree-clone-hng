import I4G from '../images/I4G.png';
import zuri from '../images/Vector.png';


function Footer() {
  return (
    <div>
    
      <footer>
        <img src={zuri} alt='zuri logo' />
        <small>HNG Internship 9 Frontend Task</small>
        <img src={I4G} alt='I4G logo' />
      </footer>
    </div>
  )
}

export default Footer;