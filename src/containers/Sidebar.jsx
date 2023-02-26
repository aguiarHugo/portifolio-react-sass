import SocialMedias from '../components/SocialMedias'

import ProfilePic from '../assets/eu-bg-dark.png'
import '../styles/containers/sidebar.sass'


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={ProfilePic} alt="Hugo Aguiar" />
      <div className="title">Desenvolvedor</div>
      <SocialMedias />
      <p>informações de contato</p>
      <a href="" className="btn">Baixe meu CV</a>
    </aside>
  )
}

export default Sidebar