import HorizontalScrollbar from '../HorizontalScrollbar'
import Loader from '../Loader'
import styles from './SimilarExercises.module.scss'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
	<div>
		<h1 className={styles.similar__title}>
			Similar <span>Target Muscle</span> exercises
		</h1>
		<div className={styles.similar__wrapper}>
			{targetMuscleExercises.length !== 0 ? (
				<HorizontalScrollbar data={targetMuscleExercises} />
			) : (
				<Loader />
			)}
		</div>
		<h1 className={styles.similar__title}>
			Similar <span>Equipment</span> exercises
		</h1>
		<div className={styles.similar__wrapper}>
			{equipmentExercises.length !== 0 ? (
				<HorizontalScrollbar data={equipmentExercises} />
			) : (
				<Loader />
			)}
		</div>
	</div>
)

export default SimilarExercises
