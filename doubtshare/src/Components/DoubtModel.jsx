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
import style from "./doubtModel.module.css";
import { useEffect, useRef, useState } from "react";

function DoubtModel({ isOpen, onClose, setSendMessage, receiveMessage}) {
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);

  let scroll = useRef(null);
  let currentUser=1

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // let newMessage = {
    //   senderId: currentUser,
    //   text: text,
    //   receiverId:2,
    // };

    
    // if(text != ""){
    //   setSendMessage(newMessage)
      
    // }
    // setMessage([...message, receiveMessage]);
    setText("");
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ask Doubt</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className={style.chat}>
              <div className={style.chatbox}>
                {message?.map((el) => (
                  <div
                    className={
                      el?.senderId == currentUser
                        ? style.messageown
                        : style.messagesender
                    }
                    ref={scroll}
                  >
                    <div
                      className={style.messagebox}
                      style={{
                        backgroundColor:
                          el?.senderId == currentUser ? "#8500FF" : "#cc00ac",
                      }}
                    >
                      <span>{el.text}</span>
                      <br />
                    </div>
                  </div>
                ))}
              </div>
              <div className={style.chatinput}>
                <input
                  type="text"
                  placeholder="Enter doubt"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleSubmit}>Send</button>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
export default DoubtModel;
