import express from 'express'

const app = express()

app.get('/users', (request, response) => {
	console.log('listagem de usuários')

	response.json([
		'diego',
		'cleiton',
		'robson'
	])
})

app.listen(3333)

