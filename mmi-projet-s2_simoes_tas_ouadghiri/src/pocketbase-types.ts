/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Events = "events",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type EventsRecord = {
	title?: string
	date_start?: IsoDateString
	place?: string
	sport?: string
	latitude?: number
	longitude?: number
	administrateur?: string
	nb_participant?: number
}

export type UsersRecord = {
	avatar?: string
	username?: string
	bio?: string
}

// Response types include system fields and match responses from the PocketBase API
export type EventsResponse<Texpand = unknown> = Required<EventsRecord> & BaseSystemFields<Texpand>
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	events: EventsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	events: EventsResponse
	users: UsersResponse
}