import { v4 } from 'uuid';
import Card from './components/card/card';
import CardGrid from './components/cardGrid/CardGrid';
import Header from './components/header/Header';
import { cards } from './constants/cards';

const App = () => {
	return (
		<div className='container'>
			<Header />
			<CardGrid>
				{cards.map(card => (
					<Card
						key={v4()}
						cardStyle={card.cardStyle}
						title={card.title}
						color={card.color}
						text={card.text}
						image={card.image}
					/>
				))}
			</CardGrid>
		</div>
	);
};

export default App;
