migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nidvu66yb62j35")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yz9i7ve3",
    "name": "hastags",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "values": [
        "art",
        "infos",
        "tech",
        "design",
        "info",
        "generative",
        "openAI"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nidvu66yb62j35")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yz9i7ve3",
    "name": "hastags",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "art",
        "infos",
        "tech",
        "design",
        "info",
        "generative",
        "openAI"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
