'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class QuizSchema extends Schema {
	up() {
		this.create('quizzes', (table) => {
			table.increments();
			table
				.integer('user_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('users');
			table.string('name');
			table.timestamps();
		});
	}

	down() {
		this.drop('quizzes');
	}
}

module.exports = QuizSchema;
