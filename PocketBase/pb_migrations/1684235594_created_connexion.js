migrate((db) => {
  const collection = new Collection({
    "id": "51j0s6nxv19d05i",
    "created": "2023-05-16 11:13:14.645Z",
    "updated": "2023-05-16 11:13:14.645Z",
    "name": "connexion",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "p7qrq5p5",
        "name": "email",
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
        "id": "575axbgk",
        "name": "password",
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
  const collection = dao.findCollectionByNameOrId("51j0s6nxv19d05i");

  return dao.deleteCollection(collection);
})
