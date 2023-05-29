migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nidvu66yb62j35")

  // remove
  collection.schema.removeField("0uqmbcrq")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nidvu66yb62j35")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0uqmbcrq",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
