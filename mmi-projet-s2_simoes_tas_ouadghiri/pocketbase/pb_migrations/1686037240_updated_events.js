migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7g6ons3kap2x1hh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rlajrwds",
    "name": "nb_participant",
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
  collection.schema.removeField("rlajrwds")

  return dao.saveCollection(collection)
})
