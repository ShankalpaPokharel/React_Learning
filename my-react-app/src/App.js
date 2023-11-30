import logo from './logo.svg';
import './App.css';

let name = "Shankalpa"

function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus corrupti veritatis odit ex hic doloribus blanditiis, quas repudiandae veniam numquam voluptatibus nam explicabo impedit facilis voluptates earum, non porro?
      </p>
    </div>
    </>
   
  );
}

export default App;
