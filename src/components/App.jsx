import './App.css';
import Title from './title/title';
import Card from './card/card';

function App() {
	const cards = [
		{
			subTitle: 'с фуа-гра',
			content: ['10 порций', 'мышь в подарок'],
			weight: '0,5',
			selected: false,
			isSelected: 'Печень утки разварная с артишоками.',
			disabled: false,
		},
		{
			subTitle: 'с рыбой',
			content: ['40 порций', '2 мыши в подарок'],
			weight: '2',
			selected: true,
			isSelected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
			disabled: false,
		},
		{
			subTitle: 'с курой',
			content: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
			weight: '5',
			selected: false,
			isSelected: 'Филе из цыплят с трюфелями в бульоне.',
			disabled: true,
		},
	];
	return (
		<main className="app">
			<Title />
			<section className="list__cards">
				{cards.map((card, index) => (
					<Card props={card} key={index} />
				))}
			</section>
		</main>
	);
}

export default App;
