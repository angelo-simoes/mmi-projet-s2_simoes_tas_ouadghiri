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
	date_end?: IsoDateString
	place?: string
	sport?: string
	img?: string
	imgAlt?: string
}

export type UsersRecord = {
	avatar?: string
	email?:string
	username?: string
	password?: string
}

// Response types include system fields and match responses from the PocketBase API
export type EventsResponse = Required<EventsRecord> & BaseSystemFields<never>;
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