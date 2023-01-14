import { useRecoilValue } from 'recoil'
import { skillsState } from './atoms'

export default function Skills() {
  const skills = useRecoilValue(skillsState)

  return (
    <div className="container text-center" id='container-skills'>
      <h1>Things I can do</h1>
      <br />
      <div className="row">
        {skills.map((item) => (
          <div className="col">
            <br />
            <div className="card skill-card border-0">
              <br />
              <img src={item.img} className="card-img-top skill-img" alt="profilePic" />
              <div className="card-body">
                <h6 className="card-title">{item.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
