import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Want to buy 1 ${plantName} ? Very good choice 🌱✨`)
}

function PlantItem({ cover, name,cat, water, light, price }) {
	return (
		<li className='lmj-plant-item text-white' onClick={() => handleClick}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover ' src={cover} alt={`${name}-cover`} />
			<div> {name}</div>
			<div className='text-left'> {cat}</div>
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
