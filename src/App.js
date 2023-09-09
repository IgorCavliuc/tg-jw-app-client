import { useEffect } from "react";

const telegram = window.Telegram.WebApp;

const App = () => {
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
