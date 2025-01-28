// import css from '../App/App.module.css';

import Counter from '../Counter/Counter.jsx';
import Menu from '../Menu/Menu.jsx';

function App() {
  return (
    <>
      <Counter
        initialValue={0}
      />
      <Menu />
    </>
  );
}

export default App;
