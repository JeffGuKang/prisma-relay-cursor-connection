import { GraphQLResolveInfo } from 'graphql';

// Prisma Relay Cursor Connection Arguments
export interface Options<Model, Cursor> {
  getCursor: (node: Model) => Cursor
  encodeCursor: (cursor: Cursor) => string
  decodeCursor: (cursorString: string) => Cursor,
  info?: GraphQLResolveInfo;
}

// Prisma Arguments
export interface PrismaFindManyArguments<Cursor> {
  cursor?: Cursor
  take?: number
  skip?: number
}

// Relay Arguments
export interface ConnectionArguments {
  first?: number | null
  after?: string | null
  last?: number | null
  before?: string | null
}

// Relay Response
export interface Connection<T> {
  edges: Array<Edge<T>>
  pageInfo: PageInfo
  totalCount: number
}

export interface Edge<T> {
  cursor: string
  node: T
}

export interface PageInfo {
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor?: string
  endCursor?: string
}
