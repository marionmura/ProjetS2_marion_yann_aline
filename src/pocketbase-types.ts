/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Articles = "articles",
	Users = "users",
	Carrousel = "carroussel",}

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

export type ArticlesRecord = {
	nom?: string
	paragraphe?: string
	image?: string
	hastags?:string
	favori?:boolean
	enregistrement?:boolean
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

export type CarrouselRecord = {
	titre?: string
	description?: string
	image?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ArticlesResponse = Required<ArticlesRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields
export type CarrouselResponse = Required<CarrouselRecord> & BaseSystemFields


// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	articles: ArticlesRecord
	users: UsersRecord
	carrousel : CarrouselRecord
}

export type CollectionResponses = {
	articles: ArticlesResponse
	users: UsersResponse
	carrousel: CarrouselResponse
}