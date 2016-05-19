import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Mangas } from './schema.js';

Meteor.methods({
	mangasInsert(data) {
		check(data, Object);
		return Mangas.upsert({
			tomeId: data.tomeId,
			mangaId: data.mangaId
		}, {
			$set: {
				mangaId: data.mangaId,
				tomeId: data.tomeId,
				title: data.title,
				user: data.user,
				name: data.name,
				author: data.author,
				number: data.number,
				isbn: data.isbn,
				cover: data.cover,
				releaseDate: data.releaseDate,
				owned: data.owned,
				editor: data.editor,
				version: data.version,
				genre: data.genre
			}
		});
	},
	setOwnedTrue(mangasId) {
		check(mangasId, String);
		return Mangas.update({
			'_id': mangasId
		}, {
			$set: {
				'owned': true
			}
		});
	},
	setOwnedFalse(mangasId) {
		check(mangasId, String);
		return Mangas.update({
			'_id': mangasId
		}, {
			$set: {
				'owned': false
			}
		});
	}
});