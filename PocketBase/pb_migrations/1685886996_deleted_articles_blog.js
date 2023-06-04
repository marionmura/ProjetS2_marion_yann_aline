migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mrhjbre6j7ypd0h");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "mrhjbre6j7ypd0h",
    "created": "2023-06-04 12:43:37.461Z",
    "updated": "2023-06-04 13:23:28.189Z",
    "name": "articles_blog",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wmfapci1",
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
        "id": "ygfmxya4",
        "name": "auteur",
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
        "id": "aj3p1i51",
        "name": "blable",
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
        "id": "r5hc20yh",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
