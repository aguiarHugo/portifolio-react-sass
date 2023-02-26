import SocialMedias from '../components/SocialMedias'
import Information from '../components/Information'

import ProfilePic from '../assets/eu-bg-dark.png'
import '../styles/containers/sidebar.sass'


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={ProfilePic} alt="Hugo Aguiar" />
      <div className="title">Desenvolvedor</div>
      <SocialMedias />
      <Information />
      <a href="" className="btn">Baixe meu CV</a>
    </aside>
  )
}

export default Sidebar