import Pagination from '@mui/material/Pagination'
import { useEffect, useState } from 'react'
import { useExercises } from '../../context/ExercisesContext'
import { exerciseOptions, fetchData } from '../../utils/fetchData'
import ExerciseCard from '../ExerciseCard'
import Loader from '../Loader'
import styles from './Exercises.module.scss'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
	const { checkSaved, addExercise, removeExercise } = useExercises()

	const [currentPage, setCurrentPage] = useState(1)
	const [exercisesPerPage] = useState(6)

	useEffect(() => {
		const fetchExercisesData = async () => {
			let exercisesData = []

			if (bodyPart === 'all') {
				exercisesData = await fetchData(
					'https://exercisedb.p.rapidapi.com/exercises',
					exerciseOptions
				)
			} else {
				exercisesData = await fetchData(
					`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
					exerciseOptions
				)
			}

			setExercises(exercisesData)
		}

		fetchExercisesData()
	}, [bodyPart])

	// Pagination
	const indexOfLastExercise = currentPage * exercisesPerPage
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
	const currentExercises = exercises.slice(
		indexOfFirstExercise,
		indexOfLastExercise
	)

	const paginate = (event, value) => {
		setCurrentPage(value)
		window.scrollTo({ top: 1000, behavior: 'smooth' })
	}

	if (!currentExercises.length) return <Loader />

	return (
		<div id='exercises' className='container'>
			<h1 className={styles.title}>Showing Results</h1>
			<div className={styles.exercises__wrapper}>
				{currentExercises.map((exercise, idx) => {
					const isSaved = checkSaved(exercise.id)
					return (
						<ExerciseCard
							key={idx}
							exercise={exercise}
							savedState={isSaved}
							remove={removeExercise}
							add={addExercise}
						/>
					)
				})}
			</div>
			<div className={styles.pagination__container}>
				{exercises.length > 9 && (
					<Pagination
						color='primary'
						shape='rounded'
						defaultPage={1}
						count={Math.ceil(exercises.length / exercisesPerPage)}
						page={currentPage}
						onChange={paginate}
						size='large'
						className={styles.pagination}
					/>
				)}
			</div>
		</div>
	)
}

export default Exercises
