/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Articles = "articles",
	Carrousel = "carrousel",
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

export type ArticlesRecord = {
	nom_IA?: string
	paragraphe?: string
	image?: string
	enregistrement?: boolean
	favori?: boolean
	categorie?: string
	concepteur_IA?: string
	fonctionnalites_1?: string
	fonctionnalites_2?: string
	fonctionnalites_3?: string
	utilisation?: string
	premium?: string
	images_utilisations?: string[]
	tuto_pour_utilisation?: string
}

export type CarrouselRecord = {
	image?: string
	titre?: string
	description?: string
}

export type UsersRecord = {
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ArticlesResponse = Required<ArticlesRecord> & BaseSystemFields
export type CarrouselResponse = Required<CarrouselRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	articles: ArticlesRecord
	carrousel: CarrouselRecord
	users: UsersRecord
}

export type CollectionResponses = {
	articles: ArticlesResponse
	carrousel: CarrouselResponse
	users: UsersResponse
}