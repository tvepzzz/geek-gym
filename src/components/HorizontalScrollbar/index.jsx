import EastRoundedIcon from '@mui/icons-material/EastRounded'
import WestRoundedIcon from '@mui/icons-material/WestRounded'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import {
	all,
	arm,
	back,
	cardio,
	chest,
	leg,
	neck,
	shoulders,
	waist,
} from '../../assets/images'
import { useExercises } from '../../context/ExercisesContext'
import BodyPart from '../BodyPart'
import ExerciseCard from '../ExerciseCard'
import styles from './HorizontalScrollbar.module.scss'

const LeftArrow = ({ onClick }) => {
	return (
		<WestRoundedIcon
			fontSize='xl'
			onClick={() => onClick()}
			className={styles.left__arrow}
		/>
	)
}

const RightArrow = ({ onClick }) => {
	return (
		<EastRoundedIcon
			fontSize='xl'
			onClick={() => onClick()}
			className={styles.right__arrow}
		/>
	)
}

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
	const { addExercise, removeExercise, checkSaved } = useExercises()

	const bodyPartsData = [
		{
			img: all,
			bodyPart: data[0],
		},
		{
			img: back,
			bodyPart: data[1],
		},
		{
			img: cardio,
			bodyPart: data[2],
		},
		{
			img: chest,
			bodyPart: data[3],
		},
		{
			img: arm,
			bodyPart: data[4],
		},
		{
			img: leg,
			bodyPart: data[5],
		},
		{
			img: neck,
			bodyPart: data[6],
		},
		{
			img: shoulders,
			bodyPart: data[7],
		},
		{
			img: arm,
			bodyPart: data[8],
		},
		{
			img: leg,
			bodyPart: data[9],
		},
		{
			img: waist,
			bodyPart: data[10],
		},
	]

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3.5,
		slidesToScroll: 3,
		nextArrow: <RightArrow />,
		prevArrow: <LeftArrow />,
		responsive: [
			{
				breakpoint: 980,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 857,
				settings: {
					slidesToShow: 2.5,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 595,
				settings: {
					slidesToShow: 1.5,
					slidesToScroll: 1,
					centerMode: true,
				},
			},
			{
				breakpoint: 435,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 385,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
				},
			},
		],
	}

	return (
		<Slider {...settings}>
			{!bodyParts
				? data.map(item => {
						const isSaved = checkSaved(item.id)
						return (
							<div key={item.id || item}>
								<ExerciseCard
									exercise={item}
									style={styles.sliderCard}
									add={addExercise}
									remove={removeExercise}
									savedState={isSaved}
								/>
							</div>
						)
				  })
				: bodyPartsData.map(part => (
						<div key={part.bodyPart}>
							<BodyPart
								item={part}
								setBodyPart={setBodyPart}
								bodyPart={bodyPart}
							/>
						</div>
				  ))}
		</Slider>
	)
}

export default HorizontalScrollbar
