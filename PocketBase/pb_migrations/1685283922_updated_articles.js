migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nidvu66yb62j35")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jpyku9jv",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nidvu66yb62j35")

  // remove
  collection.schema.removeField("jpyku9jv")

  return dao.saveCollection(collection)
})
