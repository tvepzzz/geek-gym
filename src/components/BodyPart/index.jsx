import clsx from 'clsx'
import styles from './BodyPart.module.scss'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
	return (
		<div
			className={clsx(
				styles.bodyPart__card,
				bodyPart === item.bodyPart && styles.selected
			)}
			onClick={() => {
				setBodyPart(item.bodyPart)
				window.scrollTo({ top: 1100, left: 100, behavior: 'smooth' })
			}}
		>
			<img
				src={item.img}
				alt='dumbbell'
				style={{ width: '70px', height: '70px' }}
			/>
			<h1 className={styles.title}>{item.bodyPart}</h1>
		</div>
	)
}
export default BodyPart
