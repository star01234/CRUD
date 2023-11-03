
import './App.css'
import { AddStudent, EditStudent, StudentDetail, StudentList } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="constiner">
      <h1>React.js CRUD Operation</h1>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<StudentList />}></Route>
      <Route path="/student/create" element={<AddStudent />}></Route>
      <Route path="/student/edit/:id" element={<EditStudent />}></Route>
      <Route path="/student/detail/:id" element={<StudentDetail />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
