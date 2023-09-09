import { useEffect, useState } from "react";

const telegram = window.Telegram.WebApp;

const App = () => {
  const userData = telegram.initDataUnsafe?.user;

  console.log(userData);

  useEffect(() => {
    telegram.ready();
  }, []);

  const onClose = () => {
    telegram.close();
  };

  return (
    <div className="App">
      Hello
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default App;
