import '../styles/contact.css'
import BannerPicture from '../assets/banner.png'


function Contact() {
  return (
<div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${BannerPicture})`}}>
      </div>
  
      <div className='rightSide'>
        <h1 style={{color:'brown',fontSize:'35px'}}>Bizimle İletişime Geçin</h1>
        <form>
            <label>Ad Soyad</label>
            <input type='text' name='name' placeholder='Lütfen Adınızı ve Soyadınızı Giriniz...'/>

            <label>E-Mail</label>
            <input type='email' name='email' placeholder='Lütfen E-Malinizi Giriniz...'/>

            <label>Mesajınız</label>
            <textarea name='message' rows="6" placeholder='Lütfen Mesajınızı Giriniz'></textarea>

        </form>
      </div>
</div>
  )
}

export default Contact