import Card from './components/card/Card';
import Header from './components/header/Header';

const App = () => {
	return (
		<div className='container'>
			<Header />
			<main className='grid'>
				<Card
					title='Team Builder1'
					color='red'
					text='Scans our talent network to create the optimal team for your project'
					image='/public/images/icon-team-builder.svg'
				/>
				<Card
					title='Team Builder2'
					color='blue'
					text='Scans our talent network to create the optimal team for your project'
					image='/public/images/icon-team-builder.svg'
				/>
				<Card
					title='Team Builder3'
					color='green'
					text='Scans our talent network to create the optimal team for your project'
					image='/public/images/icon-team-builder.svg'
				/>
				<Card
					title='Team Builder4'
					color='yellow'
					text='Scans our talent network to create the optimal team for your project'
					image='/public/images/icon-team-builder.svg'
				/>
			</main>
		</div>
	);
};

export default App;
