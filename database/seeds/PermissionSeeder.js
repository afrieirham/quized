'use strict';

/*
|--------------------------------------------------------------------------
| PermissionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Permission = use('App/Models/Permission');

class PermissionSeeder {
	async run() {
		const create_quizzes = new Permission();
		create_quizzes.slug = 'create_quizzes';
		create_quizzes.name = 'Create quizzes';
		create_quizzes.description = 'Create quizzes permission';
		await create_quizzes.save();

		const read_quizzes = new Permission();
		read_quizzes.slug = 'read_quizzes';
		read_quizzes.name = 'Read quizzes';
		read_quizzes.description = 'Read quizzes permission';
		await read_quizzes.save();

		const update_quizzes = new Permission();
		update_quizzes.slug = 'update_quizzes';
		update_quizzes.name = 'Update quizzes';
		update_quizzes.description = 'Update quizzes permission';
		await update_quizzes.save();

		const delete_quizzes = new Permission();
		delete_quizzes.slug = 'delete_quizzes';
		delete_quizzes.name = 'Delete quizzes';
		delete_quizzes.description = 'Delete quizzes permission';
		await delete_quizzes.save();
	}
}

module.exports = PermissionSeeder;
