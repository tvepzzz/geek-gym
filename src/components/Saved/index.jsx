import { weightLift } from '../../assets/images'
import { useExercises } from '../../context/ExercisesContext'
import ExerciseCard from '../ExerciseCard'
import styles from './Saved.module.scss'

const Saved = () => {
	const { count, checkSaved, removeExercise, saved } = useExercises()
	return (
		<div className={styles.saved__container}>
			<h1 className={styles.saved__title}>Saved exercises</h1>
			{count <= 0 ? (
				<div className={styles.saved__empty}>
					<p>You don`t save exercises yet</p>
					<img src={weightLift} alt='weight Lift person emoji' />
				</div>
			) : (
				<div className={styles.saved__exercises}>
					{saved.map(e => {
						const isSaved = checkSaved(e.id)
						return (
							<div key={e.id}>
								<ExerciseCard
									exercise={e}
									savedState={isSaved}
									remove={removeExercise}
								/>
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default Saved
