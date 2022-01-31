/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />
declare global {
	const PWA_STORE_NAME: string
}

declare    type Optional<T> = T | null | undefined;


declare namespace NodeJS {
	interface ImportMeta {
		env: object;
	}

	interface ProcessEnv {
		readonly NODE_ENV: 'development' | 'production' | 'test'
		readonly PUBLIC_URL: string

		readonly PWA_STORE_NAME: string

		readonly SCHEMA_PULL_URL: string
		readonly STORE: string
	}
}

declare module '*.avif' {
	const src: string
	export default src
}

declare module '*.bmp' {
	const src: string
	export default src
}

declare module '*.gif' {
	const src: string
	export default src
}

declare module '*.jpg' {
	const src: string
	export default src
}

declare module '*.jpeg' {
	const src: string
	export default src
}

declare module '*.png' {
	const src: string
	export default src
}

declare module '*.webp' {
	const src: string
	export default src
}

declare module '*.svg' {
	import * as React from 'react'

	export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>

	const src: string
	export default src
}

declare module '*.module.css' {
	const classes: { readonly [key: string]: string }
	export default classes
}

declare module '*.module.scss' {
	const classes: { readonly [key: string]: string }
	export default classes
}

declare module '*.module.sass' {
	const classes: { readonly [key: string]: string }
	export default classes
}

declare module '*.gql' {
	import { DocumentNode } from 'graphql'
	const Schema: DocumentNode
	export default Schema
}

declare module '*.graphql' {
	import { DocumentNode } from 'graphql'
	const Schema: DocumentNode
	export default Schema
}

declare module '*.graphqls' {
	import { DocumentNode } from 'graphql'
	const Schema: DocumentNode
	export default Schema
}