
import './App.css';

const App = () => {
  let datas =  "";
  async function getData(){
    fetch('http://localhost:8000/api/v1/posts')
    .then(response => response.json())
    .then(data => datas=data);
  }
  window.onload = () =>(getData());
  return (
    <div>
      {datas}
    </div>
  );
}

export default App;
