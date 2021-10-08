import Https from '../images/https.png'
import Http from '../images/http.png'

export default function Memo() {
  return (
    <div className='memo__wrapper'>
      <h1>Be safe in the net</h1>
      <ul>
        <li>
          <p>Make your password unique and strong:</p>
          <p className='red'>Don't use: your bio data(for example: your name, birthday date), passwords like "12345", "pass" or "qwerty"</p>
          <p className='green'>Use: letters with lower and upper cases, numbers, symbols e.g. "!, ?, (, ), etc."</p>
          <p>Example of password: Zs:kg4"*MJy&#125;PbE/</p>
          <p>Advice: to make your password safe use <a href='https://passwordsgenerator.net/' target='_blank' rel='noreferrer'>password generator site</a>.</p>
        </li>
        <li>
          <p>Don't give data to site without https(i.e. have no SSL certificate), the hackers can intercept your data:</p>
          <img src={Https} alt="" />
          <img src={Http} alt="" />
        </li>
        <li>
          <p>Don't give data to site you don't trust.</p>
        </li>
        <li>
          <p>Before you will surf the net on FREE Wi-Fi in the cafe be sure to turn on VPN.</p>
        </li>
        <li>
          <p>Use antivirus to check harmful files.</p>
        </li>
      </ul>
    </div>
  )
}