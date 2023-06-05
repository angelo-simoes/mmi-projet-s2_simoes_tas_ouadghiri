migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7g6ons3kap2x1hh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2rwiyr48",
    "name": "latitude",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fg3q8ngv",
    "name": "longitude",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7g6ons3kap2x1hh")

  // remove
  collection.schema.removeField("2rwiyr48")

  // remove
  collection.schema.removeField("fg3q8ngv")

  return dao.saveCollection(collection)
})
