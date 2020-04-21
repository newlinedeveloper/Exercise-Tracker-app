const router = require('express').Router()
let Exercise = require('../modules/exercise.module')



router.route('/').get((req,res) => {

	Exercise.find()
		.then(exercises => res.json(exercises))
		.catch(err => res.status(400).json("Error is: "+err))

});


router.route('/add').post((req,res) => {

	const username = res.body.username;
	const description = res.body.description;
	const duration  = Number(res.body.duration);
	const date = Date.parse(res.body.date);

	const newExercise = new Exericse({

		username, description, duration, date,
	});

	newExercise.save()
		.then(() => res.json('Exercise added!'))
		.catch(err => res.status(400).json("Error : "+err))

});


router.route('/:id').get((req,res) => {
	Exercise.findById(req.params.id)
		.then(exercise => res.json(exercise))
		.catch(err => res.status(400).json("Error is: "+ err))
});


router.route('/update/:id').post((req,res)=>{
	Exercise.findById(req.params.id)
		.then(exercise => {

			exercise.username = req.body.username;
			exercise.description= req.body.description;
			exercise.duration = Number(req.body.duration);
			exercise.date = Date.parse(req.body.date);

			exercise.save()
				.then(() => res.json("Exercise updated "))
				.catch(err => res.status(400).json("Error is: "+ err))

		})
		.catch(err => json.status(400).json("Error is: "+ err));
});



module.exports = router;

