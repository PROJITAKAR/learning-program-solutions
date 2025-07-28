import './App.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div >
      <CalculateScore
        Name="Projita Kar"
        School="Institute of Engineering & Management"
        total={420}
        goal={5}
      />
    </div>
  );
}

export default App;
