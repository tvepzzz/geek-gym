import { banner } from '../assets/images'

const Footer = () => (
	<div className='container'>
		<div className='footer__wrapper'>
			<h1 className='footer__title'>
				GET A FIT LIFESTYLE EASILY HERE. <img src={banner} alt='logo' />
			</h1>
			<hr />
			<div className='footer__subtitle'>
				<h1 className='footer__grey'>FEEL GREAT.</h1>
				<h1>BODY AND MIND.</h1>
			</div>
		</div>
	</div>
)

export default Footer
