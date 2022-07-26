import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Want to buy 1 ${plantName} ? Very good choice 🌱✨`)
}

function PlantItem({ cover, name,cat, water, light, price }) {
	return (
		<li className='lmj-plant-item text-white text-bold' onClick={() => handleClick}>
			<span className='lmj-plant-item-price px-3 '> {price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name}-cover`} />
			<div className='px-3 '> {name}</div>
			
			<div>
				<CareScale className='px-3 ' careType='water' scaleValue={water} />
				<CareScale className='px-3 ' careType='light' scaleValue={light} />
		
			</div>
			<div className='text-left px-4 '>  {cat} Category</div>

			
		</li>
	)
}

export default PlantItem
