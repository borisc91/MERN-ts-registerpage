import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main/Main";
import Signup from "./components/Signup/Signup";



function App() {
  


	const user = localStorage.getItem("token");


  
  


	return (
		<Routes>
			{user && <Route path="/"  element={<Main  />} />}
			{user ? <Route path="/*"   element={<Main  />} /> : <Route path="/signup" element={<Signup  />}  />}
			<Route path="/" element={<Navigate replace to="/signup" />} />
		</Routes>
	);
}

export default App;