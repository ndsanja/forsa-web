
export interface PostsPreview {
	posts: Posts
	preview?: any
}

export interface Posts {
	edges: PostsEdge[];
}

export interface PostsEdge {
	node: PurpleNode;
}

export interface PurpleNode {
	title: string;
	id: string;
	uri: string;
	excerpt: string;
	slug: string;
	content: string;
	categories: Categories;
	date: Date;
	author: Author;
	featuredImage: FeaturedImage | null;
}

export interface Author {
	node: AuthorNode;
}

export interface AuthorNode {
	name: string;
	firstName: string;
	lastName: string;
	description: string;
}

export interface Categories {
	edges: CategoriesEdge[];
}

export interface CategoriesEdge {
	node: FluffyNode;
}

export interface FluffyNode {
	id: string;
	name: string;
}

export interface FeaturedImage {
	node: FeaturedImageNode;
}

export interface FeaturedImageNode {
	description: string;
	sourceUrl: string;
	uri: string;
	altText: string;
}

export interface Extensions {
	debug: Debug[];
}

export interface Debug {
	type: string;
	message: string;
}
