import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/footer.css'
import {Link} from 'react-router-dom'


function Footer() {

    const GitHub = 'https://github.com/AhmetUtkuPelen'

    const Instagram = 'https://www.instagram.com/rngd_aup/'

    const Linkedin = 'https://www.linkedin.com/in/ahmet-utku-pelen-4941b820b/'

  return (
<div className="footer">

    <div className="socialMedia">
        <Link to={Instagram} target='_blank'><InstagramIcon /></Link>
        <Link to={GitHub} target='_blank'><GitHubIcon/></Link>
        <Link to={Linkedin} target='_blank'><LinkedInIcon /></Link>
    </div>
    <p>Tüm Hakları Saklıdır | Burger Yiyelim </p>

</div>
  )
}

export default Footer