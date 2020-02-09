'use strict';

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Role = use('App/Models/Role');

class RoleSeeder {
	async run() {
		const tutor = new Role();

		tutor.slug = 'tutor';
		tutor.name = 'Tutor';
		tutor.description = 'Manage quizzes';

		await tutor.save();

		const student = new Role();

		student.slug = 'student';
		student.name = 'Student';
		student.description = 'Answer quizzes';

		await student.save();
	}
}

module.exports = RoleSeeder;
