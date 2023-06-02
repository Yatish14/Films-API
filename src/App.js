import './App.css';
import Film from "./components/Film"
import { useState,useEffect } from 'react';
import Modal from './components/Modal';
import "./components/Loader.css"

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress === 100) {
          clearInterval(timer);
        }
        return newProgress;
      });
    }, 700);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {!openModal &&
      <button onClick={() => setOpenModal(true)}>Open Modal</button>}
      { openModal && <Modal setOpenModal={setOpenModal}/>}
      <Film />
      {/* <div class="loader">
        <img src="https://www.putatoe.com/img/logo.png" alt="Loading" />
        <p>Loading...</p>
        <div class="progress-bar">
          <div class="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div> */}
    </>
  );
}

export default App;
