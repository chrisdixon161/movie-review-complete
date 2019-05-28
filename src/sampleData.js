const users = [
	{
		id: '1001',
		name: 'User 1',
		email: 'user1@example.com',
	},
	{
		id: '1002',
		name: 'User 2',
		email: 'user2@example.com',
	},
]
const movies = [
	{
		id: '2001',
		title: 'Goldeneye',
		reviews: '3001',
	},
	{
		id: '2002',
		title: 'Wreck-It Ralph',
		reviews: '3002',
	},
]
const reviews = [
	{
		id: '3001',
		movie: '2001',
		reviewText: 'Goldeneye review...',
		rating: 4,
		user: '1002',
	},
	{
		id: '3002',
		movie: '2002',
		reviewText: 'Wreck-It Ralph review...',
		rating: 5,
		user: '1001',
	},
	{
		id: '3003',
		movie: '2001',
		reviewText: 'Goldeneye review 2...',
		rating: 4,
		user: '1002',
	},
]

module.exports = {
	users,
	movies,
	reviews,
}
