import style from "../Styles/student.module.css";
import starimage from "../Components/picture2.jpg";

function StudentHome() {
  return (
    <div className={style.studenthome}>
      <div className={style.navbar}>
        <div>
          <h1>DoubtShare</h1>
        </div>
        <div className={style.navbar_second_child}>
          <div>
            <a href="#">Study Material</a>
          </div>
          <div>
            <a href="#">Courses</a>
          </div>
          <div>
            <a href="#">Scholarship</a>
          </div>
          <div>
            <a href="#">Success Stories</a>
          </div>
        </div>
      </div>

      <div className={style.poster}>
        <img
          src="https://cdn1.byjus.com/byjusweb/img/home/svg/homebannerbg.svg"
          alt="poster"
        />
        <div className={style.poster_main}>
          <div style={{ width: "60%" }}>
            <img
              src="https://cdn1.byjus.com/wp-content/uploads/2023/10/Homepage_1stFold_Banner.webp"
              alt="first"
            />
          </div>
          <div className={style.poster_second_box} style={{ width: "20%" }}>
            <div style={{textAlign:"left"}}>
                <div >
                <h1>Student Details</h1>
                <h3>Name: Vinay Hatwar</h3>
                <h3>Email: vinay@gmail.com</h3>
                <h3>Class grade: 12th</h3>
                <h3>Subject: Physics</h3>
                <h3>Language: Marathi</h3>
            </div>
            </div>
            
            
          </div>
        </div>
      </div>

      <div className={style.section}>
        <h1>Ongoing Sessions</h1>
        <div className={style.sessions}>
          <div className={style.sessions_box}>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2019/02/10/09/21/lecture-3986809_640.jpg"
                alt="sessionsimages"
              />
            </div>
            <div>
              <h3>Class 12th</h3>
              <h4>Comprehensive learning program for class 12th preparation</h4>
              <button>Ask Doubt</button>
            </div>
          </div>
          <br />
          <div className={style.sessions_box}>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2019/02/10/09/21/lecture-3986809_640.jpg"
                alt="sessionsimages"
              />
            </div>
            <div>
              <h3>Class 12th</h3>
              <h4>Comprehensive learning program for class 12th preparation</h4>
              <button>Ask Doubt</button>
            </div>
          </div>
          <br />
          <div className={style.sessions_box}>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2019/02/10/09/21/lecture-3986809_640.jpg"
                alt="sessionsimages"
              />
            </div>
            <div>
              <h3>Class 12th</h3>
              <h4>Comprehensive learning program for class 12th preparation</h4>
              <button>Ask Doubt</button>
            </div>
          </div>
        </div>
      </div>

    
      <div className={style.section}>
        <h1>Get the DoubtShare advantage</h1>
        <div className={style.singlebox}>
          <div className={style.singlechild}>
            <img
              src="https://cdn1.byjus.com/wp-content/uploads/2022/04/concept-clarity.png"
              alt="child"
            />
            <h3>Conceptual clarity visualisation</h3>
          </div>
          <div className={style.singlechild}>
            <img
              src="https://cdn1.byjus.com/wp-content/uploads/2022/04/personalised-learning.png"
              alt="child"
            />
            <h3>Personalised learning programs</h3>
          </div>
          <div className={style.singlechild}>
            <img
              src="https://cdn1.byjus.com/wp-content/uploads/2022/04/unmatched-attention.png"
              alt="child"
            />
            <h3>Unmatched individual attention</h3>
          </div>
        </div>
      </div>

      <div className={style.section}>
        <h1>Our students and parents love us</h1>
        <div className={style.singlebox}>
          <div className={style.singlechild}>
            <img
              src="https://images.pexels.com/photos/5053847/pexels-photo-5053847.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="child"
            />
            <h4>Downloads</h4>
            <h3>150+ Million</h3>
          </div>
          <div className={style.singlechild}>
            <img
              src="https://images.pexels.com/photos/9821386/pexels-photo-9821386.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="child"
            />
            <h4>App rating</h4>
            <h3>4.7+ Star</h3>
          </div>
          <div className={style.singlechild}>
            <img
              src="https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="child"
            />
            <h4>Worldwide</h4>
            <h3>1701+ Cities</h3>
          </div>
          <div className={style.singlechild}>
            <img
              src="https://media.istockphoto.com/id/1125692925/photo/girl-working-on-laptop-stock-images.jpg?b=1&s=612x612&w=0&k=20&c=afNK9olT7-RDKLv9LasAsbYyD94zKH4EErrKhRlGN1g="
              alt="child"
            />
            <h4>Time spent daily</h4>
            <h3>71 mins avg.</h3>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
export default StudentHome;
