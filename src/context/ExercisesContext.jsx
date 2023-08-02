import { createContext, useContext, useEffect, useState } from 'react'

const ExercisesContext = createContext()

export const ExercisesContextProvider = props => {
	const initialState = {
		saved: [],
	}

	const getInitialState = () => {
		const exercises = localStorage.getItem('exercises')
		return exercises ? JSON.parse(exercises) : initialState
	}

	const [saved, setSaved] = useState(getInitialState)

	useEffect(() => {
		localStorage.setItem('exercises', JSON.stringify(saved))
	}, [saved])

	const addExercise = exercise => {
		setSaved(prev => ({
			...prev,
			saved: [...prev.saved, exercise],
		}))
	}
	const removeExercise = exerciseId => {
		if (window.confirm('Are you sure you want remove this exercise?')) {
			setSaved(prev => ({
				...prev,
				saved: prev.saved.filter(e => e.id !== exerciseId),
			}))
		}
	}

	const count = saved.saved.length

	const checkSaved = id => saved.saved.some(e => e.id === id)

	return (
		<ExercisesContext.Provider
			value={{ count, addExercise, removeExercise, ...saved, checkSaved }}
		>
			{props.children}
		</ExercisesContext.Provider>
	)
}

export const useExercises = () => useContext(ExercisesContext)
