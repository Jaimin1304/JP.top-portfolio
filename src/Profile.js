import profilePic from './assets/tasProfileSquare.jpg'

export default function Profile() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <img id='profilePic' src={profilePic} alt="profilePic" />
        </div>
        <div className="col">
          <h1>Hi! I'm Jiamin</h1>
          <br />
          <h5>As a <span className='profile-text-highlight'>web developer</span> yearning for a wonderful interactive experience, I have been seeking to achieve business growth by optimizing the product design language and the overall project structure. I have a passion for developing creative front-end projects.</h5>
          <br />
          <h5>contact: jiaming2001_new@outlook.com</h5>
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}
