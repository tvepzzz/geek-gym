import banner from '../../assets/images/banner.png'
import arm from '../../assets/images/iron-arm.png'
import styles from './HeroBanner.module.scss'

const HeroBanner = () => (
	<div className='container'>
		<div className={styles.hero}>
			<h2>MAKE YOUR BODY FIT WITH US.</h2>
			<hr />
			<div className={styles.hero__wrapper}>
				<div>
					<h1 className={styles.hero__title}>
						IMPROVE YOUR <img src={arm} alt='arm' />
						FITNESS LEVEL FOR THE BETTER
					</h1>
					<button
						className={styles.hero__button}
						onClick={() =>
							window.scrollTo({ top: 1000, left: 100, behavior: 'smooth' })
						}
					>
						Show exercises
					</button>
				</div>
				<img src={banner} alt='logo' className={styles.hero__banner} />
			</div>
		</div>
	</div>
)

export default HeroBanner
