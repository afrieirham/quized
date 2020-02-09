'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class QuizSchema extends Schema {
	up() {
		this.create('quizzes', (table) => {
			table.increments();
			table.string('name');
			table
				.integer('created_by')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('users');
			table.timestamps();
		});
	}

	down() {
		this.drop('quizzes');
	}
}

module.exports = QuizSchema;
