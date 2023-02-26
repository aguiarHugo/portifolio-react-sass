import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact
} from 'react-icons/di'

const technologiesIcons = [
  {id: 'html', name: "HTML5", icon: <DiHtml5 />},
  {id: 'css', name: "CSS3", icon: <DiCss3 />},
  {id: 'js', name: "JavaScript", icon: <DiJsBadge />},
  {id: 'react', name: "React", icon: <DiReact />},
  {id: 'node', name: "Node.js", icon: <DiNodejsSmall />}
]

import '../styles/components/technologies.sass'
const Technologies = () => {
  return (
    <section className="techs">
      <h2>Tecnologias</h2>
      <div className="techs-grid">
        {technologiesIcons.map((tech) => (
          <div className="techs-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="techs-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempora</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies