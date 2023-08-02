import SearchIcon from '@mui/icons-material/Search'
import { IconButton, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../../utils/fetchData'
import HorizontalScrollbar from '../HorizontalScrollbar'
import styles from './SearchExercises.module.scss'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
	const [search, setSearch] = useState('')
	const [bodyParts, setBodyParts] = useState([])

	useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyPartsData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
				exerciseOptions
			)

			setBodyParts(['all', ...bodyPartsData])
		}

		fetchExercisesData()
	}, [])

	const handleSearch = async () => {
		if (search) {
			const exercisesData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises',
				exerciseOptions
			)

			const searchedExercises = exercisesData.filter(
				item =>
					item.name.toLowerCase().includes(search) ||
					item.target.toLowerCase().includes(search) ||
					item.equipment.toLowerCase().includes(search) ||
					item.bodyPart.toLowerCase().includes(search)
			)

			window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })

			setSearch('')
			setExercises(searchedExercises)
		}
	}

	return (
		<div className='container'>
			<div className={styles.search__wrapper}>
				<h1 className={styles.search__title}>
					Awesome Exercises You <br /> Should Know
				</h1>
				<div className={styles.search__field}>
					<TextField
						height='76px'
						variant='outlined'
						value={search}
						onChange={e => setSearch(e.target.value.toLowerCase())}
						placeholder='Search Exercises'
						className={styles.input}
					/>
					<IconButton
						className={styles.search__button}
						aria-label='search'
						onClick={handleSearch}
					>
						<SearchIcon fontSize='large' />
					</IconButton>
				</div>
				<div className={styles.scrollbar__wrapper}>
					<HorizontalScrollbar
						data={bodyParts}
						bodyParts
						setBodyPart={setBodyPart}
						bodyPart={bodyPart}
					/>
				</div>
			</div>
		</div>
	)
}

export default SearchExercises
