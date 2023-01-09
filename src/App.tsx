import React, { useState } from 'react';
import ModalWindow from './components/ordinary/ModalWindow/ModalWindow';
import AdaptiveModalWindow from './components/smart/AdaptiveModalWindow/AdaptiveModalWindow';


function App() {
  const [modalWindowActive, setModalWindowActive] = useState(false)
  return (
    <div className="App">
      <button onClick={()=>setModalWindowActive(true)}>Модальное окно</button>
      <ModalWindow setActive={setModalWindowActive} active={modalWindowActive}>
        <AdaptiveModalWindow></AdaptiveModalWindow>
      </ModalWindow>
    </div>
  );
}

export default App;
