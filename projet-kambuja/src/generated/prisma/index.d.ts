
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Joueur
 * 
 */
export type Joueur = $Result.DefaultSelection<Prisma.$JoueurPayload>
/**
 * Model Partie
 * 
 */
export type Partie = $Result.DefaultSelection<Prisma.$PartiePayload>
/**
 * Model Carte
 * 
 */
export type Carte = $Result.DefaultSelection<Prisma.$CartePayload>
/**
 * Model Choix
 * 
 */
export type Choix = $Result.DefaultSelection<Prisma.$ChoixPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Joueurs
 * const joueurs = await prisma.joueur.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Joueurs
   * const joueurs = await prisma.joueur.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.joueur`: Exposes CRUD operations for the **Joueur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Joueurs
    * const joueurs = await prisma.joueur.findMany()
    * ```
    */
  get joueur(): Prisma.JoueurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partie`: Exposes CRUD operations for the **Partie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parties
    * const parties = await prisma.partie.findMany()
    * ```
    */
  get partie(): Prisma.PartieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carte`: Exposes CRUD operations for the **Carte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cartes
    * const cartes = await prisma.carte.findMany()
    * ```
    */
  get carte(): Prisma.CarteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.choix`: Exposes CRUD operations for the **Choix** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Choixes
    * const choixes = await prisma.choix.findMany()
    * ```
    */
  get choix(): Prisma.ChoixDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Joueur: 'Joueur',
    Partie: 'Partie',
    Carte: 'Carte',
    Choix: 'Choix'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "joueur" | "partie" | "carte" | "choix"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Joueur: {
        payload: Prisma.$JoueurPayload<ExtArgs>
        fields: Prisma.JoueurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JoueurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoueurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JoueurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoueurPayload>
          }
          findFirst: {
            args: Prisma.JoueurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoueurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JoueurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoueurPayload>
          }
          findMany: {
            args: Prisma.JoueurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoueurPayload>[]
          }
          create: {
            args: Prisma.JoueurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoueurPayload>
          }
          createMany: {
            args: Prisma.JoueurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JoueurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoueurPayload>
          }
          update: {
            args: Prisma.JoueurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoueurPayload>
          }
          deleteMany: {
            args: Prisma.JoueurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JoueurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JoueurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoueurPayload>
          }
          aggregate: {
            args: Prisma.JoueurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJoueur>
          }
          groupBy: {
            args: Prisma.JoueurGroupByArgs<ExtArgs>
            result: $Utils.Optional<JoueurGroupByOutputType>[]
          }
          count: {
            args: Prisma.JoueurCountArgs<ExtArgs>
            result: $Utils.Optional<JoueurCountAggregateOutputType> | number
          }
        }
      }
      Partie: {
        payload: Prisma.$PartiePayload<ExtArgs>
        fields: Prisma.PartieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>
          }
          findFirst: {
            args: Prisma.PartieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>
          }
          findMany: {
            args: Prisma.PartieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>[]
          }
          create: {
            args: Prisma.PartieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>
          }
          createMany: {
            args: Prisma.PartieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PartieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>
          }
          update: {
            args: Prisma.PartieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>
          }
          deleteMany: {
            args: Prisma.PartieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>
          }
          aggregate: {
            args: Prisma.PartieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartie>
          }
          groupBy: {
            args: Prisma.PartieGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartieGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartieCountArgs<ExtArgs>
            result: $Utils.Optional<PartieCountAggregateOutputType> | number
          }
        }
      }
      Carte: {
        payload: Prisma.$CartePayload<ExtArgs>
        fields: Prisma.CarteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartePayload>
          }
          findFirst: {
            args: Prisma.CarteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartePayload>
          }
          findMany: {
            args: Prisma.CarteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartePayload>[]
          }
          create: {
            args: Prisma.CarteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartePayload>
          }
          createMany: {
            args: Prisma.CarteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CarteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartePayload>
          }
          update: {
            args: Prisma.CarteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartePayload>
          }
          deleteMany: {
            args: Prisma.CarteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CarteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartePayload>
          }
          aggregate: {
            args: Prisma.CarteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarte>
          }
          groupBy: {
            args: Prisma.CarteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarteCountArgs<ExtArgs>
            result: $Utils.Optional<CarteCountAggregateOutputType> | number
          }
        }
      }
      Choix: {
        payload: Prisma.$ChoixPayload<ExtArgs>
        fields: Prisma.ChoixFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoixFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoixFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          findFirst: {
            args: Prisma.ChoixFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoixFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          findMany: {
            args: Prisma.ChoixFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>[]
          }
          create: {
            args: Prisma.ChoixCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          createMany: {
            args: Prisma.ChoixCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChoixDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          update: {
            args: Prisma.ChoixUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          deleteMany: {
            args: Prisma.ChoixDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoixUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChoixUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          aggregate: {
            args: Prisma.ChoixAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChoix>
          }
          groupBy: {
            args: Prisma.ChoixGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoixGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoixCountArgs<ExtArgs>
            result: $Utils.Optional<ChoixCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    joueur?: JoueurOmit
    partie?: PartieOmit
    carte?: CarteOmit
    choix?: ChoixOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type JoueurCountOutputType
   */

  export type JoueurCountOutputType = {
    parties: number
  }

  export type JoueurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parties?: boolean | JoueurCountOutputTypeCountPartiesArgs
  }

  // Custom InputTypes
  /**
   * JoueurCountOutputType without action
   */
  export type JoueurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoueurCountOutputType
     */
    select?: JoueurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JoueurCountOutputType without action
   */
  export type JoueurCountOutputTypeCountPartiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartieWhereInput
  }


  /**
   * Count Type PartieCountOutputType
   */

  export type PartieCountOutputType = {
    cartes: number
  }

  export type PartieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartes?: boolean | PartieCountOutputTypeCountCartesArgs
  }

  // Custom InputTypes
  /**
   * PartieCountOutputType without action
   */
  export type PartieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartieCountOutputType
     */
    select?: PartieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartieCountOutputType without action
   */
  export type PartieCountOutputTypeCountCartesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarteWhereInput
  }


  /**
   * Count Type CarteCountOutputType
   */

  export type CarteCountOutputType = {
    choix: number
    suivie_par: number
  }

  export type CarteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choix?: boolean | CarteCountOutputTypeCountChoixArgs
    suivie_par?: boolean | CarteCountOutputTypeCountSuivie_parArgs
  }

  // Custom InputTypes
  /**
   * CarteCountOutputType without action
   */
  export type CarteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarteCountOutputType
     */
    select?: CarteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarteCountOutputType without action
   */
  export type CarteCountOutputTypeCountChoixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoixWhereInput
  }

  /**
   * CarteCountOutputType without action
   */
  export type CarteCountOutputTypeCountSuivie_parArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoixWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Joueur
   */

  export type AggregateJoueur = {
    _count: JoueurCountAggregateOutputType | null
    _avg: JoueurAvgAggregateOutputType | null
    _sum: JoueurSumAggregateOutputType | null
    _min: JoueurMinAggregateOutputType | null
    _max: JoueurMaxAggregateOutputType | null
  }

  export type JoueurAvgAggregateOutputType = {
    joueur_id: number | null
  }

  export type JoueurSumAggregateOutputType = {
    joueur_id: number | null
  }

  export type JoueurMinAggregateOutputType = {
    joueur_id: number | null
    email: string | null
    mdp: string | null
    role: string | null
    date_creation: Date | null
  }

  export type JoueurMaxAggregateOutputType = {
    joueur_id: number | null
    email: string | null
    mdp: string | null
    role: string | null
    date_creation: Date | null
  }

  export type JoueurCountAggregateOutputType = {
    joueur_id: number
    email: number
    mdp: number
    role: number
    date_creation: number
    _all: number
  }


  export type JoueurAvgAggregateInputType = {
    joueur_id?: true
  }

  export type JoueurSumAggregateInputType = {
    joueur_id?: true
  }

  export type JoueurMinAggregateInputType = {
    joueur_id?: true
    email?: true
    mdp?: true
    role?: true
    date_creation?: true
  }

  export type JoueurMaxAggregateInputType = {
    joueur_id?: true
    email?: true
    mdp?: true
    role?: true
    date_creation?: true
  }

  export type JoueurCountAggregateInputType = {
    joueur_id?: true
    email?: true
    mdp?: true
    role?: true
    date_creation?: true
    _all?: true
  }

  export type JoueurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Joueur to aggregate.
     */
    where?: JoueurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Joueurs to fetch.
     */
    orderBy?: JoueurOrderByWithRelationInput | JoueurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JoueurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Joueurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Joueurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Joueurs
    **/
    _count?: true | JoueurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JoueurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JoueurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JoueurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JoueurMaxAggregateInputType
  }

  export type GetJoueurAggregateType<T extends JoueurAggregateArgs> = {
        [P in keyof T & keyof AggregateJoueur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJoueur[P]>
      : GetScalarType<T[P], AggregateJoueur[P]>
  }




  export type JoueurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoueurWhereInput
    orderBy?: JoueurOrderByWithAggregationInput | JoueurOrderByWithAggregationInput[]
    by: JoueurScalarFieldEnum[] | JoueurScalarFieldEnum
    having?: JoueurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JoueurCountAggregateInputType | true
    _avg?: JoueurAvgAggregateInputType
    _sum?: JoueurSumAggregateInputType
    _min?: JoueurMinAggregateInputType
    _max?: JoueurMaxAggregateInputType
  }

  export type JoueurGroupByOutputType = {
    joueur_id: number
    email: string
    mdp: string
    role: string
    date_creation: Date
    _count: JoueurCountAggregateOutputType | null
    _avg: JoueurAvgAggregateOutputType | null
    _sum: JoueurSumAggregateOutputType | null
    _min: JoueurMinAggregateOutputType | null
    _max: JoueurMaxAggregateOutputType | null
  }

  type GetJoueurGroupByPayload<T extends JoueurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JoueurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JoueurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JoueurGroupByOutputType[P]>
            : GetScalarType<T[P], JoueurGroupByOutputType[P]>
        }
      >
    >


  export type JoueurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    joueur_id?: boolean
    email?: boolean
    mdp?: boolean
    role?: boolean
    date_creation?: boolean
    parties?: boolean | Joueur$partiesArgs<ExtArgs>
    _count?: boolean | JoueurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joueur"]>



  export type JoueurSelectScalar = {
    joueur_id?: boolean
    email?: boolean
    mdp?: boolean
    role?: boolean
    date_creation?: boolean
  }

  export type JoueurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"joueur_id" | "email" | "mdp" | "role" | "date_creation", ExtArgs["result"]["joueur"]>
  export type JoueurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parties?: boolean | Joueur$partiesArgs<ExtArgs>
    _count?: boolean | JoueurCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JoueurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Joueur"
    objects: {
      parties: Prisma.$PartiePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      joueur_id: number
      email: string
      mdp: string
      role: string
      date_creation: Date
    }, ExtArgs["result"]["joueur"]>
    composites: {}
  }

  type JoueurGetPayload<S extends boolean | null | undefined | JoueurDefaultArgs> = $Result.GetResult<Prisma.$JoueurPayload, S>

  type JoueurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JoueurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JoueurCountAggregateInputType | true
    }

  export interface JoueurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Joueur'], meta: { name: 'Joueur' } }
    /**
     * Find zero or one Joueur that matches the filter.
     * @param {JoueurFindUniqueArgs} args - Arguments to find a Joueur
     * @example
     * // Get one Joueur
     * const joueur = await prisma.joueur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JoueurFindUniqueArgs>(args: SelectSubset<T, JoueurFindUniqueArgs<ExtArgs>>): Prisma__JoueurClient<$Result.GetResult<Prisma.$JoueurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Joueur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JoueurFindUniqueOrThrowArgs} args - Arguments to find a Joueur
     * @example
     * // Get one Joueur
     * const joueur = await prisma.joueur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JoueurFindUniqueOrThrowArgs>(args: SelectSubset<T, JoueurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JoueurClient<$Result.GetResult<Prisma.$JoueurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Joueur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoueurFindFirstArgs} args - Arguments to find a Joueur
     * @example
     * // Get one Joueur
     * const joueur = await prisma.joueur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JoueurFindFirstArgs>(args?: SelectSubset<T, JoueurFindFirstArgs<ExtArgs>>): Prisma__JoueurClient<$Result.GetResult<Prisma.$JoueurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Joueur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoueurFindFirstOrThrowArgs} args - Arguments to find a Joueur
     * @example
     * // Get one Joueur
     * const joueur = await prisma.joueur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JoueurFindFirstOrThrowArgs>(args?: SelectSubset<T, JoueurFindFirstOrThrowArgs<ExtArgs>>): Prisma__JoueurClient<$Result.GetResult<Prisma.$JoueurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Joueurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoueurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Joueurs
     * const joueurs = await prisma.joueur.findMany()
     * 
     * // Get first 10 Joueurs
     * const joueurs = await prisma.joueur.findMany({ take: 10 })
     * 
     * // Only select the `joueur_id`
     * const joueurWithJoueur_idOnly = await prisma.joueur.findMany({ select: { joueur_id: true } })
     * 
     */
    findMany<T extends JoueurFindManyArgs>(args?: SelectSubset<T, JoueurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoueurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Joueur.
     * @param {JoueurCreateArgs} args - Arguments to create a Joueur.
     * @example
     * // Create one Joueur
     * const Joueur = await prisma.joueur.create({
     *   data: {
     *     // ... data to create a Joueur
     *   }
     * })
     * 
     */
    create<T extends JoueurCreateArgs>(args: SelectSubset<T, JoueurCreateArgs<ExtArgs>>): Prisma__JoueurClient<$Result.GetResult<Prisma.$JoueurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Joueurs.
     * @param {JoueurCreateManyArgs} args - Arguments to create many Joueurs.
     * @example
     * // Create many Joueurs
     * const joueur = await prisma.joueur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JoueurCreateManyArgs>(args?: SelectSubset<T, JoueurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Joueur.
     * @param {JoueurDeleteArgs} args - Arguments to delete one Joueur.
     * @example
     * // Delete one Joueur
     * const Joueur = await prisma.joueur.delete({
     *   where: {
     *     // ... filter to delete one Joueur
     *   }
     * })
     * 
     */
    delete<T extends JoueurDeleteArgs>(args: SelectSubset<T, JoueurDeleteArgs<ExtArgs>>): Prisma__JoueurClient<$Result.GetResult<Prisma.$JoueurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Joueur.
     * @param {JoueurUpdateArgs} args - Arguments to update one Joueur.
     * @example
     * // Update one Joueur
     * const joueur = await prisma.joueur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JoueurUpdateArgs>(args: SelectSubset<T, JoueurUpdateArgs<ExtArgs>>): Prisma__JoueurClient<$Result.GetResult<Prisma.$JoueurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Joueurs.
     * @param {JoueurDeleteManyArgs} args - Arguments to filter Joueurs to delete.
     * @example
     * // Delete a few Joueurs
     * const { count } = await prisma.joueur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JoueurDeleteManyArgs>(args?: SelectSubset<T, JoueurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Joueurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoueurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Joueurs
     * const joueur = await prisma.joueur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JoueurUpdateManyArgs>(args: SelectSubset<T, JoueurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Joueur.
     * @param {JoueurUpsertArgs} args - Arguments to update or create a Joueur.
     * @example
     * // Update or create a Joueur
     * const joueur = await prisma.joueur.upsert({
     *   create: {
     *     // ... data to create a Joueur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Joueur we want to update
     *   }
     * })
     */
    upsert<T extends JoueurUpsertArgs>(args: SelectSubset<T, JoueurUpsertArgs<ExtArgs>>): Prisma__JoueurClient<$Result.GetResult<Prisma.$JoueurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Joueurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoueurCountArgs} args - Arguments to filter Joueurs to count.
     * @example
     * // Count the number of Joueurs
     * const count = await prisma.joueur.count({
     *   where: {
     *     // ... the filter for the Joueurs we want to count
     *   }
     * })
    **/
    count<T extends JoueurCountArgs>(
      args?: Subset<T, JoueurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JoueurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Joueur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoueurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JoueurAggregateArgs>(args: Subset<T, JoueurAggregateArgs>): Prisma.PrismaPromise<GetJoueurAggregateType<T>>

    /**
     * Group by Joueur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoueurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JoueurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JoueurGroupByArgs['orderBy'] }
        : { orderBy?: JoueurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JoueurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJoueurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Joueur model
   */
  readonly fields: JoueurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Joueur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JoueurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parties<T extends Joueur$partiesArgs<ExtArgs> = {}>(args?: Subset<T, Joueur$partiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Joueur model
   */
  interface JoueurFieldRefs {
    readonly joueur_id: FieldRef<"Joueur", 'Int'>
    readonly email: FieldRef<"Joueur", 'String'>
    readonly mdp: FieldRef<"Joueur", 'String'>
    readonly role: FieldRef<"Joueur", 'String'>
    readonly date_creation: FieldRef<"Joueur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Joueur findUnique
   */
  export type JoueurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joueur
     */
    select?: JoueurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Joueur
     */
    omit?: JoueurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoueurInclude<ExtArgs> | null
    /**
     * Filter, which Joueur to fetch.
     */
    where: JoueurWhereUniqueInput
  }

  /**
   * Joueur findUniqueOrThrow
   */
  export type JoueurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joueur
     */
    select?: JoueurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Joueur
     */
    omit?: JoueurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoueurInclude<ExtArgs> | null
    /**
     * Filter, which Joueur to fetch.
     */
    where: JoueurWhereUniqueInput
  }

  /**
   * Joueur findFirst
   */
  export type JoueurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joueur
     */
    select?: JoueurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Joueur
     */
    omit?: JoueurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoueurInclude<ExtArgs> | null
    /**
     * Filter, which Joueur to fetch.
     */
    where?: JoueurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Joueurs to fetch.
     */
    orderBy?: JoueurOrderByWithRelationInput | JoueurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Joueurs.
     */
    cursor?: JoueurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Joueurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Joueurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Joueurs.
     */
    distinct?: JoueurScalarFieldEnum | JoueurScalarFieldEnum[]
  }

  /**
   * Joueur findFirstOrThrow
   */
  export type JoueurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joueur
     */
    select?: JoueurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Joueur
     */
    omit?: JoueurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoueurInclude<ExtArgs> | null
    /**
     * Filter, which Joueur to fetch.
     */
    where?: JoueurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Joueurs to fetch.
     */
    orderBy?: JoueurOrderByWithRelationInput | JoueurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Joueurs.
     */
    cursor?: JoueurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Joueurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Joueurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Joueurs.
     */
    distinct?: JoueurScalarFieldEnum | JoueurScalarFieldEnum[]
  }

  /**
   * Joueur findMany
   */
  export type JoueurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joueur
     */
    select?: JoueurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Joueur
     */
    omit?: JoueurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoueurInclude<ExtArgs> | null
    /**
     * Filter, which Joueurs to fetch.
     */
    where?: JoueurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Joueurs to fetch.
     */
    orderBy?: JoueurOrderByWithRelationInput | JoueurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Joueurs.
     */
    cursor?: JoueurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Joueurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Joueurs.
     */
    skip?: number
    distinct?: JoueurScalarFieldEnum | JoueurScalarFieldEnum[]
  }

  /**
   * Joueur create
   */
  export type JoueurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joueur
     */
    select?: JoueurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Joueur
     */
    omit?: JoueurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoueurInclude<ExtArgs> | null
    /**
     * The data needed to create a Joueur.
     */
    data: XOR<JoueurCreateInput, JoueurUncheckedCreateInput>
  }

  /**
   * Joueur createMany
   */
  export type JoueurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Joueurs.
     */
    data: JoueurCreateManyInput | JoueurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Joueur update
   */
  export type JoueurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joueur
     */
    select?: JoueurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Joueur
     */
    omit?: JoueurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoueurInclude<ExtArgs> | null
    /**
     * The data needed to update a Joueur.
     */
    data: XOR<JoueurUpdateInput, JoueurUncheckedUpdateInput>
    /**
     * Choose, which Joueur to update.
     */
    where: JoueurWhereUniqueInput
  }

  /**
   * Joueur updateMany
   */
  export type JoueurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Joueurs.
     */
    data: XOR<JoueurUpdateManyMutationInput, JoueurUncheckedUpdateManyInput>
    /**
     * Filter which Joueurs to update
     */
    where?: JoueurWhereInput
    /**
     * Limit how many Joueurs to update.
     */
    limit?: number
  }

  /**
   * Joueur upsert
   */
  export type JoueurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joueur
     */
    select?: JoueurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Joueur
     */
    omit?: JoueurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoueurInclude<ExtArgs> | null
    /**
     * The filter to search for the Joueur to update in case it exists.
     */
    where: JoueurWhereUniqueInput
    /**
     * In case the Joueur found by the `where` argument doesn't exist, create a new Joueur with this data.
     */
    create: XOR<JoueurCreateInput, JoueurUncheckedCreateInput>
    /**
     * In case the Joueur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JoueurUpdateInput, JoueurUncheckedUpdateInput>
  }

  /**
   * Joueur delete
   */
  export type JoueurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joueur
     */
    select?: JoueurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Joueur
     */
    omit?: JoueurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoueurInclude<ExtArgs> | null
    /**
     * Filter which Joueur to delete.
     */
    where: JoueurWhereUniqueInput
  }

  /**
   * Joueur deleteMany
   */
  export type JoueurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Joueurs to delete
     */
    where?: JoueurWhereInput
    /**
     * Limit how many Joueurs to delete.
     */
    limit?: number
  }

  /**
   * Joueur.parties
   */
  export type Joueur$partiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    where?: PartieWhereInput
    orderBy?: PartieOrderByWithRelationInput | PartieOrderByWithRelationInput[]
    cursor?: PartieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartieScalarFieldEnum | PartieScalarFieldEnum[]
  }

  /**
   * Joueur without action
   */
  export type JoueurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Joueur
     */
    select?: JoueurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Joueur
     */
    omit?: JoueurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoueurInclude<ExtArgs> | null
  }


  /**
   * Model Partie
   */

  export type AggregatePartie = {
    _count: PartieCountAggregateOutputType | null
    _avg: PartieAvgAggregateOutputType | null
    _sum: PartieSumAggregateOutputType | null
    _min: PartieMinAggregateOutputType | null
    _max: PartieMaxAggregateOutputType | null
  }

  export type PartieAvgAggregateOutputType = {
    partie_id: number | null
    joueur_id: number | null
  }

  export type PartieSumAggregateOutputType = {
    partie_id: number | null
    joueur_id: number | null
  }

  export type PartieMinAggregateOutputType = {
    partie_id: number | null
    date_debut_partie: Date | null
    date_fin_partie: Date | null
    statut: string | null
    joueur_id: number | null
  }

  export type PartieMaxAggregateOutputType = {
    partie_id: number | null
    date_debut_partie: Date | null
    date_fin_partie: Date | null
    statut: string | null
    joueur_id: number | null
  }

  export type PartieCountAggregateOutputType = {
    partie_id: number
    date_debut_partie: number
    date_fin_partie: number
    statut: number
    joueur_id: number
    _all: number
  }


  export type PartieAvgAggregateInputType = {
    partie_id?: true
    joueur_id?: true
  }

  export type PartieSumAggregateInputType = {
    partie_id?: true
    joueur_id?: true
  }

  export type PartieMinAggregateInputType = {
    partie_id?: true
    date_debut_partie?: true
    date_fin_partie?: true
    statut?: true
    joueur_id?: true
  }

  export type PartieMaxAggregateInputType = {
    partie_id?: true
    date_debut_partie?: true
    date_fin_partie?: true
    statut?: true
    joueur_id?: true
  }

  export type PartieCountAggregateInputType = {
    partie_id?: true
    date_debut_partie?: true
    date_fin_partie?: true
    statut?: true
    joueur_id?: true
    _all?: true
  }

  export type PartieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partie to aggregate.
     */
    where?: PartieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartieOrderByWithRelationInput | PartieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parties
    **/
    _count?: true | PartieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartieMaxAggregateInputType
  }

  export type GetPartieAggregateType<T extends PartieAggregateArgs> = {
        [P in keyof T & keyof AggregatePartie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartie[P]>
      : GetScalarType<T[P], AggregatePartie[P]>
  }




  export type PartieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartieWhereInput
    orderBy?: PartieOrderByWithAggregationInput | PartieOrderByWithAggregationInput[]
    by: PartieScalarFieldEnum[] | PartieScalarFieldEnum
    having?: PartieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartieCountAggregateInputType | true
    _avg?: PartieAvgAggregateInputType
    _sum?: PartieSumAggregateInputType
    _min?: PartieMinAggregateInputType
    _max?: PartieMaxAggregateInputType
  }

  export type PartieGroupByOutputType = {
    partie_id: number
    date_debut_partie: Date
    date_fin_partie: Date | null
    statut: string
    joueur_id: number
    _count: PartieCountAggregateOutputType | null
    _avg: PartieAvgAggregateOutputType | null
    _sum: PartieSumAggregateOutputType | null
    _min: PartieMinAggregateOutputType | null
    _max: PartieMaxAggregateOutputType | null
  }

  type GetPartieGroupByPayload<T extends PartieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartieGroupByOutputType[P]>
            : GetScalarType<T[P], PartieGroupByOutputType[P]>
        }
      >
    >


  export type PartieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    partie_id?: boolean
    date_debut_partie?: boolean
    date_fin_partie?: boolean
    statut?: boolean
    joueur_id?: boolean
    joueur?: boolean | JoueurDefaultArgs<ExtArgs>
    cartes?: boolean | Partie$cartesArgs<ExtArgs>
    _count?: boolean | PartieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partie"]>



  export type PartieSelectScalar = {
    partie_id?: boolean
    date_debut_partie?: boolean
    date_fin_partie?: boolean
    statut?: boolean
    joueur_id?: boolean
  }

  export type PartieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"partie_id" | "date_debut_partie" | "date_fin_partie" | "statut" | "joueur_id", ExtArgs["result"]["partie"]>
  export type PartieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    joueur?: boolean | JoueurDefaultArgs<ExtArgs>
    cartes?: boolean | Partie$cartesArgs<ExtArgs>
    _count?: boolean | PartieCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PartiePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partie"
    objects: {
      joueur: Prisma.$JoueurPayload<ExtArgs>
      cartes: Prisma.$CartePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      partie_id: number
      date_debut_partie: Date
      date_fin_partie: Date | null
      statut: string
      joueur_id: number
    }, ExtArgs["result"]["partie"]>
    composites: {}
  }

  type PartieGetPayload<S extends boolean | null | undefined | PartieDefaultArgs> = $Result.GetResult<Prisma.$PartiePayload, S>

  type PartieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartieCountAggregateInputType | true
    }

  export interface PartieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partie'], meta: { name: 'Partie' } }
    /**
     * Find zero or one Partie that matches the filter.
     * @param {PartieFindUniqueArgs} args - Arguments to find a Partie
     * @example
     * // Get one Partie
     * const partie = await prisma.partie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartieFindUniqueArgs>(args: SelectSubset<T, PartieFindUniqueArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Partie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartieFindUniqueOrThrowArgs} args - Arguments to find a Partie
     * @example
     * // Get one Partie
     * const partie = await prisma.partie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartieFindUniqueOrThrowArgs>(args: SelectSubset<T, PartieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartieFindFirstArgs} args - Arguments to find a Partie
     * @example
     * // Get one Partie
     * const partie = await prisma.partie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartieFindFirstArgs>(args?: SelectSubset<T, PartieFindFirstArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartieFindFirstOrThrowArgs} args - Arguments to find a Partie
     * @example
     * // Get one Partie
     * const partie = await prisma.partie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartieFindFirstOrThrowArgs>(args?: SelectSubset<T, PartieFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parties
     * const parties = await prisma.partie.findMany()
     * 
     * // Get first 10 Parties
     * const parties = await prisma.partie.findMany({ take: 10 })
     * 
     * // Only select the `partie_id`
     * const partieWithPartie_idOnly = await prisma.partie.findMany({ select: { partie_id: true } })
     * 
     */
    findMany<T extends PartieFindManyArgs>(args?: SelectSubset<T, PartieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Partie.
     * @param {PartieCreateArgs} args - Arguments to create a Partie.
     * @example
     * // Create one Partie
     * const Partie = await prisma.partie.create({
     *   data: {
     *     // ... data to create a Partie
     *   }
     * })
     * 
     */
    create<T extends PartieCreateArgs>(args: SelectSubset<T, PartieCreateArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parties.
     * @param {PartieCreateManyArgs} args - Arguments to create many Parties.
     * @example
     * // Create many Parties
     * const partie = await prisma.partie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartieCreateManyArgs>(args?: SelectSubset<T, PartieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Partie.
     * @param {PartieDeleteArgs} args - Arguments to delete one Partie.
     * @example
     * // Delete one Partie
     * const Partie = await prisma.partie.delete({
     *   where: {
     *     // ... filter to delete one Partie
     *   }
     * })
     * 
     */
    delete<T extends PartieDeleteArgs>(args: SelectSubset<T, PartieDeleteArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Partie.
     * @param {PartieUpdateArgs} args - Arguments to update one Partie.
     * @example
     * // Update one Partie
     * const partie = await prisma.partie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartieUpdateArgs>(args: SelectSubset<T, PartieUpdateArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parties.
     * @param {PartieDeleteManyArgs} args - Arguments to filter Parties to delete.
     * @example
     * // Delete a few Parties
     * const { count } = await prisma.partie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartieDeleteManyArgs>(args?: SelectSubset<T, PartieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parties
     * const partie = await prisma.partie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartieUpdateManyArgs>(args: SelectSubset<T, PartieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Partie.
     * @param {PartieUpsertArgs} args - Arguments to update or create a Partie.
     * @example
     * // Update or create a Partie
     * const partie = await prisma.partie.upsert({
     *   create: {
     *     // ... data to create a Partie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partie we want to update
     *   }
     * })
     */
    upsert<T extends PartieUpsertArgs>(args: SelectSubset<T, PartieUpsertArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartieCountArgs} args - Arguments to filter Parties to count.
     * @example
     * // Count the number of Parties
     * const count = await prisma.partie.count({
     *   where: {
     *     // ... the filter for the Parties we want to count
     *   }
     * })
    **/
    count<T extends PartieCountArgs>(
      args?: Subset<T, PartieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartieAggregateArgs>(args: Subset<T, PartieAggregateArgs>): Prisma.PrismaPromise<GetPartieAggregateType<T>>

    /**
     * Group by Partie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartieGroupByArgs['orderBy'] }
        : { orderBy?: PartieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partie model
   */
  readonly fields: PartieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    joueur<T extends JoueurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JoueurDefaultArgs<ExtArgs>>): Prisma__JoueurClient<$Result.GetResult<Prisma.$JoueurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cartes<T extends Partie$cartesArgs<ExtArgs> = {}>(args?: Subset<T, Partie$cartesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Partie model
   */
  interface PartieFieldRefs {
    readonly partie_id: FieldRef<"Partie", 'Int'>
    readonly date_debut_partie: FieldRef<"Partie", 'DateTime'>
    readonly date_fin_partie: FieldRef<"Partie", 'DateTime'>
    readonly statut: FieldRef<"Partie", 'String'>
    readonly joueur_id: FieldRef<"Partie", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Partie findUnique
   */
  export type PartieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * Filter, which Partie to fetch.
     */
    where: PartieWhereUniqueInput
  }

  /**
   * Partie findUniqueOrThrow
   */
  export type PartieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * Filter, which Partie to fetch.
     */
    where: PartieWhereUniqueInput
  }

  /**
   * Partie findFirst
   */
  export type PartieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * Filter, which Partie to fetch.
     */
    where?: PartieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartieOrderByWithRelationInput | PartieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parties.
     */
    cursor?: PartieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parties.
     */
    distinct?: PartieScalarFieldEnum | PartieScalarFieldEnum[]
  }

  /**
   * Partie findFirstOrThrow
   */
  export type PartieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * Filter, which Partie to fetch.
     */
    where?: PartieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartieOrderByWithRelationInput | PartieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parties.
     */
    cursor?: PartieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parties.
     */
    distinct?: PartieScalarFieldEnum | PartieScalarFieldEnum[]
  }

  /**
   * Partie findMany
   */
  export type PartieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * Filter, which Parties to fetch.
     */
    where?: PartieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartieOrderByWithRelationInput | PartieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parties.
     */
    cursor?: PartieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    distinct?: PartieScalarFieldEnum | PartieScalarFieldEnum[]
  }

  /**
   * Partie create
   */
  export type PartieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * The data needed to create a Partie.
     */
    data: XOR<PartieCreateInput, PartieUncheckedCreateInput>
  }

  /**
   * Partie createMany
   */
  export type PartieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parties.
     */
    data: PartieCreateManyInput | PartieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partie update
   */
  export type PartieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * The data needed to update a Partie.
     */
    data: XOR<PartieUpdateInput, PartieUncheckedUpdateInput>
    /**
     * Choose, which Partie to update.
     */
    where: PartieWhereUniqueInput
  }

  /**
   * Partie updateMany
   */
  export type PartieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parties.
     */
    data: XOR<PartieUpdateManyMutationInput, PartieUncheckedUpdateManyInput>
    /**
     * Filter which Parties to update
     */
    where?: PartieWhereInput
    /**
     * Limit how many Parties to update.
     */
    limit?: number
  }

  /**
   * Partie upsert
   */
  export type PartieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * The filter to search for the Partie to update in case it exists.
     */
    where: PartieWhereUniqueInput
    /**
     * In case the Partie found by the `where` argument doesn't exist, create a new Partie with this data.
     */
    create: XOR<PartieCreateInput, PartieUncheckedCreateInput>
    /**
     * In case the Partie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartieUpdateInput, PartieUncheckedUpdateInput>
  }

  /**
   * Partie delete
   */
  export type PartieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * Filter which Partie to delete.
     */
    where: PartieWhereUniqueInput
  }

  /**
   * Partie deleteMany
   */
  export type PartieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parties to delete
     */
    where?: PartieWhereInput
    /**
     * Limit how many Parties to delete.
     */
    limit?: number
  }

  /**
   * Partie.cartes
   */
  export type Partie$cartesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carte
     */
    select?: CarteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carte
     */
    omit?: CarteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteInclude<ExtArgs> | null
    where?: CarteWhereInput
    orderBy?: CarteOrderByWithRelationInput | CarteOrderByWithRelationInput[]
    cursor?: CarteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarteScalarFieldEnum | CarteScalarFieldEnum[]
  }

  /**
   * Partie without action
   */
  export type PartieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
  }


  /**
   * Model Carte
   */

  export type AggregateCarte = {
    _count: CarteCountAggregateOutputType | null
    _avg: CarteAvgAggregateOutputType | null
    _sum: CarteSumAggregateOutputType | null
    _min: CarteMinAggregateOutputType | null
    _max: CarteMaxAggregateOutputType | null
  }

  export type CarteAvgAggregateOutputType = {
    carte_id: number | null
    partie_id: number | null
  }

  export type CarteSumAggregateOutputType = {
    carte_id: number | null
    partie_id: number | null
  }

  export type CarteMinAggregateOutputType = {
    carte_id: number | null
    titre: string | null
    image_url: string | null
    texte: string | null
    is_over: boolean | null
    partie_id: number | null
  }

  export type CarteMaxAggregateOutputType = {
    carte_id: number | null
    titre: string | null
    image_url: string | null
    texte: string | null
    is_over: boolean | null
    partie_id: number | null
  }

  export type CarteCountAggregateOutputType = {
    carte_id: number
    titre: number
    image_url: number
    texte: number
    is_over: number
    partie_id: number
    _all: number
  }


  export type CarteAvgAggregateInputType = {
    carte_id?: true
    partie_id?: true
  }

  export type CarteSumAggregateInputType = {
    carte_id?: true
    partie_id?: true
  }

  export type CarteMinAggregateInputType = {
    carte_id?: true
    titre?: true
    image_url?: true
    texte?: true
    is_over?: true
    partie_id?: true
  }

  export type CarteMaxAggregateInputType = {
    carte_id?: true
    titre?: true
    image_url?: true
    texte?: true
    is_over?: true
    partie_id?: true
  }

  export type CarteCountAggregateInputType = {
    carte_id?: true
    titre?: true
    image_url?: true
    texte?: true
    is_over?: true
    partie_id?: true
    _all?: true
  }

  export type CarteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carte to aggregate.
     */
    where?: CarteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartes to fetch.
     */
    orderBy?: CarteOrderByWithRelationInput | CarteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cartes
    **/
    _count?: true | CarteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarteMaxAggregateInputType
  }

  export type GetCarteAggregateType<T extends CarteAggregateArgs> = {
        [P in keyof T & keyof AggregateCarte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarte[P]>
      : GetScalarType<T[P], AggregateCarte[P]>
  }




  export type CarteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarteWhereInput
    orderBy?: CarteOrderByWithAggregationInput | CarteOrderByWithAggregationInput[]
    by: CarteScalarFieldEnum[] | CarteScalarFieldEnum
    having?: CarteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarteCountAggregateInputType | true
    _avg?: CarteAvgAggregateInputType
    _sum?: CarteSumAggregateInputType
    _min?: CarteMinAggregateInputType
    _max?: CarteMaxAggregateInputType
  }

  export type CarteGroupByOutputType = {
    carte_id: number
    titre: string
    image_url: string | null
    texte: string
    is_over: boolean
    partie_id: number
    _count: CarteCountAggregateOutputType | null
    _avg: CarteAvgAggregateOutputType | null
    _sum: CarteSumAggregateOutputType | null
    _min: CarteMinAggregateOutputType | null
    _max: CarteMaxAggregateOutputType | null
  }

  type GetCarteGroupByPayload<T extends CarteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarteGroupByOutputType[P]>
            : GetScalarType<T[P], CarteGroupByOutputType[P]>
        }
      >
    >


  export type CarteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    carte_id?: boolean
    titre?: boolean
    image_url?: boolean
    texte?: boolean
    is_over?: boolean
    partie_id?: boolean
    partie?: boolean | PartieDefaultArgs<ExtArgs>
    choix?: boolean | Carte$choixArgs<ExtArgs>
    suivie_par?: boolean | Carte$suivie_parArgs<ExtArgs>
    _count?: boolean | CarteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carte"]>



  export type CarteSelectScalar = {
    carte_id?: boolean
    titre?: boolean
    image_url?: boolean
    texte?: boolean
    is_over?: boolean
    partie_id?: boolean
  }

  export type CarteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"carte_id" | "titre" | "image_url" | "texte" | "is_over" | "partie_id", ExtArgs["result"]["carte"]>
  export type CarteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partie?: boolean | PartieDefaultArgs<ExtArgs>
    choix?: boolean | Carte$choixArgs<ExtArgs>
    suivie_par?: boolean | Carte$suivie_parArgs<ExtArgs>
    _count?: boolean | CarteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CartePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carte"
    objects: {
      partie: Prisma.$PartiePayload<ExtArgs>
      choix: Prisma.$ChoixPayload<ExtArgs>[]
      suivie_par: Prisma.$ChoixPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      carte_id: number
      titre: string
      image_url: string | null
      texte: string
      is_over: boolean
      partie_id: number
    }, ExtArgs["result"]["carte"]>
    composites: {}
  }

  type CarteGetPayload<S extends boolean | null | undefined | CarteDefaultArgs> = $Result.GetResult<Prisma.$CartePayload, S>

  type CarteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarteCountAggregateInputType | true
    }

  export interface CarteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carte'], meta: { name: 'Carte' } }
    /**
     * Find zero or one Carte that matches the filter.
     * @param {CarteFindUniqueArgs} args - Arguments to find a Carte
     * @example
     * // Get one Carte
     * const carte = await prisma.carte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarteFindUniqueArgs>(args: SelectSubset<T, CarteFindUniqueArgs<ExtArgs>>): Prisma__CarteClient<$Result.GetResult<Prisma.$CartePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarteFindUniqueOrThrowArgs} args - Arguments to find a Carte
     * @example
     * // Get one Carte
     * const carte = await prisma.carte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarteFindUniqueOrThrowArgs>(args: SelectSubset<T, CarteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarteClient<$Result.GetResult<Prisma.$CartePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarteFindFirstArgs} args - Arguments to find a Carte
     * @example
     * // Get one Carte
     * const carte = await prisma.carte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarteFindFirstArgs>(args?: SelectSubset<T, CarteFindFirstArgs<ExtArgs>>): Prisma__CarteClient<$Result.GetResult<Prisma.$CartePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarteFindFirstOrThrowArgs} args - Arguments to find a Carte
     * @example
     * // Get one Carte
     * const carte = await prisma.carte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarteFindFirstOrThrowArgs>(args?: SelectSubset<T, CarteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarteClient<$Result.GetResult<Prisma.$CartePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cartes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cartes
     * const cartes = await prisma.carte.findMany()
     * 
     * // Get first 10 Cartes
     * const cartes = await prisma.carte.findMany({ take: 10 })
     * 
     * // Only select the `carte_id`
     * const carteWithCarte_idOnly = await prisma.carte.findMany({ select: { carte_id: true } })
     * 
     */
    findMany<T extends CarteFindManyArgs>(args?: SelectSubset<T, CarteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carte.
     * @param {CarteCreateArgs} args - Arguments to create a Carte.
     * @example
     * // Create one Carte
     * const Carte = await prisma.carte.create({
     *   data: {
     *     // ... data to create a Carte
     *   }
     * })
     * 
     */
    create<T extends CarteCreateArgs>(args: SelectSubset<T, CarteCreateArgs<ExtArgs>>): Prisma__CarteClient<$Result.GetResult<Prisma.$CartePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cartes.
     * @param {CarteCreateManyArgs} args - Arguments to create many Cartes.
     * @example
     * // Create many Cartes
     * const carte = await prisma.carte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarteCreateManyArgs>(args?: SelectSubset<T, CarteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carte.
     * @param {CarteDeleteArgs} args - Arguments to delete one Carte.
     * @example
     * // Delete one Carte
     * const Carte = await prisma.carte.delete({
     *   where: {
     *     // ... filter to delete one Carte
     *   }
     * })
     * 
     */
    delete<T extends CarteDeleteArgs>(args: SelectSubset<T, CarteDeleteArgs<ExtArgs>>): Prisma__CarteClient<$Result.GetResult<Prisma.$CartePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carte.
     * @param {CarteUpdateArgs} args - Arguments to update one Carte.
     * @example
     * // Update one Carte
     * const carte = await prisma.carte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarteUpdateArgs>(args: SelectSubset<T, CarteUpdateArgs<ExtArgs>>): Prisma__CarteClient<$Result.GetResult<Prisma.$CartePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cartes.
     * @param {CarteDeleteManyArgs} args - Arguments to filter Cartes to delete.
     * @example
     * // Delete a few Cartes
     * const { count } = await prisma.carte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarteDeleteManyArgs>(args?: SelectSubset<T, CarteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cartes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cartes
     * const carte = await prisma.carte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarteUpdateManyArgs>(args: SelectSubset<T, CarteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carte.
     * @param {CarteUpsertArgs} args - Arguments to update or create a Carte.
     * @example
     * // Update or create a Carte
     * const carte = await prisma.carte.upsert({
     *   create: {
     *     // ... data to create a Carte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carte we want to update
     *   }
     * })
     */
    upsert<T extends CarteUpsertArgs>(args: SelectSubset<T, CarteUpsertArgs<ExtArgs>>): Prisma__CarteClient<$Result.GetResult<Prisma.$CartePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cartes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarteCountArgs} args - Arguments to filter Cartes to count.
     * @example
     * // Count the number of Cartes
     * const count = await prisma.carte.count({
     *   where: {
     *     // ... the filter for the Cartes we want to count
     *   }
     * })
    **/
    count<T extends CarteCountArgs>(
      args?: Subset<T, CarteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarteAggregateArgs>(args: Subset<T, CarteAggregateArgs>): Prisma.PrismaPromise<GetCarteAggregateType<T>>

    /**
     * Group by Carte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarteGroupByArgs['orderBy'] }
        : { orderBy?: CarteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carte model
   */
  readonly fields: CarteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partie<T extends PartieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartieDefaultArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    choix<T extends Carte$choixArgs<ExtArgs> = {}>(args?: Subset<T, Carte$choixArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    suivie_par<T extends Carte$suivie_parArgs<ExtArgs> = {}>(args?: Subset<T, Carte$suivie_parArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carte model
   */
  interface CarteFieldRefs {
    readonly carte_id: FieldRef<"Carte", 'Int'>
    readonly titre: FieldRef<"Carte", 'String'>
    readonly image_url: FieldRef<"Carte", 'String'>
    readonly texte: FieldRef<"Carte", 'String'>
    readonly is_over: FieldRef<"Carte", 'Boolean'>
    readonly partie_id: FieldRef<"Carte", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Carte findUnique
   */
  export type CarteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carte
     */
    select?: CarteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carte
     */
    omit?: CarteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteInclude<ExtArgs> | null
    /**
     * Filter, which Carte to fetch.
     */
    where: CarteWhereUniqueInput
  }

  /**
   * Carte findUniqueOrThrow
   */
  export type CarteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carte
     */
    select?: CarteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carte
     */
    omit?: CarteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteInclude<ExtArgs> | null
    /**
     * Filter, which Carte to fetch.
     */
    where: CarteWhereUniqueInput
  }

  /**
   * Carte findFirst
   */
  export type CarteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carte
     */
    select?: CarteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carte
     */
    omit?: CarteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteInclude<ExtArgs> | null
    /**
     * Filter, which Carte to fetch.
     */
    where?: CarteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartes to fetch.
     */
    orderBy?: CarteOrderByWithRelationInput | CarteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cartes.
     */
    cursor?: CarteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cartes.
     */
    distinct?: CarteScalarFieldEnum | CarteScalarFieldEnum[]
  }

  /**
   * Carte findFirstOrThrow
   */
  export type CarteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carte
     */
    select?: CarteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carte
     */
    omit?: CarteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteInclude<ExtArgs> | null
    /**
     * Filter, which Carte to fetch.
     */
    where?: CarteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartes to fetch.
     */
    orderBy?: CarteOrderByWithRelationInput | CarteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cartes.
     */
    cursor?: CarteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cartes.
     */
    distinct?: CarteScalarFieldEnum | CarteScalarFieldEnum[]
  }

  /**
   * Carte findMany
   */
  export type CarteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carte
     */
    select?: CarteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carte
     */
    omit?: CarteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteInclude<ExtArgs> | null
    /**
     * Filter, which Cartes to fetch.
     */
    where?: CarteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cartes to fetch.
     */
    orderBy?: CarteOrderByWithRelationInput | CarteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cartes.
     */
    cursor?: CarteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cartes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cartes.
     */
    skip?: number
    distinct?: CarteScalarFieldEnum | CarteScalarFieldEnum[]
  }

  /**
   * Carte create
   */
  export type CarteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carte
     */
    select?: CarteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carte
     */
    omit?: CarteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteInclude<ExtArgs> | null
    /**
     * The data needed to create a Carte.
     */
    data: XOR<CarteCreateInput, CarteUncheckedCreateInput>
  }

  /**
   * Carte createMany
   */
  export type CarteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cartes.
     */
    data: CarteCreateManyInput | CarteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carte update
   */
  export type CarteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carte
     */
    select?: CarteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carte
     */
    omit?: CarteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteInclude<ExtArgs> | null
    /**
     * The data needed to update a Carte.
     */
    data: XOR<CarteUpdateInput, CarteUncheckedUpdateInput>
    /**
     * Choose, which Carte to update.
     */
    where: CarteWhereUniqueInput
  }

  /**
   * Carte updateMany
   */
  export type CarteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cartes.
     */
    data: XOR<CarteUpdateManyMutationInput, CarteUncheckedUpdateManyInput>
    /**
     * Filter which Cartes to update
     */
    where?: CarteWhereInput
    /**
     * Limit how many Cartes to update.
     */
    limit?: number
  }

  /**
   * Carte upsert
   */
  export type CarteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carte
     */
    select?: CarteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carte
     */
    omit?: CarteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteInclude<ExtArgs> | null
    /**
     * The filter to search for the Carte to update in case it exists.
     */
    where: CarteWhereUniqueInput
    /**
     * In case the Carte found by the `where` argument doesn't exist, create a new Carte with this data.
     */
    create: XOR<CarteCreateInput, CarteUncheckedCreateInput>
    /**
     * In case the Carte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarteUpdateInput, CarteUncheckedUpdateInput>
  }

  /**
   * Carte delete
   */
  export type CarteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carte
     */
    select?: CarteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carte
     */
    omit?: CarteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteInclude<ExtArgs> | null
    /**
     * Filter which Carte to delete.
     */
    where: CarteWhereUniqueInput
  }

  /**
   * Carte deleteMany
   */
  export type CarteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cartes to delete
     */
    where?: CarteWhereInput
    /**
     * Limit how many Cartes to delete.
     */
    limit?: number
  }

  /**
   * Carte.choix
   */
  export type Carte$choixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    where?: ChoixWhereInput
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    cursor?: ChoixWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoixScalarFieldEnum | ChoixScalarFieldEnum[]
  }

  /**
   * Carte.suivie_par
   */
  export type Carte$suivie_parArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    where?: ChoixWhereInput
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    cursor?: ChoixWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoixScalarFieldEnum | ChoixScalarFieldEnum[]
  }

  /**
   * Carte without action
   */
  export type CarteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carte
     */
    select?: CarteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carte
     */
    omit?: CarteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteInclude<ExtArgs> | null
  }


  /**
   * Model Choix
   */

  export type AggregateChoix = {
    _count: ChoixCountAggregateOutputType | null
    _avg: ChoixAvgAggregateOutputType | null
    _sum: ChoixSumAggregateOutputType | null
    _min: ChoixMinAggregateOutputType | null
    _max: ChoixMaxAggregateOutputType | null
  }

  export type ChoixAvgAggregateOutputType = {
    choix_id: number | null
    carte_suivante_default: number | null
    carte_id: number | null
  }

  export type ChoixSumAggregateOutputType = {
    choix_id: number | null
    carte_suivante_default: number | null
    carte_id: number | null
  }

  export type ChoixMinAggregateOutputType = {
    choix_id: number | null
    texte: string | null
    carte_suivante_default: number | null
    carte_id: number | null
  }

  export type ChoixMaxAggregateOutputType = {
    choix_id: number | null
    texte: string | null
    carte_suivante_default: number | null
    carte_id: number | null
  }

  export type ChoixCountAggregateOutputType = {
    choix_id: number
    texte: number
    carte_suivante_default: number
    carte_id: number
    _all: number
  }


  export type ChoixAvgAggregateInputType = {
    choix_id?: true
    carte_suivante_default?: true
    carte_id?: true
  }

  export type ChoixSumAggregateInputType = {
    choix_id?: true
    carte_suivante_default?: true
    carte_id?: true
  }

  export type ChoixMinAggregateInputType = {
    choix_id?: true
    texte?: true
    carte_suivante_default?: true
    carte_id?: true
  }

  export type ChoixMaxAggregateInputType = {
    choix_id?: true
    texte?: true
    carte_suivante_default?: true
    carte_id?: true
  }

  export type ChoixCountAggregateInputType = {
    choix_id?: true
    texte?: true
    carte_suivante_default?: true
    carte_id?: true
    _all?: true
  }

  export type ChoixAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choix to aggregate.
     */
    where?: ChoixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choixes to fetch.
     */
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Choixes
    **/
    _count?: true | ChoixCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoixAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoixSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoixMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoixMaxAggregateInputType
  }

  export type GetChoixAggregateType<T extends ChoixAggregateArgs> = {
        [P in keyof T & keyof AggregateChoix]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoix[P]>
      : GetScalarType<T[P], AggregateChoix[P]>
  }




  export type ChoixGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoixWhereInput
    orderBy?: ChoixOrderByWithAggregationInput | ChoixOrderByWithAggregationInput[]
    by: ChoixScalarFieldEnum[] | ChoixScalarFieldEnum
    having?: ChoixScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoixCountAggregateInputType | true
    _avg?: ChoixAvgAggregateInputType
    _sum?: ChoixSumAggregateInputType
    _min?: ChoixMinAggregateInputType
    _max?: ChoixMaxAggregateInputType
  }

  export type ChoixGroupByOutputType = {
    choix_id: number
    texte: string
    carte_suivante_default: number | null
    carte_id: number
    _count: ChoixCountAggregateOutputType | null
    _avg: ChoixAvgAggregateOutputType | null
    _sum: ChoixSumAggregateOutputType | null
    _min: ChoixMinAggregateOutputType | null
    _max: ChoixMaxAggregateOutputType | null
  }

  type GetChoixGroupByPayload<T extends ChoixGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoixGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoixGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoixGroupByOutputType[P]>
            : GetScalarType<T[P], ChoixGroupByOutputType[P]>
        }
      >
    >


  export type ChoixSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    choix_id?: boolean
    texte?: boolean
    carte_suivante_default?: boolean
    carte_id?: boolean
    carte_suivante?: boolean | Choix$carte_suivanteArgs<ExtArgs>
    carte?: boolean | CarteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choix"]>



  export type ChoixSelectScalar = {
    choix_id?: boolean
    texte?: boolean
    carte_suivante_default?: boolean
    carte_id?: boolean
  }

  export type ChoixOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"choix_id" | "texte" | "carte_suivante_default" | "carte_id", ExtArgs["result"]["choix"]>
  export type ChoixInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carte_suivante?: boolean | Choix$carte_suivanteArgs<ExtArgs>
    carte?: boolean | CarteDefaultArgs<ExtArgs>
  }

  export type $ChoixPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Choix"
    objects: {
      carte_suivante: Prisma.$CartePayload<ExtArgs> | null
      carte: Prisma.$CartePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      choix_id: number
      texte: string
      carte_suivante_default: number | null
      carte_id: number
    }, ExtArgs["result"]["choix"]>
    composites: {}
  }

  type ChoixGetPayload<S extends boolean | null | undefined | ChoixDefaultArgs> = $Result.GetResult<Prisma.$ChoixPayload, S>

  type ChoixCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChoixFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoixCountAggregateInputType | true
    }

  export interface ChoixDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Choix'], meta: { name: 'Choix' } }
    /**
     * Find zero or one Choix that matches the filter.
     * @param {ChoixFindUniqueArgs} args - Arguments to find a Choix
     * @example
     * // Get one Choix
     * const choix = await prisma.choix.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoixFindUniqueArgs>(args: SelectSubset<T, ChoixFindUniqueArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Choix that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChoixFindUniqueOrThrowArgs} args - Arguments to find a Choix
     * @example
     * // Get one Choix
     * const choix = await prisma.choix.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoixFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoixFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choix that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixFindFirstArgs} args - Arguments to find a Choix
     * @example
     * // Get one Choix
     * const choix = await prisma.choix.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoixFindFirstArgs>(args?: SelectSubset<T, ChoixFindFirstArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choix that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixFindFirstOrThrowArgs} args - Arguments to find a Choix
     * @example
     * // Get one Choix
     * const choix = await prisma.choix.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoixFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoixFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Choixes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Choixes
     * const choixes = await prisma.choix.findMany()
     * 
     * // Get first 10 Choixes
     * const choixes = await prisma.choix.findMany({ take: 10 })
     * 
     * // Only select the `choix_id`
     * const choixWithChoix_idOnly = await prisma.choix.findMany({ select: { choix_id: true } })
     * 
     */
    findMany<T extends ChoixFindManyArgs>(args?: SelectSubset<T, ChoixFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Choix.
     * @param {ChoixCreateArgs} args - Arguments to create a Choix.
     * @example
     * // Create one Choix
     * const Choix = await prisma.choix.create({
     *   data: {
     *     // ... data to create a Choix
     *   }
     * })
     * 
     */
    create<T extends ChoixCreateArgs>(args: SelectSubset<T, ChoixCreateArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Choixes.
     * @param {ChoixCreateManyArgs} args - Arguments to create many Choixes.
     * @example
     * // Create many Choixes
     * const choix = await prisma.choix.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoixCreateManyArgs>(args?: SelectSubset<T, ChoixCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Choix.
     * @param {ChoixDeleteArgs} args - Arguments to delete one Choix.
     * @example
     * // Delete one Choix
     * const Choix = await prisma.choix.delete({
     *   where: {
     *     // ... filter to delete one Choix
     *   }
     * })
     * 
     */
    delete<T extends ChoixDeleteArgs>(args: SelectSubset<T, ChoixDeleteArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Choix.
     * @param {ChoixUpdateArgs} args - Arguments to update one Choix.
     * @example
     * // Update one Choix
     * const choix = await prisma.choix.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoixUpdateArgs>(args: SelectSubset<T, ChoixUpdateArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Choixes.
     * @param {ChoixDeleteManyArgs} args - Arguments to filter Choixes to delete.
     * @example
     * // Delete a few Choixes
     * const { count } = await prisma.choix.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoixDeleteManyArgs>(args?: SelectSubset<T, ChoixDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Choixes
     * const choix = await prisma.choix.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoixUpdateManyArgs>(args: SelectSubset<T, ChoixUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Choix.
     * @param {ChoixUpsertArgs} args - Arguments to update or create a Choix.
     * @example
     * // Update or create a Choix
     * const choix = await prisma.choix.upsert({
     *   create: {
     *     // ... data to create a Choix
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Choix we want to update
     *   }
     * })
     */
    upsert<T extends ChoixUpsertArgs>(args: SelectSubset<T, ChoixUpsertArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Choixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixCountArgs} args - Arguments to filter Choixes to count.
     * @example
     * // Count the number of Choixes
     * const count = await prisma.choix.count({
     *   where: {
     *     // ... the filter for the Choixes we want to count
     *   }
     * })
    **/
    count<T extends ChoixCountArgs>(
      args?: Subset<T, ChoixCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoixCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Choix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChoixAggregateArgs>(args: Subset<T, ChoixAggregateArgs>): Prisma.PrismaPromise<GetChoixAggregateType<T>>

    /**
     * Group by Choix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChoixGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoixGroupByArgs['orderBy'] }
        : { orderBy?: ChoixGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChoixGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoixGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Choix model
   */
  readonly fields: ChoixFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Choix.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoixClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carte_suivante<T extends Choix$carte_suivanteArgs<ExtArgs> = {}>(args?: Subset<T, Choix$carte_suivanteArgs<ExtArgs>>): Prisma__CarteClient<$Result.GetResult<Prisma.$CartePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    carte<T extends CarteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarteDefaultArgs<ExtArgs>>): Prisma__CarteClient<$Result.GetResult<Prisma.$CartePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Choix model
   */
  interface ChoixFieldRefs {
    readonly choix_id: FieldRef<"Choix", 'Int'>
    readonly texte: FieldRef<"Choix", 'String'>
    readonly carte_suivante_default: FieldRef<"Choix", 'Int'>
    readonly carte_id: FieldRef<"Choix", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Choix findUnique
   */
  export type ChoixFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter, which Choix to fetch.
     */
    where: ChoixWhereUniqueInput
  }

  /**
   * Choix findUniqueOrThrow
   */
  export type ChoixFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter, which Choix to fetch.
     */
    where: ChoixWhereUniqueInput
  }

  /**
   * Choix findFirst
   */
  export type ChoixFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter, which Choix to fetch.
     */
    where?: ChoixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choixes to fetch.
     */
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choixes.
     */
    cursor?: ChoixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choixes.
     */
    distinct?: ChoixScalarFieldEnum | ChoixScalarFieldEnum[]
  }

  /**
   * Choix findFirstOrThrow
   */
  export type ChoixFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter, which Choix to fetch.
     */
    where?: ChoixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choixes to fetch.
     */
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choixes.
     */
    cursor?: ChoixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choixes.
     */
    distinct?: ChoixScalarFieldEnum | ChoixScalarFieldEnum[]
  }

  /**
   * Choix findMany
   */
  export type ChoixFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter, which Choixes to fetch.
     */
    where?: ChoixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choixes to fetch.
     */
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Choixes.
     */
    cursor?: ChoixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choixes.
     */
    skip?: number
    distinct?: ChoixScalarFieldEnum | ChoixScalarFieldEnum[]
  }

  /**
   * Choix create
   */
  export type ChoixCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * The data needed to create a Choix.
     */
    data: XOR<ChoixCreateInput, ChoixUncheckedCreateInput>
  }

  /**
   * Choix createMany
   */
  export type ChoixCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Choixes.
     */
    data: ChoixCreateManyInput | ChoixCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Choix update
   */
  export type ChoixUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * The data needed to update a Choix.
     */
    data: XOR<ChoixUpdateInput, ChoixUncheckedUpdateInput>
    /**
     * Choose, which Choix to update.
     */
    where: ChoixWhereUniqueInput
  }

  /**
   * Choix updateMany
   */
  export type ChoixUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Choixes.
     */
    data: XOR<ChoixUpdateManyMutationInput, ChoixUncheckedUpdateManyInput>
    /**
     * Filter which Choixes to update
     */
    where?: ChoixWhereInput
    /**
     * Limit how many Choixes to update.
     */
    limit?: number
  }

  /**
   * Choix upsert
   */
  export type ChoixUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * The filter to search for the Choix to update in case it exists.
     */
    where: ChoixWhereUniqueInput
    /**
     * In case the Choix found by the `where` argument doesn't exist, create a new Choix with this data.
     */
    create: XOR<ChoixCreateInput, ChoixUncheckedCreateInput>
    /**
     * In case the Choix was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoixUpdateInput, ChoixUncheckedUpdateInput>
  }

  /**
   * Choix delete
   */
  export type ChoixDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter which Choix to delete.
     */
    where: ChoixWhereUniqueInput
  }

  /**
   * Choix deleteMany
   */
  export type ChoixDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choixes to delete
     */
    where?: ChoixWhereInput
    /**
     * Limit how many Choixes to delete.
     */
    limit?: number
  }

  /**
   * Choix.carte_suivante
   */
  export type Choix$carte_suivanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carte
     */
    select?: CarteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carte
     */
    omit?: CarteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarteInclude<ExtArgs> | null
    where?: CarteWhereInput
  }

  /**
   * Choix without action
   */
  export type ChoixDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const JoueurScalarFieldEnum: {
    joueur_id: 'joueur_id',
    email: 'email',
    mdp: 'mdp',
    role: 'role',
    date_creation: 'date_creation'
  };

  export type JoueurScalarFieldEnum = (typeof JoueurScalarFieldEnum)[keyof typeof JoueurScalarFieldEnum]


  export const PartieScalarFieldEnum: {
    partie_id: 'partie_id',
    date_debut_partie: 'date_debut_partie',
    date_fin_partie: 'date_fin_partie',
    statut: 'statut',
    joueur_id: 'joueur_id'
  };

  export type PartieScalarFieldEnum = (typeof PartieScalarFieldEnum)[keyof typeof PartieScalarFieldEnum]


  export const CarteScalarFieldEnum: {
    carte_id: 'carte_id',
    titre: 'titre',
    image_url: 'image_url',
    texte: 'texte',
    is_over: 'is_over',
    partie_id: 'partie_id'
  };

  export type CarteScalarFieldEnum = (typeof CarteScalarFieldEnum)[keyof typeof CarteScalarFieldEnum]


  export const ChoixScalarFieldEnum: {
    choix_id: 'choix_id',
    texte: 'texte',
    carte_suivante_default: 'carte_suivante_default',
    carte_id: 'carte_id'
  };

  export type ChoixScalarFieldEnum = (typeof ChoixScalarFieldEnum)[keyof typeof ChoixScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JoueurOrderByRelevanceFieldEnum: {
    email: 'email',
    mdp: 'mdp',
    role: 'role'
  };

  export type JoueurOrderByRelevanceFieldEnum = (typeof JoueurOrderByRelevanceFieldEnum)[keyof typeof JoueurOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PartieOrderByRelevanceFieldEnum: {
    statut: 'statut'
  };

  export type PartieOrderByRelevanceFieldEnum = (typeof PartieOrderByRelevanceFieldEnum)[keyof typeof PartieOrderByRelevanceFieldEnum]


  export const CarteOrderByRelevanceFieldEnum: {
    titre: 'titre',
    image_url: 'image_url',
    texte: 'texte'
  };

  export type CarteOrderByRelevanceFieldEnum = (typeof CarteOrderByRelevanceFieldEnum)[keyof typeof CarteOrderByRelevanceFieldEnum]


  export const ChoixOrderByRelevanceFieldEnum: {
    texte: 'texte'
  };

  export type ChoixOrderByRelevanceFieldEnum = (typeof ChoixOrderByRelevanceFieldEnum)[keyof typeof ChoixOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type JoueurWhereInput = {
    AND?: JoueurWhereInput | JoueurWhereInput[]
    OR?: JoueurWhereInput[]
    NOT?: JoueurWhereInput | JoueurWhereInput[]
    joueur_id?: IntFilter<"Joueur"> | number
    email?: StringFilter<"Joueur"> | string
    mdp?: StringFilter<"Joueur"> | string
    role?: StringFilter<"Joueur"> | string
    date_creation?: DateTimeFilter<"Joueur"> | Date | string
    parties?: PartieListRelationFilter
  }

  export type JoueurOrderByWithRelationInput = {
    joueur_id?: SortOrder
    email?: SortOrder
    mdp?: SortOrder
    role?: SortOrder
    date_creation?: SortOrder
    parties?: PartieOrderByRelationAggregateInput
    _relevance?: JoueurOrderByRelevanceInput
  }

  export type JoueurWhereUniqueInput = Prisma.AtLeast<{
    joueur_id?: number
    email?: string
    AND?: JoueurWhereInput | JoueurWhereInput[]
    OR?: JoueurWhereInput[]
    NOT?: JoueurWhereInput | JoueurWhereInput[]
    mdp?: StringFilter<"Joueur"> | string
    role?: StringFilter<"Joueur"> | string
    date_creation?: DateTimeFilter<"Joueur"> | Date | string
    parties?: PartieListRelationFilter
  }, "joueur_id" | "email">

  export type JoueurOrderByWithAggregationInput = {
    joueur_id?: SortOrder
    email?: SortOrder
    mdp?: SortOrder
    role?: SortOrder
    date_creation?: SortOrder
    _count?: JoueurCountOrderByAggregateInput
    _avg?: JoueurAvgOrderByAggregateInput
    _max?: JoueurMaxOrderByAggregateInput
    _min?: JoueurMinOrderByAggregateInput
    _sum?: JoueurSumOrderByAggregateInput
  }

  export type JoueurScalarWhereWithAggregatesInput = {
    AND?: JoueurScalarWhereWithAggregatesInput | JoueurScalarWhereWithAggregatesInput[]
    OR?: JoueurScalarWhereWithAggregatesInput[]
    NOT?: JoueurScalarWhereWithAggregatesInput | JoueurScalarWhereWithAggregatesInput[]
    joueur_id?: IntWithAggregatesFilter<"Joueur"> | number
    email?: StringWithAggregatesFilter<"Joueur"> | string
    mdp?: StringWithAggregatesFilter<"Joueur"> | string
    role?: StringWithAggregatesFilter<"Joueur"> | string
    date_creation?: DateTimeWithAggregatesFilter<"Joueur"> | Date | string
  }

  export type PartieWhereInput = {
    AND?: PartieWhereInput | PartieWhereInput[]
    OR?: PartieWhereInput[]
    NOT?: PartieWhereInput | PartieWhereInput[]
    partie_id?: IntFilter<"Partie"> | number
    date_debut_partie?: DateTimeFilter<"Partie"> | Date | string
    date_fin_partie?: DateTimeNullableFilter<"Partie"> | Date | string | null
    statut?: StringFilter<"Partie"> | string
    joueur_id?: IntFilter<"Partie"> | number
    joueur?: XOR<JoueurScalarRelationFilter, JoueurWhereInput>
    cartes?: CarteListRelationFilter
  }

  export type PartieOrderByWithRelationInput = {
    partie_id?: SortOrder
    date_debut_partie?: SortOrder
    date_fin_partie?: SortOrderInput | SortOrder
    statut?: SortOrder
    joueur_id?: SortOrder
    joueur?: JoueurOrderByWithRelationInput
    cartes?: CarteOrderByRelationAggregateInput
    _relevance?: PartieOrderByRelevanceInput
  }

  export type PartieWhereUniqueInput = Prisma.AtLeast<{
    partie_id?: number
    AND?: PartieWhereInput | PartieWhereInput[]
    OR?: PartieWhereInput[]
    NOT?: PartieWhereInput | PartieWhereInput[]
    date_debut_partie?: DateTimeFilter<"Partie"> | Date | string
    date_fin_partie?: DateTimeNullableFilter<"Partie"> | Date | string | null
    statut?: StringFilter<"Partie"> | string
    joueur_id?: IntFilter<"Partie"> | number
    joueur?: XOR<JoueurScalarRelationFilter, JoueurWhereInput>
    cartes?: CarteListRelationFilter
  }, "partie_id">

  export type PartieOrderByWithAggregationInput = {
    partie_id?: SortOrder
    date_debut_partie?: SortOrder
    date_fin_partie?: SortOrderInput | SortOrder
    statut?: SortOrder
    joueur_id?: SortOrder
    _count?: PartieCountOrderByAggregateInput
    _avg?: PartieAvgOrderByAggregateInput
    _max?: PartieMaxOrderByAggregateInput
    _min?: PartieMinOrderByAggregateInput
    _sum?: PartieSumOrderByAggregateInput
  }

  export type PartieScalarWhereWithAggregatesInput = {
    AND?: PartieScalarWhereWithAggregatesInput | PartieScalarWhereWithAggregatesInput[]
    OR?: PartieScalarWhereWithAggregatesInput[]
    NOT?: PartieScalarWhereWithAggregatesInput | PartieScalarWhereWithAggregatesInput[]
    partie_id?: IntWithAggregatesFilter<"Partie"> | number
    date_debut_partie?: DateTimeWithAggregatesFilter<"Partie"> | Date | string
    date_fin_partie?: DateTimeNullableWithAggregatesFilter<"Partie"> | Date | string | null
    statut?: StringWithAggregatesFilter<"Partie"> | string
    joueur_id?: IntWithAggregatesFilter<"Partie"> | number
  }

  export type CarteWhereInput = {
    AND?: CarteWhereInput | CarteWhereInput[]
    OR?: CarteWhereInput[]
    NOT?: CarteWhereInput | CarteWhereInput[]
    carte_id?: IntFilter<"Carte"> | number
    titre?: StringFilter<"Carte"> | string
    image_url?: StringNullableFilter<"Carte"> | string | null
    texte?: StringFilter<"Carte"> | string
    is_over?: BoolFilter<"Carte"> | boolean
    partie_id?: IntFilter<"Carte"> | number
    partie?: XOR<PartieScalarRelationFilter, PartieWhereInput>
    choix?: ChoixListRelationFilter
    suivie_par?: ChoixListRelationFilter
  }

  export type CarteOrderByWithRelationInput = {
    carte_id?: SortOrder
    titre?: SortOrder
    image_url?: SortOrderInput | SortOrder
    texte?: SortOrder
    is_over?: SortOrder
    partie_id?: SortOrder
    partie?: PartieOrderByWithRelationInput
    choix?: ChoixOrderByRelationAggregateInput
    suivie_par?: ChoixOrderByRelationAggregateInput
    _relevance?: CarteOrderByRelevanceInput
  }

  export type CarteWhereUniqueInput = Prisma.AtLeast<{
    carte_id?: number
    AND?: CarteWhereInput | CarteWhereInput[]
    OR?: CarteWhereInput[]
    NOT?: CarteWhereInput | CarteWhereInput[]
    titre?: StringFilter<"Carte"> | string
    image_url?: StringNullableFilter<"Carte"> | string | null
    texte?: StringFilter<"Carte"> | string
    is_over?: BoolFilter<"Carte"> | boolean
    partie_id?: IntFilter<"Carte"> | number
    partie?: XOR<PartieScalarRelationFilter, PartieWhereInput>
    choix?: ChoixListRelationFilter
    suivie_par?: ChoixListRelationFilter
  }, "carte_id">

  export type CarteOrderByWithAggregationInput = {
    carte_id?: SortOrder
    titre?: SortOrder
    image_url?: SortOrderInput | SortOrder
    texte?: SortOrder
    is_over?: SortOrder
    partie_id?: SortOrder
    _count?: CarteCountOrderByAggregateInput
    _avg?: CarteAvgOrderByAggregateInput
    _max?: CarteMaxOrderByAggregateInput
    _min?: CarteMinOrderByAggregateInput
    _sum?: CarteSumOrderByAggregateInput
  }

  export type CarteScalarWhereWithAggregatesInput = {
    AND?: CarteScalarWhereWithAggregatesInput | CarteScalarWhereWithAggregatesInput[]
    OR?: CarteScalarWhereWithAggregatesInput[]
    NOT?: CarteScalarWhereWithAggregatesInput | CarteScalarWhereWithAggregatesInput[]
    carte_id?: IntWithAggregatesFilter<"Carte"> | number
    titre?: StringWithAggregatesFilter<"Carte"> | string
    image_url?: StringNullableWithAggregatesFilter<"Carte"> | string | null
    texte?: StringWithAggregatesFilter<"Carte"> | string
    is_over?: BoolWithAggregatesFilter<"Carte"> | boolean
    partie_id?: IntWithAggregatesFilter<"Carte"> | number
  }

  export type ChoixWhereInput = {
    AND?: ChoixWhereInput | ChoixWhereInput[]
    OR?: ChoixWhereInput[]
    NOT?: ChoixWhereInput | ChoixWhereInput[]
    choix_id?: IntFilter<"Choix"> | number
    texte?: StringFilter<"Choix"> | string
    carte_suivante_default?: IntNullableFilter<"Choix"> | number | null
    carte_id?: IntFilter<"Choix"> | number
    carte_suivante?: XOR<CarteNullableScalarRelationFilter, CarteWhereInput> | null
    carte?: XOR<CarteScalarRelationFilter, CarteWhereInput>
  }

  export type ChoixOrderByWithRelationInput = {
    choix_id?: SortOrder
    texte?: SortOrder
    carte_suivante_default?: SortOrderInput | SortOrder
    carte_id?: SortOrder
    carte_suivante?: CarteOrderByWithRelationInput
    carte?: CarteOrderByWithRelationInput
    _relevance?: ChoixOrderByRelevanceInput
  }

  export type ChoixWhereUniqueInput = Prisma.AtLeast<{
    choix_id?: number
    AND?: ChoixWhereInput | ChoixWhereInput[]
    OR?: ChoixWhereInput[]
    NOT?: ChoixWhereInput | ChoixWhereInput[]
    texte?: StringFilter<"Choix"> | string
    carte_suivante_default?: IntNullableFilter<"Choix"> | number | null
    carte_id?: IntFilter<"Choix"> | number
    carte_suivante?: XOR<CarteNullableScalarRelationFilter, CarteWhereInput> | null
    carte?: XOR<CarteScalarRelationFilter, CarteWhereInput>
  }, "choix_id">

  export type ChoixOrderByWithAggregationInput = {
    choix_id?: SortOrder
    texte?: SortOrder
    carte_suivante_default?: SortOrderInput | SortOrder
    carte_id?: SortOrder
    _count?: ChoixCountOrderByAggregateInput
    _avg?: ChoixAvgOrderByAggregateInput
    _max?: ChoixMaxOrderByAggregateInput
    _min?: ChoixMinOrderByAggregateInput
    _sum?: ChoixSumOrderByAggregateInput
  }

  export type ChoixScalarWhereWithAggregatesInput = {
    AND?: ChoixScalarWhereWithAggregatesInput | ChoixScalarWhereWithAggregatesInput[]
    OR?: ChoixScalarWhereWithAggregatesInput[]
    NOT?: ChoixScalarWhereWithAggregatesInput | ChoixScalarWhereWithAggregatesInput[]
    choix_id?: IntWithAggregatesFilter<"Choix"> | number
    texte?: StringWithAggregatesFilter<"Choix"> | string
    carte_suivante_default?: IntNullableWithAggregatesFilter<"Choix"> | number | null
    carte_id?: IntWithAggregatesFilter<"Choix"> | number
  }

  export type JoueurCreateInput = {
    email: string
    mdp: string
    role?: string
    date_creation?: Date | string
    parties?: PartieCreateNestedManyWithoutJoueurInput
  }

  export type JoueurUncheckedCreateInput = {
    joueur_id?: number
    email: string
    mdp: string
    role?: string
    date_creation?: Date | string
    parties?: PartieUncheckedCreateNestedManyWithoutJoueurInput
  }

  export type JoueurUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartieUpdateManyWithoutJoueurNestedInput
  }

  export type JoueurUncheckedUpdateInput = {
    joueur_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartieUncheckedUpdateManyWithoutJoueurNestedInput
  }

  export type JoueurCreateManyInput = {
    joueur_id?: number
    email: string
    mdp: string
    role?: string
    date_creation?: Date | string
  }

  export type JoueurUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoueurUncheckedUpdateManyInput = {
    joueur_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartieCreateInput = {
    date_debut_partie: Date | string
    date_fin_partie?: Date | string | null
    statut?: string
    joueur: JoueurCreateNestedOneWithoutPartiesInput
    cartes?: CarteCreateNestedManyWithoutPartieInput
  }

  export type PartieUncheckedCreateInput = {
    partie_id?: number
    date_debut_partie: Date | string
    date_fin_partie?: Date | string | null
    statut?: string
    joueur_id: number
    cartes?: CarteUncheckedCreateNestedManyWithoutPartieInput
  }

  export type PartieUpdateInput = {
    date_debut_partie?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin_partie?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    joueur?: JoueurUpdateOneRequiredWithoutPartiesNestedInput
    cartes?: CarteUpdateManyWithoutPartieNestedInput
  }

  export type PartieUncheckedUpdateInput = {
    partie_id?: IntFieldUpdateOperationsInput | number
    date_debut_partie?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin_partie?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    joueur_id?: IntFieldUpdateOperationsInput | number
    cartes?: CarteUncheckedUpdateManyWithoutPartieNestedInput
  }

  export type PartieCreateManyInput = {
    partie_id?: number
    date_debut_partie: Date | string
    date_fin_partie?: Date | string | null
    statut?: string
    joueur_id: number
  }

  export type PartieUpdateManyMutationInput = {
    date_debut_partie?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin_partie?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
  }

  export type PartieUncheckedUpdateManyInput = {
    partie_id?: IntFieldUpdateOperationsInput | number
    date_debut_partie?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin_partie?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    joueur_id?: IntFieldUpdateOperationsInput | number
  }

  export type CarteCreateInput = {
    titre: string
    image_url?: string | null
    texte: string
    is_over?: boolean
    partie: PartieCreateNestedOneWithoutCartesInput
    choix?: ChoixCreateNestedManyWithoutCarteInput
    suivie_par?: ChoixCreateNestedManyWithoutCarte_suivanteInput
  }

  export type CarteUncheckedCreateInput = {
    carte_id?: number
    titre: string
    image_url?: string | null
    texte: string
    is_over?: boolean
    partie_id: number
    choix?: ChoixUncheckedCreateNestedManyWithoutCarteInput
    suivie_par?: ChoixUncheckedCreateNestedManyWithoutCarte_suivanteInput
  }

  export type CarteUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    texte?: StringFieldUpdateOperationsInput | string
    is_over?: BoolFieldUpdateOperationsInput | boolean
    partie?: PartieUpdateOneRequiredWithoutCartesNestedInput
    choix?: ChoixUpdateManyWithoutCarteNestedInput
    suivie_par?: ChoixUpdateManyWithoutCarte_suivanteNestedInput
  }

  export type CarteUncheckedUpdateInput = {
    carte_id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    texte?: StringFieldUpdateOperationsInput | string
    is_over?: BoolFieldUpdateOperationsInput | boolean
    partie_id?: IntFieldUpdateOperationsInput | number
    choix?: ChoixUncheckedUpdateManyWithoutCarteNestedInput
    suivie_par?: ChoixUncheckedUpdateManyWithoutCarte_suivanteNestedInput
  }

  export type CarteCreateManyInput = {
    carte_id?: number
    titre: string
    image_url?: string | null
    texte: string
    is_over?: boolean
    partie_id: number
  }

  export type CarteUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    texte?: StringFieldUpdateOperationsInput | string
    is_over?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CarteUncheckedUpdateManyInput = {
    carte_id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    texte?: StringFieldUpdateOperationsInput | string
    is_over?: BoolFieldUpdateOperationsInput | boolean
    partie_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChoixCreateInput = {
    texte: string
    carte_suivante?: CarteCreateNestedOneWithoutSuivie_parInput
    carte: CarteCreateNestedOneWithoutChoixInput
  }

  export type ChoixUncheckedCreateInput = {
    choix_id?: number
    texte: string
    carte_suivante_default?: number | null
    carte_id: number
  }

  export type ChoixUpdateInput = {
    texte?: StringFieldUpdateOperationsInput | string
    carte_suivante?: CarteUpdateOneWithoutSuivie_parNestedInput
    carte?: CarteUpdateOneRequiredWithoutChoixNestedInput
  }

  export type ChoixUncheckedUpdateInput = {
    choix_id?: IntFieldUpdateOperationsInput | number
    texte?: StringFieldUpdateOperationsInput | string
    carte_suivante_default?: NullableIntFieldUpdateOperationsInput | number | null
    carte_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChoixCreateManyInput = {
    choix_id?: number
    texte: string
    carte_suivante_default?: number | null
    carte_id: number
  }

  export type ChoixUpdateManyMutationInput = {
    texte?: StringFieldUpdateOperationsInput | string
  }

  export type ChoixUncheckedUpdateManyInput = {
    choix_id?: IntFieldUpdateOperationsInput | number
    texte?: StringFieldUpdateOperationsInput | string
    carte_suivante_default?: NullableIntFieldUpdateOperationsInput | number | null
    carte_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PartieListRelationFilter = {
    every?: PartieWhereInput
    some?: PartieWhereInput
    none?: PartieWhereInput
  }

  export type PartieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JoueurOrderByRelevanceInput = {
    fields: JoueurOrderByRelevanceFieldEnum | JoueurOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JoueurCountOrderByAggregateInput = {
    joueur_id?: SortOrder
    email?: SortOrder
    mdp?: SortOrder
    role?: SortOrder
    date_creation?: SortOrder
  }

  export type JoueurAvgOrderByAggregateInput = {
    joueur_id?: SortOrder
  }

  export type JoueurMaxOrderByAggregateInput = {
    joueur_id?: SortOrder
    email?: SortOrder
    mdp?: SortOrder
    role?: SortOrder
    date_creation?: SortOrder
  }

  export type JoueurMinOrderByAggregateInput = {
    joueur_id?: SortOrder
    email?: SortOrder
    mdp?: SortOrder
    role?: SortOrder
    date_creation?: SortOrder
  }

  export type JoueurSumOrderByAggregateInput = {
    joueur_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type JoueurScalarRelationFilter = {
    is?: JoueurWhereInput
    isNot?: JoueurWhereInput
  }

  export type CarteListRelationFilter = {
    every?: CarteWhereInput
    some?: CarteWhereInput
    none?: CarteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CarteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartieOrderByRelevanceInput = {
    fields: PartieOrderByRelevanceFieldEnum | PartieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PartieCountOrderByAggregateInput = {
    partie_id?: SortOrder
    date_debut_partie?: SortOrder
    date_fin_partie?: SortOrder
    statut?: SortOrder
    joueur_id?: SortOrder
  }

  export type PartieAvgOrderByAggregateInput = {
    partie_id?: SortOrder
    joueur_id?: SortOrder
  }

  export type PartieMaxOrderByAggregateInput = {
    partie_id?: SortOrder
    date_debut_partie?: SortOrder
    date_fin_partie?: SortOrder
    statut?: SortOrder
    joueur_id?: SortOrder
  }

  export type PartieMinOrderByAggregateInput = {
    partie_id?: SortOrder
    date_debut_partie?: SortOrder
    date_fin_partie?: SortOrder
    statut?: SortOrder
    joueur_id?: SortOrder
  }

  export type PartieSumOrderByAggregateInput = {
    partie_id?: SortOrder
    joueur_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PartieScalarRelationFilter = {
    is?: PartieWhereInput
    isNot?: PartieWhereInput
  }

  export type ChoixListRelationFilter = {
    every?: ChoixWhereInput
    some?: ChoixWhereInput
    none?: ChoixWhereInput
  }

  export type ChoixOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarteOrderByRelevanceInput = {
    fields: CarteOrderByRelevanceFieldEnum | CarteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CarteCountOrderByAggregateInput = {
    carte_id?: SortOrder
    titre?: SortOrder
    image_url?: SortOrder
    texte?: SortOrder
    is_over?: SortOrder
    partie_id?: SortOrder
  }

  export type CarteAvgOrderByAggregateInput = {
    carte_id?: SortOrder
    partie_id?: SortOrder
  }

  export type CarteMaxOrderByAggregateInput = {
    carte_id?: SortOrder
    titre?: SortOrder
    image_url?: SortOrder
    texte?: SortOrder
    is_over?: SortOrder
    partie_id?: SortOrder
  }

  export type CarteMinOrderByAggregateInput = {
    carte_id?: SortOrder
    titre?: SortOrder
    image_url?: SortOrder
    texte?: SortOrder
    is_over?: SortOrder
    partie_id?: SortOrder
  }

  export type CarteSumOrderByAggregateInput = {
    carte_id?: SortOrder
    partie_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CarteNullableScalarRelationFilter = {
    is?: CarteWhereInput | null
    isNot?: CarteWhereInput | null
  }

  export type CarteScalarRelationFilter = {
    is?: CarteWhereInput
    isNot?: CarteWhereInput
  }

  export type ChoixOrderByRelevanceInput = {
    fields: ChoixOrderByRelevanceFieldEnum | ChoixOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChoixCountOrderByAggregateInput = {
    choix_id?: SortOrder
    texte?: SortOrder
    carte_suivante_default?: SortOrder
    carte_id?: SortOrder
  }

  export type ChoixAvgOrderByAggregateInput = {
    choix_id?: SortOrder
    carte_suivante_default?: SortOrder
    carte_id?: SortOrder
  }

  export type ChoixMaxOrderByAggregateInput = {
    choix_id?: SortOrder
    texte?: SortOrder
    carte_suivante_default?: SortOrder
    carte_id?: SortOrder
  }

  export type ChoixMinOrderByAggregateInput = {
    choix_id?: SortOrder
    texte?: SortOrder
    carte_suivante_default?: SortOrder
    carte_id?: SortOrder
  }

  export type ChoixSumOrderByAggregateInput = {
    choix_id?: SortOrder
    carte_suivante_default?: SortOrder
    carte_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PartieCreateNestedManyWithoutJoueurInput = {
    create?: XOR<PartieCreateWithoutJoueurInput, PartieUncheckedCreateWithoutJoueurInput> | PartieCreateWithoutJoueurInput[] | PartieUncheckedCreateWithoutJoueurInput[]
    connectOrCreate?: PartieCreateOrConnectWithoutJoueurInput | PartieCreateOrConnectWithoutJoueurInput[]
    createMany?: PartieCreateManyJoueurInputEnvelope
    connect?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
  }

  export type PartieUncheckedCreateNestedManyWithoutJoueurInput = {
    create?: XOR<PartieCreateWithoutJoueurInput, PartieUncheckedCreateWithoutJoueurInput> | PartieCreateWithoutJoueurInput[] | PartieUncheckedCreateWithoutJoueurInput[]
    connectOrCreate?: PartieCreateOrConnectWithoutJoueurInput | PartieCreateOrConnectWithoutJoueurInput[]
    createMany?: PartieCreateManyJoueurInputEnvelope
    connect?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PartieUpdateManyWithoutJoueurNestedInput = {
    create?: XOR<PartieCreateWithoutJoueurInput, PartieUncheckedCreateWithoutJoueurInput> | PartieCreateWithoutJoueurInput[] | PartieUncheckedCreateWithoutJoueurInput[]
    connectOrCreate?: PartieCreateOrConnectWithoutJoueurInput | PartieCreateOrConnectWithoutJoueurInput[]
    upsert?: PartieUpsertWithWhereUniqueWithoutJoueurInput | PartieUpsertWithWhereUniqueWithoutJoueurInput[]
    createMany?: PartieCreateManyJoueurInputEnvelope
    set?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    disconnect?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    delete?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    connect?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    update?: PartieUpdateWithWhereUniqueWithoutJoueurInput | PartieUpdateWithWhereUniqueWithoutJoueurInput[]
    updateMany?: PartieUpdateManyWithWhereWithoutJoueurInput | PartieUpdateManyWithWhereWithoutJoueurInput[]
    deleteMany?: PartieScalarWhereInput | PartieScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PartieUncheckedUpdateManyWithoutJoueurNestedInput = {
    create?: XOR<PartieCreateWithoutJoueurInput, PartieUncheckedCreateWithoutJoueurInput> | PartieCreateWithoutJoueurInput[] | PartieUncheckedCreateWithoutJoueurInput[]
    connectOrCreate?: PartieCreateOrConnectWithoutJoueurInput | PartieCreateOrConnectWithoutJoueurInput[]
    upsert?: PartieUpsertWithWhereUniqueWithoutJoueurInput | PartieUpsertWithWhereUniqueWithoutJoueurInput[]
    createMany?: PartieCreateManyJoueurInputEnvelope
    set?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    disconnect?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    delete?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    connect?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    update?: PartieUpdateWithWhereUniqueWithoutJoueurInput | PartieUpdateWithWhereUniqueWithoutJoueurInput[]
    updateMany?: PartieUpdateManyWithWhereWithoutJoueurInput | PartieUpdateManyWithWhereWithoutJoueurInput[]
    deleteMany?: PartieScalarWhereInput | PartieScalarWhereInput[]
  }

  export type JoueurCreateNestedOneWithoutPartiesInput = {
    create?: XOR<JoueurCreateWithoutPartiesInput, JoueurUncheckedCreateWithoutPartiesInput>
    connectOrCreate?: JoueurCreateOrConnectWithoutPartiesInput
    connect?: JoueurWhereUniqueInput
  }

  export type CarteCreateNestedManyWithoutPartieInput = {
    create?: XOR<CarteCreateWithoutPartieInput, CarteUncheckedCreateWithoutPartieInput> | CarteCreateWithoutPartieInput[] | CarteUncheckedCreateWithoutPartieInput[]
    connectOrCreate?: CarteCreateOrConnectWithoutPartieInput | CarteCreateOrConnectWithoutPartieInput[]
    createMany?: CarteCreateManyPartieInputEnvelope
    connect?: CarteWhereUniqueInput | CarteWhereUniqueInput[]
  }

  export type CarteUncheckedCreateNestedManyWithoutPartieInput = {
    create?: XOR<CarteCreateWithoutPartieInput, CarteUncheckedCreateWithoutPartieInput> | CarteCreateWithoutPartieInput[] | CarteUncheckedCreateWithoutPartieInput[]
    connectOrCreate?: CarteCreateOrConnectWithoutPartieInput | CarteCreateOrConnectWithoutPartieInput[]
    createMany?: CarteCreateManyPartieInputEnvelope
    connect?: CarteWhereUniqueInput | CarteWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type JoueurUpdateOneRequiredWithoutPartiesNestedInput = {
    create?: XOR<JoueurCreateWithoutPartiesInput, JoueurUncheckedCreateWithoutPartiesInput>
    connectOrCreate?: JoueurCreateOrConnectWithoutPartiesInput
    upsert?: JoueurUpsertWithoutPartiesInput
    connect?: JoueurWhereUniqueInput
    update?: XOR<XOR<JoueurUpdateToOneWithWhereWithoutPartiesInput, JoueurUpdateWithoutPartiesInput>, JoueurUncheckedUpdateWithoutPartiesInput>
  }

  export type CarteUpdateManyWithoutPartieNestedInput = {
    create?: XOR<CarteCreateWithoutPartieInput, CarteUncheckedCreateWithoutPartieInput> | CarteCreateWithoutPartieInput[] | CarteUncheckedCreateWithoutPartieInput[]
    connectOrCreate?: CarteCreateOrConnectWithoutPartieInput | CarteCreateOrConnectWithoutPartieInput[]
    upsert?: CarteUpsertWithWhereUniqueWithoutPartieInput | CarteUpsertWithWhereUniqueWithoutPartieInput[]
    createMany?: CarteCreateManyPartieInputEnvelope
    set?: CarteWhereUniqueInput | CarteWhereUniqueInput[]
    disconnect?: CarteWhereUniqueInput | CarteWhereUniqueInput[]
    delete?: CarteWhereUniqueInput | CarteWhereUniqueInput[]
    connect?: CarteWhereUniqueInput | CarteWhereUniqueInput[]
    update?: CarteUpdateWithWhereUniqueWithoutPartieInput | CarteUpdateWithWhereUniqueWithoutPartieInput[]
    updateMany?: CarteUpdateManyWithWhereWithoutPartieInput | CarteUpdateManyWithWhereWithoutPartieInput[]
    deleteMany?: CarteScalarWhereInput | CarteScalarWhereInput[]
  }

  export type CarteUncheckedUpdateManyWithoutPartieNestedInput = {
    create?: XOR<CarteCreateWithoutPartieInput, CarteUncheckedCreateWithoutPartieInput> | CarteCreateWithoutPartieInput[] | CarteUncheckedCreateWithoutPartieInput[]
    connectOrCreate?: CarteCreateOrConnectWithoutPartieInput | CarteCreateOrConnectWithoutPartieInput[]
    upsert?: CarteUpsertWithWhereUniqueWithoutPartieInput | CarteUpsertWithWhereUniqueWithoutPartieInput[]
    createMany?: CarteCreateManyPartieInputEnvelope
    set?: CarteWhereUniqueInput | CarteWhereUniqueInput[]
    disconnect?: CarteWhereUniqueInput | CarteWhereUniqueInput[]
    delete?: CarteWhereUniqueInput | CarteWhereUniqueInput[]
    connect?: CarteWhereUniqueInput | CarteWhereUniqueInput[]
    update?: CarteUpdateWithWhereUniqueWithoutPartieInput | CarteUpdateWithWhereUniqueWithoutPartieInput[]
    updateMany?: CarteUpdateManyWithWhereWithoutPartieInput | CarteUpdateManyWithWhereWithoutPartieInput[]
    deleteMany?: CarteScalarWhereInput | CarteScalarWhereInput[]
  }

  export type PartieCreateNestedOneWithoutCartesInput = {
    create?: XOR<PartieCreateWithoutCartesInput, PartieUncheckedCreateWithoutCartesInput>
    connectOrCreate?: PartieCreateOrConnectWithoutCartesInput
    connect?: PartieWhereUniqueInput
  }

  export type ChoixCreateNestedManyWithoutCarteInput = {
    create?: XOR<ChoixCreateWithoutCarteInput, ChoixUncheckedCreateWithoutCarteInput> | ChoixCreateWithoutCarteInput[] | ChoixUncheckedCreateWithoutCarteInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutCarteInput | ChoixCreateOrConnectWithoutCarteInput[]
    createMany?: ChoixCreateManyCarteInputEnvelope
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
  }

  export type ChoixCreateNestedManyWithoutCarte_suivanteInput = {
    create?: XOR<ChoixCreateWithoutCarte_suivanteInput, ChoixUncheckedCreateWithoutCarte_suivanteInput> | ChoixCreateWithoutCarte_suivanteInput[] | ChoixUncheckedCreateWithoutCarte_suivanteInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutCarte_suivanteInput | ChoixCreateOrConnectWithoutCarte_suivanteInput[]
    createMany?: ChoixCreateManyCarte_suivanteInputEnvelope
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
  }

  export type ChoixUncheckedCreateNestedManyWithoutCarteInput = {
    create?: XOR<ChoixCreateWithoutCarteInput, ChoixUncheckedCreateWithoutCarteInput> | ChoixCreateWithoutCarteInput[] | ChoixUncheckedCreateWithoutCarteInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutCarteInput | ChoixCreateOrConnectWithoutCarteInput[]
    createMany?: ChoixCreateManyCarteInputEnvelope
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
  }

  export type ChoixUncheckedCreateNestedManyWithoutCarte_suivanteInput = {
    create?: XOR<ChoixCreateWithoutCarte_suivanteInput, ChoixUncheckedCreateWithoutCarte_suivanteInput> | ChoixCreateWithoutCarte_suivanteInput[] | ChoixUncheckedCreateWithoutCarte_suivanteInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutCarte_suivanteInput | ChoixCreateOrConnectWithoutCarte_suivanteInput[]
    createMany?: ChoixCreateManyCarte_suivanteInputEnvelope
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PartieUpdateOneRequiredWithoutCartesNestedInput = {
    create?: XOR<PartieCreateWithoutCartesInput, PartieUncheckedCreateWithoutCartesInput>
    connectOrCreate?: PartieCreateOrConnectWithoutCartesInput
    upsert?: PartieUpsertWithoutCartesInput
    connect?: PartieWhereUniqueInput
    update?: XOR<XOR<PartieUpdateToOneWithWhereWithoutCartesInput, PartieUpdateWithoutCartesInput>, PartieUncheckedUpdateWithoutCartesInput>
  }

  export type ChoixUpdateManyWithoutCarteNestedInput = {
    create?: XOR<ChoixCreateWithoutCarteInput, ChoixUncheckedCreateWithoutCarteInput> | ChoixCreateWithoutCarteInput[] | ChoixUncheckedCreateWithoutCarteInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutCarteInput | ChoixCreateOrConnectWithoutCarteInput[]
    upsert?: ChoixUpsertWithWhereUniqueWithoutCarteInput | ChoixUpsertWithWhereUniqueWithoutCarteInput[]
    createMany?: ChoixCreateManyCarteInputEnvelope
    set?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    disconnect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    delete?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    update?: ChoixUpdateWithWhereUniqueWithoutCarteInput | ChoixUpdateWithWhereUniqueWithoutCarteInput[]
    updateMany?: ChoixUpdateManyWithWhereWithoutCarteInput | ChoixUpdateManyWithWhereWithoutCarteInput[]
    deleteMany?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
  }

  export type ChoixUpdateManyWithoutCarte_suivanteNestedInput = {
    create?: XOR<ChoixCreateWithoutCarte_suivanteInput, ChoixUncheckedCreateWithoutCarte_suivanteInput> | ChoixCreateWithoutCarte_suivanteInput[] | ChoixUncheckedCreateWithoutCarte_suivanteInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutCarte_suivanteInput | ChoixCreateOrConnectWithoutCarte_suivanteInput[]
    upsert?: ChoixUpsertWithWhereUniqueWithoutCarte_suivanteInput | ChoixUpsertWithWhereUniqueWithoutCarte_suivanteInput[]
    createMany?: ChoixCreateManyCarte_suivanteInputEnvelope
    set?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    disconnect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    delete?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    update?: ChoixUpdateWithWhereUniqueWithoutCarte_suivanteInput | ChoixUpdateWithWhereUniqueWithoutCarte_suivanteInput[]
    updateMany?: ChoixUpdateManyWithWhereWithoutCarte_suivanteInput | ChoixUpdateManyWithWhereWithoutCarte_suivanteInput[]
    deleteMany?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
  }

  export type ChoixUncheckedUpdateManyWithoutCarteNestedInput = {
    create?: XOR<ChoixCreateWithoutCarteInput, ChoixUncheckedCreateWithoutCarteInput> | ChoixCreateWithoutCarteInput[] | ChoixUncheckedCreateWithoutCarteInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutCarteInput | ChoixCreateOrConnectWithoutCarteInput[]
    upsert?: ChoixUpsertWithWhereUniqueWithoutCarteInput | ChoixUpsertWithWhereUniqueWithoutCarteInput[]
    createMany?: ChoixCreateManyCarteInputEnvelope
    set?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    disconnect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    delete?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    update?: ChoixUpdateWithWhereUniqueWithoutCarteInput | ChoixUpdateWithWhereUniqueWithoutCarteInput[]
    updateMany?: ChoixUpdateManyWithWhereWithoutCarteInput | ChoixUpdateManyWithWhereWithoutCarteInput[]
    deleteMany?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
  }

  export type ChoixUncheckedUpdateManyWithoutCarte_suivanteNestedInput = {
    create?: XOR<ChoixCreateWithoutCarte_suivanteInput, ChoixUncheckedCreateWithoutCarte_suivanteInput> | ChoixCreateWithoutCarte_suivanteInput[] | ChoixUncheckedCreateWithoutCarte_suivanteInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutCarte_suivanteInput | ChoixCreateOrConnectWithoutCarte_suivanteInput[]
    upsert?: ChoixUpsertWithWhereUniqueWithoutCarte_suivanteInput | ChoixUpsertWithWhereUniqueWithoutCarte_suivanteInput[]
    createMany?: ChoixCreateManyCarte_suivanteInputEnvelope
    set?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    disconnect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    delete?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    update?: ChoixUpdateWithWhereUniqueWithoutCarte_suivanteInput | ChoixUpdateWithWhereUniqueWithoutCarte_suivanteInput[]
    updateMany?: ChoixUpdateManyWithWhereWithoutCarte_suivanteInput | ChoixUpdateManyWithWhereWithoutCarte_suivanteInput[]
    deleteMany?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
  }

  export type CarteCreateNestedOneWithoutSuivie_parInput = {
    create?: XOR<CarteCreateWithoutSuivie_parInput, CarteUncheckedCreateWithoutSuivie_parInput>
    connectOrCreate?: CarteCreateOrConnectWithoutSuivie_parInput
    connect?: CarteWhereUniqueInput
  }

  export type CarteCreateNestedOneWithoutChoixInput = {
    create?: XOR<CarteCreateWithoutChoixInput, CarteUncheckedCreateWithoutChoixInput>
    connectOrCreate?: CarteCreateOrConnectWithoutChoixInput
    connect?: CarteWhereUniqueInput
  }

  export type CarteUpdateOneWithoutSuivie_parNestedInput = {
    create?: XOR<CarteCreateWithoutSuivie_parInput, CarteUncheckedCreateWithoutSuivie_parInput>
    connectOrCreate?: CarteCreateOrConnectWithoutSuivie_parInput
    upsert?: CarteUpsertWithoutSuivie_parInput
    disconnect?: CarteWhereInput | boolean
    delete?: CarteWhereInput | boolean
    connect?: CarteWhereUniqueInput
    update?: XOR<XOR<CarteUpdateToOneWithWhereWithoutSuivie_parInput, CarteUpdateWithoutSuivie_parInput>, CarteUncheckedUpdateWithoutSuivie_parInput>
  }

  export type CarteUpdateOneRequiredWithoutChoixNestedInput = {
    create?: XOR<CarteCreateWithoutChoixInput, CarteUncheckedCreateWithoutChoixInput>
    connectOrCreate?: CarteCreateOrConnectWithoutChoixInput
    upsert?: CarteUpsertWithoutChoixInput
    connect?: CarteWhereUniqueInput
    update?: XOR<XOR<CarteUpdateToOneWithWhereWithoutChoixInput, CarteUpdateWithoutChoixInput>, CarteUncheckedUpdateWithoutChoixInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PartieCreateWithoutJoueurInput = {
    date_debut_partie: Date | string
    date_fin_partie?: Date | string | null
    statut?: string
    cartes?: CarteCreateNestedManyWithoutPartieInput
  }

  export type PartieUncheckedCreateWithoutJoueurInput = {
    partie_id?: number
    date_debut_partie: Date | string
    date_fin_partie?: Date | string | null
    statut?: string
    cartes?: CarteUncheckedCreateNestedManyWithoutPartieInput
  }

  export type PartieCreateOrConnectWithoutJoueurInput = {
    where: PartieWhereUniqueInput
    create: XOR<PartieCreateWithoutJoueurInput, PartieUncheckedCreateWithoutJoueurInput>
  }

  export type PartieCreateManyJoueurInputEnvelope = {
    data: PartieCreateManyJoueurInput | PartieCreateManyJoueurInput[]
    skipDuplicates?: boolean
  }

  export type PartieUpsertWithWhereUniqueWithoutJoueurInput = {
    where: PartieWhereUniqueInput
    update: XOR<PartieUpdateWithoutJoueurInput, PartieUncheckedUpdateWithoutJoueurInput>
    create: XOR<PartieCreateWithoutJoueurInput, PartieUncheckedCreateWithoutJoueurInput>
  }

  export type PartieUpdateWithWhereUniqueWithoutJoueurInput = {
    where: PartieWhereUniqueInput
    data: XOR<PartieUpdateWithoutJoueurInput, PartieUncheckedUpdateWithoutJoueurInput>
  }

  export type PartieUpdateManyWithWhereWithoutJoueurInput = {
    where: PartieScalarWhereInput
    data: XOR<PartieUpdateManyMutationInput, PartieUncheckedUpdateManyWithoutJoueurInput>
  }

  export type PartieScalarWhereInput = {
    AND?: PartieScalarWhereInput | PartieScalarWhereInput[]
    OR?: PartieScalarWhereInput[]
    NOT?: PartieScalarWhereInput | PartieScalarWhereInput[]
    partie_id?: IntFilter<"Partie"> | number
    date_debut_partie?: DateTimeFilter<"Partie"> | Date | string
    date_fin_partie?: DateTimeNullableFilter<"Partie"> | Date | string | null
    statut?: StringFilter<"Partie"> | string
    joueur_id?: IntFilter<"Partie"> | number
  }

  export type JoueurCreateWithoutPartiesInput = {
    email: string
    mdp: string
    role?: string
    date_creation?: Date | string
  }

  export type JoueurUncheckedCreateWithoutPartiesInput = {
    joueur_id?: number
    email: string
    mdp: string
    role?: string
    date_creation?: Date | string
  }

  export type JoueurCreateOrConnectWithoutPartiesInput = {
    where: JoueurWhereUniqueInput
    create: XOR<JoueurCreateWithoutPartiesInput, JoueurUncheckedCreateWithoutPartiesInput>
  }

  export type CarteCreateWithoutPartieInput = {
    titre: string
    image_url?: string | null
    texte: string
    is_over?: boolean
    choix?: ChoixCreateNestedManyWithoutCarteInput
    suivie_par?: ChoixCreateNestedManyWithoutCarte_suivanteInput
  }

  export type CarteUncheckedCreateWithoutPartieInput = {
    carte_id?: number
    titre: string
    image_url?: string | null
    texte: string
    is_over?: boolean
    choix?: ChoixUncheckedCreateNestedManyWithoutCarteInput
    suivie_par?: ChoixUncheckedCreateNestedManyWithoutCarte_suivanteInput
  }

  export type CarteCreateOrConnectWithoutPartieInput = {
    where: CarteWhereUniqueInput
    create: XOR<CarteCreateWithoutPartieInput, CarteUncheckedCreateWithoutPartieInput>
  }

  export type CarteCreateManyPartieInputEnvelope = {
    data: CarteCreateManyPartieInput | CarteCreateManyPartieInput[]
    skipDuplicates?: boolean
  }

  export type JoueurUpsertWithoutPartiesInput = {
    update: XOR<JoueurUpdateWithoutPartiesInput, JoueurUncheckedUpdateWithoutPartiesInput>
    create: XOR<JoueurCreateWithoutPartiesInput, JoueurUncheckedCreateWithoutPartiesInput>
    where?: JoueurWhereInput
  }

  export type JoueurUpdateToOneWithWhereWithoutPartiesInput = {
    where?: JoueurWhereInput
    data: XOR<JoueurUpdateWithoutPartiesInput, JoueurUncheckedUpdateWithoutPartiesInput>
  }

  export type JoueurUpdateWithoutPartiesInput = {
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoueurUncheckedUpdateWithoutPartiesInput = {
    joueur_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarteUpsertWithWhereUniqueWithoutPartieInput = {
    where: CarteWhereUniqueInput
    update: XOR<CarteUpdateWithoutPartieInput, CarteUncheckedUpdateWithoutPartieInput>
    create: XOR<CarteCreateWithoutPartieInput, CarteUncheckedCreateWithoutPartieInput>
  }

  export type CarteUpdateWithWhereUniqueWithoutPartieInput = {
    where: CarteWhereUniqueInput
    data: XOR<CarteUpdateWithoutPartieInput, CarteUncheckedUpdateWithoutPartieInput>
  }

  export type CarteUpdateManyWithWhereWithoutPartieInput = {
    where: CarteScalarWhereInput
    data: XOR<CarteUpdateManyMutationInput, CarteUncheckedUpdateManyWithoutPartieInput>
  }

  export type CarteScalarWhereInput = {
    AND?: CarteScalarWhereInput | CarteScalarWhereInput[]
    OR?: CarteScalarWhereInput[]
    NOT?: CarteScalarWhereInput | CarteScalarWhereInput[]
    carte_id?: IntFilter<"Carte"> | number
    titre?: StringFilter<"Carte"> | string
    image_url?: StringNullableFilter<"Carte"> | string | null
    texte?: StringFilter<"Carte"> | string
    is_over?: BoolFilter<"Carte"> | boolean
    partie_id?: IntFilter<"Carte"> | number
  }

  export type PartieCreateWithoutCartesInput = {
    date_debut_partie: Date | string
    date_fin_partie?: Date | string | null
    statut?: string
    joueur: JoueurCreateNestedOneWithoutPartiesInput
  }

  export type PartieUncheckedCreateWithoutCartesInput = {
    partie_id?: number
    date_debut_partie: Date | string
    date_fin_partie?: Date | string | null
    statut?: string
    joueur_id: number
  }

  export type PartieCreateOrConnectWithoutCartesInput = {
    where: PartieWhereUniqueInput
    create: XOR<PartieCreateWithoutCartesInput, PartieUncheckedCreateWithoutCartesInput>
  }

  export type ChoixCreateWithoutCarteInput = {
    texte: string
    carte_suivante?: CarteCreateNestedOneWithoutSuivie_parInput
  }

  export type ChoixUncheckedCreateWithoutCarteInput = {
    choix_id?: number
    texte: string
    carte_suivante_default?: number | null
  }

  export type ChoixCreateOrConnectWithoutCarteInput = {
    where: ChoixWhereUniqueInput
    create: XOR<ChoixCreateWithoutCarteInput, ChoixUncheckedCreateWithoutCarteInput>
  }

  export type ChoixCreateManyCarteInputEnvelope = {
    data: ChoixCreateManyCarteInput | ChoixCreateManyCarteInput[]
    skipDuplicates?: boolean
  }

  export type ChoixCreateWithoutCarte_suivanteInput = {
    texte: string
    carte: CarteCreateNestedOneWithoutChoixInput
  }

  export type ChoixUncheckedCreateWithoutCarte_suivanteInput = {
    choix_id?: number
    texte: string
    carte_id: number
  }

  export type ChoixCreateOrConnectWithoutCarte_suivanteInput = {
    where: ChoixWhereUniqueInput
    create: XOR<ChoixCreateWithoutCarte_suivanteInput, ChoixUncheckedCreateWithoutCarte_suivanteInput>
  }

  export type ChoixCreateManyCarte_suivanteInputEnvelope = {
    data: ChoixCreateManyCarte_suivanteInput | ChoixCreateManyCarte_suivanteInput[]
    skipDuplicates?: boolean
  }

  export type PartieUpsertWithoutCartesInput = {
    update: XOR<PartieUpdateWithoutCartesInput, PartieUncheckedUpdateWithoutCartesInput>
    create: XOR<PartieCreateWithoutCartesInput, PartieUncheckedCreateWithoutCartesInput>
    where?: PartieWhereInput
  }

  export type PartieUpdateToOneWithWhereWithoutCartesInput = {
    where?: PartieWhereInput
    data: XOR<PartieUpdateWithoutCartesInput, PartieUncheckedUpdateWithoutCartesInput>
  }

  export type PartieUpdateWithoutCartesInput = {
    date_debut_partie?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin_partie?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    joueur?: JoueurUpdateOneRequiredWithoutPartiesNestedInput
  }

  export type PartieUncheckedUpdateWithoutCartesInput = {
    partie_id?: IntFieldUpdateOperationsInput | number
    date_debut_partie?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin_partie?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    joueur_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChoixUpsertWithWhereUniqueWithoutCarteInput = {
    where: ChoixWhereUniqueInput
    update: XOR<ChoixUpdateWithoutCarteInput, ChoixUncheckedUpdateWithoutCarteInput>
    create: XOR<ChoixCreateWithoutCarteInput, ChoixUncheckedCreateWithoutCarteInput>
  }

  export type ChoixUpdateWithWhereUniqueWithoutCarteInput = {
    where: ChoixWhereUniqueInput
    data: XOR<ChoixUpdateWithoutCarteInput, ChoixUncheckedUpdateWithoutCarteInput>
  }

  export type ChoixUpdateManyWithWhereWithoutCarteInput = {
    where: ChoixScalarWhereInput
    data: XOR<ChoixUpdateManyMutationInput, ChoixUncheckedUpdateManyWithoutCarteInput>
  }

  export type ChoixScalarWhereInput = {
    AND?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
    OR?: ChoixScalarWhereInput[]
    NOT?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
    choix_id?: IntFilter<"Choix"> | number
    texte?: StringFilter<"Choix"> | string
    carte_suivante_default?: IntNullableFilter<"Choix"> | number | null
    carte_id?: IntFilter<"Choix"> | number
  }

  export type ChoixUpsertWithWhereUniqueWithoutCarte_suivanteInput = {
    where: ChoixWhereUniqueInput
    update: XOR<ChoixUpdateWithoutCarte_suivanteInput, ChoixUncheckedUpdateWithoutCarte_suivanteInput>
    create: XOR<ChoixCreateWithoutCarte_suivanteInput, ChoixUncheckedCreateWithoutCarte_suivanteInput>
  }

  export type ChoixUpdateWithWhereUniqueWithoutCarte_suivanteInput = {
    where: ChoixWhereUniqueInput
    data: XOR<ChoixUpdateWithoutCarte_suivanteInput, ChoixUncheckedUpdateWithoutCarte_suivanteInput>
  }

  export type ChoixUpdateManyWithWhereWithoutCarte_suivanteInput = {
    where: ChoixScalarWhereInput
    data: XOR<ChoixUpdateManyMutationInput, ChoixUncheckedUpdateManyWithoutCarte_suivanteInput>
  }

  export type CarteCreateWithoutSuivie_parInput = {
    titre: string
    image_url?: string | null
    texte: string
    is_over?: boolean
    partie: PartieCreateNestedOneWithoutCartesInput
    choix?: ChoixCreateNestedManyWithoutCarteInput
  }

  export type CarteUncheckedCreateWithoutSuivie_parInput = {
    carte_id?: number
    titre: string
    image_url?: string | null
    texte: string
    is_over?: boolean
    partie_id: number
    choix?: ChoixUncheckedCreateNestedManyWithoutCarteInput
  }

  export type CarteCreateOrConnectWithoutSuivie_parInput = {
    where: CarteWhereUniqueInput
    create: XOR<CarteCreateWithoutSuivie_parInput, CarteUncheckedCreateWithoutSuivie_parInput>
  }

  export type CarteCreateWithoutChoixInput = {
    titre: string
    image_url?: string | null
    texte: string
    is_over?: boolean
    partie: PartieCreateNestedOneWithoutCartesInput
    suivie_par?: ChoixCreateNestedManyWithoutCarte_suivanteInput
  }

  export type CarteUncheckedCreateWithoutChoixInput = {
    carte_id?: number
    titre: string
    image_url?: string | null
    texte: string
    is_over?: boolean
    partie_id: number
    suivie_par?: ChoixUncheckedCreateNestedManyWithoutCarte_suivanteInput
  }

  export type CarteCreateOrConnectWithoutChoixInput = {
    where: CarteWhereUniqueInput
    create: XOR<CarteCreateWithoutChoixInput, CarteUncheckedCreateWithoutChoixInput>
  }

  export type CarteUpsertWithoutSuivie_parInput = {
    update: XOR<CarteUpdateWithoutSuivie_parInput, CarteUncheckedUpdateWithoutSuivie_parInput>
    create: XOR<CarteCreateWithoutSuivie_parInput, CarteUncheckedCreateWithoutSuivie_parInput>
    where?: CarteWhereInput
  }

  export type CarteUpdateToOneWithWhereWithoutSuivie_parInput = {
    where?: CarteWhereInput
    data: XOR<CarteUpdateWithoutSuivie_parInput, CarteUncheckedUpdateWithoutSuivie_parInput>
  }

  export type CarteUpdateWithoutSuivie_parInput = {
    titre?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    texte?: StringFieldUpdateOperationsInput | string
    is_over?: BoolFieldUpdateOperationsInput | boolean
    partie?: PartieUpdateOneRequiredWithoutCartesNestedInput
    choix?: ChoixUpdateManyWithoutCarteNestedInput
  }

  export type CarteUncheckedUpdateWithoutSuivie_parInput = {
    carte_id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    texte?: StringFieldUpdateOperationsInput | string
    is_over?: BoolFieldUpdateOperationsInput | boolean
    partie_id?: IntFieldUpdateOperationsInput | number
    choix?: ChoixUncheckedUpdateManyWithoutCarteNestedInput
  }

  export type CarteUpsertWithoutChoixInput = {
    update: XOR<CarteUpdateWithoutChoixInput, CarteUncheckedUpdateWithoutChoixInput>
    create: XOR<CarteCreateWithoutChoixInput, CarteUncheckedCreateWithoutChoixInput>
    where?: CarteWhereInput
  }

  export type CarteUpdateToOneWithWhereWithoutChoixInput = {
    where?: CarteWhereInput
    data: XOR<CarteUpdateWithoutChoixInput, CarteUncheckedUpdateWithoutChoixInput>
  }

  export type CarteUpdateWithoutChoixInput = {
    titre?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    texte?: StringFieldUpdateOperationsInput | string
    is_over?: BoolFieldUpdateOperationsInput | boolean
    partie?: PartieUpdateOneRequiredWithoutCartesNestedInput
    suivie_par?: ChoixUpdateManyWithoutCarte_suivanteNestedInput
  }

  export type CarteUncheckedUpdateWithoutChoixInput = {
    carte_id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    texte?: StringFieldUpdateOperationsInput | string
    is_over?: BoolFieldUpdateOperationsInput | boolean
    partie_id?: IntFieldUpdateOperationsInput | number
    suivie_par?: ChoixUncheckedUpdateManyWithoutCarte_suivanteNestedInput
  }

  export type PartieCreateManyJoueurInput = {
    partie_id?: number
    date_debut_partie: Date | string
    date_fin_partie?: Date | string | null
    statut?: string
  }

  export type PartieUpdateWithoutJoueurInput = {
    date_debut_partie?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin_partie?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    cartes?: CarteUpdateManyWithoutPartieNestedInput
  }

  export type PartieUncheckedUpdateWithoutJoueurInput = {
    partie_id?: IntFieldUpdateOperationsInput | number
    date_debut_partie?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin_partie?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    cartes?: CarteUncheckedUpdateManyWithoutPartieNestedInput
  }

  export type PartieUncheckedUpdateManyWithoutJoueurInput = {
    partie_id?: IntFieldUpdateOperationsInput | number
    date_debut_partie?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin_partie?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
  }

  export type CarteCreateManyPartieInput = {
    carte_id?: number
    titre: string
    image_url?: string | null
    texte: string
    is_over?: boolean
  }

  export type CarteUpdateWithoutPartieInput = {
    titre?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    texte?: StringFieldUpdateOperationsInput | string
    is_over?: BoolFieldUpdateOperationsInput | boolean
    choix?: ChoixUpdateManyWithoutCarteNestedInput
    suivie_par?: ChoixUpdateManyWithoutCarte_suivanteNestedInput
  }

  export type CarteUncheckedUpdateWithoutPartieInput = {
    carte_id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    texte?: StringFieldUpdateOperationsInput | string
    is_over?: BoolFieldUpdateOperationsInput | boolean
    choix?: ChoixUncheckedUpdateManyWithoutCarteNestedInput
    suivie_par?: ChoixUncheckedUpdateManyWithoutCarte_suivanteNestedInput
  }

  export type CarteUncheckedUpdateManyWithoutPartieInput = {
    carte_id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    texte?: StringFieldUpdateOperationsInput | string
    is_over?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChoixCreateManyCarteInput = {
    choix_id?: number
    texte: string
    carte_suivante_default?: number | null
  }

  export type ChoixCreateManyCarte_suivanteInput = {
    choix_id?: number
    texte: string
    carte_id: number
  }

  export type ChoixUpdateWithoutCarteInput = {
    texte?: StringFieldUpdateOperationsInput | string
    carte_suivante?: CarteUpdateOneWithoutSuivie_parNestedInput
  }

  export type ChoixUncheckedUpdateWithoutCarteInput = {
    choix_id?: IntFieldUpdateOperationsInput | number
    texte?: StringFieldUpdateOperationsInput | string
    carte_suivante_default?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChoixUncheckedUpdateManyWithoutCarteInput = {
    choix_id?: IntFieldUpdateOperationsInput | number
    texte?: StringFieldUpdateOperationsInput | string
    carte_suivante_default?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChoixUpdateWithoutCarte_suivanteInput = {
    texte?: StringFieldUpdateOperationsInput | string
    carte?: CarteUpdateOneRequiredWithoutChoixNestedInput
  }

  export type ChoixUncheckedUpdateWithoutCarte_suivanteInput = {
    choix_id?: IntFieldUpdateOperationsInput | number
    texte?: StringFieldUpdateOperationsInput | string
    carte_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChoixUncheckedUpdateManyWithoutCarte_suivanteInput = {
    choix_id?: IntFieldUpdateOperationsInput | number
    texte?: StringFieldUpdateOperationsInput | string
    carte_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}