/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../context"
import type { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  WorkoutRecordExerciseInput: { // input type
    duration: number; // Int!
    name: string; // String!
    reps: number; // Int!
    weight: number; // Float!
  }
  WorkoutSchemaExerciseInput: { // input type
    duration?: number | null; // Int
    name?: string | null; // String
    reps?: number | null; // Int
    weight?: number | null; // Float
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  FieldError: { // root type
    field: string; // String!
    message: string; // String!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    id: string; // ID!
    username: string; // String!
  }
  UserAndErrorResponse: { // root type
    errors?: NexusGenRootTypes['FieldError'][] | null; // [FieldError!]
    user?: NexusGenRootTypes['User'] | null; // User
  }
  WorkoutRecord: { // root type
    id: string; // ID!
    name: string; // String!
    workoutSchemaId?: string | null; // ID
  }
  WorkoutRecordExercise: { // root type
    duration: number; // Int!
    id: string; // ID!
    name: string; // String!
    reps: number; // Int!
    weight: number; // Float!
  }
  WorkoutSchema: { // root type
    id: string; // ID!
    name: string; // String!
  }
  WorkoutSchemaExercise: { // root type
    duration?: number | null; // Int
    id: string; // ID!
    name: string; // String!
    reps?: number | null; // Int
    weight?: number | null; // Float
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  FieldError: { // field return type
    field: string; // String!
    message: string; // String!
  }
  Mutation: { // field return type
    acceptFriendRequest: NexusGenRootTypes['User']; // User!
    addWorkoutSchemaExercise: NexusGenRootTypes['WorkoutSchemaExercise']; // WorkoutSchemaExercise!
    cancelFriendRequest: NexusGenRootTypes['User']; // User!
    createWorkoutRecord: NexusGenRootTypes['WorkoutRecord']; // WorkoutRecord!
    createWorkoutSchema: NexusGenRootTypes['WorkoutSchema']; // WorkoutSchema!
    deleteWorkoutSchema: boolean; // Boolean!
    deleteWorkoutSchemaExercise: NexusGenRootTypes['WorkoutSchemaExercise']; // WorkoutSchemaExercise!
    likeWorkoutRecord: NexusGenRootTypes['WorkoutRecord']; // WorkoutRecord!
    login: NexusGenRootTypes['UserAndErrorResponse']; // UserAndErrorResponse!
    logout: boolean; // Boolean!
    register: NexusGenRootTypes['UserAndErrorResponse']; // UserAndErrorResponse!
    rejectFriendRequest: NexusGenRootTypes['User']; // User!
    removeFriend: NexusGenRootTypes['User']; // User!
    sendFriendRequest: NexusGenRootTypes['User']; // User!
    unlikeWorkoutRecord: NexusGenRootTypes['WorkoutRecord']; // WorkoutRecord!
    updateWorkoutSchema: NexusGenRootTypes['WorkoutSchema']; // WorkoutSchema!
    updateWorkoutSchemaExercise: NexusGenRootTypes['WorkoutSchemaExercise']; // WorkoutSchemaExercise!
  }
  Query: { // field return type
    allWorkoutRecords: NexusGenRootTypes['WorkoutRecord'][]; // [WorkoutRecord!]!
    me: NexusGenRootTypes['User']; // User!
    userById: NexusGenRootTypes['User'] | null; // User
    workoutRecordsByUserId: NexusGenRootTypes['WorkoutRecord'][]; // [WorkoutRecord!]!
    workoutSchemaById: NexusGenRootTypes['WorkoutSchema']; // WorkoutSchema!
    workoutSchemas: NexusGenRootTypes['WorkoutSchema'][]; // [WorkoutSchema!]!
  }
  User: { // field return type
    friends: NexusGenRootTypes['User'][]; // [User!]!
    id: string; // ID!
    incomingFriendRequests: NexusGenRootTypes['User'][]; // [User!]!
    outgoingFriendRequests: NexusGenRootTypes['User'][]; // [User!]!
    username: string; // String!
    workoutRecords: NexusGenRootTypes['WorkoutRecord'][]; // [WorkoutRecord!]!
  }
  UserAndErrorResponse: { // field return type
    errors: NexusGenRootTypes['FieldError'][] | null; // [FieldError!]
    user: NexusGenRootTypes['User'] | null; // User
  }
  WorkoutRecord: { // field return type
    createdAt: string; // String!
    exercises: NexusGenRootTypes['WorkoutRecordExercise'][]; // [WorkoutRecordExercise!]!
    id: string; // ID!
    likedBy: NexusGenRootTypes['User'][]; // [User!]!
    name: string; // String!
    user: NexusGenRootTypes['User']; // User!
    workoutSchemaId: string | null; // ID
  }
  WorkoutRecordExercise: { // field return type
    duration: number; // Int!
    id: string; // ID!
    name: string; // String!
    reps: number; // Int!
    weight: number; // Float!
  }
  WorkoutSchema: { // field return type
    exercises: NexusGenRootTypes['WorkoutSchemaExercise'][]; // [WorkoutSchemaExercise!]!
    id: string; // ID!
    name: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  WorkoutSchemaExercise: { // field return type
    duration: number | null; // Int
    id: string; // ID!
    name: string; // String!
    reps: number | null; // Int
    weight: number | null; // Float
  }
}

export interface NexusGenFieldTypeNames {
  FieldError: { // field return type name
    field: 'String'
    message: 'String'
  }
  Mutation: { // field return type name
    acceptFriendRequest: 'User'
    addWorkoutSchemaExercise: 'WorkoutSchemaExercise'
    cancelFriendRequest: 'User'
    createWorkoutRecord: 'WorkoutRecord'
    createWorkoutSchema: 'WorkoutSchema'
    deleteWorkoutSchema: 'Boolean'
    deleteWorkoutSchemaExercise: 'WorkoutSchemaExercise'
    likeWorkoutRecord: 'WorkoutRecord'
    login: 'UserAndErrorResponse'
    logout: 'Boolean'
    register: 'UserAndErrorResponse'
    rejectFriendRequest: 'User'
    removeFriend: 'User'
    sendFriendRequest: 'User'
    unlikeWorkoutRecord: 'WorkoutRecord'
    updateWorkoutSchema: 'WorkoutSchema'
    updateWorkoutSchemaExercise: 'WorkoutSchemaExercise'
  }
  Query: { // field return type name
    allWorkoutRecords: 'WorkoutRecord'
    me: 'User'
    userById: 'User'
    workoutRecordsByUserId: 'WorkoutRecord'
    workoutSchemaById: 'WorkoutSchema'
    workoutSchemas: 'WorkoutSchema'
  }
  User: { // field return type name
    friends: 'User'
    id: 'ID'
    incomingFriendRequests: 'User'
    outgoingFriendRequests: 'User'
    username: 'String'
    workoutRecords: 'WorkoutRecord'
  }
  UserAndErrorResponse: { // field return type name
    errors: 'FieldError'
    user: 'User'
  }
  WorkoutRecord: { // field return type name
    createdAt: 'String'
    exercises: 'WorkoutRecordExercise'
    id: 'ID'
    likedBy: 'User'
    name: 'String'
    user: 'User'
    workoutSchemaId: 'ID'
  }
  WorkoutRecordExercise: { // field return type name
    duration: 'Int'
    id: 'ID'
    name: 'String'
    reps: 'Int'
    weight: 'Float'
  }
  WorkoutSchema: { // field return type name
    exercises: 'WorkoutSchemaExercise'
    id: 'ID'
    name: 'String'
    user: 'User'
  }
  WorkoutSchemaExercise: { // field return type name
    duration: 'Int'
    id: 'ID'
    name: 'String'
    reps: 'Int'
    weight: 'Float'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    acceptFriendRequest: { // args
      fromId: string; // ID!
    }
    addWorkoutSchemaExercise: { // args
      name: string; // String!
      workoutSchemaId: string; // ID!
    }
    cancelFriendRequest: { // args
      toId: string; // ID!
    }
    createWorkoutRecord: { // args
      exercises: NexusGenInputs['WorkoutRecordExerciseInput'][]; // [WorkoutRecordExerciseInput!]!
      name: string; // String!
      workoutSchemaId: string; // ID!
    }
    createWorkoutSchema: { // args
      name: string; // String!
    }
    deleteWorkoutSchema: { // args
      id: string; // ID!
    }
    deleteWorkoutSchemaExercise: { // args
      exerciseId: string; // ID!
    }
    likeWorkoutRecord: { // args
      id: string; // ID!
    }
    login: { // args
      password: string; // String!
      username: string; // String!
    }
    register: { // args
      password: string; // String!
      username: string; // String!
    }
    rejectFriendRequest: { // args
      fromId: string; // ID!
    }
    removeFriend: { // args
      id: string; // ID!
    }
    sendFriendRequest: { // args
      username: string; // String!
    }
    unlikeWorkoutRecord: { // args
      id: string; // ID!
    }
    updateWorkoutSchema: { // args
      name: string; // String!
      workoutSchemaId: string; // ID!
    }
    updateWorkoutSchemaExercise: { // args
      data: NexusGenInputs['WorkoutSchemaExerciseInput']; // WorkoutSchemaExerciseInput!
      exerciseId: string; // ID!
    }
  }
  Query: {
    userById: { // args
      id: string; // ID!
    }
    workoutRecordsByUserId: { // args
      userId: string; // ID!
    }
    workoutSchemaById: { // args
      workoutSchemaId: string; // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}