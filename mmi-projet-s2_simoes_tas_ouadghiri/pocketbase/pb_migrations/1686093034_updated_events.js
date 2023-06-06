migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7g6ons3kap2x1hh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f7vovaz9",
    "name": "administrateur",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7g6ons3kap2x1hh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f7vovaz9",
    "name": "admin",
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
