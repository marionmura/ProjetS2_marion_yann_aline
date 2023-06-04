migrate((db) => {
  const collection = new Collection({
    "id": "pzzrjw00g8rpmnq",
    "created": "2023-06-04 10:56:03.686Z",
    "updated": "2023-06-04 10:56:03.686Z",
    "name": "articles_blog",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fnmqadda",
        "name": "nom_ia",
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
        "id": "cwufn9pt",
        "name": "auteur_conception",
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
        "id": "qg77vzqm",
        "name": "fonctionnalites",
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
        "id": "2imceivf",
        "name": "titre_utilisation",
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
        "id": "ywrs244j",
        "name": "paragraphe_utilisation",
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
        "id": "ibval0ww",
        "name": "titre_premium",
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
        "id": "y6u73kbs",
        "name": "paragraphe_premium",
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
        "id": "zxjm4as8",
        "name": "paragraphe_tuto",
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
        "id": "4zxxdwvi",
        "name": "previewlien",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "7nidvu66yb62j35",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("pzzrjw00g8rpmnq");

  return dao.deleteCollection(collection);
})
