import React, { useState } from 'react';

import './card.css';

function Card({ props }) {
	const { subTitle, content, weight, selected = false, isSelected, disabled = false } = props;

	const [flagSelected, setFlagSelected] = useState(selected);

	function handleClick(e) {
		e.preventDefault();
		setFlagSelected(!flagSelected);
	}

	return (
		<section className={disabled ? 'item__card disabled' : flagSelected ? 'item__card selected' : 'item__card'}>
			<a href="#" onClick={handleClick}>
				<article className="card">
					<div className="card__wrapper">
						<div className="card__content">
							<p className="card__lead">Сказочное заморское яство</p>
							<h4 className="card__title">Нямушка</h4>
							<h5 className="card__sub-title">{subTitle}</h5>
							<div className="card__features">
								{content.map((item, index) => (
									<p className="card__description" key={index}>
										{item}
									</p>
								))}
							</div>
						</div>

						<div className="card__image">
							<img src="/img/Photo.png" alt="" className="cat-image" />
						</div>

						<div className="card__mark">
							<p className="mark__weight">{weight}</p>
							<p className="mark__dimension">кг</p>
						</div>
					</div>
				</article>
			</a>
			{disabled ? (
				<p className="card__appeal">Печалька, {subTitle} закончился.</p>
			) : flagSelected ? (
				<p className="card__appeal">{isSelected} </p>
			) : (
				<p className="card__appeal">
					Чего сидишь? Порадуй котэ,{' '}
					<a href="#" className="card__link" onClick={handleClick}>
						купи
					</a>
					.
				</p>
			)}
		</section>
	);
}

export default Card;
