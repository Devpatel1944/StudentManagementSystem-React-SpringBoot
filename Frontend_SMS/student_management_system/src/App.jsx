import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import StudentView from './Component/Student/StudentView'
import NavBar from './Component/Student/Common/NavBar';
import { BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import AddStudent from './Component/Student/AddStudent';
import EditStudent from './Component/Student/EditStudent';
import StudentPofile from './Component/Student/StudentProfile';

function App() {


  return (
   <Router>
      <div className="App">
        <NavBar />  {/* Must be inside Router */}
        <Routes>
          <Route path="/" element={<StudentView/>} />
          <Route path="/view-student" element={<StudentView/>} />
          <Route path="/add-student" element={<AddStudent/>} />
          <Route path="/edit-student/:id" element={<EditStudent/>} />
          <Route path="/student-profile/:id" element={<StudentPofile/>} />
        </Routes>
      </div>
    </Router>
   
  )
}

export default App
