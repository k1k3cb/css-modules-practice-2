import Card from './components/card/card';
import CardGrid from './components/cardGrid/CardGrid';
import Header from './components/header/Header';

const App = () => {
	return (
		<div className='container'>
			<Header />
			<CardGrid>
				<Card
					cardStyle='card1'
					title='Supervisor'
					color='green'
					text='Scans our talent network to create the optimal team for your project'
					image='/images/icon-supervisor.svg'
				/>
				<Card
					cardStyle='card2'
					title='Team Builder'
					color='red'
					text='Scans our talent network to create the optimal team for your project'
					image='/images/icon-team-builder.svg'
				/>
				<Card
					cardStyle='card3'
					title='Karma'
					color='yellow'
					text='Scans our talent network to create the optimal team for your project'
					image='/images/icon-karma.svg'
				/>
				<Card
					cardStyle='card4'
					title='Calculator'
					color='blue'
					text='Scans our talent network to create the optimal team for your project'
					image='/images/icon-calculator.svg'
				/>
			</CardGrid>
		</div>
	);
};

export default App;
