import profilePic from './assets/tasProfileSquare.jpg'

export default function Profile() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <img id='profilePic' src={profilePic} alt="profilePic" />
        </div>
        <div className="col">
          <br />
          <br />
          <h1>Hi! I'm Jiamin</h1>
          <h5>As aFront-end Developerwith a keen eye for visual communication, I listen to every little feedback I get from the audience about my design. I'm passionate about developing the highest quality ReactJS products.</h5>
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}
