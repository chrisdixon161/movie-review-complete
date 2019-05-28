// Code generated by Prisma (prisma@1.30.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  movie: (where?: MovieWhereInput) => Promise<boolean>;
  review: (where?: ReviewWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  movie: (where: MovieWhereUniqueInput) => MoviePromise;
  movies: (
    args?: {
      where?: MovieWhereInput;
      orderBy?: MovieOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Movie>;
  moviesConnection: (
    args?: {
      where?: MovieWhereInput;
      orderBy?: MovieOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => MovieConnectionPromise;
  review: (where: ReviewWhereUniqueInput) => ReviewPromise;
  reviews: (
    args?: {
      where?: ReviewWhereInput;
      orderBy?: ReviewOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Review>;
  reviewsConnection: (
    args?: {
      where?: ReviewWhereInput;
      orderBy?: ReviewOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ReviewConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createMovie: (data: MovieCreateInput) => MoviePromise;
  updateMovie: (
    args: { data: MovieUpdateInput; where: MovieWhereUniqueInput }
  ) => MoviePromise;
  updateManyMovies: (
    args: { data: MovieUpdateManyMutationInput; where?: MovieWhereInput }
  ) => BatchPayloadPromise;
  upsertMovie: (
    args: {
      where: MovieWhereUniqueInput;
      create: MovieCreateInput;
      update: MovieUpdateInput;
    }
  ) => MoviePromise;
  deleteMovie: (where: MovieWhereUniqueInput) => MoviePromise;
  deleteManyMovies: (where?: MovieWhereInput) => BatchPayloadPromise;
  createReview: (data: ReviewCreateInput) => ReviewPromise;
  updateReview: (
    args: { data: ReviewUpdateInput; where: ReviewWhereUniqueInput }
  ) => ReviewPromise;
  updateManyReviews: (
    args: { data: ReviewUpdateManyMutationInput; where?: ReviewWhereInput }
  ) => BatchPayloadPromise;
  upsertReview: (
    args: {
      where: ReviewWhereUniqueInput;
      create: ReviewCreateInput;
      update: ReviewUpdateInput;
    }
  ) => ReviewPromise;
  deleteReview: (where: ReviewWhereUniqueInput) => ReviewPromise;
  deleteManyReviews: (where?: ReviewWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  movie: (
    where?: MovieSubscriptionWhereInput
  ) => MovieSubscriptionPayloadSubscription;
  review: (
    where?: ReviewSubscriptionWhereInput
  ) => ReviewSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ReviewOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "reviewText_ASC"
  | "reviewText_DESC"
  | "rating_ASC"
  | "rating_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MovieOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateOneRequiredWithoutReviewsInput {
  create?: UserCreateWithoutReviewsInput;
  update?: UserUpdateWithoutReviewsDataInput;
  upsert?: UserUpsertWithoutReviewsInput;
  connect?: UserWhereUniqueInput;
}

export type MovieWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ReviewCreateManyWithoutMovieInput {
  create?: ReviewCreateWithoutMovieInput[] | ReviewCreateWithoutMovieInput;
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
}

export interface MovieCreateWithoutReviewsInput {
  id?: ID_Input;
  title: String;
}

export interface ReviewCreateWithoutMovieInput {
  id?: ID_Input;
  reviewText: String;
  rating: Int;
  user: UserCreateOneWithoutReviewsInput;
}

export interface ReviewUpsertWithWhereUniqueWithoutMovieInput {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateWithoutMovieDataInput;
  create: ReviewCreateWithoutMovieInput;
}

export interface UserCreateOneWithoutReviewsInput {
  create?: UserCreateWithoutReviewsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserCreateWithoutReviewsInput {
  id?: ID_Input;
  name: String;
  email: String;
}

export interface ReviewWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  movie?: MovieWhereInput;
  reviewText?: String;
  reviewText_not?: String;
  reviewText_in?: String[] | String;
  reviewText_not_in?: String[] | String;
  reviewText_lt?: String;
  reviewText_lte?: String;
  reviewText_gt?: String;
  reviewText_gte?: String;
  reviewText_contains?: String;
  reviewText_not_contains?: String;
  reviewText_starts_with?: String;
  reviewText_not_starts_with?: String;
  reviewText_ends_with?: String;
  reviewText_not_ends_with?: String;
  rating?: Int;
  rating_not?: Int;
  rating_in?: Int[] | Int;
  rating_not_in?: Int[] | Int;
  rating_lt?: Int;
  rating_lte?: Int;
  rating_gt?: Int;
  rating_gte?: Int;
  user?: UserWhereInput;
  AND?: ReviewWhereInput[] | ReviewWhereInput;
  OR?: ReviewWhereInput[] | ReviewWhereInput;
  NOT?: ReviewWhereInput[] | ReviewWhereInput;
}

export interface MovieUpdateInput {
  title?: String;
  reviews?: ReviewUpdateManyWithoutMovieInput;
}

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
}

export interface ReviewUpdateManyWithoutMovieInput {
  create?: ReviewCreateWithoutMovieInput[] | ReviewCreateWithoutMovieInput;
  delete?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
  set?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
  disconnect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
  update?:
    | ReviewUpdateWithWhereUniqueWithoutMovieInput[]
    | ReviewUpdateWithWhereUniqueWithoutMovieInput;
  upsert?:
    | ReviewUpsertWithWhereUniqueWithoutMovieInput[]
    | ReviewUpsertWithWhereUniqueWithoutMovieInput;
  deleteMany?: ReviewScalarWhereInput[] | ReviewScalarWhereInput;
  updateMany?:
    | ReviewUpdateManyWithWhereNestedInput[]
    | ReviewUpdateManyWithWhereNestedInput;
}

export interface ReviewUpdateWithoutUserDataInput {
  movie?: MovieUpdateOneRequiredWithoutReviewsInput;
  reviewText?: String;
  rating?: Int;
}

export interface ReviewUpdateWithWhereUniqueWithoutMovieInput {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateWithoutMovieDataInput;
}

export type ReviewWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ReviewUpdateWithoutMovieDataInput {
  reviewText?: String;
  rating?: Int;
  user?: UserUpdateOneRequiredWithoutReviewsInput;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  reviews?: ReviewUpdateManyWithoutUserInput;
}

export interface MovieUpdateWithoutReviewsDataInput {
  title?: String;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface UserUpdateWithoutReviewsDataInput {
  name?: String;
  email?: String;
}

export interface UserCreateInput {
  id?: ID_Input;
  name: String;
  email: String;
  reviews?: ReviewCreateManyWithoutUserInput;
}

export interface UserUpsertWithoutReviewsInput {
  update: UserUpdateWithoutReviewsDataInput;
  create: UserCreateWithoutReviewsInput;
}

export interface MovieUpsertWithoutReviewsInput {
  update: MovieUpdateWithoutReviewsDataInput;
  create: MovieCreateWithoutReviewsInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  reviews_every?: ReviewWhereInput;
  reviews_some?: ReviewWhereInput;
  reviews_none?: ReviewWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface MovieCreateInput {
  id?: ID_Input;
  title: String;
  reviews?: ReviewCreateManyWithoutMovieInput;
}

export interface ReviewScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  reviewText?: String;
  reviewText_not?: String;
  reviewText_in?: String[] | String;
  reviewText_not_in?: String[] | String;
  reviewText_lt?: String;
  reviewText_lte?: String;
  reviewText_gt?: String;
  reviewText_gte?: String;
  reviewText_contains?: String;
  reviewText_not_contains?: String;
  reviewText_starts_with?: String;
  reviewText_not_starts_with?: String;
  reviewText_ends_with?: String;
  reviewText_not_ends_with?: String;
  rating?: Int;
  rating_not?: Int;
  rating_in?: Int[] | Int;
  rating_not_in?: Int[] | Int;
  rating_lt?: Int;
  rating_lte?: Int;
  rating_gt?: Int;
  rating_gte?: Int;
  AND?: ReviewScalarWhereInput[] | ReviewScalarWhereInput;
  OR?: ReviewScalarWhereInput[] | ReviewScalarWhereInput;
  NOT?: ReviewScalarWhereInput[] | ReviewScalarWhereInput;
}

export interface ReviewSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ReviewWhereInput;
  AND?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput;
  OR?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput;
  NOT?: ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput;
}

export interface ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput;
  data: ReviewUpdateManyDataInput;
}

export interface ReviewUpsertWithWhereUniqueWithoutUserInput {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateWithoutUserDataInput;
  create: ReviewCreateWithoutUserInput;
}

export interface ReviewUpdateManyDataInput {
  reviewText?: String;
  rating?: Int;
}

export interface ReviewUpdateManyWithoutUserInput {
  create?: ReviewCreateWithoutUserInput[] | ReviewCreateWithoutUserInput;
  delete?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
  set?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
  disconnect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
  update?:
    | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    | ReviewUpdateWithWhereUniqueWithoutUserInput;
  upsert?:
    | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    | ReviewUpsertWithWhereUniqueWithoutUserInput;
  deleteMany?: ReviewScalarWhereInput[] | ReviewScalarWhereInput;
  updateMany?:
    | ReviewUpdateManyWithWhereNestedInput[]
    | ReviewUpdateManyWithWhereNestedInput;
}

export interface MovieUpdateManyMutationInput {
  title?: String;
}

export interface ReviewCreateManyWithoutUserInput {
  create?: ReviewCreateWithoutUserInput[] | ReviewCreateWithoutUserInput;
  connect?: ReviewWhereUniqueInput[] | ReviewWhereUniqueInput;
}

export interface MovieCreateOneWithoutReviewsInput {
  create?: MovieCreateWithoutReviewsInput;
  connect?: MovieWhereUniqueInput;
}

export interface ReviewCreateInput {
  id?: ID_Input;
  movie: MovieCreateOneWithoutReviewsInput;
  reviewText: String;
  rating: Int;
  user: UserCreateOneWithoutReviewsInput;
}

export interface ReviewUpdateInput {
  movie?: MovieUpdateOneRequiredWithoutReviewsInput;
  reviewText?: String;
  rating?: Int;
  user?: UserUpdateOneRequiredWithoutReviewsInput;
}

export interface MovieUpdateOneRequiredWithoutReviewsInput {
  create?: MovieCreateWithoutReviewsInput;
  update?: MovieUpdateWithoutReviewsDataInput;
  upsert?: MovieUpsertWithoutReviewsInput;
  connect?: MovieWhereUniqueInput;
}

export interface MovieWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  reviews_every?: ReviewWhereInput;
  reviews_some?: ReviewWhereInput;
  reviews_none?: ReviewWhereInput;
  AND?: MovieWhereInput[] | MovieWhereInput;
  OR?: MovieWhereInput[] | MovieWhereInput;
  NOT?: MovieWhereInput[] | MovieWhereInput;
}

export interface ReviewUpdateManyMutationInput {
  reviewText?: String;
  rating?: Int;
}

export interface ReviewCreateWithoutUserInput {
  id?: ID_Input;
  movie: MovieCreateOneWithoutReviewsInput;
  reviewText: String;
  rating: Int;
}

export interface ReviewUpdateWithWhereUniqueWithoutUserInput {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateWithoutUserDataInput;
}

export interface MovieSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: MovieWhereInput;
  AND?: MovieSubscriptionWhereInput[] | MovieSubscriptionWhereInput;
  OR?: MovieSubscriptionWhereInput[] | MovieSubscriptionWhereInput;
  NOT?: MovieSubscriptionWhereInput[] | MovieSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
}

export interface MovieEdge {
  node: Movie;
  cursor: String;
}

export interface MovieEdgePromise extends Promise<MovieEdge>, Fragmentable {
  node: <T = MoviePromise>() => T;
  cursor: () => Promise<String>;
}

export interface MovieEdgeSubscription
  extends Promise<AsyncIterator<MovieEdge>>,
    Fragmentable {
  node: <T = MovieSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ReviewPreviousValues {
  id: ID_Output;
  reviewText: String;
  rating: Int;
}

export interface ReviewPreviousValuesPromise
  extends Promise<ReviewPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  reviewText: () => Promise<String>;
  rating: () => Promise<Int>;
}

export interface ReviewPreviousValuesSubscription
  extends Promise<AsyncIterator<ReviewPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  reviewText: () => Promise<AsyncIterator<String>>;
  rating: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface MovieConnection {
  pageInfo: PageInfo;
  edges: MovieEdge[];
}

export interface MovieConnectionPromise
  extends Promise<MovieConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MovieEdge>>() => T;
  aggregate: <T = AggregateMoviePromise>() => T;
}

export interface MovieConnectionSubscription
  extends Promise<AsyncIterator<MovieConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MovieEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMovieSubscription>() => T;
}

export interface AggregateReview {
  count: Int;
}

export interface AggregateReviewPromise
  extends Promise<AggregateReview>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateReviewSubscription
  extends Promise<AsyncIterator<AggregateReview>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Movie {
  id: ID_Output;
  title: String;
}

export interface MoviePromise extends Promise<Movie>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  reviews: <T = FragmentableArray<Review>>(
    args?: {
      where?: ReviewWhereInput;
      orderBy?: ReviewOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface MovieSubscription
  extends Promise<AsyncIterator<Movie>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  reviews: <T = Promise<AsyncIterator<ReviewSubscription>>>(
    args?: {
      where?: ReviewWhereInput;
      orderBy?: ReviewOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface ReviewConnection {
  pageInfo: PageInfo;
  edges: ReviewEdge[];
}

export interface ReviewConnectionPromise
  extends Promise<ReviewConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ReviewEdge>>() => T;
  aggregate: <T = AggregateReviewPromise>() => T;
}

export interface ReviewConnectionSubscription
  extends Promise<AsyncIterator<ReviewConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ReviewEdgeSubscription>>>() => T;
  aggregate: <T = AggregateReviewSubscription>() => T;
}

export interface ReviewSubscriptionPayload {
  mutation: MutationType;
  node: Review;
  updatedFields: String[];
  previousValues: ReviewPreviousValues;
}

export interface ReviewSubscriptionPayloadPromise
  extends Promise<ReviewSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ReviewPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ReviewPreviousValuesPromise>() => T;
}

export interface ReviewSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ReviewSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ReviewSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ReviewPreviousValuesSubscription>() => T;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  reviews: <T = FragmentableArray<Review>>(
    args?: {
      where?: ReviewWhereInput;
      orderBy?: ReviewOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  reviews: <T = Promise<AsyncIterator<ReviewSubscription>>>(
    args?: {
      where?: ReviewWhereInput;
      orderBy?: ReviewOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface MoviePreviousValues {
  id: ID_Output;
  title: String;
}

export interface MoviePreviousValuesPromise
  extends Promise<MoviePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
}

export interface MoviePreviousValuesSubscription
  extends Promise<AsyncIterator<MoviePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
}

export interface MovieSubscriptionPayload {
  mutation: MutationType;
  node: Movie;
  updatedFields: String[];
  previousValues: MoviePreviousValues;
}

export interface MovieSubscriptionPayloadPromise
  extends Promise<MovieSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MoviePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MoviePreviousValuesPromise>() => T;
}

export interface MovieSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MovieSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MovieSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MoviePreviousValuesSubscription>() => T;
}

export interface AggregateMovie {
  count: Int;
}

export interface AggregateMoviePromise
  extends Promise<AggregateMovie>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMovieSubscription
  extends Promise<AsyncIterator<AggregateMovie>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ReviewEdge {
  node: Review;
  cursor: String;
}

export interface ReviewEdgePromise extends Promise<ReviewEdge>, Fragmentable {
  node: <T = ReviewPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ReviewEdgeSubscription
  extends Promise<AsyncIterator<ReviewEdge>>,
    Fragmentable {
  node: <T = ReviewSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Review {
  id: ID_Output;
  reviewText: String;
  rating: Int;
}

export interface ReviewPromise extends Promise<Review>, Fragmentable {
  id: () => Promise<ID_Output>;
  movie: <T = MoviePromise>() => T;
  reviewText: () => Promise<String>;
  rating: () => Promise<Int>;
  user: <T = UserPromise>() => T;
}

export interface ReviewSubscription
  extends Promise<AsyncIterator<Review>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  movie: <T = MovieSubscription>() => T;
  reviewText: () => Promise<AsyncIterator<String>>;
  rating: () => Promise<AsyncIterator<Int>>;
  user: <T = UserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Movie",
    embedded: false
  },
  {
    name: "Review",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;