import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ExerciseCard.module.scss'

const ExerciseCard = ({ exercise, style, remove, add, savedState }) => {
	const [isSaved, setIsSaved] = useState(savedState || null)
	return (
		<div className={clsx(styles.card, style)}>
			<Link
				to={`/exercise/${exercise.id}`}
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			>
				<img
					src={exercise.gifUrl}
					alt={exercise.name}
					loading='lazy'
					className={styles.img}
				/>
			</Link>
			<div className={styles.info}>
				<div className={styles.info__container}>
					<p className={styles.info__tag}>#{exercise.bodyPart}</p>
					<p className={styles.info__tag}>#{exercise.target}</p>
				</div>
				<div
					className={styles.info__button}
					onClick={() => setIsSaved(prev => !prev)}
				>
					{isSaved ? (
						<BookmarkIcon
							fontSize='large'
							onClick={() => remove(exercise.id)}
						/>
					) : (
						<BookmarkBorderIcon
							fontSize='large'
							onClick={() => add(exercise)}
						/>
					)}
				</div>
			</div>
			<Link
				to={`/exercise/${exercise.id}`}
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			>
				<h2>{exercise.name}</h2>
			</Link>
		</div>
	)
}

export default ExerciseCard
