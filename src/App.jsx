import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ExerciseDetails from './pages/ExerciseDetail'
import Home from './pages/Home'
import SavedExercises from './pages/SavedExercises'

import './index.scss'

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/exercise/:id' element={<ExerciseDetails />} />
				<Route path='/saved' element={<SavedExercises />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
