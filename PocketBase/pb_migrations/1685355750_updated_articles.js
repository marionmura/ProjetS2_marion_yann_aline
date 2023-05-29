migrate((db) => {
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xhyjkpty",
    "name": "enregistrement",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9aqcxwuz",
    "name": "favori",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7nidvu66yb62j35")

  // remove
  collection.schema.removeField("0uqmbcrq")

  // remove
  collection.schema.removeField("xhyjkpty")

  // remove
  collection.schema.removeField("9aqcxwuz")

  // remove
  collection.schema.removeField("yz9i7ve3")

  return dao.saveCollection(collection)
})
