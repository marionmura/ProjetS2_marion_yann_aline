/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Articles = "articles",
	ArticlesBlog = "articles_blog",
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

export enum ArticlesHastagsOptions {
	"art" = "art",
	"infos" = "infos",
	"tech" = "tech",
	"design" = "design",
	"info" = "info",
	"photo" = "photo",
	"music" = "music",
	"generative" = "generative",
	"openAI" = "openAI",
}
export type ArticlesRecord = {
	image?: string
	nom?: string
	paragraphe?: string
	enregistrement?: boolean
	favori?: boolean
	hastags?: ArticlesHastagsOptions[]
}

export type ArticlesBlogRecord = {
	nom_ia?: string
	auteur?: string
	blable?: string
	previewlien?: RecordIdString
}

export type CarrouselRecord = {
	image?: string
	titre?: string
	description?: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ArticlesResponse = Required<ArticlesRecord> & BaseSystemFields
export type ArticlesBlogResponse<Texpand = unknown> = Required<ArticlesBlogRecord> & BaseSystemFields<Texpand>
export type CarrouselResponse = Required<CarrouselRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	articles: ArticlesRecord
	articles_blog: ArticlesBlogRecord
	carrousel: CarrouselRecord
	users: UsersRecord
}

export type CollectionResponses = {
	articles: ArticlesResponse
	articles_blog: ArticlesBlogResponse
	carrousel: CarrouselResponse
	users: UsersResponse
}