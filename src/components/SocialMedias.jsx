import '../styles/components/social-media.sass'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

const socialMedias = [
  { name: "linkedin", link: "https://www.linkedin.com/in/hugo-aguiar-a25839245/", icon: <FaLinkedinIn /> },
  { name: "github", link:"https://github.com/aguiarhugo", icon: <FaGithub /> },
  { name: "instagram", link: "https://www.instagram.com/h4guiar/", icon: <FaInstagram /> },
]

const SocialMedias = () => {
  return (
  <section id="social-media">
    {socialMedias.map((media) => (
      <a href={media.link} className='social-btn' id={media.name} key={media.name}>
        {media.icon}
      </a>
    ))}
  </section>
  )
}

export default SocialMedias