import Https from '../images/https.png'
import Http from '../images/http.png'

export default function Memo() {
  return (
    <div className='memo__wrapper'>
      <h1>Безопасность в интернете</h1>
      <ul>
        <li>
          <p>Создавайте уникальный и сложный пароль:</p>
          <p className='red'>Не используйте: ваши личные данные (ваше имя, дата рождения), пароли типа "12345", "pass", "alesha2003"</p>
          <p className='green'>Включайте в пароль: буквы в нижнем и верхнем регистрах, цифры, символы типа "!, ?, (, ^"</p>
          <p>Пример пароля: Zs:kg4"*MJy&#125;PbE/</p>
          <p>Совет: чтобы задать безопасный пароль используйте <a href='https://mglower-password-generator.netlify.app/' target='_blank' rel='noreferrer'>генератор паролей</a>.</p>
        </li>
        <li>
          <p>
            Если ресурс поддерживает двухфакторную аутентификация(2FA) - подключите её.
          </p>
        </li>
        <li>
          <p>Не вносите данные на сайт, у которого нет SSL протокола(без https в начале адреса), хакеры могут перехватить информацию:</p>
          <img src={Https} alt="" />
          <img src={Http} alt="" />
        </li>
        <li>
          <p>
            Перед тем как внести данные на популярном сайте - удостоверьтесь в правильности URL-адреса(проверьте все символы), чтобы убедиться наверняка - найдите страницу сайта в википедии и перейдите на сайт по указанной ссылке.
          </p>
        </li>
        <li>
          <p>Не давайте информацию сайтам, которым вы не доверяете(cookie-разрешения, ввод данных, геолокация).</p>
        </li>
        <li>
          <p>Используйте VPN в общедоступных сетях WiFi.</p>
        </li>
        <li>
          <p>Используйте антивирус для проверки скачиваемых файлов.</p>
        </li>
        <li>
          <p>Если вы наткнулись на мошеннический сайт - подайте жалобу по ссылке: <a href="https://safebrowsing.google.com/safebrowsing/report_phish/?hl=en">нажмите здесь</a></p>
        </li>
      </ul>
    </div>
  )
}