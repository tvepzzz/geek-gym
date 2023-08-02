import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { useState } from 'react'
import { cartwheeling, running, weightLift } from '../../assets/images'
import { useExercises } from '../../context/ExercisesContext'
import styles from './Detail.module.scss'

const Detail = ({ exerciseDetail }) => {
	const { addExercise, removeExercise, checkSaved } = useExercises()
	const savedState = checkSaved(exerciseDetail.id)
	const [isSaved, setIsSaved] = useState(true === savedState)

	const extraDetail = [
		{
			icon: cartwheeling,
			name: exerciseDetail?.bodyPart,
		},
		{
			icon: running,
			name: exerciseDetail?.target,
		},
		{
			icon: weightLift,
			name: exerciseDetail?.equipment,
		},
	]

	return (
		<div className={styles.detail} key={exerciseDetail?.id}>
			<img
				src={exerciseDetail?.gifUrl}
				alt={exerciseDetail?.name}
				loading='lazy'
				className={styles.detail__img}
			/>
			<div className={styles.detail__container}>
				<div className={styles.detail__info}>
					<h1 className={styles.detail__title}>{exerciseDetail?.name}</h1>
					<div
						className={styles.detail__button}
						onClick={() => setIsSaved(prev => !prev)}
					>
						{isSaved ? (
							<BookmarkIcon
								sx={{ fontSize: 42 }}
								onClick={() => removeExercise(exerciseDetail.id)}
							/>
						) : (
							<BookmarkBorderIcon
								sx={{ fontSize: 42 }}
								onClick={() => addExercise(exerciseDetail)}
							/>
						)}
					</div>
				</div>
				<p>
					Exercises keep you strong.{' '}
					<span className={styles.detail__marker}>{exerciseDetail?.name}</span>{' '}
					bup is one of the best <br /> exercises to target your{' '}
					<span className={styles.detail__marker}>
						{exerciseDetail?.target}
					</span>
					. It will help you improve your <br /> mood and gain energy.
				</p>
				{extraDetail?.map(item => (
					<div key={item.name} className={styles.extra}>
						<div>
							<img
								src={item.icon}
								alt={exerciseDetail?.bodyPart}
								className={styles.extra__img}
							/>
						</div>
						<h2 className={styles.extra__title}>{item.name}</h2>
					</div>
				))}
			</div>
		</div>
	)
}

export default Detail
