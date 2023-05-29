migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jtoariybcqkqld1")

  collection.name = "carrousel"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jtoariybcqkqld1")

  collection.name = "carroussel"

  return dao.saveCollection(collection)
})
