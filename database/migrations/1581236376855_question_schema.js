'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class QuestionSchema extends Schema {
	up() {
		this.create('questions', (table) => {
			table.increments();
			table
				.integer('quiz_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('quizzes');
			table.string('question');
			table.string('ans_1');
			table.string('ans_2');
			table.string('ans_3');
			table.string('ans_4');
			table.string('ans_correct');
			table.timestamps();
		});
	}

	down() {
		this.drop('questions');
	}
}

module.exports = QuestionSchema;
