import {useEffect} from "react";

const telegram = window.Telegram.WEbApp

const App = () => {


  useEffect(()=>{
    tg.ready()
  },[])
  const onClose = ()=>{
    tg.close( )
  }

  return (
    <div className="App">
    Hello

      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
