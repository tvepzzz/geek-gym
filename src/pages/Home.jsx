import { useState } from 'react'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'

const Home = () => {
	const [exercises, setExercises] = useState([])
	const [bodyPart, setBodyPart] = useState('all')

	return (
		<div>
			<HeroBanner />
			<SearchExercises
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
			<Exercises
				setExercises={setExercises}
				exercises={exercises}
				bodyPart={bodyPart}
			/>
		</div>
	)
}

export default Home
