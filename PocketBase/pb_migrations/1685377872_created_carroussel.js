migrate((db) => {
  const collection = new Collection({
    "id": "jtoariybcqkqld1",
    "created": "2023-05-29 16:31:12.618Z",
    "updated": "2023-05-29 16:31:12.618Z",
    "name": "carroussel",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jdesmwhx",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "nmuggrhp",
        "name": "titre",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "plopf3x0",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jtoariybcqkqld1");

  return dao.deleteCollection(collection);
})
