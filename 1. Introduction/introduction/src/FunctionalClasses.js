import logo from './logo.svg';
import './App.css';

const myStyle2 = {
  boxShadow: '10px 5px 5px #090'
}

const myStyle1 = ({ bg = '#100'}) => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px'
})

const Li = ({ children }) => {
  if(children === undefined) {
    return <li>Undefined</li>
  }
  return (
    <li 
      style={{ ...myStyle2, ...myStyle1({ bg: '#333' }) }}
      className="class-li"
    >
      {children}
    </li>
  )
}

const figures = [
  "Square",
  "Triangle",
  "Rectangle"
]

const App = () => {
  const color = "blue"
  return (
    <ul className='class-ul'>
      {figures.map((ele, i) => <Li key={i} myColor={color}>{ele}</Li>)}
    </ul>
  )
}

export default App;
