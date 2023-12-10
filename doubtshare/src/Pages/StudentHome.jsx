import style from "../Styles/student.module.css";
import starimage from "../Components/picture2.jpg";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

function StudentHome() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});
  const [activeUser, setActiveUser] = useState([]);

  const socket = useRef();
  socket.current = io("http://localhost:8080");

  const onOpen = (sub) => {
    setIsOpen(true);
    console.log("sub", sub)
    if(user?.role=="student"){
      let payload={
        name:user?.name,
        subject:sub,
        class:user?.classgrade
      }
      //send
      socket.current.emit("send-notification", payload);


    }else if(user?.role=="tutor"){
      let res=user?.subject.some((task) => task === sub)
      if(res){
        //receive
        socket.current.on("recieve-notification", (data)=>{
          if(data.class===user?.classgrade){
            alert(`${data.name} ask doubt of ${data.subject} subject.`)

          }
        })
      }
    }
  };
  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    handleUser();
  }, []);

  const handleUser = () => {
    let id=localStorage.getItem("userId")
    fetch(`http://localhost:8080/auth/user/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    socket.current.emit("new-user-joined", user._id);
    socket.current.on("get-users", (users) => {
      setActiveUser(users);
    });
  }, [user]);

  console.log("user", user);
  console.log("activeUser", ...activeUser);
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
          <div className={style.poster_second_box} style={{ width: "30%" }}>
            <div style={{ textAlign: "left" }}>
              <div>
                <h1 className={style.firstname}>
                  {user && user?.role} details
                </h1>
                <h3>Name: {user && user?.name}</h3>
                <h3>Email: {user && user?.email}</h3>
                <h3>Class grade: {user && user?.classgrade}</h3>
                <h3>Subject: </h3>
                {user && user?.subject?.map((el) => <span>{el}, </span>)}
                <h3>Language: {user && user?.language}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.section}>
        <h1>Ongoing Sessions</h1>
        <div className={style.sessions}>
          {user &&
            user?.subject?.map((el) => (
              <div className={style.sessions_box} key={el}>
                <div>
                  <img
                    src="https://cdn.pixabay.com/photo/2019/02/10/09/21/lecture-3986809_640.jpg"
                    alt="sessionsimages"
                  />
                </div>
                <div>
                  <h3 className={style.firstname}>{el}</h3>
                  <h4>
                    Comprehensive learning program of subject {el} for class{" "}
                    {user && user?.classgrade} standard preparation.
                  </h4>
                  <button onClick={()=>onOpen(el)}>{user?.role=="student"?"Ask Doubt":"Check Doubt"}</button>
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Popup Title</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        
                        <p>This is the content of the popup.</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                          Close
                        </Button>
                        {/* Additional buttons or actions */}
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                  <button style={{ marginLeft: "10px" }}>History</button>
                </div>
              </div>
            ))}
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
