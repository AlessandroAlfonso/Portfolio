import React from 'react'
import './about.css'


const about = () => {
  return (
    <div className="a">
    <div className="a-left">
      <div className="a-card bg"></div>
      <div className="a-card">
        <img
          src="/photo2.jpg"
          alt=""
          className="a-img"
        />
      </div>
    </div>
    <div className="a-right">
      <h1 className="a-title">About Me</h1>
      <p className="a-sub">
        Hey get to know me better!
      </p>
      <p className="a-desc">
        My name is Alessandro Alfonso! an aspiring UI/UX designer and Frontend Developer. I graduated secondary education
        from La Salle Green Hills and currently taking up Computer Science with Specialization in Software Technology. 
        My hobbies are traveling, biking, dancing, basketball and running. During my free time I would usually watch movies 
        or play games with my friends.
      </p>
      {/* <div className="a-award">
        <img src={Award} alt="" className="a-award-img" />
        <div className="a-award-texts">
          <h4 className="a-award-title">International Design Awards 2021</h4>
          <p className="a-award-desc">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
            and fugit.
          </p>
        </div>
      </div> */}
    </div>
  </div>
  )
}

export default about