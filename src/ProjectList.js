import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { projectListState } from './atoms'

export default function ProjectList() {
  const projectList = useRecoilValue(projectListState)

  return (
    <div className="container text-center">
      <h1>Recent projects</h1>
      <br />
      <div className="row">
        {projectList.map((projectItem) => (
          (projectItem.isActive)
            ?
            <div className="col">
              <br />
              <div className="card border-0">
                <img src={projectItem.img} className="card-img-top project-img" alt="profilePic" />
                <div className="card-body">
                  <h4 className="card-title">{projectItem.name}</h4>
                  {/*
                  <Link className='text-link' to={`project/${projectItem.name}`}>
                    <h4 className="card-title">{projectItem.name}</h4>
                  </Link>
                  */}
                  <p className="card-text">{projectItem.shortDesc}</p>
                  <p className="card-text">Tech Stacks: {projectItem.techStacks}</p>
                  {(projectItem.codeURL) ? <a href={projectItem.codeURL} className="card-link">See code</a> : <></>}
                  {(projectItem.liveURL) ? <a href={projectItem.liveURL} className="card-link">View live</a> : <></>}
                </div>
              </div>
            </div>
            :
            <></>
        ))}
      </div>
      <br />
      <br />
    </div>
  )
}
