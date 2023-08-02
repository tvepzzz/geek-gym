import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider, createTheme } from '@mui/material'
import App from './App'
import { ExercisesContextProvider } from './context/ExercisesContext'

const theme = createTheme({
	palette: {
		primary: {
			main: '#ff8000',
		},
		secondary: {
			main: '#eaa866',
		},
	},
})

const root = createRoot(document.getElementById('root'))

root.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<ExercisesContextProvider>
				<App />
			</ExercisesContextProvider>
		</ThemeProvider>
	</BrowserRouter>
)
