import BookmarkIcon from '@mui/icons-material/Bookmark'
import clsx from 'clsx'
import { Twirl as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useExercises } from '../../context/ExercisesContext'
import styles from './Navbar.module.scss'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { count } = useExercises()
	return (
		<div className={styles.nav}>
			<div className={clsx(styles.nav__wrapper, isOpen && styles.navbar)}>
				<div className={styles.nav__container}>
					<Link
						to='/'
						className={styles.nav__logo}
						onClick={() => {
							setIsOpen(false)
							window.scrollTo({ top: 0, left: 100, behavior: 'smooth' })
						}}
					>
						GEEK GYM
					</Link>
					<div className={styles.nav__toggle}>
						<Hamburger
							color='black'
							toggled={isOpen}
							toggle={setIsOpen}
							className={styles.nav__toggle}
						/>
					</div>
				</div>
				<div className={styles.nav__links}>
					<Link
						to='/'
						onClick={() => {
							setIsOpen(false)
							window.scrollTo({ top: 0, left: 100, behavior: 'smooth' })
						}}
					>
						Home
					</Link>
					<Link
						to='/'
						onClick={() =>
							window.scrollTo({ top: 1000, left: 100, behavior: 'smooth' })
						}
					>
						Exercises
					</Link>
					<Link
						to='/saved'
						className={styles.nav__button}
						onClick={() => {
							setIsOpen(false)
							window.scrollTo({ top: 0, left: 100, behavior: 'smooth' })
						}}
					>
						<div>
							<p>Saved</p>
							<BookmarkIcon fontSize='large' />
						</div>
						{count <= 0 ? null : (
							<p className={styles.nav__button_count}>{count}</p>
						)}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
