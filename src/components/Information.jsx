
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/components/information.sass'

const Information = () => {
  return (
    <section id='information'>
      <div className="info-card">
        <AiFillPhone id='phone-icon' />
        <div>
          <h3>Telefone</h3>
          <p>(21) 96679-0671</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id='email-icon' />
        <div>
          <h3>E-mail</h3>
          <p>dev.hugoas@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id='phone-icon' />
        <div>
          <h3>Localização</h3>
          <p>Teresópolis - RJ</p>
        </div>
      </div>

    </section>
  )
}

export default Information