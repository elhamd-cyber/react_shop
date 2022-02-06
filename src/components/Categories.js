import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='lmj-categories'>
			<select  aria-label="Default select example"
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='p-2 w-50 lmj-categories-select'
			>
				<option value='' disable >Select a category</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button className='btn btn-dark  mx-1 mb-2 ' onClick={() => setActiveCategory('')}>Clear</button>
		</div>
	)
}

export default Categories
