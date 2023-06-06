migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7g6ons3kap2x1hh")

  // remove
  collection.schema.removeField("vbbncvqn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "adjfbxab",
    "name": "administrateur",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7g6ons3kap2x1hh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vbbncvqn",
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

  // remove
  collection.schema.removeField("adjfbxab")

  return dao.saveCollection(collection)
})
