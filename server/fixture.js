if (Products.find().count() === 0) {

	let defaultProducts = [
		{
			name:'Elote Chico',
			category:'Tradicionales',
			price:2500,
			label:'Chico',
			createdAt:new Date(),
			updatedAt:null
		},{
			name:'Elote Mediano',
			category:'Tradicionales',
			price:3000,
			label:'Mediano',
			createdAt:new Date(),
			updatedAt:null
		},{
			name:'Elote Medio litro',
			category:'Tradicionales',
			price:4500,
			label:'Medio Litro',
			createdAt:new Date(),
			updatedAt:null
		},{
			name:'Maruchan',
			category:'Tradicionales',
			price:3500,
			label:'Maruchan',
			createdAt:new Date(),
			updatedAt:null
		},{
			name:'Dorinachos',
			category:'Tradicionales',
			price:3500,
			label:'Dorinachos',
			createdAt:new Date(),
			updatedAt:null
		},{
			name:'Elote Chico',
			category:'Chorreados',
			price:4000,
			label:'Chico',
			createdAt:new Date(),
			updatedAt:null
		},{
			name:'Elote Mediano',
			category:'Chorreados',
			price:4500,
			label:'Mediano',
			createdAt:new Date(),
			updatedAt:null
		},{
			name:'Elote Medio litro',
			category:'Chorreados',
			price:6500,
			label:'Medio Litro',
			createdAt:new Date(),
			updatedAt:null
		},{
			name:'Maruchan',
			category:'Chorreados',
			price:6500,
			label:'Maruchan',
			createdAt:new Date(),
			updatedAt:null
		},{
			name:'Dorinachos',
			category:'Chorreados',
			price:6500,
			label:'Dorinachos',
			createdAt:new Date(),
			updatedAt:null
		},{
			name:'Refresco',
			category:'Extras',
			price:1500,
			label:'Refresco',
			createdAt:new Date(),
			updatedAt:null
		},{
			name:'Agua',
			category:'Extras',
			price:1000,
			label:'Agua',
			createdAt:new Date(),
			updatedAt:null
		},{
			name:'Ingrediente Extra',
			category:'Extras',
			price:500,
			label:'Ingrediente Extra',
			createdAt:new Date(),
			updatedAt:null
		}
	]
	defaultProducts.forEach(product=>{
		Products.insert(product)
	})
	console.log('added defaultProducts')
}

