'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ResultSchema extends Schema {
	up() {
		this.create('results', (table) => {
			table.increments();
			table
				.integer('user_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('users');
			table
				.integer('quiz_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('quizzes');
			table.integer('result');
			table.timestamps();
		});
	}

	down() {
		this.drop('results');
	}
}

module.exports = ResultSchema;
