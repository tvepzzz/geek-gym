import Loader from '../Loader'
import styles from './ExerciseVideos.module.scss'

const ExerciseVideos = ({ exerciseVideos, name }) => {
	if (!exerciseVideos.length) return <Loader />

	return (
		<div>
			<h1 className={styles.videos__title}>
				Watch <span className={styles.videos__marker}>{name}</span> exercise
				videos
			</h1>
			<div className={styles.videos__wrapper}>
				{exerciseVideos?.slice(0, 3)?.map((item, index) => (
					<a
						key={index}
						href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
						target='_blank'
						rel='noreferrer'
						className={styles.videos__card}
					>
						<img src={item.video.thumbnails[0].url} alt={item.video.title} />
						<div>
							<h2>{item.video.title}</h2>
							<p fontSize='14px' color='#000'>
								{item.video.channelName}
							</p>
						</div>
					</a>
				))}
			</div>
		</div>
	)
}

export default ExerciseVideos
