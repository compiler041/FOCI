
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model OAuthAccount
 * 
 */
export type OAuthAccount = $Result.DefaultSelection<Prisma.$OAuthAccountPayload>
/**
 * Model FocusSession
 * 
 */
export type FocusSession = $Result.DefaultSelection<Prisma.$FocusSessionPayload>
/**
 * Model Strictness
 * 
 */
export type Strictness = $Result.DefaultSelection<Prisma.$StrictnessPayload>
/**
 * Model Break
 * 
 */
export type Break = $Result.DefaultSelection<Prisma.$BreakPayload>
/**
 * Model BlockedApp
 * 
 */
export type BlockedApp = $Result.DefaultSelection<Prisma.$BlockedAppPayload>
/**
 * Model Theme
 * 
 */
export type Theme = $Result.DefaultSelection<Prisma.$ThemePayload>
/**
 * Model UserTheme
 * 
 */
export type UserTheme = $Result.DefaultSelection<Prisma.$UserThemePayload>
/**
 * Model YoutubeAllowlist
 * 
 */
export type YoutubeAllowlist = $Result.DefaultSelection<Prisma.$YoutubeAllowlistPayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model UserAchievement
 * 
 */
export type UserAchievement = $Result.DefaultSelection<Prisma.$UserAchievementPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SessionStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  ABANDONED: 'ABANDONED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]

}

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oAuthAccount`: Exposes CRUD operations for the **OAuthAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OAuthAccounts
    * const oAuthAccounts = await prisma.oAuthAccount.findMany()
    * ```
    */
  get oAuthAccount(): Prisma.OAuthAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.focusSession`: Exposes CRUD operations for the **FocusSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FocusSessions
    * const focusSessions = await prisma.focusSession.findMany()
    * ```
    */
  get focusSession(): Prisma.FocusSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.strictness`: Exposes CRUD operations for the **Strictness** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Strictnesses
    * const strictnesses = await prisma.strictness.findMany()
    * ```
    */
  get strictness(): Prisma.StrictnessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.break`: Exposes CRUD operations for the **Break** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Breaks
    * const breaks = await prisma.break.findMany()
    * ```
    */
  get break(): Prisma.BreakDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blockedApp`: Exposes CRUD operations for the **BlockedApp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockedApps
    * const blockedApps = await prisma.blockedApp.findMany()
    * ```
    */
  get blockedApp(): Prisma.BlockedAppDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.theme`: Exposes CRUD operations for the **Theme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Themes
    * const themes = await prisma.theme.findMany()
    * ```
    */
  get theme(): Prisma.ThemeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTheme`: Exposes CRUD operations for the **UserTheme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserThemes
    * const userThemes = await prisma.userTheme.findMany()
    * ```
    */
  get userTheme(): Prisma.UserThemeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.youtubeAllowlist`: Exposes CRUD operations for the **YoutubeAllowlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YoutubeAllowlists
    * const youtubeAllowlists = await prisma.youtubeAllowlist.findMany()
    * ```
    */
  get youtubeAllowlist(): Prisma.YoutubeAllowlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAchievement`: Exposes CRUD operations for the **UserAchievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAchievements
    * const userAchievements = await prisma.userAchievement.findMany()
    * ```
    */
  get userAchievement(): Prisma.UserAchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    OAuthAccount: 'OAuthAccount',
    FocusSession: 'FocusSession',
    Strictness: 'Strictness',
    Break: 'Break',
    BlockedApp: 'BlockedApp',
    Theme: 'Theme',
    UserTheme: 'UserTheme',
    YoutubeAllowlist: 'YoutubeAllowlist',
    Achievement: 'Achievement',
    UserAchievement: 'UserAchievement',
    Schedule: 'Schedule'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "oAuthAccount" | "focusSession" | "strictness" | "break" | "blockedApp" | "theme" | "userTheme" | "youtubeAllowlist" | "achievement" | "userAchievement" | "schedule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      OAuthAccount: {
        payload: Prisma.$OAuthAccountPayload<ExtArgs>
        fields: Prisma.OAuthAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OAuthAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OAuthAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          findFirst: {
            args: Prisma.OAuthAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OAuthAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          findMany: {
            args: Prisma.OAuthAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>[]
          }
          create: {
            args: Prisma.OAuthAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          createMany: {
            args: Prisma.OAuthAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OAuthAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>[]
          }
          delete: {
            args: Prisma.OAuthAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          update: {
            args: Prisma.OAuthAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          deleteMany: {
            args: Prisma.OAuthAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OAuthAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OAuthAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>[]
          }
          upsert: {
            args: Prisma.OAuthAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          aggregate: {
            args: Prisma.OAuthAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOAuthAccount>
          }
          groupBy: {
            args: Prisma.OAuthAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<OAuthAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.OAuthAccountCountArgs<ExtArgs>
            result: $Utils.Optional<OAuthAccountCountAggregateOutputType> | number
          }
        }
      }
      FocusSession: {
        payload: Prisma.$FocusSessionPayload<ExtArgs>
        fields: Prisma.FocusSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FocusSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FocusSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          findFirst: {
            args: Prisma.FocusSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FocusSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          findMany: {
            args: Prisma.FocusSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>[]
          }
          create: {
            args: Prisma.FocusSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          createMany: {
            args: Prisma.FocusSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FocusSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>[]
          }
          delete: {
            args: Prisma.FocusSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          update: {
            args: Prisma.FocusSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          deleteMany: {
            args: Prisma.FocusSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FocusSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FocusSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>[]
          }
          upsert: {
            args: Prisma.FocusSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          aggregate: {
            args: Prisma.FocusSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFocusSession>
          }
          groupBy: {
            args: Prisma.FocusSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FocusSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FocusSessionCountArgs<ExtArgs>
            result: $Utils.Optional<FocusSessionCountAggregateOutputType> | number
          }
        }
      }
      Strictness: {
        payload: Prisma.$StrictnessPayload<ExtArgs>
        fields: Prisma.StrictnessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StrictnessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrictnessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StrictnessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrictnessPayload>
          }
          findFirst: {
            args: Prisma.StrictnessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrictnessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StrictnessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrictnessPayload>
          }
          findMany: {
            args: Prisma.StrictnessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrictnessPayload>[]
          }
          create: {
            args: Prisma.StrictnessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrictnessPayload>
          }
          createMany: {
            args: Prisma.StrictnessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StrictnessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrictnessPayload>[]
          }
          delete: {
            args: Prisma.StrictnessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrictnessPayload>
          }
          update: {
            args: Prisma.StrictnessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrictnessPayload>
          }
          deleteMany: {
            args: Prisma.StrictnessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StrictnessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StrictnessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrictnessPayload>[]
          }
          upsert: {
            args: Prisma.StrictnessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrictnessPayload>
          }
          aggregate: {
            args: Prisma.StrictnessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStrictness>
          }
          groupBy: {
            args: Prisma.StrictnessGroupByArgs<ExtArgs>
            result: $Utils.Optional<StrictnessGroupByOutputType>[]
          }
          count: {
            args: Prisma.StrictnessCountArgs<ExtArgs>
            result: $Utils.Optional<StrictnessCountAggregateOutputType> | number
          }
        }
      }
      Break: {
        payload: Prisma.$BreakPayload<ExtArgs>
        fields: Prisma.BreakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BreakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BreakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>
          }
          findFirst: {
            args: Prisma.BreakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BreakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>
          }
          findMany: {
            args: Prisma.BreakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>[]
          }
          create: {
            args: Prisma.BreakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>
          }
          createMany: {
            args: Prisma.BreakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BreakCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>[]
          }
          delete: {
            args: Prisma.BreakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>
          }
          update: {
            args: Prisma.BreakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>
          }
          deleteMany: {
            args: Prisma.BreakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BreakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BreakUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>[]
          }
          upsert: {
            args: Prisma.BreakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakPayload>
          }
          aggregate: {
            args: Prisma.BreakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBreak>
          }
          groupBy: {
            args: Prisma.BreakGroupByArgs<ExtArgs>
            result: $Utils.Optional<BreakGroupByOutputType>[]
          }
          count: {
            args: Prisma.BreakCountArgs<ExtArgs>
            result: $Utils.Optional<BreakCountAggregateOutputType> | number
          }
        }
      }
      BlockedApp: {
        payload: Prisma.$BlockedAppPayload<ExtArgs>
        fields: Prisma.BlockedAppFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockedAppFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockedAppFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>
          }
          findFirst: {
            args: Prisma.BlockedAppFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockedAppFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>
          }
          findMany: {
            args: Prisma.BlockedAppFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>[]
          }
          create: {
            args: Prisma.BlockedAppCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>
          }
          createMany: {
            args: Prisma.BlockedAppCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockedAppCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>[]
          }
          delete: {
            args: Prisma.BlockedAppDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>
          }
          update: {
            args: Prisma.BlockedAppUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>
          }
          deleteMany: {
            args: Prisma.BlockedAppDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockedAppUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockedAppUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>[]
          }
          upsert: {
            args: Prisma.BlockedAppUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>
          }
          aggregate: {
            args: Prisma.BlockedAppAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockedApp>
          }
          groupBy: {
            args: Prisma.BlockedAppGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockedAppGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockedAppCountArgs<ExtArgs>
            result: $Utils.Optional<BlockedAppCountAggregateOutputType> | number
          }
        }
      }
      Theme: {
        payload: Prisma.$ThemePayload<ExtArgs>
        fields: Prisma.ThemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findFirst: {
            args: Prisma.ThemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findMany: {
            args: Prisma.ThemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          create: {
            args: Prisma.ThemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          createMany: {
            args: Prisma.ThemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThemeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          delete: {
            args: Prisma.ThemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          update: {
            args: Prisma.ThemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          deleteMany: {
            args: Prisma.ThemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThemeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          upsert: {
            args: Prisma.ThemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          aggregate: {
            args: Prisma.ThemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTheme>
          }
          groupBy: {
            args: Prisma.ThemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThemeCountArgs<ExtArgs>
            result: $Utils.Optional<ThemeCountAggregateOutputType> | number
          }
        }
      }
      UserTheme: {
        payload: Prisma.$UserThemePayload<ExtArgs>
        fields: Prisma.UserThemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserThemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserThemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserThemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserThemePayload>
          }
          findFirst: {
            args: Prisma.UserThemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserThemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserThemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserThemePayload>
          }
          findMany: {
            args: Prisma.UserThemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserThemePayload>[]
          }
          create: {
            args: Prisma.UserThemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserThemePayload>
          }
          createMany: {
            args: Prisma.UserThemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserThemeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserThemePayload>[]
          }
          delete: {
            args: Prisma.UserThemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserThemePayload>
          }
          update: {
            args: Prisma.UserThemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserThemePayload>
          }
          deleteMany: {
            args: Prisma.UserThemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserThemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserThemeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserThemePayload>[]
          }
          upsert: {
            args: Prisma.UserThemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserThemePayload>
          }
          aggregate: {
            args: Prisma.UserThemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTheme>
          }
          groupBy: {
            args: Prisma.UserThemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserThemeCountArgs<ExtArgs>
            result: $Utils.Optional<UserThemeCountAggregateOutputType> | number
          }
        }
      }
      YoutubeAllowlist: {
        payload: Prisma.$YoutubeAllowlistPayload<ExtArgs>
        fields: Prisma.YoutubeAllowlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YoutubeAllowlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeAllowlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YoutubeAllowlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeAllowlistPayload>
          }
          findFirst: {
            args: Prisma.YoutubeAllowlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeAllowlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YoutubeAllowlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeAllowlistPayload>
          }
          findMany: {
            args: Prisma.YoutubeAllowlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeAllowlistPayload>[]
          }
          create: {
            args: Prisma.YoutubeAllowlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeAllowlistPayload>
          }
          createMany: {
            args: Prisma.YoutubeAllowlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YoutubeAllowlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeAllowlistPayload>[]
          }
          delete: {
            args: Prisma.YoutubeAllowlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeAllowlistPayload>
          }
          update: {
            args: Prisma.YoutubeAllowlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeAllowlistPayload>
          }
          deleteMany: {
            args: Prisma.YoutubeAllowlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YoutubeAllowlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.YoutubeAllowlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeAllowlistPayload>[]
          }
          upsert: {
            args: Prisma.YoutubeAllowlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeAllowlistPayload>
          }
          aggregate: {
            args: Prisma.YoutubeAllowlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYoutubeAllowlist>
          }
          groupBy: {
            args: Prisma.YoutubeAllowlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<YoutubeAllowlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.YoutubeAllowlistCountArgs<ExtArgs>
            result: $Utils.Optional<YoutubeAllowlistCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      UserAchievement: {
        payload: Prisma.$UserAchievementPayload<ExtArgs>
        fields: Prisma.UserAchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findFirst: {
            args: Prisma.UserAchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findMany: {
            args: Prisma.UserAchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          create: {
            args: Prisma.UserAchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          createMany: {
            args: Prisma.UserAchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          delete: {
            args: Prisma.UserAchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          update: {
            args: Prisma.UserAchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          deleteMany: {
            args: Prisma.UserAchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          upsert: {
            args: Prisma.UserAchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          aggregate: {
            args: Prisma.UserAchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAchievement>
          }
          groupBy: {
            args: Prisma.UserAchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAchievementCountArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    oAuthAccount?: OAuthAccountOmit
    focusSession?: FocusSessionOmit
    strictness?: StrictnessOmit
    break?: BreakOmit
    blockedApp?: BlockedAppOmit
    theme?: ThemeOmit
    userTheme?: UserThemeOmit
    youtubeAllowlist?: YoutubeAllowlistOmit
    achievement?: AchievementOmit
    userAchievement?: UserAchievementOmit
    schedule?: ScheduleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    oauthAccounts: number
    sessions: number
    blockedApps: number
    youtubeAllowlist: number
    achievements: number
    schedules: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oauthAccounts?: boolean | UserCountOutputTypeCountOauthAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    blockedApps?: boolean | UserCountOutputTypeCountBlockedAppsArgs
    youtubeAllowlist?: boolean | UserCountOutputTypeCountYoutubeAllowlistArgs
    achievements?: boolean | UserCountOutputTypeCountAchievementsArgs
    schedules?: boolean | UserCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOauthAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FocusSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockedAppsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedAppWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountYoutubeAllowlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YoutubeAllowlistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type FocusSessionCountOutputType
   */

  export type FocusSessionCountOutputType = {
    breaks: number
  }

  export type FocusSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    breaks?: boolean | FocusSessionCountOutputTypeCountBreaksArgs
  }

  // Custom InputTypes
  /**
   * FocusSessionCountOutputType without action
   */
  export type FocusSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSessionCountOutputType
     */
    select?: FocusSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FocusSessionCountOutputType without action
   */
  export type FocusSessionCountOutputTypeCountBreaksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreakWhereInput
  }


  /**
   * Count Type ThemeCountOutputType
   */

  export type ThemeCountOutputType = {
    userThemes: number
  }

  export type ThemeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userThemes?: boolean | ThemeCountOutputTypeCountUserThemesArgs
  }

  // Custom InputTypes
  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemeCountOutputType
     */
    select?: ThemeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeCountUserThemesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserThemeWhereInput
  }


  /**
   * Count Type AchievementCountOutputType
   */

  export type AchievementCountOutputType = {
    userAchievements: number
  }

  export type AchievementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAchievements?: boolean | AchievementCountOutputTypeCountUserAchievementsArgs
  }

  // Custom InputTypes
  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementCountOutputType
     */
    select?: AchievementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeCountUserAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    strictnessLevel: number | null
    totalFocusSeconds: number | null
  }

  export type UserSumAggregateOutputType = {
    strictnessLevel: number | null
    totalFocusSeconds: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    avatar: string | null
    isPremium: boolean | null
    createdAt: Date | null
    strictnessLevel: number | null
    totalFocusSeconds: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    avatar: string | null
    isPremium: boolean | null
    createdAt: Date | null
    strictnessLevel: number | null
    totalFocusSeconds: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    avatar: number
    isPremium: number
    createdAt: number
    strictnessLevel: number
    totalFocusSeconds: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    strictnessLevel?: true
    totalFocusSeconds?: true
  }

  export type UserSumAggregateInputType = {
    strictnessLevel?: true
    totalFocusSeconds?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    avatar?: true
    isPremium?: true
    createdAt?: true
    strictnessLevel?: true
    totalFocusSeconds?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    avatar?: true
    isPremium?: true
    createdAt?: true
    strictnessLevel?: true
    totalFocusSeconds?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    avatar?: true
    isPremium?: true
    createdAt?: true
    strictnessLevel?: true
    totalFocusSeconds?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string | null
    avatar: string | null
    isPremium: boolean
    createdAt: Date
    strictnessLevel: number
    totalFocusSeconds: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    avatar?: boolean
    isPremium?: boolean
    createdAt?: boolean
    strictnessLevel?: boolean
    totalFocusSeconds?: boolean
    oauthAccounts?: boolean | User$oauthAccountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    blockedApps?: boolean | User$blockedAppsArgs<ExtArgs>
    strictness?: boolean | User$strictnessArgs<ExtArgs>
    themes?: boolean | User$themesArgs<ExtArgs>
    youtubeAllowlist?: boolean | User$youtubeAllowlistArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    schedules?: boolean | User$schedulesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    avatar?: boolean
    isPremium?: boolean
    createdAt?: boolean
    strictnessLevel?: boolean
    totalFocusSeconds?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    avatar?: boolean
    isPremium?: boolean
    createdAt?: boolean
    strictnessLevel?: boolean
    totalFocusSeconds?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    avatar?: boolean
    isPremium?: boolean
    createdAt?: boolean
    strictnessLevel?: boolean
    totalFocusSeconds?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "avatar" | "isPremium" | "createdAt" | "strictnessLevel" | "totalFocusSeconds", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oauthAccounts?: boolean | User$oauthAccountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    blockedApps?: boolean | User$blockedAppsArgs<ExtArgs>
    strictness?: boolean | User$strictnessArgs<ExtArgs>
    themes?: boolean | User$themesArgs<ExtArgs>
    youtubeAllowlist?: boolean | User$youtubeAllowlistArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    schedules?: boolean | User$schedulesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      oauthAccounts: Prisma.$OAuthAccountPayload<ExtArgs>[]
      sessions: Prisma.$FocusSessionPayload<ExtArgs>[]
      blockedApps: Prisma.$BlockedAppPayload<ExtArgs>[]
      strictness: Prisma.$StrictnessPayload<ExtArgs> | null
      themes: Prisma.$UserThemePayload<ExtArgs> | null
      youtubeAllowlist: Prisma.$YoutubeAllowlistPayload<ExtArgs>[]
      achievements: Prisma.$UserAchievementPayload<ExtArgs>[]
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string | null
      avatar: string | null
      isPremium: boolean
      createdAt: Date
      strictnessLevel: number
      totalFocusSeconds: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    oauthAccounts<T extends User$oauthAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$oauthAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blockedApps<T extends User$blockedAppsArgs<ExtArgs> = {}>(args?: Subset<T, User$blockedAppsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    strictness<T extends User$strictnessArgs<ExtArgs> = {}>(args?: Subset<T, User$strictnessArgs<ExtArgs>>): Prisma__StrictnessClient<$Result.GetResult<Prisma.$StrictnessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    themes<T extends User$themesArgs<ExtArgs> = {}>(args?: Subset<T, User$themesArgs<ExtArgs>>): Prisma__UserThemeClient<$Result.GetResult<Prisma.$UserThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    youtubeAllowlist<T extends User$youtubeAllowlistArgs<ExtArgs> = {}>(args?: Subset<T, User$youtubeAllowlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YoutubeAllowlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    achievements<T extends User$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, User$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends User$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, User$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly isPremium: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly strictnessLevel: FieldRef<"User", 'Int'>
    readonly totalFocusSeconds: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.oauthAccounts
   */
  export type User$oauthAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    where?: OAuthAccountWhereInput
    orderBy?: OAuthAccountOrderByWithRelationInput | OAuthAccountOrderByWithRelationInput[]
    cursor?: OAuthAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OAuthAccountScalarFieldEnum | OAuthAccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    where?: FocusSessionWhereInput
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    cursor?: FocusSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * User.blockedApps
   */
  export type User$blockedAppsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    where?: BlockedAppWhereInput
    orderBy?: BlockedAppOrderByWithRelationInput | BlockedAppOrderByWithRelationInput[]
    cursor?: BlockedAppWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockedAppScalarFieldEnum | BlockedAppScalarFieldEnum[]
  }

  /**
   * User.strictness
   */
  export type User$strictnessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strictness
     */
    select?: StrictnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Strictness
     */
    omit?: StrictnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrictnessInclude<ExtArgs> | null
    where?: StrictnessWhereInput
  }

  /**
   * User.themes
   */
  export type User$themesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTheme
     */
    select?: UserThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTheme
     */
    omit?: UserThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserThemeInclude<ExtArgs> | null
    where?: UserThemeWhereInput
  }

  /**
   * User.youtubeAllowlist
   */
  export type User$youtubeAllowlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeAllowlist
     */
    select?: YoutubeAllowlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeAllowlist
     */
    omit?: YoutubeAllowlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeAllowlistInclude<ExtArgs> | null
    where?: YoutubeAllowlistWhereInput
    orderBy?: YoutubeAllowlistOrderByWithRelationInput | YoutubeAllowlistOrderByWithRelationInput[]
    cursor?: YoutubeAllowlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YoutubeAllowlistScalarFieldEnum | YoutubeAllowlistScalarFieldEnum[]
  }

  /**
   * User.achievements
   */
  export type User$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    cursor?: UserAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * User.schedules
   */
  export type User$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model OAuthAccount
   */

  export type AggregateOAuthAccount = {
    _count: OAuthAccountCountAggregateOutputType | null
    _min: OAuthAccountMinAggregateOutputType | null
    _max: OAuthAccountMaxAggregateOutputType | null
  }

  export type OAuthAccountMinAggregateOutputType = {
    id: string | null
    provider: string | null
    providerAccountId: string | null
    accessToken: string | null
    refreshToken: string | null
    userId: string | null
  }

  export type OAuthAccountMaxAggregateOutputType = {
    id: string | null
    provider: string | null
    providerAccountId: string | null
    accessToken: string | null
    refreshToken: string | null
    userId: string | null
  }

  export type OAuthAccountCountAggregateOutputType = {
    id: number
    provider: number
    providerAccountId: number
    accessToken: number
    refreshToken: number
    userId: number
    _all: number
  }


  export type OAuthAccountMinAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    userId?: true
  }

  export type OAuthAccountMaxAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    userId?: true
  }

  export type OAuthAccountCountAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    userId?: true
    _all?: true
  }

  export type OAuthAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthAccount to aggregate.
     */
    where?: OAuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccounts to fetch.
     */
    orderBy?: OAuthAccountOrderByWithRelationInput | OAuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OAuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OAuthAccounts
    **/
    _count?: true | OAuthAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OAuthAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OAuthAccountMaxAggregateInputType
  }

  export type GetOAuthAccountAggregateType<T extends OAuthAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateOAuthAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOAuthAccount[P]>
      : GetScalarType<T[P], AggregateOAuthAccount[P]>
  }




  export type OAuthAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthAccountWhereInput
    orderBy?: OAuthAccountOrderByWithAggregationInput | OAuthAccountOrderByWithAggregationInput[]
    by: OAuthAccountScalarFieldEnum[] | OAuthAccountScalarFieldEnum
    having?: OAuthAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OAuthAccountCountAggregateInputType | true
    _min?: OAuthAccountMinAggregateInputType
    _max?: OAuthAccountMaxAggregateInputType
  }

  export type OAuthAccountGroupByOutputType = {
    id: string
    provider: string
    providerAccountId: string
    accessToken: string | null
    refreshToken: string | null
    userId: string
    _count: OAuthAccountCountAggregateOutputType | null
    _min: OAuthAccountMinAggregateOutputType | null
    _max: OAuthAccountMaxAggregateOutputType | null
  }

  type GetOAuthAccountGroupByPayload<T extends OAuthAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OAuthAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OAuthAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OAuthAccountGroupByOutputType[P]>
            : GetScalarType<T[P], OAuthAccountGroupByOutputType[P]>
        }
      >
    >


  export type OAuthAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthAccount"]>

  export type OAuthAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthAccount"]>

  export type OAuthAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthAccount"]>

  export type OAuthAccountSelectScalar = {
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    userId?: boolean
  }

  export type OAuthAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "providerAccountId" | "accessToken" | "refreshToken" | "userId", ExtArgs["result"]["oAuthAccount"]>
  export type OAuthAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OAuthAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OAuthAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OAuthAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OAuthAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: string
      providerAccountId: string
      accessToken: string | null
      refreshToken: string | null
      userId: string
    }, ExtArgs["result"]["oAuthAccount"]>
    composites: {}
  }

  type OAuthAccountGetPayload<S extends boolean | null | undefined | OAuthAccountDefaultArgs> = $Result.GetResult<Prisma.$OAuthAccountPayload, S>

  type OAuthAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OAuthAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OAuthAccountCountAggregateInputType | true
    }

  export interface OAuthAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OAuthAccount'], meta: { name: 'OAuthAccount' } }
    /**
     * Find zero or one OAuthAccount that matches the filter.
     * @param {OAuthAccountFindUniqueArgs} args - Arguments to find a OAuthAccount
     * @example
     * // Get one OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OAuthAccountFindUniqueArgs>(args: SelectSubset<T, OAuthAccountFindUniqueArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OAuthAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OAuthAccountFindUniqueOrThrowArgs} args - Arguments to find a OAuthAccount
     * @example
     * // Get one OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OAuthAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, OAuthAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountFindFirstArgs} args - Arguments to find a OAuthAccount
     * @example
     * // Get one OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OAuthAccountFindFirstArgs>(args?: SelectSubset<T, OAuthAccountFindFirstArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountFindFirstOrThrowArgs} args - Arguments to find a OAuthAccount
     * @example
     * // Get one OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OAuthAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, OAuthAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OAuthAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OAuthAccounts
     * const oAuthAccounts = await prisma.oAuthAccount.findMany()
     * 
     * // Get first 10 OAuthAccounts
     * const oAuthAccounts = await prisma.oAuthAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oAuthAccountWithIdOnly = await prisma.oAuthAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OAuthAccountFindManyArgs>(args?: SelectSubset<T, OAuthAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OAuthAccount.
     * @param {OAuthAccountCreateArgs} args - Arguments to create a OAuthAccount.
     * @example
     * // Create one OAuthAccount
     * const OAuthAccount = await prisma.oAuthAccount.create({
     *   data: {
     *     // ... data to create a OAuthAccount
     *   }
     * })
     * 
     */
    create<T extends OAuthAccountCreateArgs>(args: SelectSubset<T, OAuthAccountCreateArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OAuthAccounts.
     * @param {OAuthAccountCreateManyArgs} args - Arguments to create many OAuthAccounts.
     * @example
     * // Create many OAuthAccounts
     * const oAuthAccount = await prisma.oAuthAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OAuthAccountCreateManyArgs>(args?: SelectSubset<T, OAuthAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OAuthAccounts and returns the data saved in the database.
     * @param {OAuthAccountCreateManyAndReturnArgs} args - Arguments to create many OAuthAccounts.
     * @example
     * // Create many OAuthAccounts
     * const oAuthAccount = await prisma.oAuthAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OAuthAccounts and only return the `id`
     * const oAuthAccountWithIdOnly = await prisma.oAuthAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OAuthAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, OAuthAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OAuthAccount.
     * @param {OAuthAccountDeleteArgs} args - Arguments to delete one OAuthAccount.
     * @example
     * // Delete one OAuthAccount
     * const OAuthAccount = await prisma.oAuthAccount.delete({
     *   where: {
     *     // ... filter to delete one OAuthAccount
     *   }
     * })
     * 
     */
    delete<T extends OAuthAccountDeleteArgs>(args: SelectSubset<T, OAuthAccountDeleteArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OAuthAccount.
     * @param {OAuthAccountUpdateArgs} args - Arguments to update one OAuthAccount.
     * @example
     * // Update one OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OAuthAccountUpdateArgs>(args: SelectSubset<T, OAuthAccountUpdateArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OAuthAccounts.
     * @param {OAuthAccountDeleteManyArgs} args - Arguments to filter OAuthAccounts to delete.
     * @example
     * // Delete a few OAuthAccounts
     * const { count } = await prisma.oAuthAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OAuthAccountDeleteManyArgs>(args?: SelectSubset<T, OAuthAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OAuthAccounts
     * const oAuthAccount = await prisma.oAuthAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OAuthAccountUpdateManyArgs>(args: SelectSubset<T, OAuthAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthAccounts and returns the data updated in the database.
     * @param {OAuthAccountUpdateManyAndReturnArgs} args - Arguments to update many OAuthAccounts.
     * @example
     * // Update many OAuthAccounts
     * const oAuthAccount = await prisma.oAuthAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OAuthAccounts and only return the `id`
     * const oAuthAccountWithIdOnly = await prisma.oAuthAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OAuthAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, OAuthAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OAuthAccount.
     * @param {OAuthAccountUpsertArgs} args - Arguments to update or create a OAuthAccount.
     * @example
     * // Update or create a OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.upsert({
     *   create: {
     *     // ... data to create a OAuthAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OAuthAccount we want to update
     *   }
     * })
     */
    upsert<T extends OAuthAccountUpsertArgs>(args: SelectSubset<T, OAuthAccountUpsertArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OAuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountCountArgs} args - Arguments to filter OAuthAccounts to count.
     * @example
     * // Count the number of OAuthAccounts
     * const count = await prisma.oAuthAccount.count({
     *   where: {
     *     // ... the filter for the OAuthAccounts we want to count
     *   }
     * })
    **/
    count<T extends OAuthAccountCountArgs>(
      args?: Subset<T, OAuthAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OAuthAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OAuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OAuthAccountAggregateArgs>(args: Subset<T, OAuthAccountAggregateArgs>): Prisma.PrismaPromise<GetOAuthAccountAggregateType<T>>

    /**
     * Group by OAuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountGroupByArgs} args - Group by arguments.
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
      T extends OAuthAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OAuthAccountGroupByArgs['orderBy'] }
        : { orderBy?: OAuthAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OAuthAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOAuthAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OAuthAccount model
   */
  readonly fields: OAuthAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OAuthAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OAuthAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OAuthAccount model
   */
  interface OAuthAccountFieldRefs {
    readonly id: FieldRef<"OAuthAccount", 'String'>
    readonly provider: FieldRef<"OAuthAccount", 'String'>
    readonly providerAccountId: FieldRef<"OAuthAccount", 'String'>
    readonly accessToken: FieldRef<"OAuthAccount", 'String'>
    readonly refreshToken: FieldRef<"OAuthAccount", 'String'>
    readonly userId: FieldRef<"OAuthAccount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OAuthAccount findUnique
   */
  export type OAuthAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccount to fetch.
     */
    where: OAuthAccountWhereUniqueInput
  }

  /**
   * OAuthAccount findUniqueOrThrow
   */
  export type OAuthAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccount to fetch.
     */
    where: OAuthAccountWhereUniqueInput
  }

  /**
   * OAuthAccount findFirst
   */
  export type OAuthAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccount to fetch.
     */
    where?: OAuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccounts to fetch.
     */
    orderBy?: OAuthAccountOrderByWithRelationInput | OAuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthAccounts.
     */
    cursor?: OAuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthAccounts.
     */
    distinct?: OAuthAccountScalarFieldEnum | OAuthAccountScalarFieldEnum[]
  }

  /**
   * OAuthAccount findFirstOrThrow
   */
  export type OAuthAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccount to fetch.
     */
    where?: OAuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccounts to fetch.
     */
    orderBy?: OAuthAccountOrderByWithRelationInput | OAuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthAccounts.
     */
    cursor?: OAuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthAccounts.
     */
    distinct?: OAuthAccountScalarFieldEnum | OAuthAccountScalarFieldEnum[]
  }

  /**
   * OAuthAccount findMany
   */
  export type OAuthAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccounts to fetch.
     */
    where?: OAuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccounts to fetch.
     */
    orderBy?: OAuthAccountOrderByWithRelationInput | OAuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OAuthAccounts.
     */
    cursor?: OAuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthAccounts.
     */
    distinct?: OAuthAccountScalarFieldEnum | OAuthAccountScalarFieldEnum[]
  }

  /**
   * OAuthAccount create
   */
  export type OAuthAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a OAuthAccount.
     */
    data: XOR<OAuthAccountCreateInput, OAuthAccountUncheckedCreateInput>
  }

  /**
   * OAuthAccount createMany
   */
  export type OAuthAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OAuthAccounts.
     */
    data: OAuthAccountCreateManyInput | OAuthAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OAuthAccount createManyAndReturn
   */
  export type OAuthAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * The data used to create many OAuthAccounts.
     */
    data: OAuthAccountCreateManyInput | OAuthAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OAuthAccount update
   */
  export type OAuthAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a OAuthAccount.
     */
    data: XOR<OAuthAccountUpdateInput, OAuthAccountUncheckedUpdateInput>
    /**
     * Choose, which OAuthAccount to update.
     */
    where: OAuthAccountWhereUniqueInput
  }

  /**
   * OAuthAccount updateMany
   */
  export type OAuthAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OAuthAccounts.
     */
    data: XOR<OAuthAccountUpdateManyMutationInput, OAuthAccountUncheckedUpdateManyInput>
    /**
     * Filter which OAuthAccounts to update
     */
    where?: OAuthAccountWhereInput
    /**
     * Limit how many OAuthAccounts to update.
     */
    limit?: number
  }

  /**
   * OAuthAccount updateManyAndReturn
   */
  export type OAuthAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * The data used to update OAuthAccounts.
     */
    data: XOR<OAuthAccountUpdateManyMutationInput, OAuthAccountUncheckedUpdateManyInput>
    /**
     * Filter which OAuthAccounts to update
     */
    where?: OAuthAccountWhereInput
    /**
     * Limit how many OAuthAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OAuthAccount upsert
   */
  export type OAuthAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the OAuthAccount to update in case it exists.
     */
    where: OAuthAccountWhereUniqueInput
    /**
     * In case the OAuthAccount found by the `where` argument doesn't exist, create a new OAuthAccount with this data.
     */
    create: XOR<OAuthAccountCreateInput, OAuthAccountUncheckedCreateInput>
    /**
     * In case the OAuthAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OAuthAccountUpdateInput, OAuthAccountUncheckedUpdateInput>
  }

  /**
   * OAuthAccount delete
   */
  export type OAuthAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter which OAuthAccount to delete.
     */
    where: OAuthAccountWhereUniqueInput
  }

  /**
   * OAuthAccount deleteMany
   */
  export type OAuthAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthAccounts to delete
     */
    where?: OAuthAccountWhereInput
    /**
     * Limit how many OAuthAccounts to delete.
     */
    limit?: number
  }

  /**
   * OAuthAccount without action
   */
  export type OAuthAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
  }


  /**
   * Model FocusSession
   */

  export type AggregateFocusSession = {
    _count: FocusSessionCountAggregateOutputType | null
    _avg: FocusSessionAvgAggregateOutputType | null
    _sum: FocusSessionSumAggregateOutputType | null
    _min: FocusSessionMinAggregateOutputType | null
    _max: FocusSessionMaxAggregateOutputType | null
  }

  export type FocusSessionAvgAggregateOutputType = {
    duration: number | null
  }

  export type FocusSessionSumAggregateOutputType = {
    duration: number | null
  }

  export type FocusSessionMinAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    status: $Enums.SessionStatus | null
    createdAt: Date | null
    userId: string | null
  }

  export type FocusSessionMaxAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    status: $Enums.SessionStatus | null
    createdAt: Date | null
    userId: string | null
  }

  export type FocusSessionCountAggregateOutputType = {
    id: number
    startTime: number
    endTime: number
    duration: number
    status: number
    createdAt: number
    userId: number
    _all: number
  }


  export type FocusSessionAvgAggregateInputType = {
    duration?: true
  }

  export type FocusSessionSumAggregateInputType = {
    duration?: true
  }

  export type FocusSessionMinAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    duration?: true
    status?: true
    createdAt?: true
    userId?: true
  }

  export type FocusSessionMaxAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    duration?: true
    status?: true
    createdAt?: true
    userId?: true
  }

  export type FocusSessionCountAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    duration?: true
    status?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type FocusSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FocusSession to aggregate.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FocusSessions
    **/
    _count?: true | FocusSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FocusSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FocusSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FocusSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FocusSessionMaxAggregateInputType
  }

  export type GetFocusSessionAggregateType<T extends FocusSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateFocusSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFocusSession[P]>
      : GetScalarType<T[P], AggregateFocusSession[P]>
  }




  export type FocusSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FocusSessionWhereInput
    orderBy?: FocusSessionOrderByWithAggregationInput | FocusSessionOrderByWithAggregationInput[]
    by: FocusSessionScalarFieldEnum[] | FocusSessionScalarFieldEnum
    having?: FocusSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FocusSessionCountAggregateInputType | true
    _avg?: FocusSessionAvgAggregateInputType
    _sum?: FocusSessionSumAggregateInputType
    _min?: FocusSessionMinAggregateInputType
    _max?: FocusSessionMaxAggregateInputType
  }

  export type FocusSessionGroupByOutputType = {
    id: string
    startTime: Date
    endTime: Date | null
    duration: number | null
    status: $Enums.SessionStatus
    createdAt: Date
    userId: string
    _count: FocusSessionCountAggregateOutputType | null
    _avg: FocusSessionAvgAggregateOutputType | null
    _sum: FocusSessionSumAggregateOutputType | null
    _min: FocusSessionMinAggregateOutputType | null
    _max: FocusSessionMaxAggregateOutputType | null
  }

  type GetFocusSessionGroupByPayload<T extends FocusSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FocusSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FocusSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FocusSessionGroupByOutputType[P]>
            : GetScalarType<T[P], FocusSessionGroupByOutputType[P]>
        }
      >
    >


  export type FocusSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    breaks?: boolean | FocusSession$breaksArgs<ExtArgs>
    strictnessOverride?: boolean | FocusSession$strictnessOverrideArgs<ExtArgs>
    _count?: boolean | FocusSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["focusSession"]>

  export type FocusSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["focusSession"]>

  export type FocusSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["focusSession"]>

  export type FocusSessionSelectScalar = {
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type FocusSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startTime" | "endTime" | "duration" | "status" | "createdAt" | "userId", ExtArgs["result"]["focusSession"]>
  export type FocusSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    breaks?: boolean | FocusSession$breaksArgs<ExtArgs>
    strictnessOverride?: boolean | FocusSession$strictnessOverrideArgs<ExtArgs>
    _count?: boolean | FocusSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FocusSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FocusSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FocusSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FocusSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      breaks: Prisma.$BreakPayload<ExtArgs>[]
      strictnessOverride: Prisma.$StrictnessPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startTime: Date
      endTime: Date | null
      duration: number | null
      status: $Enums.SessionStatus
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["focusSession"]>
    composites: {}
  }

  type FocusSessionGetPayload<S extends boolean | null | undefined | FocusSessionDefaultArgs> = $Result.GetResult<Prisma.$FocusSessionPayload, S>

  type FocusSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FocusSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FocusSessionCountAggregateInputType | true
    }

  export interface FocusSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FocusSession'], meta: { name: 'FocusSession' } }
    /**
     * Find zero or one FocusSession that matches the filter.
     * @param {FocusSessionFindUniqueArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FocusSessionFindUniqueArgs>(args: SelectSubset<T, FocusSessionFindUniqueArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FocusSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FocusSessionFindUniqueOrThrowArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FocusSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, FocusSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FocusSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionFindFirstArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FocusSessionFindFirstArgs>(args?: SelectSubset<T, FocusSessionFindFirstArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FocusSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionFindFirstOrThrowArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FocusSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, FocusSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FocusSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FocusSessions
     * const focusSessions = await prisma.focusSession.findMany()
     * 
     * // Get first 10 FocusSessions
     * const focusSessions = await prisma.focusSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const focusSessionWithIdOnly = await prisma.focusSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FocusSessionFindManyArgs>(args?: SelectSubset<T, FocusSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FocusSession.
     * @param {FocusSessionCreateArgs} args - Arguments to create a FocusSession.
     * @example
     * // Create one FocusSession
     * const FocusSession = await prisma.focusSession.create({
     *   data: {
     *     // ... data to create a FocusSession
     *   }
     * })
     * 
     */
    create<T extends FocusSessionCreateArgs>(args: SelectSubset<T, FocusSessionCreateArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FocusSessions.
     * @param {FocusSessionCreateManyArgs} args - Arguments to create many FocusSessions.
     * @example
     * // Create many FocusSessions
     * const focusSession = await prisma.focusSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FocusSessionCreateManyArgs>(args?: SelectSubset<T, FocusSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FocusSessions and returns the data saved in the database.
     * @param {FocusSessionCreateManyAndReturnArgs} args - Arguments to create many FocusSessions.
     * @example
     * // Create many FocusSessions
     * const focusSession = await prisma.focusSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FocusSessions and only return the `id`
     * const focusSessionWithIdOnly = await prisma.focusSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FocusSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, FocusSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FocusSession.
     * @param {FocusSessionDeleteArgs} args - Arguments to delete one FocusSession.
     * @example
     * // Delete one FocusSession
     * const FocusSession = await prisma.focusSession.delete({
     *   where: {
     *     // ... filter to delete one FocusSession
     *   }
     * })
     * 
     */
    delete<T extends FocusSessionDeleteArgs>(args: SelectSubset<T, FocusSessionDeleteArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FocusSession.
     * @param {FocusSessionUpdateArgs} args - Arguments to update one FocusSession.
     * @example
     * // Update one FocusSession
     * const focusSession = await prisma.focusSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FocusSessionUpdateArgs>(args: SelectSubset<T, FocusSessionUpdateArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FocusSessions.
     * @param {FocusSessionDeleteManyArgs} args - Arguments to filter FocusSessions to delete.
     * @example
     * // Delete a few FocusSessions
     * const { count } = await prisma.focusSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FocusSessionDeleteManyArgs>(args?: SelectSubset<T, FocusSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FocusSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FocusSessions
     * const focusSession = await prisma.focusSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FocusSessionUpdateManyArgs>(args: SelectSubset<T, FocusSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FocusSessions and returns the data updated in the database.
     * @param {FocusSessionUpdateManyAndReturnArgs} args - Arguments to update many FocusSessions.
     * @example
     * // Update many FocusSessions
     * const focusSession = await prisma.focusSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FocusSessions and only return the `id`
     * const focusSessionWithIdOnly = await prisma.focusSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FocusSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, FocusSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FocusSession.
     * @param {FocusSessionUpsertArgs} args - Arguments to update or create a FocusSession.
     * @example
     * // Update or create a FocusSession
     * const focusSession = await prisma.focusSession.upsert({
     *   create: {
     *     // ... data to create a FocusSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FocusSession we want to update
     *   }
     * })
     */
    upsert<T extends FocusSessionUpsertArgs>(args: SelectSubset<T, FocusSessionUpsertArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FocusSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionCountArgs} args - Arguments to filter FocusSessions to count.
     * @example
     * // Count the number of FocusSessions
     * const count = await prisma.focusSession.count({
     *   where: {
     *     // ... the filter for the FocusSessions we want to count
     *   }
     * })
    **/
    count<T extends FocusSessionCountArgs>(
      args?: Subset<T, FocusSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FocusSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FocusSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FocusSessionAggregateArgs>(args: Subset<T, FocusSessionAggregateArgs>): Prisma.PrismaPromise<GetFocusSessionAggregateType<T>>

    /**
     * Group by FocusSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionGroupByArgs} args - Group by arguments.
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
      T extends FocusSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FocusSessionGroupByArgs['orderBy'] }
        : { orderBy?: FocusSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FocusSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFocusSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FocusSession model
   */
  readonly fields: FocusSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FocusSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FocusSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    breaks<T extends FocusSession$breaksArgs<ExtArgs> = {}>(args?: Subset<T, FocusSession$breaksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    strictnessOverride<T extends FocusSession$strictnessOverrideArgs<ExtArgs> = {}>(args?: Subset<T, FocusSession$strictnessOverrideArgs<ExtArgs>>): Prisma__StrictnessClient<$Result.GetResult<Prisma.$StrictnessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FocusSession model
   */
  interface FocusSessionFieldRefs {
    readonly id: FieldRef<"FocusSession", 'String'>
    readonly startTime: FieldRef<"FocusSession", 'DateTime'>
    readonly endTime: FieldRef<"FocusSession", 'DateTime'>
    readonly duration: FieldRef<"FocusSession", 'Int'>
    readonly status: FieldRef<"FocusSession", 'SessionStatus'>
    readonly createdAt: FieldRef<"FocusSession", 'DateTime'>
    readonly userId: FieldRef<"FocusSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FocusSession findUnique
   */
  export type FocusSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession findUniqueOrThrow
   */
  export type FocusSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession findFirst
   */
  export type FocusSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FocusSessions.
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocusSessions.
     */
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * FocusSession findFirstOrThrow
   */
  export type FocusSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FocusSessions.
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocusSessions.
     */
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * FocusSession findMany
   */
  export type FocusSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSessions to fetch.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FocusSessions.
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocusSessions.
     */
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * FocusSession create
   */
  export type FocusSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a FocusSession.
     */
    data: XOR<FocusSessionCreateInput, FocusSessionUncheckedCreateInput>
  }

  /**
   * FocusSession createMany
   */
  export type FocusSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FocusSessions.
     */
    data: FocusSessionCreateManyInput | FocusSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FocusSession createManyAndReturn
   */
  export type FocusSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * The data used to create many FocusSessions.
     */
    data: FocusSessionCreateManyInput | FocusSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FocusSession update
   */
  export type FocusSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a FocusSession.
     */
    data: XOR<FocusSessionUpdateInput, FocusSessionUncheckedUpdateInput>
    /**
     * Choose, which FocusSession to update.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession updateMany
   */
  export type FocusSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FocusSessions.
     */
    data: XOR<FocusSessionUpdateManyMutationInput, FocusSessionUncheckedUpdateManyInput>
    /**
     * Filter which FocusSessions to update
     */
    where?: FocusSessionWhereInput
    /**
     * Limit how many FocusSessions to update.
     */
    limit?: number
  }

  /**
   * FocusSession updateManyAndReturn
   */
  export type FocusSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * The data used to update FocusSessions.
     */
    data: XOR<FocusSessionUpdateManyMutationInput, FocusSessionUncheckedUpdateManyInput>
    /**
     * Filter which FocusSessions to update
     */
    where?: FocusSessionWhereInput
    /**
     * Limit how many FocusSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FocusSession upsert
   */
  export type FocusSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the FocusSession to update in case it exists.
     */
    where: FocusSessionWhereUniqueInput
    /**
     * In case the FocusSession found by the `where` argument doesn't exist, create a new FocusSession with this data.
     */
    create: XOR<FocusSessionCreateInput, FocusSessionUncheckedCreateInput>
    /**
     * In case the FocusSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FocusSessionUpdateInput, FocusSessionUncheckedUpdateInput>
  }

  /**
   * FocusSession delete
   */
  export type FocusSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter which FocusSession to delete.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession deleteMany
   */
  export type FocusSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FocusSessions to delete
     */
    where?: FocusSessionWhereInput
    /**
     * Limit how many FocusSessions to delete.
     */
    limit?: number
  }

  /**
   * FocusSession.breaks
   */
  export type FocusSession$breaksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Break
     */
    omit?: BreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    where?: BreakWhereInput
    orderBy?: BreakOrderByWithRelationInput | BreakOrderByWithRelationInput[]
    cursor?: BreakWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BreakScalarFieldEnum | BreakScalarFieldEnum[]
  }

  /**
   * FocusSession.strictnessOverride
   */
  export type FocusSession$strictnessOverrideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strictness
     */
    select?: StrictnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Strictness
     */
    omit?: StrictnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrictnessInclude<ExtArgs> | null
    where?: StrictnessWhereInput
  }

  /**
   * FocusSession without action
   */
  export type FocusSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
  }


  /**
   * Model Strictness
   */

  export type AggregateStrictness = {
    _count: StrictnessCountAggregateOutputType | null
    _avg: StrictnessAvgAggregateOutputType | null
    _sum: StrictnessSumAggregateOutputType | null
    _min: StrictnessMinAggregateOutputType | null
    _max: StrictnessMaxAggregateOutputType | null
  }

  export type StrictnessAvgAggregateOutputType = {
    maxBreaks: number | null
    baseAdDuration: number | null
    adIncreasePerBreak: number | null
  }

  export type StrictnessSumAggregateOutputType = {
    maxBreaks: number | null
    baseAdDuration: number | null
    adIncreasePerBreak: number | null
  }

  export type StrictnessMinAggregateOutputType = {
    id: string | null
    maxBreaks: number | null
    baseAdDuration: number | null
    adIncreasePerBreak: number | null
    noBreaksAllowed: boolean | null
    userId: string | null
    sessionId: string | null
  }

  export type StrictnessMaxAggregateOutputType = {
    id: string | null
    maxBreaks: number | null
    baseAdDuration: number | null
    adIncreasePerBreak: number | null
    noBreaksAllowed: boolean | null
    userId: string | null
    sessionId: string | null
  }

  export type StrictnessCountAggregateOutputType = {
    id: number
    maxBreaks: number
    baseAdDuration: number
    adIncreasePerBreak: number
    noBreaksAllowed: number
    userId: number
    sessionId: number
    _all: number
  }


  export type StrictnessAvgAggregateInputType = {
    maxBreaks?: true
    baseAdDuration?: true
    adIncreasePerBreak?: true
  }

  export type StrictnessSumAggregateInputType = {
    maxBreaks?: true
    baseAdDuration?: true
    adIncreasePerBreak?: true
  }

  export type StrictnessMinAggregateInputType = {
    id?: true
    maxBreaks?: true
    baseAdDuration?: true
    adIncreasePerBreak?: true
    noBreaksAllowed?: true
    userId?: true
    sessionId?: true
  }

  export type StrictnessMaxAggregateInputType = {
    id?: true
    maxBreaks?: true
    baseAdDuration?: true
    adIncreasePerBreak?: true
    noBreaksAllowed?: true
    userId?: true
    sessionId?: true
  }

  export type StrictnessCountAggregateInputType = {
    id?: true
    maxBreaks?: true
    baseAdDuration?: true
    adIncreasePerBreak?: true
    noBreaksAllowed?: true
    userId?: true
    sessionId?: true
    _all?: true
  }

  export type StrictnessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Strictness to aggregate.
     */
    where?: StrictnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strictnesses to fetch.
     */
    orderBy?: StrictnessOrderByWithRelationInput | StrictnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StrictnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strictnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strictnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Strictnesses
    **/
    _count?: true | StrictnessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StrictnessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StrictnessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StrictnessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StrictnessMaxAggregateInputType
  }

  export type GetStrictnessAggregateType<T extends StrictnessAggregateArgs> = {
        [P in keyof T & keyof AggregateStrictness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStrictness[P]>
      : GetScalarType<T[P], AggregateStrictness[P]>
  }




  export type StrictnessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StrictnessWhereInput
    orderBy?: StrictnessOrderByWithAggregationInput | StrictnessOrderByWithAggregationInput[]
    by: StrictnessScalarFieldEnum[] | StrictnessScalarFieldEnum
    having?: StrictnessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StrictnessCountAggregateInputType | true
    _avg?: StrictnessAvgAggregateInputType
    _sum?: StrictnessSumAggregateInputType
    _min?: StrictnessMinAggregateInputType
    _max?: StrictnessMaxAggregateInputType
  }

  export type StrictnessGroupByOutputType = {
    id: string
    maxBreaks: number
    baseAdDuration: number
    adIncreasePerBreak: number
    noBreaksAllowed: boolean
    userId: string | null
    sessionId: string | null
    _count: StrictnessCountAggregateOutputType | null
    _avg: StrictnessAvgAggregateOutputType | null
    _sum: StrictnessSumAggregateOutputType | null
    _min: StrictnessMinAggregateOutputType | null
    _max: StrictnessMaxAggregateOutputType | null
  }

  type GetStrictnessGroupByPayload<T extends StrictnessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StrictnessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StrictnessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StrictnessGroupByOutputType[P]>
            : GetScalarType<T[P], StrictnessGroupByOutputType[P]>
        }
      >
    >


  export type StrictnessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maxBreaks?: boolean
    baseAdDuration?: boolean
    adIncreasePerBreak?: boolean
    noBreaksAllowed?: boolean
    userId?: boolean
    sessionId?: boolean
    user?: boolean | Strictness$userArgs<ExtArgs>
    session?: boolean | Strictness$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["strictness"]>

  export type StrictnessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maxBreaks?: boolean
    baseAdDuration?: boolean
    adIncreasePerBreak?: boolean
    noBreaksAllowed?: boolean
    userId?: boolean
    sessionId?: boolean
    user?: boolean | Strictness$userArgs<ExtArgs>
    session?: boolean | Strictness$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["strictness"]>

  export type StrictnessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maxBreaks?: boolean
    baseAdDuration?: boolean
    adIncreasePerBreak?: boolean
    noBreaksAllowed?: boolean
    userId?: boolean
    sessionId?: boolean
    user?: boolean | Strictness$userArgs<ExtArgs>
    session?: boolean | Strictness$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["strictness"]>

  export type StrictnessSelectScalar = {
    id?: boolean
    maxBreaks?: boolean
    baseAdDuration?: boolean
    adIncreasePerBreak?: boolean
    noBreaksAllowed?: boolean
    userId?: boolean
    sessionId?: boolean
  }

  export type StrictnessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "maxBreaks" | "baseAdDuration" | "adIncreasePerBreak" | "noBreaksAllowed" | "userId" | "sessionId", ExtArgs["result"]["strictness"]>
  export type StrictnessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Strictness$userArgs<ExtArgs>
    session?: boolean | Strictness$sessionArgs<ExtArgs>
  }
  export type StrictnessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Strictness$userArgs<ExtArgs>
    session?: boolean | Strictness$sessionArgs<ExtArgs>
  }
  export type StrictnessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Strictness$userArgs<ExtArgs>
    session?: boolean | Strictness$sessionArgs<ExtArgs>
  }

  export type $StrictnessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Strictness"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      session: Prisma.$FocusSessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      maxBreaks: number
      baseAdDuration: number
      adIncreasePerBreak: number
      noBreaksAllowed: boolean
      userId: string | null
      sessionId: string | null
    }, ExtArgs["result"]["strictness"]>
    composites: {}
  }

  type StrictnessGetPayload<S extends boolean | null | undefined | StrictnessDefaultArgs> = $Result.GetResult<Prisma.$StrictnessPayload, S>

  type StrictnessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StrictnessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StrictnessCountAggregateInputType | true
    }

  export interface StrictnessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Strictness'], meta: { name: 'Strictness' } }
    /**
     * Find zero or one Strictness that matches the filter.
     * @param {StrictnessFindUniqueArgs} args - Arguments to find a Strictness
     * @example
     * // Get one Strictness
     * const strictness = await prisma.strictness.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StrictnessFindUniqueArgs>(args: SelectSubset<T, StrictnessFindUniqueArgs<ExtArgs>>): Prisma__StrictnessClient<$Result.GetResult<Prisma.$StrictnessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Strictness that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StrictnessFindUniqueOrThrowArgs} args - Arguments to find a Strictness
     * @example
     * // Get one Strictness
     * const strictness = await prisma.strictness.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StrictnessFindUniqueOrThrowArgs>(args: SelectSubset<T, StrictnessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StrictnessClient<$Result.GetResult<Prisma.$StrictnessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Strictness that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrictnessFindFirstArgs} args - Arguments to find a Strictness
     * @example
     * // Get one Strictness
     * const strictness = await prisma.strictness.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StrictnessFindFirstArgs>(args?: SelectSubset<T, StrictnessFindFirstArgs<ExtArgs>>): Prisma__StrictnessClient<$Result.GetResult<Prisma.$StrictnessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Strictness that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrictnessFindFirstOrThrowArgs} args - Arguments to find a Strictness
     * @example
     * // Get one Strictness
     * const strictness = await prisma.strictness.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StrictnessFindFirstOrThrowArgs>(args?: SelectSubset<T, StrictnessFindFirstOrThrowArgs<ExtArgs>>): Prisma__StrictnessClient<$Result.GetResult<Prisma.$StrictnessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Strictnesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrictnessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Strictnesses
     * const strictnesses = await prisma.strictness.findMany()
     * 
     * // Get first 10 Strictnesses
     * const strictnesses = await prisma.strictness.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const strictnessWithIdOnly = await prisma.strictness.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StrictnessFindManyArgs>(args?: SelectSubset<T, StrictnessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrictnessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Strictness.
     * @param {StrictnessCreateArgs} args - Arguments to create a Strictness.
     * @example
     * // Create one Strictness
     * const Strictness = await prisma.strictness.create({
     *   data: {
     *     // ... data to create a Strictness
     *   }
     * })
     * 
     */
    create<T extends StrictnessCreateArgs>(args: SelectSubset<T, StrictnessCreateArgs<ExtArgs>>): Prisma__StrictnessClient<$Result.GetResult<Prisma.$StrictnessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Strictnesses.
     * @param {StrictnessCreateManyArgs} args - Arguments to create many Strictnesses.
     * @example
     * // Create many Strictnesses
     * const strictness = await prisma.strictness.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StrictnessCreateManyArgs>(args?: SelectSubset<T, StrictnessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Strictnesses and returns the data saved in the database.
     * @param {StrictnessCreateManyAndReturnArgs} args - Arguments to create many Strictnesses.
     * @example
     * // Create many Strictnesses
     * const strictness = await prisma.strictness.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Strictnesses and only return the `id`
     * const strictnessWithIdOnly = await prisma.strictness.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StrictnessCreateManyAndReturnArgs>(args?: SelectSubset<T, StrictnessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrictnessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Strictness.
     * @param {StrictnessDeleteArgs} args - Arguments to delete one Strictness.
     * @example
     * // Delete one Strictness
     * const Strictness = await prisma.strictness.delete({
     *   where: {
     *     // ... filter to delete one Strictness
     *   }
     * })
     * 
     */
    delete<T extends StrictnessDeleteArgs>(args: SelectSubset<T, StrictnessDeleteArgs<ExtArgs>>): Prisma__StrictnessClient<$Result.GetResult<Prisma.$StrictnessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Strictness.
     * @param {StrictnessUpdateArgs} args - Arguments to update one Strictness.
     * @example
     * // Update one Strictness
     * const strictness = await prisma.strictness.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StrictnessUpdateArgs>(args: SelectSubset<T, StrictnessUpdateArgs<ExtArgs>>): Prisma__StrictnessClient<$Result.GetResult<Prisma.$StrictnessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Strictnesses.
     * @param {StrictnessDeleteManyArgs} args - Arguments to filter Strictnesses to delete.
     * @example
     * // Delete a few Strictnesses
     * const { count } = await prisma.strictness.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StrictnessDeleteManyArgs>(args?: SelectSubset<T, StrictnessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Strictnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrictnessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Strictnesses
     * const strictness = await prisma.strictness.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StrictnessUpdateManyArgs>(args: SelectSubset<T, StrictnessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Strictnesses and returns the data updated in the database.
     * @param {StrictnessUpdateManyAndReturnArgs} args - Arguments to update many Strictnesses.
     * @example
     * // Update many Strictnesses
     * const strictness = await prisma.strictness.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Strictnesses and only return the `id`
     * const strictnessWithIdOnly = await prisma.strictness.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StrictnessUpdateManyAndReturnArgs>(args: SelectSubset<T, StrictnessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrictnessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Strictness.
     * @param {StrictnessUpsertArgs} args - Arguments to update or create a Strictness.
     * @example
     * // Update or create a Strictness
     * const strictness = await prisma.strictness.upsert({
     *   create: {
     *     // ... data to create a Strictness
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Strictness we want to update
     *   }
     * })
     */
    upsert<T extends StrictnessUpsertArgs>(args: SelectSubset<T, StrictnessUpsertArgs<ExtArgs>>): Prisma__StrictnessClient<$Result.GetResult<Prisma.$StrictnessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Strictnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrictnessCountArgs} args - Arguments to filter Strictnesses to count.
     * @example
     * // Count the number of Strictnesses
     * const count = await prisma.strictness.count({
     *   where: {
     *     // ... the filter for the Strictnesses we want to count
     *   }
     * })
    **/
    count<T extends StrictnessCountArgs>(
      args?: Subset<T, StrictnessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StrictnessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Strictness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrictnessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StrictnessAggregateArgs>(args: Subset<T, StrictnessAggregateArgs>): Prisma.PrismaPromise<GetStrictnessAggregateType<T>>

    /**
     * Group by Strictness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrictnessGroupByArgs} args - Group by arguments.
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
      T extends StrictnessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StrictnessGroupByArgs['orderBy'] }
        : { orderBy?: StrictnessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StrictnessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStrictnessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Strictness model
   */
  readonly fields: StrictnessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Strictness.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StrictnessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Strictness$userArgs<ExtArgs> = {}>(args?: Subset<T, Strictness$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    session<T extends Strictness$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Strictness$sessionArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Strictness model
   */
  interface StrictnessFieldRefs {
    readonly id: FieldRef<"Strictness", 'String'>
    readonly maxBreaks: FieldRef<"Strictness", 'Int'>
    readonly baseAdDuration: FieldRef<"Strictness", 'Int'>
    readonly adIncreasePerBreak: FieldRef<"Strictness", 'Int'>
    readonly noBreaksAllowed: FieldRef<"Strictness", 'Boolean'>
    readonly userId: FieldRef<"Strictness", 'String'>
    readonly sessionId: FieldRef<"Strictness", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Strictness findUnique
   */
  export type StrictnessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strictness
     */
    select?: StrictnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Strictness
     */
    omit?: StrictnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrictnessInclude<ExtArgs> | null
    /**
     * Filter, which Strictness to fetch.
     */
    where: StrictnessWhereUniqueInput
  }

  /**
   * Strictness findUniqueOrThrow
   */
  export type StrictnessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strictness
     */
    select?: StrictnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Strictness
     */
    omit?: StrictnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrictnessInclude<ExtArgs> | null
    /**
     * Filter, which Strictness to fetch.
     */
    where: StrictnessWhereUniqueInput
  }

  /**
   * Strictness findFirst
   */
  export type StrictnessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strictness
     */
    select?: StrictnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Strictness
     */
    omit?: StrictnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrictnessInclude<ExtArgs> | null
    /**
     * Filter, which Strictness to fetch.
     */
    where?: StrictnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strictnesses to fetch.
     */
    orderBy?: StrictnessOrderByWithRelationInput | StrictnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Strictnesses.
     */
    cursor?: StrictnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strictnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strictnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Strictnesses.
     */
    distinct?: StrictnessScalarFieldEnum | StrictnessScalarFieldEnum[]
  }

  /**
   * Strictness findFirstOrThrow
   */
  export type StrictnessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strictness
     */
    select?: StrictnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Strictness
     */
    omit?: StrictnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrictnessInclude<ExtArgs> | null
    /**
     * Filter, which Strictness to fetch.
     */
    where?: StrictnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strictnesses to fetch.
     */
    orderBy?: StrictnessOrderByWithRelationInput | StrictnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Strictnesses.
     */
    cursor?: StrictnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strictnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strictnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Strictnesses.
     */
    distinct?: StrictnessScalarFieldEnum | StrictnessScalarFieldEnum[]
  }

  /**
   * Strictness findMany
   */
  export type StrictnessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strictness
     */
    select?: StrictnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Strictness
     */
    omit?: StrictnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrictnessInclude<ExtArgs> | null
    /**
     * Filter, which Strictnesses to fetch.
     */
    where?: StrictnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strictnesses to fetch.
     */
    orderBy?: StrictnessOrderByWithRelationInput | StrictnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Strictnesses.
     */
    cursor?: StrictnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strictnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strictnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Strictnesses.
     */
    distinct?: StrictnessScalarFieldEnum | StrictnessScalarFieldEnum[]
  }

  /**
   * Strictness create
   */
  export type StrictnessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strictness
     */
    select?: StrictnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Strictness
     */
    omit?: StrictnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrictnessInclude<ExtArgs> | null
    /**
     * The data needed to create a Strictness.
     */
    data?: XOR<StrictnessCreateInput, StrictnessUncheckedCreateInput>
  }

  /**
   * Strictness createMany
   */
  export type StrictnessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Strictnesses.
     */
    data: StrictnessCreateManyInput | StrictnessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Strictness createManyAndReturn
   */
  export type StrictnessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strictness
     */
    select?: StrictnessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Strictness
     */
    omit?: StrictnessOmit<ExtArgs> | null
    /**
     * The data used to create many Strictnesses.
     */
    data: StrictnessCreateManyInput | StrictnessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrictnessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Strictness update
   */
  export type StrictnessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strictness
     */
    select?: StrictnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Strictness
     */
    omit?: StrictnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrictnessInclude<ExtArgs> | null
    /**
     * The data needed to update a Strictness.
     */
    data: XOR<StrictnessUpdateInput, StrictnessUncheckedUpdateInput>
    /**
     * Choose, which Strictness to update.
     */
    where: StrictnessWhereUniqueInput
  }

  /**
   * Strictness updateMany
   */
  export type StrictnessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Strictnesses.
     */
    data: XOR<StrictnessUpdateManyMutationInput, StrictnessUncheckedUpdateManyInput>
    /**
     * Filter which Strictnesses to update
     */
    where?: StrictnessWhereInput
    /**
     * Limit how many Strictnesses to update.
     */
    limit?: number
  }

  /**
   * Strictness updateManyAndReturn
   */
  export type StrictnessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strictness
     */
    select?: StrictnessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Strictness
     */
    omit?: StrictnessOmit<ExtArgs> | null
    /**
     * The data used to update Strictnesses.
     */
    data: XOR<StrictnessUpdateManyMutationInput, StrictnessUncheckedUpdateManyInput>
    /**
     * Filter which Strictnesses to update
     */
    where?: StrictnessWhereInput
    /**
     * Limit how many Strictnesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrictnessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Strictness upsert
   */
  export type StrictnessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strictness
     */
    select?: StrictnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Strictness
     */
    omit?: StrictnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrictnessInclude<ExtArgs> | null
    /**
     * The filter to search for the Strictness to update in case it exists.
     */
    where: StrictnessWhereUniqueInput
    /**
     * In case the Strictness found by the `where` argument doesn't exist, create a new Strictness with this data.
     */
    create: XOR<StrictnessCreateInput, StrictnessUncheckedCreateInput>
    /**
     * In case the Strictness was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StrictnessUpdateInput, StrictnessUncheckedUpdateInput>
  }

  /**
   * Strictness delete
   */
  export type StrictnessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strictness
     */
    select?: StrictnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Strictness
     */
    omit?: StrictnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrictnessInclude<ExtArgs> | null
    /**
     * Filter which Strictness to delete.
     */
    where: StrictnessWhereUniqueInput
  }

  /**
   * Strictness deleteMany
   */
  export type StrictnessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Strictnesses to delete
     */
    where?: StrictnessWhereInput
    /**
     * Limit how many Strictnesses to delete.
     */
    limit?: number
  }

  /**
   * Strictness.user
   */
  export type Strictness$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Strictness.session
   */
  export type Strictness$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    where?: FocusSessionWhereInput
  }

  /**
   * Strictness without action
   */
  export type StrictnessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strictness
     */
    select?: StrictnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Strictness
     */
    omit?: StrictnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrictnessInclude<ExtArgs> | null
  }


  /**
   * Model Break
   */

  export type AggregateBreak = {
    _count: BreakCountAggregateOutputType | null
    _avg: BreakAvgAggregateOutputType | null
    _sum: BreakSumAggregateOutputType | null
    _min: BreakMinAggregateOutputType | null
    _max: BreakMaxAggregateOutputType | null
  }

  export type BreakAvgAggregateOutputType = {
    adDuration: number | null
  }

  export type BreakSumAggregateOutputType = {
    adDuration: number | null
  }

  export type BreakMinAggregateOutputType = {
    id: string | null
    takenAt: Date | null
    adDuration: number | null
    skipped: boolean | null
    sessionId: string | null
  }

  export type BreakMaxAggregateOutputType = {
    id: string | null
    takenAt: Date | null
    adDuration: number | null
    skipped: boolean | null
    sessionId: string | null
  }

  export type BreakCountAggregateOutputType = {
    id: number
    takenAt: number
    adDuration: number
    skipped: number
    sessionId: number
    _all: number
  }


  export type BreakAvgAggregateInputType = {
    adDuration?: true
  }

  export type BreakSumAggregateInputType = {
    adDuration?: true
  }

  export type BreakMinAggregateInputType = {
    id?: true
    takenAt?: true
    adDuration?: true
    skipped?: true
    sessionId?: true
  }

  export type BreakMaxAggregateInputType = {
    id?: true
    takenAt?: true
    adDuration?: true
    skipped?: true
    sessionId?: true
  }

  export type BreakCountAggregateInputType = {
    id?: true
    takenAt?: true
    adDuration?: true
    skipped?: true
    sessionId?: true
    _all?: true
  }

  export type BreakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Break to aggregate.
     */
    where?: BreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breaks to fetch.
     */
    orderBy?: BreakOrderByWithRelationInput | BreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Breaks
    **/
    _count?: true | BreakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BreakAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BreakSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BreakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BreakMaxAggregateInputType
  }

  export type GetBreakAggregateType<T extends BreakAggregateArgs> = {
        [P in keyof T & keyof AggregateBreak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBreak[P]>
      : GetScalarType<T[P], AggregateBreak[P]>
  }




  export type BreakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreakWhereInput
    orderBy?: BreakOrderByWithAggregationInput | BreakOrderByWithAggregationInput[]
    by: BreakScalarFieldEnum[] | BreakScalarFieldEnum
    having?: BreakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BreakCountAggregateInputType | true
    _avg?: BreakAvgAggregateInputType
    _sum?: BreakSumAggregateInputType
    _min?: BreakMinAggregateInputType
    _max?: BreakMaxAggregateInputType
  }

  export type BreakGroupByOutputType = {
    id: string
    takenAt: Date
    adDuration: number
    skipped: boolean
    sessionId: string
    _count: BreakCountAggregateOutputType | null
    _avg: BreakAvgAggregateOutputType | null
    _sum: BreakSumAggregateOutputType | null
    _min: BreakMinAggregateOutputType | null
    _max: BreakMaxAggregateOutputType | null
  }

  type GetBreakGroupByPayload<T extends BreakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BreakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BreakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BreakGroupByOutputType[P]>
            : GetScalarType<T[P], BreakGroupByOutputType[P]>
        }
      >
    >


  export type BreakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    takenAt?: boolean
    adDuration?: boolean
    skipped?: boolean
    sessionId?: boolean
    session?: boolean | FocusSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["break"]>

  export type BreakSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    takenAt?: boolean
    adDuration?: boolean
    skipped?: boolean
    sessionId?: boolean
    session?: boolean | FocusSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["break"]>

  export type BreakSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    takenAt?: boolean
    adDuration?: boolean
    skipped?: boolean
    sessionId?: boolean
    session?: boolean | FocusSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["break"]>

  export type BreakSelectScalar = {
    id?: boolean
    takenAt?: boolean
    adDuration?: boolean
    skipped?: boolean
    sessionId?: boolean
  }

  export type BreakOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "takenAt" | "adDuration" | "skipped" | "sessionId", ExtArgs["result"]["break"]>
  export type BreakInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | FocusSessionDefaultArgs<ExtArgs>
  }
  export type BreakIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | FocusSessionDefaultArgs<ExtArgs>
  }
  export type BreakIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | FocusSessionDefaultArgs<ExtArgs>
  }

  export type $BreakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Break"
    objects: {
      session: Prisma.$FocusSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      takenAt: Date
      adDuration: number
      skipped: boolean
      sessionId: string
    }, ExtArgs["result"]["break"]>
    composites: {}
  }

  type BreakGetPayload<S extends boolean | null | undefined | BreakDefaultArgs> = $Result.GetResult<Prisma.$BreakPayload, S>

  type BreakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BreakFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BreakCountAggregateInputType | true
    }

  export interface BreakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Break'], meta: { name: 'Break' } }
    /**
     * Find zero or one Break that matches the filter.
     * @param {BreakFindUniqueArgs} args - Arguments to find a Break
     * @example
     * // Get one Break
     * const break = await prisma.break.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BreakFindUniqueArgs>(args: SelectSubset<T, BreakFindUniqueArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Break that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BreakFindUniqueOrThrowArgs} args - Arguments to find a Break
     * @example
     * // Get one Break
     * const break = await prisma.break.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BreakFindUniqueOrThrowArgs>(args: SelectSubset<T, BreakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Break that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakFindFirstArgs} args - Arguments to find a Break
     * @example
     * // Get one Break
     * const break = await prisma.break.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BreakFindFirstArgs>(args?: SelectSubset<T, BreakFindFirstArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Break that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakFindFirstOrThrowArgs} args - Arguments to find a Break
     * @example
     * // Get one Break
     * const break = await prisma.break.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BreakFindFirstOrThrowArgs>(args?: SelectSubset<T, BreakFindFirstOrThrowArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Breaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Breaks
     * const breaks = await prisma.break.findMany()
     * 
     * // Get first 10 Breaks
     * const breaks = await prisma.break.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const breakWithIdOnly = await prisma.break.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BreakFindManyArgs>(args?: SelectSubset<T, BreakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Break.
     * @param {BreakCreateArgs} args - Arguments to create a Break.
     * @example
     * // Create one Break
     * const Break = await prisma.break.create({
     *   data: {
     *     // ... data to create a Break
     *   }
     * })
     * 
     */
    create<T extends BreakCreateArgs>(args: SelectSubset<T, BreakCreateArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Breaks.
     * @param {BreakCreateManyArgs} args - Arguments to create many Breaks.
     * @example
     * // Create many Breaks
     * const break = await prisma.break.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BreakCreateManyArgs>(args?: SelectSubset<T, BreakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Breaks and returns the data saved in the database.
     * @param {BreakCreateManyAndReturnArgs} args - Arguments to create many Breaks.
     * @example
     * // Create many Breaks
     * const break = await prisma.break.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Breaks and only return the `id`
     * const breakWithIdOnly = await prisma.break.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BreakCreateManyAndReturnArgs>(args?: SelectSubset<T, BreakCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Break.
     * @param {BreakDeleteArgs} args - Arguments to delete one Break.
     * @example
     * // Delete one Break
     * const Break = await prisma.break.delete({
     *   where: {
     *     // ... filter to delete one Break
     *   }
     * })
     * 
     */
    delete<T extends BreakDeleteArgs>(args: SelectSubset<T, BreakDeleteArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Break.
     * @param {BreakUpdateArgs} args - Arguments to update one Break.
     * @example
     * // Update one Break
     * const break = await prisma.break.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BreakUpdateArgs>(args: SelectSubset<T, BreakUpdateArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Breaks.
     * @param {BreakDeleteManyArgs} args - Arguments to filter Breaks to delete.
     * @example
     * // Delete a few Breaks
     * const { count } = await prisma.break.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BreakDeleteManyArgs>(args?: SelectSubset<T, BreakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Breaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Breaks
     * const break = await prisma.break.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BreakUpdateManyArgs>(args: SelectSubset<T, BreakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Breaks and returns the data updated in the database.
     * @param {BreakUpdateManyAndReturnArgs} args - Arguments to update many Breaks.
     * @example
     * // Update many Breaks
     * const break = await prisma.break.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Breaks and only return the `id`
     * const breakWithIdOnly = await prisma.break.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BreakUpdateManyAndReturnArgs>(args: SelectSubset<T, BreakUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Break.
     * @param {BreakUpsertArgs} args - Arguments to update or create a Break.
     * @example
     * // Update or create a Break
     * const break = await prisma.break.upsert({
     *   create: {
     *     // ... data to create a Break
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Break we want to update
     *   }
     * })
     */
    upsert<T extends BreakUpsertArgs>(args: SelectSubset<T, BreakUpsertArgs<ExtArgs>>): Prisma__BreakClient<$Result.GetResult<Prisma.$BreakPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Breaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakCountArgs} args - Arguments to filter Breaks to count.
     * @example
     * // Count the number of Breaks
     * const count = await prisma.break.count({
     *   where: {
     *     // ... the filter for the Breaks we want to count
     *   }
     * })
    **/
    count<T extends BreakCountArgs>(
      args?: Subset<T, BreakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BreakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Break.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BreakAggregateArgs>(args: Subset<T, BreakAggregateArgs>): Prisma.PrismaPromise<GetBreakAggregateType<T>>

    /**
     * Group by Break.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakGroupByArgs} args - Group by arguments.
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
      T extends BreakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BreakGroupByArgs['orderBy'] }
        : { orderBy?: BreakGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BreakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBreakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Break model
   */
  readonly fields: BreakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Break.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BreakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends FocusSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FocusSessionDefaultArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Break model
   */
  interface BreakFieldRefs {
    readonly id: FieldRef<"Break", 'String'>
    readonly takenAt: FieldRef<"Break", 'DateTime'>
    readonly adDuration: FieldRef<"Break", 'Int'>
    readonly skipped: FieldRef<"Break", 'Boolean'>
    readonly sessionId: FieldRef<"Break", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Break findUnique
   */
  export type BreakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Break
     */
    omit?: BreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * Filter, which Break to fetch.
     */
    where: BreakWhereUniqueInput
  }

  /**
   * Break findUniqueOrThrow
   */
  export type BreakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Break
     */
    omit?: BreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * Filter, which Break to fetch.
     */
    where: BreakWhereUniqueInput
  }

  /**
   * Break findFirst
   */
  export type BreakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Break
     */
    omit?: BreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * Filter, which Break to fetch.
     */
    where?: BreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breaks to fetch.
     */
    orderBy?: BreakOrderByWithRelationInput | BreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breaks.
     */
    cursor?: BreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breaks.
     */
    distinct?: BreakScalarFieldEnum | BreakScalarFieldEnum[]
  }

  /**
   * Break findFirstOrThrow
   */
  export type BreakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Break
     */
    omit?: BreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * Filter, which Break to fetch.
     */
    where?: BreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breaks to fetch.
     */
    orderBy?: BreakOrderByWithRelationInput | BreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breaks.
     */
    cursor?: BreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breaks.
     */
    distinct?: BreakScalarFieldEnum | BreakScalarFieldEnum[]
  }

  /**
   * Break findMany
   */
  export type BreakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Break
     */
    omit?: BreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * Filter, which Breaks to fetch.
     */
    where?: BreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breaks to fetch.
     */
    orderBy?: BreakOrderByWithRelationInput | BreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Breaks.
     */
    cursor?: BreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breaks.
     */
    distinct?: BreakScalarFieldEnum | BreakScalarFieldEnum[]
  }

  /**
   * Break create
   */
  export type BreakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Break
     */
    omit?: BreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * The data needed to create a Break.
     */
    data: XOR<BreakCreateInput, BreakUncheckedCreateInput>
  }

  /**
   * Break createMany
   */
  export type BreakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Breaks.
     */
    data: BreakCreateManyInput | BreakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Break createManyAndReturn
   */
  export type BreakCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Break
     */
    omit?: BreakOmit<ExtArgs> | null
    /**
     * The data used to create many Breaks.
     */
    data: BreakCreateManyInput | BreakCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Break update
   */
  export type BreakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Break
     */
    omit?: BreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * The data needed to update a Break.
     */
    data: XOR<BreakUpdateInput, BreakUncheckedUpdateInput>
    /**
     * Choose, which Break to update.
     */
    where: BreakWhereUniqueInput
  }

  /**
   * Break updateMany
   */
  export type BreakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Breaks.
     */
    data: XOR<BreakUpdateManyMutationInput, BreakUncheckedUpdateManyInput>
    /**
     * Filter which Breaks to update
     */
    where?: BreakWhereInput
    /**
     * Limit how many Breaks to update.
     */
    limit?: number
  }

  /**
   * Break updateManyAndReturn
   */
  export type BreakUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Break
     */
    omit?: BreakOmit<ExtArgs> | null
    /**
     * The data used to update Breaks.
     */
    data: XOR<BreakUpdateManyMutationInput, BreakUncheckedUpdateManyInput>
    /**
     * Filter which Breaks to update
     */
    where?: BreakWhereInput
    /**
     * Limit how many Breaks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Break upsert
   */
  export type BreakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Break
     */
    omit?: BreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * The filter to search for the Break to update in case it exists.
     */
    where: BreakWhereUniqueInput
    /**
     * In case the Break found by the `where` argument doesn't exist, create a new Break with this data.
     */
    create: XOR<BreakCreateInput, BreakUncheckedCreateInput>
    /**
     * In case the Break was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BreakUpdateInput, BreakUncheckedUpdateInput>
  }

  /**
   * Break delete
   */
  export type BreakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Break
     */
    omit?: BreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
    /**
     * Filter which Break to delete.
     */
    where: BreakWhereUniqueInput
  }

  /**
   * Break deleteMany
   */
  export type BreakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Breaks to delete
     */
    where?: BreakWhereInput
    /**
     * Limit how many Breaks to delete.
     */
    limit?: number
  }

  /**
   * Break without action
   */
  export type BreakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Break
     */
    select?: BreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Break
     */
    omit?: BreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakInclude<ExtArgs> | null
  }


  /**
   * Model BlockedApp
   */

  export type AggregateBlockedApp = {
    _count: BlockedAppCountAggregateOutputType | null
    _min: BlockedAppMinAggregateOutputType | null
    _max: BlockedAppMaxAggregateOutputType | null
  }

  export type BlockedAppMinAggregateOutputType = {
    id: string | null
    appName: string | null
    browserUrl: string | null
    isBlocked: boolean | null
    userId: string | null
  }

  export type BlockedAppMaxAggregateOutputType = {
    id: string | null
    appName: string | null
    browserUrl: string | null
    isBlocked: boolean | null
    userId: string | null
  }

  export type BlockedAppCountAggregateOutputType = {
    id: number
    appName: number
    browserUrl: number
    isBlocked: number
    userId: number
    _all: number
  }


  export type BlockedAppMinAggregateInputType = {
    id?: true
    appName?: true
    browserUrl?: true
    isBlocked?: true
    userId?: true
  }

  export type BlockedAppMaxAggregateInputType = {
    id?: true
    appName?: true
    browserUrl?: true
    isBlocked?: true
    userId?: true
  }

  export type BlockedAppCountAggregateInputType = {
    id?: true
    appName?: true
    browserUrl?: true
    isBlocked?: true
    userId?: true
    _all?: true
  }

  export type BlockedAppAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedApp to aggregate.
     */
    where?: BlockedAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedApps to fetch.
     */
    orderBy?: BlockedAppOrderByWithRelationInput | BlockedAppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockedAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedApps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockedApps
    **/
    _count?: true | BlockedAppCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockedAppMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockedAppMaxAggregateInputType
  }

  export type GetBlockedAppAggregateType<T extends BlockedAppAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockedApp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockedApp[P]>
      : GetScalarType<T[P], AggregateBlockedApp[P]>
  }




  export type BlockedAppGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedAppWhereInput
    orderBy?: BlockedAppOrderByWithAggregationInput | BlockedAppOrderByWithAggregationInput[]
    by: BlockedAppScalarFieldEnum[] | BlockedAppScalarFieldEnum
    having?: BlockedAppScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockedAppCountAggregateInputType | true
    _min?: BlockedAppMinAggregateInputType
    _max?: BlockedAppMaxAggregateInputType
  }

  export type BlockedAppGroupByOutputType = {
    id: string
    appName: string
    browserUrl: string | null
    isBlocked: boolean
    userId: string
    _count: BlockedAppCountAggregateOutputType | null
    _min: BlockedAppMinAggregateOutputType | null
    _max: BlockedAppMaxAggregateOutputType | null
  }

  type GetBlockedAppGroupByPayload<T extends BlockedAppGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockedAppGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockedAppGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockedAppGroupByOutputType[P]>
            : GetScalarType<T[P], BlockedAppGroupByOutputType[P]>
        }
      >
    >


  export type BlockedAppSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appName?: boolean
    browserUrl?: boolean
    isBlocked?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedApp"]>

  export type BlockedAppSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appName?: boolean
    browserUrl?: boolean
    isBlocked?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedApp"]>

  export type BlockedAppSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appName?: boolean
    browserUrl?: boolean
    isBlocked?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedApp"]>

  export type BlockedAppSelectScalar = {
    id?: boolean
    appName?: boolean
    browserUrl?: boolean
    isBlocked?: boolean
    userId?: boolean
  }

  export type BlockedAppOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appName" | "browserUrl" | "isBlocked" | "userId", ExtArgs["result"]["blockedApp"]>
  export type BlockedAppInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlockedAppIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlockedAppIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlockedAppPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockedApp"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appName: string
      browserUrl: string | null
      isBlocked: boolean
      userId: string
    }, ExtArgs["result"]["blockedApp"]>
    composites: {}
  }

  type BlockedAppGetPayload<S extends boolean | null | undefined | BlockedAppDefaultArgs> = $Result.GetResult<Prisma.$BlockedAppPayload, S>

  type BlockedAppCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockedAppFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockedAppCountAggregateInputType | true
    }

  export interface BlockedAppDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockedApp'], meta: { name: 'BlockedApp' } }
    /**
     * Find zero or one BlockedApp that matches the filter.
     * @param {BlockedAppFindUniqueArgs} args - Arguments to find a BlockedApp
     * @example
     * // Get one BlockedApp
     * const blockedApp = await prisma.blockedApp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockedAppFindUniqueArgs>(args: SelectSubset<T, BlockedAppFindUniqueArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockedApp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockedAppFindUniqueOrThrowArgs} args - Arguments to find a BlockedApp
     * @example
     * // Get one BlockedApp
     * const blockedApp = await prisma.blockedApp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockedAppFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockedAppFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedApp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedAppFindFirstArgs} args - Arguments to find a BlockedApp
     * @example
     * // Get one BlockedApp
     * const blockedApp = await prisma.blockedApp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockedAppFindFirstArgs>(args?: SelectSubset<T, BlockedAppFindFirstArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedApp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedAppFindFirstOrThrowArgs} args - Arguments to find a BlockedApp
     * @example
     * // Get one BlockedApp
     * const blockedApp = await prisma.blockedApp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockedAppFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockedAppFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockedApps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedAppFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockedApps
     * const blockedApps = await prisma.blockedApp.findMany()
     * 
     * // Get first 10 BlockedApps
     * const blockedApps = await prisma.blockedApp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockedAppWithIdOnly = await prisma.blockedApp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockedAppFindManyArgs>(args?: SelectSubset<T, BlockedAppFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockedApp.
     * @param {BlockedAppCreateArgs} args - Arguments to create a BlockedApp.
     * @example
     * // Create one BlockedApp
     * const BlockedApp = await prisma.blockedApp.create({
     *   data: {
     *     // ... data to create a BlockedApp
     *   }
     * })
     * 
     */
    create<T extends BlockedAppCreateArgs>(args: SelectSubset<T, BlockedAppCreateArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockedApps.
     * @param {BlockedAppCreateManyArgs} args - Arguments to create many BlockedApps.
     * @example
     * // Create many BlockedApps
     * const blockedApp = await prisma.blockedApp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockedAppCreateManyArgs>(args?: SelectSubset<T, BlockedAppCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockedApps and returns the data saved in the database.
     * @param {BlockedAppCreateManyAndReturnArgs} args - Arguments to create many BlockedApps.
     * @example
     * // Create many BlockedApps
     * const blockedApp = await prisma.blockedApp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockedApps and only return the `id`
     * const blockedAppWithIdOnly = await prisma.blockedApp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockedAppCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockedAppCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlockedApp.
     * @param {BlockedAppDeleteArgs} args - Arguments to delete one BlockedApp.
     * @example
     * // Delete one BlockedApp
     * const BlockedApp = await prisma.blockedApp.delete({
     *   where: {
     *     // ... filter to delete one BlockedApp
     *   }
     * })
     * 
     */
    delete<T extends BlockedAppDeleteArgs>(args: SelectSubset<T, BlockedAppDeleteArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockedApp.
     * @param {BlockedAppUpdateArgs} args - Arguments to update one BlockedApp.
     * @example
     * // Update one BlockedApp
     * const blockedApp = await prisma.blockedApp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockedAppUpdateArgs>(args: SelectSubset<T, BlockedAppUpdateArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockedApps.
     * @param {BlockedAppDeleteManyArgs} args - Arguments to filter BlockedApps to delete.
     * @example
     * // Delete a few BlockedApps
     * const { count } = await prisma.blockedApp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockedAppDeleteManyArgs>(args?: SelectSubset<T, BlockedAppDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedApps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedAppUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockedApps
     * const blockedApp = await prisma.blockedApp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockedAppUpdateManyArgs>(args: SelectSubset<T, BlockedAppUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedApps and returns the data updated in the database.
     * @param {BlockedAppUpdateManyAndReturnArgs} args - Arguments to update many BlockedApps.
     * @example
     * // Update many BlockedApps
     * const blockedApp = await prisma.blockedApp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlockedApps and only return the `id`
     * const blockedAppWithIdOnly = await prisma.blockedApp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlockedAppUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockedAppUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlockedApp.
     * @param {BlockedAppUpsertArgs} args - Arguments to update or create a BlockedApp.
     * @example
     * // Update or create a BlockedApp
     * const blockedApp = await prisma.blockedApp.upsert({
     *   create: {
     *     // ... data to create a BlockedApp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockedApp we want to update
     *   }
     * })
     */
    upsert<T extends BlockedAppUpsertArgs>(args: SelectSubset<T, BlockedAppUpsertArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockedApps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedAppCountArgs} args - Arguments to filter BlockedApps to count.
     * @example
     * // Count the number of BlockedApps
     * const count = await prisma.blockedApp.count({
     *   where: {
     *     // ... the filter for the BlockedApps we want to count
     *   }
     * })
    **/
    count<T extends BlockedAppCountArgs>(
      args?: Subset<T, BlockedAppCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockedAppCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockedApp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedAppAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockedAppAggregateArgs>(args: Subset<T, BlockedAppAggregateArgs>): Prisma.PrismaPromise<GetBlockedAppAggregateType<T>>

    /**
     * Group by BlockedApp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedAppGroupByArgs} args - Group by arguments.
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
      T extends BlockedAppGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockedAppGroupByArgs['orderBy'] }
        : { orderBy?: BlockedAppGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlockedAppGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockedAppGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockedApp model
   */
  readonly fields: BlockedAppFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockedApp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockedAppClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BlockedApp model
   */
  interface BlockedAppFieldRefs {
    readonly id: FieldRef<"BlockedApp", 'String'>
    readonly appName: FieldRef<"BlockedApp", 'String'>
    readonly browserUrl: FieldRef<"BlockedApp", 'String'>
    readonly isBlocked: FieldRef<"BlockedApp", 'Boolean'>
    readonly userId: FieldRef<"BlockedApp", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlockedApp findUnique
   */
  export type BlockedAppFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * Filter, which BlockedApp to fetch.
     */
    where: BlockedAppWhereUniqueInput
  }

  /**
   * BlockedApp findUniqueOrThrow
   */
  export type BlockedAppFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * Filter, which BlockedApp to fetch.
     */
    where: BlockedAppWhereUniqueInput
  }

  /**
   * BlockedApp findFirst
   */
  export type BlockedAppFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * Filter, which BlockedApp to fetch.
     */
    where?: BlockedAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedApps to fetch.
     */
    orderBy?: BlockedAppOrderByWithRelationInput | BlockedAppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedApps.
     */
    cursor?: BlockedAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedApps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedApps.
     */
    distinct?: BlockedAppScalarFieldEnum | BlockedAppScalarFieldEnum[]
  }

  /**
   * BlockedApp findFirstOrThrow
   */
  export type BlockedAppFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * Filter, which BlockedApp to fetch.
     */
    where?: BlockedAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedApps to fetch.
     */
    orderBy?: BlockedAppOrderByWithRelationInput | BlockedAppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedApps.
     */
    cursor?: BlockedAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedApps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedApps.
     */
    distinct?: BlockedAppScalarFieldEnum | BlockedAppScalarFieldEnum[]
  }

  /**
   * BlockedApp findMany
   */
  export type BlockedAppFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * Filter, which BlockedApps to fetch.
     */
    where?: BlockedAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedApps to fetch.
     */
    orderBy?: BlockedAppOrderByWithRelationInput | BlockedAppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockedApps.
     */
    cursor?: BlockedAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedApps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedApps.
     */
    distinct?: BlockedAppScalarFieldEnum | BlockedAppScalarFieldEnum[]
  }

  /**
   * BlockedApp create
   */
  export type BlockedAppCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * The data needed to create a BlockedApp.
     */
    data: XOR<BlockedAppCreateInput, BlockedAppUncheckedCreateInput>
  }

  /**
   * BlockedApp createMany
   */
  export type BlockedAppCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockedApps.
     */
    data: BlockedAppCreateManyInput | BlockedAppCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockedApp createManyAndReturn
   */
  export type BlockedAppCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * The data used to create many BlockedApps.
     */
    data: BlockedAppCreateManyInput | BlockedAppCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockedApp update
   */
  export type BlockedAppUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * The data needed to update a BlockedApp.
     */
    data: XOR<BlockedAppUpdateInput, BlockedAppUncheckedUpdateInput>
    /**
     * Choose, which BlockedApp to update.
     */
    where: BlockedAppWhereUniqueInput
  }

  /**
   * BlockedApp updateMany
   */
  export type BlockedAppUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockedApps.
     */
    data: XOR<BlockedAppUpdateManyMutationInput, BlockedAppUncheckedUpdateManyInput>
    /**
     * Filter which BlockedApps to update
     */
    where?: BlockedAppWhereInput
    /**
     * Limit how many BlockedApps to update.
     */
    limit?: number
  }

  /**
   * BlockedApp updateManyAndReturn
   */
  export type BlockedAppUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * The data used to update BlockedApps.
     */
    data: XOR<BlockedAppUpdateManyMutationInput, BlockedAppUncheckedUpdateManyInput>
    /**
     * Filter which BlockedApps to update
     */
    where?: BlockedAppWhereInput
    /**
     * Limit how many BlockedApps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockedApp upsert
   */
  export type BlockedAppUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * The filter to search for the BlockedApp to update in case it exists.
     */
    where: BlockedAppWhereUniqueInput
    /**
     * In case the BlockedApp found by the `where` argument doesn't exist, create a new BlockedApp with this data.
     */
    create: XOR<BlockedAppCreateInput, BlockedAppUncheckedCreateInput>
    /**
     * In case the BlockedApp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockedAppUpdateInput, BlockedAppUncheckedUpdateInput>
  }

  /**
   * BlockedApp delete
   */
  export type BlockedAppDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * Filter which BlockedApp to delete.
     */
    where: BlockedAppWhereUniqueInput
  }

  /**
   * BlockedApp deleteMany
   */
  export type BlockedAppDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedApps to delete
     */
    where?: BlockedAppWhereInput
    /**
     * Limit how many BlockedApps to delete.
     */
    limit?: number
  }

  /**
   * BlockedApp without action
   */
  export type BlockedAppDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
  }


  /**
   * Model Theme
   */

  export type AggregateTheme = {
    _count: ThemeCountAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  export type ThemeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isPremiun: boolean | null
  }

  export type ThemeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isPremiun: boolean | null
  }

  export type ThemeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    quoteSet: number
    exerciseSet: number
    isPremiun: number
    _all: number
  }


  export type ThemeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPremiun?: true
  }

  export type ThemeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPremiun?: true
  }

  export type ThemeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    quoteSet?: true
    exerciseSet?: true
    isPremiun?: true
    _all?: true
  }

  export type ThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theme to aggregate.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Themes
    **/
    _count?: true | ThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThemeMaxAggregateInputType
  }

  export type GetThemeAggregateType<T extends ThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheme[P]>
      : GetScalarType<T[P], AggregateTheme[P]>
  }




  export type ThemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThemeWhereInput
    orderBy?: ThemeOrderByWithAggregationInput | ThemeOrderByWithAggregationInput[]
    by: ThemeScalarFieldEnum[] | ThemeScalarFieldEnum
    having?: ThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThemeCountAggregateInputType | true
    _min?: ThemeMinAggregateInputType
    _max?: ThemeMaxAggregateInputType
  }

  export type ThemeGroupByOutputType = {
    id: string
    name: string
    description: string | null
    quoteSet: string[]
    exerciseSet: string[]
    isPremiun: boolean
    _count: ThemeCountAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  type GetThemeGroupByPayload<T extends ThemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThemeGroupByOutputType[P]>
            : GetScalarType<T[P], ThemeGroupByOutputType[P]>
        }
      >
    >


  export type ThemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    quoteSet?: boolean
    exerciseSet?: boolean
    isPremiun?: boolean
    userThemes?: boolean | Theme$userThemesArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    quoteSet?: boolean
    exerciseSet?: boolean
    isPremiun?: boolean
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    quoteSet?: boolean
    exerciseSet?: boolean
    isPremiun?: boolean
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    quoteSet?: boolean
    exerciseSet?: boolean
    isPremiun?: boolean
  }

  export type ThemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "quoteSet" | "exerciseSet" | "isPremiun", ExtArgs["result"]["theme"]>
  export type ThemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userThemes?: boolean | Theme$userThemesArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ThemeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ThemeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Theme"
    objects: {
      userThemes: Prisma.$UserThemePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      quoteSet: string[]
      exerciseSet: string[]
      isPremiun: boolean
    }, ExtArgs["result"]["theme"]>
    composites: {}
  }

  type ThemeGetPayload<S extends boolean | null | undefined | ThemeDefaultArgs> = $Result.GetResult<Prisma.$ThemePayload, S>

  type ThemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThemeCountAggregateInputType | true
    }

  export interface ThemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Theme'], meta: { name: 'Theme' } }
    /**
     * Find zero or one Theme that matches the filter.
     * @param {ThemeFindUniqueArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThemeFindUniqueArgs>(args: SelectSubset<T, ThemeFindUniqueArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Theme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThemeFindUniqueOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThemeFindUniqueOrThrowArgs>(args: SelectSubset<T, ThemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThemeFindFirstArgs>(args?: SelectSubset<T, ThemeFindFirstArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThemeFindFirstOrThrowArgs>(args?: SelectSubset<T, ThemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Themes
     * const themes = await prisma.theme.findMany()
     * 
     * // Get first 10 Themes
     * const themes = await prisma.theme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const themeWithIdOnly = await prisma.theme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThemeFindManyArgs>(args?: SelectSubset<T, ThemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Theme.
     * @param {ThemeCreateArgs} args - Arguments to create a Theme.
     * @example
     * // Create one Theme
     * const Theme = await prisma.theme.create({
     *   data: {
     *     // ... data to create a Theme
     *   }
     * })
     * 
     */
    create<T extends ThemeCreateArgs>(args: SelectSubset<T, ThemeCreateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Themes.
     * @param {ThemeCreateManyArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThemeCreateManyArgs>(args?: SelectSubset<T, ThemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Themes and returns the data saved in the database.
     * @param {ThemeCreateManyAndReturnArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Themes and only return the `id`
     * const themeWithIdOnly = await prisma.theme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThemeCreateManyAndReturnArgs>(args?: SelectSubset<T, ThemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Theme.
     * @param {ThemeDeleteArgs} args - Arguments to delete one Theme.
     * @example
     * // Delete one Theme
     * const Theme = await prisma.theme.delete({
     *   where: {
     *     // ... filter to delete one Theme
     *   }
     * })
     * 
     */
    delete<T extends ThemeDeleteArgs>(args: SelectSubset<T, ThemeDeleteArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Theme.
     * @param {ThemeUpdateArgs} args - Arguments to update one Theme.
     * @example
     * // Update one Theme
     * const theme = await prisma.theme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThemeUpdateArgs>(args: SelectSubset<T, ThemeUpdateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Themes.
     * @param {ThemeDeleteManyArgs} args - Arguments to filter Themes to delete.
     * @example
     * // Delete a few Themes
     * const { count } = await prisma.theme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThemeDeleteManyArgs>(args?: SelectSubset<T, ThemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThemeUpdateManyArgs>(args: SelectSubset<T, ThemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes and returns the data updated in the database.
     * @param {ThemeUpdateManyAndReturnArgs} args - Arguments to update many Themes.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Themes and only return the `id`
     * const themeWithIdOnly = await prisma.theme.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ThemeUpdateManyAndReturnArgs>(args: SelectSubset<T, ThemeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Theme.
     * @param {ThemeUpsertArgs} args - Arguments to update or create a Theme.
     * @example
     * // Update or create a Theme
     * const theme = await prisma.theme.upsert({
     *   create: {
     *     // ... data to create a Theme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theme we want to update
     *   }
     * })
     */
    upsert<T extends ThemeUpsertArgs>(args: SelectSubset<T, ThemeUpsertArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeCountArgs} args - Arguments to filter Themes to count.
     * @example
     * // Count the number of Themes
     * const count = await prisma.theme.count({
     *   where: {
     *     // ... the filter for the Themes we want to count
     *   }
     * })
    **/
    count<T extends ThemeCountArgs>(
      args?: Subset<T, ThemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThemeAggregateArgs>(args: Subset<T, ThemeAggregateArgs>): Prisma.PrismaPromise<GetThemeAggregateType<T>>

    /**
     * Group by Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeGroupByArgs} args - Group by arguments.
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
      T extends ThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThemeGroupByArgs['orderBy'] }
        : { orderBy?: ThemeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Theme model
   */
  readonly fields: ThemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Theme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userThemes<T extends Theme$userThemesArgs<ExtArgs> = {}>(args?: Subset<T, Theme$userThemesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Theme model
   */
  interface ThemeFieldRefs {
    readonly id: FieldRef<"Theme", 'String'>
    readonly name: FieldRef<"Theme", 'String'>
    readonly description: FieldRef<"Theme", 'String'>
    readonly quoteSet: FieldRef<"Theme", 'String[]'>
    readonly exerciseSet: FieldRef<"Theme", 'String[]'>
    readonly isPremiun: FieldRef<"Theme", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Theme findUnique
   */
  export type ThemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findUniqueOrThrow
   */
  export type ThemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findFirst
   */
  export type ThemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findFirstOrThrow
   */
  export type ThemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findMany
   */
  export type ThemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Themes to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme create
   */
  export type ThemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to create a Theme.
     */
    data: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
  }

  /**
   * Theme createMany
   */
  export type ThemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Theme createManyAndReturn
   */
  export type ThemeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Theme update
   */
  export type ThemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to update a Theme.
     */
    data: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
    /**
     * Choose, which Theme to update.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme updateMany
   */
  export type ThemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Themes.
     */
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to update.
     */
    limit?: number
  }

  /**
   * Theme updateManyAndReturn
   */
  export type ThemeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * The data used to update Themes.
     */
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to update.
     */
    limit?: number
  }

  /**
   * Theme upsert
   */
  export type ThemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The filter to search for the Theme to update in case it exists.
     */
    where: ThemeWhereUniqueInput
    /**
     * In case the Theme found by the `where` argument doesn't exist, create a new Theme with this data.
     */
    create: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
    /**
     * In case the Theme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
  }

  /**
   * Theme delete
   */
  export type ThemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter which Theme to delete.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme deleteMany
   */
  export type ThemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Themes to delete
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to delete.
     */
    limit?: number
  }

  /**
   * Theme.userThemes
   */
  export type Theme$userThemesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTheme
     */
    select?: UserThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTheme
     */
    omit?: UserThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserThemeInclude<ExtArgs> | null
    where?: UserThemeWhereInput
    orderBy?: UserThemeOrderByWithRelationInput | UserThemeOrderByWithRelationInput[]
    cursor?: UserThemeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserThemeScalarFieldEnum | UserThemeScalarFieldEnum[]
  }

  /**
   * Theme without action
   */
  export type ThemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
  }


  /**
   * Model UserTheme
   */

  export type AggregateUserTheme = {
    _count: UserThemeCountAggregateOutputType | null
    _min: UserThemeMinAggregateOutputType | null
    _max: UserThemeMaxAggregateOutputType | null
  }

  export type UserThemeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    themeId: string | null
  }

  export type UserThemeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    themeId: string | null
  }

  export type UserThemeCountAggregateOutputType = {
    id: number
    userId: number
    themeId: number
    _all: number
  }


  export type UserThemeMinAggregateInputType = {
    id?: true
    userId?: true
    themeId?: true
  }

  export type UserThemeMaxAggregateInputType = {
    id?: true
    userId?: true
    themeId?: true
  }

  export type UserThemeCountAggregateInputType = {
    id?: true
    userId?: true
    themeId?: true
    _all?: true
  }

  export type UserThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTheme to aggregate.
     */
    where?: UserThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserThemes to fetch.
     */
    orderBy?: UserThemeOrderByWithRelationInput | UserThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserThemes
    **/
    _count?: true | UserThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserThemeMaxAggregateInputType
  }

  export type GetUserThemeAggregateType<T extends UserThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTheme[P]>
      : GetScalarType<T[P], AggregateUserTheme[P]>
  }




  export type UserThemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserThemeWhereInput
    orderBy?: UserThemeOrderByWithAggregationInput | UserThemeOrderByWithAggregationInput[]
    by: UserThemeScalarFieldEnum[] | UserThemeScalarFieldEnum
    having?: UserThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserThemeCountAggregateInputType | true
    _min?: UserThemeMinAggregateInputType
    _max?: UserThemeMaxAggregateInputType
  }

  export type UserThemeGroupByOutputType = {
    id: string
    userId: string
    themeId: string
    _count: UserThemeCountAggregateOutputType | null
    _min: UserThemeMinAggregateOutputType | null
    _max: UserThemeMaxAggregateOutputType | null
  }

  type GetUserThemeGroupByPayload<T extends UserThemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserThemeGroupByOutputType[P]>
            : GetScalarType<T[P], UserThemeGroupByOutputType[P]>
        }
      >
    >


  export type UserThemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    themeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTheme"]>

  export type UserThemeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    themeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTheme"]>

  export type UserThemeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    themeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTheme"]>

  export type UserThemeSelectScalar = {
    id?: boolean
    userId?: boolean
    themeId?: boolean
  }

  export type UserThemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "themeId", ExtArgs["result"]["userTheme"]>
  export type UserThemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
  }
  export type UserThemeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
  }
  export type UserThemeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
  }

  export type $UserThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTheme"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      theme: Prisma.$ThemePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      themeId: string
    }, ExtArgs["result"]["userTheme"]>
    composites: {}
  }

  type UserThemeGetPayload<S extends boolean | null | undefined | UserThemeDefaultArgs> = $Result.GetResult<Prisma.$UserThemePayload, S>

  type UserThemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserThemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserThemeCountAggregateInputType | true
    }

  export interface UserThemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTheme'], meta: { name: 'UserTheme' } }
    /**
     * Find zero or one UserTheme that matches the filter.
     * @param {UserThemeFindUniqueArgs} args - Arguments to find a UserTheme
     * @example
     * // Get one UserTheme
     * const userTheme = await prisma.userTheme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserThemeFindUniqueArgs>(args: SelectSubset<T, UserThemeFindUniqueArgs<ExtArgs>>): Prisma__UserThemeClient<$Result.GetResult<Prisma.$UserThemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTheme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserThemeFindUniqueOrThrowArgs} args - Arguments to find a UserTheme
     * @example
     * // Get one UserTheme
     * const userTheme = await prisma.userTheme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserThemeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserThemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserThemeClient<$Result.GetResult<Prisma.$UserThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTheme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserThemeFindFirstArgs} args - Arguments to find a UserTheme
     * @example
     * // Get one UserTheme
     * const userTheme = await prisma.userTheme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserThemeFindFirstArgs>(args?: SelectSubset<T, UserThemeFindFirstArgs<ExtArgs>>): Prisma__UserThemeClient<$Result.GetResult<Prisma.$UserThemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTheme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserThemeFindFirstOrThrowArgs} args - Arguments to find a UserTheme
     * @example
     * // Get one UserTheme
     * const userTheme = await prisma.userTheme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserThemeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserThemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserThemeClient<$Result.GetResult<Prisma.$UserThemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserThemes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserThemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserThemes
     * const userThemes = await prisma.userTheme.findMany()
     * 
     * // Get first 10 UserThemes
     * const userThemes = await prisma.userTheme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userThemeWithIdOnly = await prisma.userTheme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserThemeFindManyArgs>(args?: SelectSubset<T, UserThemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTheme.
     * @param {UserThemeCreateArgs} args - Arguments to create a UserTheme.
     * @example
     * // Create one UserTheme
     * const UserTheme = await prisma.userTheme.create({
     *   data: {
     *     // ... data to create a UserTheme
     *   }
     * })
     * 
     */
    create<T extends UserThemeCreateArgs>(args: SelectSubset<T, UserThemeCreateArgs<ExtArgs>>): Prisma__UserThemeClient<$Result.GetResult<Prisma.$UserThemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserThemes.
     * @param {UserThemeCreateManyArgs} args - Arguments to create many UserThemes.
     * @example
     * // Create many UserThemes
     * const userTheme = await prisma.userTheme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserThemeCreateManyArgs>(args?: SelectSubset<T, UserThemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserThemes and returns the data saved in the database.
     * @param {UserThemeCreateManyAndReturnArgs} args - Arguments to create many UserThemes.
     * @example
     * // Create many UserThemes
     * const userTheme = await prisma.userTheme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserThemes and only return the `id`
     * const userThemeWithIdOnly = await prisma.userTheme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserThemeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserThemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserThemePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTheme.
     * @param {UserThemeDeleteArgs} args - Arguments to delete one UserTheme.
     * @example
     * // Delete one UserTheme
     * const UserTheme = await prisma.userTheme.delete({
     *   where: {
     *     // ... filter to delete one UserTheme
     *   }
     * })
     * 
     */
    delete<T extends UserThemeDeleteArgs>(args: SelectSubset<T, UserThemeDeleteArgs<ExtArgs>>): Prisma__UserThemeClient<$Result.GetResult<Prisma.$UserThemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTheme.
     * @param {UserThemeUpdateArgs} args - Arguments to update one UserTheme.
     * @example
     * // Update one UserTheme
     * const userTheme = await prisma.userTheme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserThemeUpdateArgs>(args: SelectSubset<T, UserThemeUpdateArgs<ExtArgs>>): Prisma__UserThemeClient<$Result.GetResult<Prisma.$UserThemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserThemes.
     * @param {UserThemeDeleteManyArgs} args - Arguments to filter UserThemes to delete.
     * @example
     * // Delete a few UserThemes
     * const { count } = await prisma.userTheme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserThemeDeleteManyArgs>(args?: SelectSubset<T, UserThemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserThemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserThemes
     * const userTheme = await prisma.userTheme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserThemeUpdateManyArgs>(args: SelectSubset<T, UserThemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserThemes and returns the data updated in the database.
     * @param {UserThemeUpdateManyAndReturnArgs} args - Arguments to update many UserThemes.
     * @example
     * // Update many UserThemes
     * const userTheme = await prisma.userTheme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserThemes and only return the `id`
     * const userThemeWithIdOnly = await prisma.userTheme.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserThemeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserThemeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserThemePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTheme.
     * @param {UserThemeUpsertArgs} args - Arguments to update or create a UserTheme.
     * @example
     * // Update or create a UserTheme
     * const userTheme = await prisma.userTheme.upsert({
     *   create: {
     *     // ... data to create a UserTheme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTheme we want to update
     *   }
     * })
     */
    upsert<T extends UserThemeUpsertArgs>(args: SelectSubset<T, UserThemeUpsertArgs<ExtArgs>>): Prisma__UserThemeClient<$Result.GetResult<Prisma.$UserThemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserThemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserThemeCountArgs} args - Arguments to filter UserThemes to count.
     * @example
     * // Count the number of UserThemes
     * const count = await prisma.userTheme.count({
     *   where: {
     *     // ... the filter for the UserThemes we want to count
     *   }
     * })
    **/
    count<T extends UserThemeCountArgs>(
      args?: Subset<T, UserThemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserThemeAggregateArgs>(args: Subset<T, UserThemeAggregateArgs>): Prisma.PrismaPromise<GetUserThemeAggregateType<T>>

    /**
     * Group by UserTheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserThemeGroupByArgs} args - Group by arguments.
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
      T extends UserThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserThemeGroupByArgs['orderBy'] }
        : { orderBy?: UserThemeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTheme model
   */
  readonly fields: UserThemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTheme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserThemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    theme<T extends ThemeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThemeDefaultArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserTheme model
   */
  interface UserThemeFieldRefs {
    readonly id: FieldRef<"UserTheme", 'String'>
    readonly userId: FieldRef<"UserTheme", 'String'>
    readonly themeId: FieldRef<"UserTheme", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserTheme findUnique
   */
  export type UserThemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTheme
     */
    select?: UserThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTheme
     */
    omit?: UserThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserThemeInclude<ExtArgs> | null
    /**
     * Filter, which UserTheme to fetch.
     */
    where: UserThemeWhereUniqueInput
  }

  /**
   * UserTheme findUniqueOrThrow
   */
  export type UserThemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTheme
     */
    select?: UserThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTheme
     */
    omit?: UserThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserThemeInclude<ExtArgs> | null
    /**
     * Filter, which UserTheme to fetch.
     */
    where: UserThemeWhereUniqueInput
  }

  /**
   * UserTheme findFirst
   */
  export type UserThemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTheme
     */
    select?: UserThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTheme
     */
    omit?: UserThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserThemeInclude<ExtArgs> | null
    /**
     * Filter, which UserTheme to fetch.
     */
    where?: UserThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserThemes to fetch.
     */
    orderBy?: UserThemeOrderByWithRelationInput | UserThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserThemes.
     */
    cursor?: UserThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserThemes.
     */
    distinct?: UserThemeScalarFieldEnum | UserThemeScalarFieldEnum[]
  }

  /**
   * UserTheme findFirstOrThrow
   */
  export type UserThemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTheme
     */
    select?: UserThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTheme
     */
    omit?: UserThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserThemeInclude<ExtArgs> | null
    /**
     * Filter, which UserTheme to fetch.
     */
    where?: UserThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserThemes to fetch.
     */
    orderBy?: UserThemeOrderByWithRelationInput | UserThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserThemes.
     */
    cursor?: UserThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserThemes.
     */
    distinct?: UserThemeScalarFieldEnum | UserThemeScalarFieldEnum[]
  }

  /**
   * UserTheme findMany
   */
  export type UserThemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTheme
     */
    select?: UserThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTheme
     */
    omit?: UserThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserThemeInclude<ExtArgs> | null
    /**
     * Filter, which UserThemes to fetch.
     */
    where?: UserThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserThemes to fetch.
     */
    orderBy?: UserThemeOrderByWithRelationInput | UserThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserThemes.
     */
    cursor?: UserThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserThemes.
     */
    distinct?: UserThemeScalarFieldEnum | UserThemeScalarFieldEnum[]
  }

  /**
   * UserTheme create
   */
  export type UserThemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTheme
     */
    select?: UserThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTheme
     */
    omit?: UserThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserThemeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTheme.
     */
    data: XOR<UserThemeCreateInput, UserThemeUncheckedCreateInput>
  }

  /**
   * UserTheme createMany
   */
  export type UserThemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserThemes.
     */
    data: UserThemeCreateManyInput | UserThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTheme createManyAndReturn
   */
  export type UserThemeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTheme
     */
    select?: UserThemeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTheme
     */
    omit?: UserThemeOmit<ExtArgs> | null
    /**
     * The data used to create many UserThemes.
     */
    data: UserThemeCreateManyInput | UserThemeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserThemeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTheme update
   */
  export type UserThemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTheme
     */
    select?: UserThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTheme
     */
    omit?: UserThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserThemeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTheme.
     */
    data: XOR<UserThemeUpdateInput, UserThemeUncheckedUpdateInput>
    /**
     * Choose, which UserTheme to update.
     */
    where: UserThemeWhereUniqueInput
  }

  /**
   * UserTheme updateMany
   */
  export type UserThemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserThemes.
     */
    data: XOR<UserThemeUpdateManyMutationInput, UserThemeUncheckedUpdateManyInput>
    /**
     * Filter which UserThemes to update
     */
    where?: UserThemeWhereInput
    /**
     * Limit how many UserThemes to update.
     */
    limit?: number
  }

  /**
   * UserTheme updateManyAndReturn
   */
  export type UserThemeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTheme
     */
    select?: UserThemeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTheme
     */
    omit?: UserThemeOmit<ExtArgs> | null
    /**
     * The data used to update UserThemes.
     */
    data: XOR<UserThemeUpdateManyMutationInput, UserThemeUncheckedUpdateManyInput>
    /**
     * Filter which UserThemes to update
     */
    where?: UserThemeWhereInput
    /**
     * Limit how many UserThemes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserThemeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTheme upsert
   */
  export type UserThemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTheme
     */
    select?: UserThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTheme
     */
    omit?: UserThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserThemeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTheme to update in case it exists.
     */
    where: UserThemeWhereUniqueInput
    /**
     * In case the UserTheme found by the `where` argument doesn't exist, create a new UserTheme with this data.
     */
    create: XOR<UserThemeCreateInput, UserThemeUncheckedCreateInput>
    /**
     * In case the UserTheme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserThemeUpdateInput, UserThemeUncheckedUpdateInput>
  }

  /**
   * UserTheme delete
   */
  export type UserThemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTheme
     */
    select?: UserThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTheme
     */
    omit?: UserThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserThemeInclude<ExtArgs> | null
    /**
     * Filter which UserTheme to delete.
     */
    where: UserThemeWhereUniqueInput
  }

  /**
   * UserTheme deleteMany
   */
  export type UserThemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserThemes to delete
     */
    where?: UserThemeWhereInput
    /**
     * Limit how many UserThemes to delete.
     */
    limit?: number
  }

  /**
   * UserTheme without action
   */
  export type UserThemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTheme
     */
    select?: UserThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTheme
     */
    omit?: UserThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserThemeInclude<ExtArgs> | null
  }


  /**
   * Model YoutubeAllowlist
   */

  export type AggregateYoutubeAllowlist = {
    _count: YoutubeAllowlistCountAggregateOutputType | null
    _min: YoutubeAllowlistMinAggregateOutputType | null
    _max: YoutubeAllowlistMaxAggregateOutputType | null
  }

  export type YoutubeAllowlistMinAggregateOutputType = {
    id: string | null
    videoId: string | null
    url: string | null
    title: string | null
    thumbnail: string | null
    addedAt: Date | null
    userId: string | null
  }

  export type YoutubeAllowlistMaxAggregateOutputType = {
    id: string | null
    videoId: string | null
    url: string | null
    title: string | null
    thumbnail: string | null
    addedAt: Date | null
    userId: string | null
  }

  export type YoutubeAllowlistCountAggregateOutputType = {
    id: number
    videoId: number
    url: number
    title: number
    thumbnail: number
    addedAt: number
    userId: number
    _all: number
  }


  export type YoutubeAllowlistMinAggregateInputType = {
    id?: true
    videoId?: true
    url?: true
    title?: true
    thumbnail?: true
    addedAt?: true
    userId?: true
  }

  export type YoutubeAllowlistMaxAggregateInputType = {
    id?: true
    videoId?: true
    url?: true
    title?: true
    thumbnail?: true
    addedAt?: true
    userId?: true
  }

  export type YoutubeAllowlistCountAggregateInputType = {
    id?: true
    videoId?: true
    url?: true
    title?: true
    thumbnail?: true
    addedAt?: true
    userId?: true
    _all?: true
  }

  export type YoutubeAllowlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YoutubeAllowlist to aggregate.
     */
    where?: YoutubeAllowlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoutubeAllowlists to fetch.
     */
    orderBy?: YoutubeAllowlistOrderByWithRelationInput | YoutubeAllowlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YoutubeAllowlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoutubeAllowlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoutubeAllowlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YoutubeAllowlists
    **/
    _count?: true | YoutubeAllowlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YoutubeAllowlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YoutubeAllowlistMaxAggregateInputType
  }

  export type GetYoutubeAllowlistAggregateType<T extends YoutubeAllowlistAggregateArgs> = {
        [P in keyof T & keyof AggregateYoutubeAllowlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYoutubeAllowlist[P]>
      : GetScalarType<T[P], AggregateYoutubeAllowlist[P]>
  }




  export type YoutubeAllowlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YoutubeAllowlistWhereInput
    orderBy?: YoutubeAllowlistOrderByWithAggregationInput | YoutubeAllowlistOrderByWithAggregationInput[]
    by: YoutubeAllowlistScalarFieldEnum[] | YoutubeAllowlistScalarFieldEnum
    having?: YoutubeAllowlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YoutubeAllowlistCountAggregateInputType | true
    _min?: YoutubeAllowlistMinAggregateInputType
    _max?: YoutubeAllowlistMaxAggregateInputType
  }

  export type YoutubeAllowlistGroupByOutputType = {
    id: string
    videoId: string
    url: string
    title: string | null
    thumbnail: string | null
    addedAt: Date
    userId: string
    _count: YoutubeAllowlistCountAggregateOutputType | null
    _min: YoutubeAllowlistMinAggregateOutputType | null
    _max: YoutubeAllowlistMaxAggregateOutputType | null
  }

  type GetYoutubeAllowlistGroupByPayload<T extends YoutubeAllowlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YoutubeAllowlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YoutubeAllowlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YoutubeAllowlistGroupByOutputType[P]>
            : GetScalarType<T[P], YoutubeAllowlistGroupByOutputType[P]>
        }
      >
    >


  export type YoutubeAllowlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    url?: boolean
    title?: boolean
    thumbnail?: boolean
    addedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["youtubeAllowlist"]>

  export type YoutubeAllowlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    url?: boolean
    title?: boolean
    thumbnail?: boolean
    addedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["youtubeAllowlist"]>

  export type YoutubeAllowlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    url?: boolean
    title?: boolean
    thumbnail?: boolean
    addedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["youtubeAllowlist"]>

  export type YoutubeAllowlistSelectScalar = {
    id?: boolean
    videoId?: boolean
    url?: boolean
    title?: boolean
    thumbnail?: boolean
    addedAt?: boolean
    userId?: boolean
  }

  export type YoutubeAllowlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "videoId" | "url" | "title" | "thumbnail" | "addedAt" | "userId", ExtArgs["result"]["youtubeAllowlist"]>
  export type YoutubeAllowlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type YoutubeAllowlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type YoutubeAllowlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $YoutubeAllowlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "YoutubeAllowlist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      videoId: string
      url: string
      title: string | null
      thumbnail: string | null
      addedAt: Date
      userId: string
    }, ExtArgs["result"]["youtubeAllowlist"]>
    composites: {}
  }

  type YoutubeAllowlistGetPayload<S extends boolean | null | undefined | YoutubeAllowlistDefaultArgs> = $Result.GetResult<Prisma.$YoutubeAllowlistPayload, S>

  type YoutubeAllowlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<YoutubeAllowlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YoutubeAllowlistCountAggregateInputType | true
    }

  export interface YoutubeAllowlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YoutubeAllowlist'], meta: { name: 'YoutubeAllowlist' } }
    /**
     * Find zero or one YoutubeAllowlist that matches the filter.
     * @param {YoutubeAllowlistFindUniqueArgs} args - Arguments to find a YoutubeAllowlist
     * @example
     * // Get one YoutubeAllowlist
     * const youtubeAllowlist = await prisma.youtubeAllowlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YoutubeAllowlistFindUniqueArgs>(args: SelectSubset<T, YoutubeAllowlistFindUniqueArgs<ExtArgs>>): Prisma__YoutubeAllowlistClient<$Result.GetResult<Prisma.$YoutubeAllowlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one YoutubeAllowlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YoutubeAllowlistFindUniqueOrThrowArgs} args - Arguments to find a YoutubeAllowlist
     * @example
     * // Get one YoutubeAllowlist
     * const youtubeAllowlist = await prisma.youtubeAllowlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YoutubeAllowlistFindUniqueOrThrowArgs>(args: SelectSubset<T, YoutubeAllowlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YoutubeAllowlistClient<$Result.GetResult<Prisma.$YoutubeAllowlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first YoutubeAllowlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoutubeAllowlistFindFirstArgs} args - Arguments to find a YoutubeAllowlist
     * @example
     * // Get one YoutubeAllowlist
     * const youtubeAllowlist = await prisma.youtubeAllowlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YoutubeAllowlistFindFirstArgs>(args?: SelectSubset<T, YoutubeAllowlistFindFirstArgs<ExtArgs>>): Prisma__YoutubeAllowlistClient<$Result.GetResult<Prisma.$YoutubeAllowlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first YoutubeAllowlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoutubeAllowlistFindFirstOrThrowArgs} args - Arguments to find a YoutubeAllowlist
     * @example
     * // Get one YoutubeAllowlist
     * const youtubeAllowlist = await prisma.youtubeAllowlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YoutubeAllowlistFindFirstOrThrowArgs>(args?: SelectSubset<T, YoutubeAllowlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__YoutubeAllowlistClient<$Result.GetResult<Prisma.$YoutubeAllowlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more YoutubeAllowlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoutubeAllowlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YoutubeAllowlists
     * const youtubeAllowlists = await prisma.youtubeAllowlist.findMany()
     * 
     * // Get first 10 YoutubeAllowlists
     * const youtubeAllowlists = await prisma.youtubeAllowlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const youtubeAllowlistWithIdOnly = await prisma.youtubeAllowlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YoutubeAllowlistFindManyArgs>(args?: SelectSubset<T, YoutubeAllowlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YoutubeAllowlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a YoutubeAllowlist.
     * @param {YoutubeAllowlistCreateArgs} args - Arguments to create a YoutubeAllowlist.
     * @example
     * // Create one YoutubeAllowlist
     * const YoutubeAllowlist = await prisma.youtubeAllowlist.create({
     *   data: {
     *     // ... data to create a YoutubeAllowlist
     *   }
     * })
     * 
     */
    create<T extends YoutubeAllowlistCreateArgs>(args: SelectSubset<T, YoutubeAllowlistCreateArgs<ExtArgs>>): Prisma__YoutubeAllowlistClient<$Result.GetResult<Prisma.$YoutubeAllowlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many YoutubeAllowlists.
     * @param {YoutubeAllowlistCreateManyArgs} args - Arguments to create many YoutubeAllowlists.
     * @example
     * // Create many YoutubeAllowlists
     * const youtubeAllowlist = await prisma.youtubeAllowlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YoutubeAllowlistCreateManyArgs>(args?: SelectSubset<T, YoutubeAllowlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many YoutubeAllowlists and returns the data saved in the database.
     * @param {YoutubeAllowlistCreateManyAndReturnArgs} args - Arguments to create many YoutubeAllowlists.
     * @example
     * // Create many YoutubeAllowlists
     * const youtubeAllowlist = await prisma.youtubeAllowlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many YoutubeAllowlists and only return the `id`
     * const youtubeAllowlistWithIdOnly = await prisma.youtubeAllowlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YoutubeAllowlistCreateManyAndReturnArgs>(args?: SelectSubset<T, YoutubeAllowlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YoutubeAllowlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a YoutubeAllowlist.
     * @param {YoutubeAllowlistDeleteArgs} args - Arguments to delete one YoutubeAllowlist.
     * @example
     * // Delete one YoutubeAllowlist
     * const YoutubeAllowlist = await prisma.youtubeAllowlist.delete({
     *   where: {
     *     // ... filter to delete one YoutubeAllowlist
     *   }
     * })
     * 
     */
    delete<T extends YoutubeAllowlistDeleteArgs>(args: SelectSubset<T, YoutubeAllowlistDeleteArgs<ExtArgs>>): Prisma__YoutubeAllowlistClient<$Result.GetResult<Prisma.$YoutubeAllowlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one YoutubeAllowlist.
     * @param {YoutubeAllowlistUpdateArgs} args - Arguments to update one YoutubeAllowlist.
     * @example
     * // Update one YoutubeAllowlist
     * const youtubeAllowlist = await prisma.youtubeAllowlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YoutubeAllowlistUpdateArgs>(args: SelectSubset<T, YoutubeAllowlistUpdateArgs<ExtArgs>>): Prisma__YoutubeAllowlistClient<$Result.GetResult<Prisma.$YoutubeAllowlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more YoutubeAllowlists.
     * @param {YoutubeAllowlistDeleteManyArgs} args - Arguments to filter YoutubeAllowlists to delete.
     * @example
     * // Delete a few YoutubeAllowlists
     * const { count } = await prisma.youtubeAllowlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YoutubeAllowlistDeleteManyArgs>(args?: SelectSubset<T, YoutubeAllowlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YoutubeAllowlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoutubeAllowlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YoutubeAllowlists
     * const youtubeAllowlist = await prisma.youtubeAllowlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YoutubeAllowlistUpdateManyArgs>(args: SelectSubset<T, YoutubeAllowlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YoutubeAllowlists and returns the data updated in the database.
     * @param {YoutubeAllowlistUpdateManyAndReturnArgs} args - Arguments to update many YoutubeAllowlists.
     * @example
     * // Update many YoutubeAllowlists
     * const youtubeAllowlist = await prisma.youtubeAllowlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more YoutubeAllowlists and only return the `id`
     * const youtubeAllowlistWithIdOnly = await prisma.youtubeAllowlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends YoutubeAllowlistUpdateManyAndReturnArgs>(args: SelectSubset<T, YoutubeAllowlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YoutubeAllowlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one YoutubeAllowlist.
     * @param {YoutubeAllowlistUpsertArgs} args - Arguments to update or create a YoutubeAllowlist.
     * @example
     * // Update or create a YoutubeAllowlist
     * const youtubeAllowlist = await prisma.youtubeAllowlist.upsert({
     *   create: {
     *     // ... data to create a YoutubeAllowlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YoutubeAllowlist we want to update
     *   }
     * })
     */
    upsert<T extends YoutubeAllowlistUpsertArgs>(args: SelectSubset<T, YoutubeAllowlistUpsertArgs<ExtArgs>>): Prisma__YoutubeAllowlistClient<$Result.GetResult<Prisma.$YoutubeAllowlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of YoutubeAllowlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoutubeAllowlistCountArgs} args - Arguments to filter YoutubeAllowlists to count.
     * @example
     * // Count the number of YoutubeAllowlists
     * const count = await prisma.youtubeAllowlist.count({
     *   where: {
     *     // ... the filter for the YoutubeAllowlists we want to count
     *   }
     * })
    **/
    count<T extends YoutubeAllowlistCountArgs>(
      args?: Subset<T, YoutubeAllowlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YoutubeAllowlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YoutubeAllowlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoutubeAllowlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YoutubeAllowlistAggregateArgs>(args: Subset<T, YoutubeAllowlistAggregateArgs>): Prisma.PrismaPromise<GetYoutubeAllowlistAggregateType<T>>

    /**
     * Group by YoutubeAllowlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoutubeAllowlistGroupByArgs} args - Group by arguments.
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
      T extends YoutubeAllowlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YoutubeAllowlistGroupByArgs['orderBy'] }
        : { orderBy?: YoutubeAllowlistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, YoutubeAllowlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYoutubeAllowlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YoutubeAllowlist model
   */
  readonly fields: YoutubeAllowlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YoutubeAllowlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YoutubeAllowlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the YoutubeAllowlist model
   */
  interface YoutubeAllowlistFieldRefs {
    readonly id: FieldRef<"YoutubeAllowlist", 'String'>
    readonly videoId: FieldRef<"YoutubeAllowlist", 'String'>
    readonly url: FieldRef<"YoutubeAllowlist", 'String'>
    readonly title: FieldRef<"YoutubeAllowlist", 'String'>
    readonly thumbnail: FieldRef<"YoutubeAllowlist", 'String'>
    readonly addedAt: FieldRef<"YoutubeAllowlist", 'DateTime'>
    readonly userId: FieldRef<"YoutubeAllowlist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * YoutubeAllowlist findUnique
   */
  export type YoutubeAllowlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeAllowlist
     */
    select?: YoutubeAllowlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeAllowlist
     */
    omit?: YoutubeAllowlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeAllowlistInclude<ExtArgs> | null
    /**
     * Filter, which YoutubeAllowlist to fetch.
     */
    where: YoutubeAllowlistWhereUniqueInput
  }

  /**
   * YoutubeAllowlist findUniqueOrThrow
   */
  export type YoutubeAllowlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeAllowlist
     */
    select?: YoutubeAllowlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeAllowlist
     */
    omit?: YoutubeAllowlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeAllowlistInclude<ExtArgs> | null
    /**
     * Filter, which YoutubeAllowlist to fetch.
     */
    where: YoutubeAllowlistWhereUniqueInput
  }

  /**
   * YoutubeAllowlist findFirst
   */
  export type YoutubeAllowlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeAllowlist
     */
    select?: YoutubeAllowlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeAllowlist
     */
    omit?: YoutubeAllowlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeAllowlistInclude<ExtArgs> | null
    /**
     * Filter, which YoutubeAllowlist to fetch.
     */
    where?: YoutubeAllowlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoutubeAllowlists to fetch.
     */
    orderBy?: YoutubeAllowlistOrderByWithRelationInput | YoutubeAllowlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YoutubeAllowlists.
     */
    cursor?: YoutubeAllowlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoutubeAllowlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoutubeAllowlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YoutubeAllowlists.
     */
    distinct?: YoutubeAllowlistScalarFieldEnum | YoutubeAllowlistScalarFieldEnum[]
  }

  /**
   * YoutubeAllowlist findFirstOrThrow
   */
  export type YoutubeAllowlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeAllowlist
     */
    select?: YoutubeAllowlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeAllowlist
     */
    omit?: YoutubeAllowlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeAllowlistInclude<ExtArgs> | null
    /**
     * Filter, which YoutubeAllowlist to fetch.
     */
    where?: YoutubeAllowlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoutubeAllowlists to fetch.
     */
    orderBy?: YoutubeAllowlistOrderByWithRelationInput | YoutubeAllowlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YoutubeAllowlists.
     */
    cursor?: YoutubeAllowlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoutubeAllowlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoutubeAllowlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YoutubeAllowlists.
     */
    distinct?: YoutubeAllowlistScalarFieldEnum | YoutubeAllowlistScalarFieldEnum[]
  }

  /**
   * YoutubeAllowlist findMany
   */
  export type YoutubeAllowlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeAllowlist
     */
    select?: YoutubeAllowlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeAllowlist
     */
    omit?: YoutubeAllowlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeAllowlistInclude<ExtArgs> | null
    /**
     * Filter, which YoutubeAllowlists to fetch.
     */
    where?: YoutubeAllowlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoutubeAllowlists to fetch.
     */
    orderBy?: YoutubeAllowlistOrderByWithRelationInput | YoutubeAllowlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YoutubeAllowlists.
     */
    cursor?: YoutubeAllowlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoutubeAllowlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoutubeAllowlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YoutubeAllowlists.
     */
    distinct?: YoutubeAllowlistScalarFieldEnum | YoutubeAllowlistScalarFieldEnum[]
  }

  /**
   * YoutubeAllowlist create
   */
  export type YoutubeAllowlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeAllowlist
     */
    select?: YoutubeAllowlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeAllowlist
     */
    omit?: YoutubeAllowlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeAllowlistInclude<ExtArgs> | null
    /**
     * The data needed to create a YoutubeAllowlist.
     */
    data: XOR<YoutubeAllowlistCreateInput, YoutubeAllowlistUncheckedCreateInput>
  }

  /**
   * YoutubeAllowlist createMany
   */
  export type YoutubeAllowlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YoutubeAllowlists.
     */
    data: YoutubeAllowlistCreateManyInput | YoutubeAllowlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YoutubeAllowlist createManyAndReturn
   */
  export type YoutubeAllowlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeAllowlist
     */
    select?: YoutubeAllowlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeAllowlist
     */
    omit?: YoutubeAllowlistOmit<ExtArgs> | null
    /**
     * The data used to create many YoutubeAllowlists.
     */
    data: YoutubeAllowlistCreateManyInput | YoutubeAllowlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeAllowlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * YoutubeAllowlist update
   */
  export type YoutubeAllowlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeAllowlist
     */
    select?: YoutubeAllowlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeAllowlist
     */
    omit?: YoutubeAllowlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeAllowlistInclude<ExtArgs> | null
    /**
     * The data needed to update a YoutubeAllowlist.
     */
    data: XOR<YoutubeAllowlistUpdateInput, YoutubeAllowlistUncheckedUpdateInput>
    /**
     * Choose, which YoutubeAllowlist to update.
     */
    where: YoutubeAllowlistWhereUniqueInput
  }

  /**
   * YoutubeAllowlist updateMany
   */
  export type YoutubeAllowlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YoutubeAllowlists.
     */
    data: XOR<YoutubeAllowlistUpdateManyMutationInput, YoutubeAllowlistUncheckedUpdateManyInput>
    /**
     * Filter which YoutubeAllowlists to update
     */
    where?: YoutubeAllowlistWhereInput
    /**
     * Limit how many YoutubeAllowlists to update.
     */
    limit?: number
  }

  /**
   * YoutubeAllowlist updateManyAndReturn
   */
  export type YoutubeAllowlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeAllowlist
     */
    select?: YoutubeAllowlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeAllowlist
     */
    omit?: YoutubeAllowlistOmit<ExtArgs> | null
    /**
     * The data used to update YoutubeAllowlists.
     */
    data: XOR<YoutubeAllowlistUpdateManyMutationInput, YoutubeAllowlistUncheckedUpdateManyInput>
    /**
     * Filter which YoutubeAllowlists to update
     */
    where?: YoutubeAllowlistWhereInput
    /**
     * Limit how many YoutubeAllowlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeAllowlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * YoutubeAllowlist upsert
   */
  export type YoutubeAllowlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeAllowlist
     */
    select?: YoutubeAllowlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeAllowlist
     */
    omit?: YoutubeAllowlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeAllowlistInclude<ExtArgs> | null
    /**
     * The filter to search for the YoutubeAllowlist to update in case it exists.
     */
    where: YoutubeAllowlistWhereUniqueInput
    /**
     * In case the YoutubeAllowlist found by the `where` argument doesn't exist, create a new YoutubeAllowlist with this data.
     */
    create: XOR<YoutubeAllowlistCreateInput, YoutubeAllowlistUncheckedCreateInput>
    /**
     * In case the YoutubeAllowlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YoutubeAllowlistUpdateInput, YoutubeAllowlistUncheckedUpdateInput>
  }

  /**
   * YoutubeAllowlist delete
   */
  export type YoutubeAllowlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeAllowlist
     */
    select?: YoutubeAllowlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeAllowlist
     */
    omit?: YoutubeAllowlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeAllowlistInclude<ExtArgs> | null
    /**
     * Filter which YoutubeAllowlist to delete.
     */
    where: YoutubeAllowlistWhereUniqueInput
  }

  /**
   * YoutubeAllowlist deleteMany
   */
  export type YoutubeAllowlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YoutubeAllowlists to delete
     */
    where?: YoutubeAllowlistWhereInput
    /**
     * Limit how many YoutubeAllowlists to delete.
     */
    limit?: number
  }

  /**
   * YoutubeAllowlist without action
   */
  export type YoutubeAllowlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeAllowlist
     */
    select?: YoutubeAllowlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeAllowlist
     */
    omit?: YoutubeAllowlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeAllowlistInclude<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    condition: string | null
    icon: string | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    condition: string | null
    icon: string | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    name: number
    description: number
    condition: number
    icon: number
    _all: number
  }


  export type AchievementMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    condition?: true
    icon?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    condition?: true
    icon?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    condition?: true
    icon?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: string
    name: string
    description: string
    condition: string
    icon: string | null
    _count: AchievementCountAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    condition?: boolean
    icon?: boolean
    userAchievements?: boolean | Achievement$userAchievementsArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    condition?: boolean
    icon?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    condition?: boolean
    icon?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    condition?: boolean
    icon?: boolean
  }

  export type AchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "condition" | "icon", ExtArgs["result"]["achievement"]>
  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAchievements?: boolean | Achievement$userAchievementsArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      userAchievements: Prisma.$UserAchievementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      condition: string
      icon: string | null
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {AchievementUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, AchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
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
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userAchievements<T extends Achievement$userAchievementsArgs<ExtArgs> = {}>(args?: Subset<T, Achievement$userAchievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Achievement model
   */
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'String'>
    readonly name: FieldRef<"Achievement", 'String'>
    readonly description: FieldRef<"Achievement", 'String'>
    readonly condition: FieldRef<"Achievement", 'String'>
    readonly icon: FieldRef<"Achievement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement updateManyAndReturn
   */
  export type AchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number
  }

  /**
   * Achievement.userAchievements
   */
  export type Achievement$userAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    cursor?: UserAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model UserAchievement
   */

  export type AggregateUserAchievement = {
    _count: UserAchievementCountAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  export type UserAchievementMinAggregateOutputType = {
    id: string | null
    unlockedAt: Date | null
    userId: string | null
    achievementId: string | null
  }

  export type UserAchievementMaxAggregateOutputType = {
    id: string | null
    unlockedAt: Date | null
    userId: string | null
    achievementId: string | null
  }

  export type UserAchievementCountAggregateOutputType = {
    id: number
    unlockedAt: number
    userId: number
    achievementId: number
    _all: number
  }


  export type UserAchievementMinAggregateInputType = {
    id?: true
    unlockedAt?: true
    userId?: true
    achievementId?: true
  }

  export type UserAchievementMaxAggregateInputType = {
    id?: true
    unlockedAt?: true
    userId?: true
    achievementId?: true
  }

  export type UserAchievementCountAggregateInputType = {
    id?: true
    unlockedAt?: true
    userId?: true
    achievementId?: true
    _all?: true
  }

  export type UserAchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievement to aggregate.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAchievements
    **/
    _count?: true | UserAchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAchievementMaxAggregateInputType
  }

  export type GetUserAchievementAggregateType<T extends UserAchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAchievement[P]>
      : GetScalarType<T[P], AggregateUserAchievement[P]>
  }




  export type UserAchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithAggregationInput | UserAchievementOrderByWithAggregationInput[]
    by: UserAchievementScalarFieldEnum[] | UserAchievementScalarFieldEnum
    having?: UserAchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAchievementCountAggregateInputType | true
    _min?: UserAchievementMinAggregateInputType
    _max?: UserAchievementMaxAggregateInputType
  }

  export type UserAchievementGroupByOutputType = {
    id: string
    unlockedAt: Date
    userId: string
    achievementId: string
    _count: UserAchievementCountAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  type GetUserAchievementGroupByPayload<T extends UserAchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
        }
      >
    >


  export type UserAchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unlockedAt?: boolean
    userId?: boolean
    achievementId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unlockedAt?: boolean
    userId?: boolean
    achievementId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unlockedAt?: boolean
    userId?: boolean
    achievementId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectScalar = {
    id?: boolean
    unlockedAt?: boolean
    userId?: boolean
    achievementId?: boolean
  }

  export type UserAchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unlockedAt" | "userId" | "achievementId", ExtArgs["result"]["userAchievement"]>
  export type UserAchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }
  export type UserAchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }
  export type UserAchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }

  export type $UserAchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAchievement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      achievement: Prisma.$AchievementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      unlockedAt: Date
      userId: string
      achievementId: string
    }, ExtArgs["result"]["userAchievement"]>
    composites: {}
  }

  type UserAchievementGetPayload<S extends boolean | null | undefined | UserAchievementDefaultArgs> = $Result.GetResult<Prisma.$UserAchievementPayload, S>

  type UserAchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAchievementCountAggregateInputType | true
    }

  export interface UserAchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAchievement'], meta: { name: 'UserAchievement' } }
    /**
     * Find zero or one UserAchievement that matches the filter.
     * @param {UserAchievementFindUniqueArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAchievementFindUniqueArgs>(args: SelectSubset<T, UserAchievementFindUniqueArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAchievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAchievementFindUniqueOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAchievementFindFirstArgs>(args?: SelectSubset<T, UserAchievementFindFirstArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany()
     * 
     * // Get first 10 UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAchievementFindManyArgs>(args?: SelectSubset<T, UserAchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAchievement.
     * @param {UserAchievementCreateArgs} args - Arguments to create a UserAchievement.
     * @example
     * // Create one UserAchievement
     * const UserAchievement = await prisma.userAchievement.create({
     *   data: {
     *     // ... data to create a UserAchievement
     *   }
     * })
     * 
     */
    create<T extends UserAchievementCreateArgs>(args: SelectSubset<T, UserAchievementCreateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAchievements.
     * @param {UserAchievementCreateManyArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAchievementCreateManyArgs>(args?: SelectSubset<T, UserAchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAchievements and returns the data saved in the database.
     * @param {UserAchievementCreateManyAndReturnArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAchievement.
     * @param {UserAchievementDeleteArgs} args - Arguments to delete one UserAchievement.
     * @example
     * // Delete one UserAchievement
     * const UserAchievement = await prisma.userAchievement.delete({
     *   where: {
     *     // ... filter to delete one UserAchievement
     *   }
     * })
     * 
     */
    delete<T extends UserAchievementDeleteArgs>(args: SelectSubset<T, UserAchievementDeleteArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAchievement.
     * @param {UserAchievementUpdateArgs} args - Arguments to update one UserAchievement.
     * @example
     * // Update one UserAchievement
     * const userAchievement = await prisma.userAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAchievementUpdateArgs>(args: SelectSubset<T, UserAchievementUpdateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAchievements.
     * @param {UserAchievementDeleteManyArgs} args - Arguments to filter UserAchievements to delete.
     * @example
     * // Delete a few UserAchievements
     * const { count } = await prisma.userAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAchievementDeleteManyArgs>(args?: SelectSubset<T, UserAchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAchievementUpdateManyArgs>(args: SelectSubset<T, UserAchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements and returns the data updated in the database.
     * @param {UserAchievementUpdateManyAndReturnArgs} args - Arguments to update many UserAchievements.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAchievement.
     * @param {UserAchievementUpsertArgs} args - Arguments to update or create a UserAchievement.
     * @example
     * // Update or create a UserAchievement
     * const userAchievement = await prisma.userAchievement.upsert({
     *   create: {
     *     // ... data to create a UserAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAchievement we want to update
     *   }
     * })
     */
    upsert<T extends UserAchievementUpsertArgs>(args: SelectSubset<T, UserAchievementUpsertArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementCountArgs} args - Arguments to filter UserAchievements to count.
     * @example
     * // Count the number of UserAchievements
     * const count = await prisma.userAchievement.count({
     *   where: {
     *     // ... the filter for the UserAchievements we want to count
     *   }
     * })
    **/
    count<T extends UserAchievementCountArgs>(
      args?: Subset<T, UserAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAchievementAggregateArgs>(args: Subset<T, UserAchievementAggregateArgs>): Prisma.PrismaPromise<GetUserAchievementAggregateType<T>>

    /**
     * Group by UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementGroupByArgs} args - Group by arguments.
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
      T extends UserAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAchievementGroupByArgs['orderBy'] }
        : { orderBy?: UserAchievementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAchievement model
   */
  readonly fields: UserAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    achievement<T extends AchievementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AchievementDefaultArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAchievement model
   */
  interface UserAchievementFieldRefs {
    readonly id: FieldRef<"UserAchievement", 'String'>
    readonly unlockedAt: FieldRef<"UserAchievement", 'DateTime'>
    readonly userId: FieldRef<"UserAchievement", 'String'>
    readonly achievementId: FieldRef<"UserAchievement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserAchievement findUnique
   */
  export type UserAchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findUniqueOrThrow
   */
  export type UserAchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findFirst
   */
  export type UserAchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findFirstOrThrow
   */
  export type UserAchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findMany
   */
  export type UserAchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievements to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement create
   */
  export type UserAchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAchievement.
     */
    data: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
  }

  /**
   * UserAchievement createMany
   */
  export type UserAchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAchievement createManyAndReturn
   */
  export type UserAchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievement update
   */
  export type UserAchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAchievement.
     */
    data: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
    /**
     * Choose, which UserAchievement to update.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement updateMany
   */
  export type UserAchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number
  }

  /**
   * UserAchievement updateManyAndReturn
   */
  export type UserAchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievement upsert
   */
  export type UserAchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAchievement to update in case it exists.
     */
    where: UserAchievementWhereUniqueInput
    /**
     * In case the UserAchievement found by the `where` argument doesn't exist, create a new UserAchievement with this data.
     */
    create: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
    /**
     * In case the UserAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
  }

  /**
   * UserAchievement delete
   */
  export type UserAchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter which UserAchievement to delete.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement deleteMany
   */
  export type UserAchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievements to delete
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to delete.
     */
    limit?: number
  }

  /**
   * UserAchievement without action
   */
  export type UserAchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    daysOfWeek: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    daysOfWeek: number[]
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    label: string | null
    startTime: string | null
    endTime: string | null
    isActive: boolean | null
    timezone: string | null
    userId: string | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    label: string | null
    startTime: string | null
    endTime: string | null
    isActive: boolean | null
    timezone: string | null
    userId: string | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    label: number
    startTime: number
    endTime: number
    daysOfWeek: number
    isActive: number
    timezone: number
    userId: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    daysOfWeek?: true
  }

  export type ScheduleSumAggregateInputType = {
    daysOfWeek?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    label?: true
    startTime?: true
    endTime?: true
    isActive?: true
    timezone?: true
    userId?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    label?: true
    startTime?: true
    endTime?: true
    isActive?: true
    timezone?: true
    userId?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    label?: true
    startTime?: true
    endTime?: true
    daysOfWeek?: true
    isActive?: true
    timezone?: true
    userId?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    label: string
    startTime: string
    endTime: string
    daysOfWeek: number[]
    isActive: boolean
    timezone: string
    userId: string
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    startTime?: boolean
    endTime?: boolean
    daysOfWeek?: boolean
    isActive?: boolean
    timezone?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    startTime?: boolean
    endTime?: boolean
    daysOfWeek?: boolean
    isActive?: boolean
    timezone?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    startTime?: boolean
    endTime?: boolean
    daysOfWeek?: boolean
    isActive?: boolean
    timezone?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    label?: boolean
    startTime?: boolean
    endTime?: boolean
    daysOfWeek?: boolean
    isActive?: boolean
    timezone?: boolean
    userId?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "startTime" | "endTime" | "daysOfWeek" | "isActive" | "timezone" | "userId", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      startTime: string
      endTime: string
      daysOfWeek: number[]
      isActive: boolean
      timezone: string
      userId: string
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly label: FieldRef<"Schedule", 'String'>
    readonly startTime: FieldRef<"Schedule", 'String'>
    readonly endTime: FieldRef<"Schedule", 'String'>
    readonly daysOfWeek: FieldRef<"Schedule", 'Int[]'>
    readonly isActive: FieldRef<"Schedule", 'Boolean'>
    readonly timezone: FieldRef<"Schedule", 'String'>
    readonly userId: FieldRef<"Schedule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    avatar: 'avatar',
    isPremium: 'isPremium',
    createdAt: 'createdAt',
    strictnessLevel: 'strictnessLevel',
    totalFocusSeconds: 'totalFocusSeconds'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OAuthAccountScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    userId: 'userId'
  };

  export type OAuthAccountScalarFieldEnum = (typeof OAuthAccountScalarFieldEnum)[keyof typeof OAuthAccountScalarFieldEnum]


  export const FocusSessionScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    endTime: 'endTime',
    duration: 'duration',
    status: 'status',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type FocusSessionScalarFieldEnum = (typeof FocusSessionScalarFieldEnum)[keyof typeof FocusSessionScalarFieldEnum]


  export const StrictnessScalarFieldEnum: {
    id: 'id',
    maxBreaks: 'maxBreaks',
    baseAdDuration: 'baseAdDuration',
    adIncreasePerBreak: 'adIncreasePerBreak',
    noBreaksAllowed: 'noBreaksAllowed',
    userId: 'userId',
    sessionId: 'sessionId'
  };

  export type StrictnessScalarFieldEnum = (typeof StrictnessScalarFieldEnum)[keyof typeof StrictnessScalarFieldEnum]


  export const BreakScalarFieldEnum: {
    id: 'id',
    takenAt: 'takenAt',
    adDuration: 'adDuration',
    skipped: 'skipped',
    sessionId: 'sessionId'
  };

  export type BreakScalarFieldEnum = (typeof BreakScalarFieldEnum)[keyof typeof BreakScalarFieldEnum]


  export const BlockedAppScalarFieldEnum: {
    id: 'id',
    appName: 'appName',
    browserUrl: 'browserUrl',
    isBlocked: 'isBlocked',
    userId: 'userId'
  };

  export type BlockedAppScalarFieldEnum = (typeof BlockedAppScalarFieldEnum)[keyof typeof BlockedAppScalarFieldEnum]


  export const ThemeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    quoteSet: 'quoteSet',
    exerciseSet: 'exerciseSet',
    isPremiun: 'isPremiun'
  };

  export type ThemeScalarFieldEnum = (typeof ThemeScalarFieldEnum)[keyof typeof ThemeScalarFieldEnum]


  export const UserThemeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    themeId: 'themeId'
  };

  export type UserThemeScalarFieldEnum = (typeof UserThemeScalarFieldEnum)[keyof typeof UserThemeScalarFieldEnum]


  export const YoutubeAllowlistScalarFieldEnum: {
    id: 'id',
    videoId: 'videoId',
    url: 'url',
    title: 'title',
    thumbnail: 'thumbnail',
    addedAt: 'addedAt',
    userId: 'userId'
  };

  export type YoutubeAllowlistScalarFieldEnum = (typeof YoutubeAllowlistScalarFieldEnum)[keyof typeof YoutubeAllowlistScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    condition: 'condition',
    icon: 'icon'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const UserAchievementScalarFieldEnum: {
    id: 'id',
    unlockedAt: 'unlockedAt',
    userId: 'userId',
    achievementId: 'achievementId'
  };

  export type UserAchievementScalarFieldEnum = (typeof UserAchievementScalarFieldEnum)[keyof typeof UserAchievementScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    label: 'label',
    startTime: 'startTime',
    endTime: 'endTime',
    daysOfWeek: 'daysOfWeek',
    isActive: 'isActive',
    timezone: 'timezone',
    userId: 'userId'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    isPremium?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    strictnessLevel?: IntFilter<"User"> | number
    totalFocusSeconds?: IntFilter<"User"> | number
    oauthAccounts?: OAuthAccountListRelationFilter
    sessions?: FocusSessionListRelationFilter
    blockedApps?: BlockedAppListRelationFilter
    strictness?: XOR<StrictnessNullableScalarRelationFilter, StrictnessWhereInput> | null
    themes?: XOR<UserThemeNullableScalarRelationFilter, UserThemeWhereInput> | null
    youtubeAllowlist?: YoutubeAllowlistListRelationFilter
    achievements?: UserAchievementListRelationFilter
    schedules?: ScheduleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    strictnessLevel?: SortOrder
    totalFocusSeconds?: SortOrder
    oauthAccounts?: OAuthAccountOrderByRelationAggregateInput
    sessions?: FocusSessionOrderByRelationAggregateInput
    blockedApps?: BlockedAppOrderByRelationAggregateInput
    strictness?: StrictnessOrderByWithRelationInput
    themes?: UserThemeOrderByWithRelationInput
    youtubeAllowlist?: YoutubeAllowlistOrderByRelationAggregateInput
    achievements?: UserAchievementOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    isPremium?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    strictnessLevel?: IntFilter<"User"> | number
    totalFocusSeconds?: IntFilter<"User"> | number
    oauthAccounts?: OAuthAccountListRelationFilter
    sessions?: FocusSessionListRelationFilter
    blockedApps?: BlockedAppListRelationFilter
    strictness?: XOR<StrictnessNullableScalarRelationFilter, StrictnessWhereInput> | null
    themes?: XOR<UserThemeNullableScalarRelationFilter, UserThemeWhereInput> | null
    youtubeAllowlist?: YoutubeAllowlistListRelationFilter
    achievements?: UserAchievementListRelationFilter
    schedules?: ScheduleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    strictnessLevel?: SortOrder
    totalFocusSeconds?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    isPremium?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    strictnessLevel?: IntWithAggregatesFilter<"User"> | number
    totalFocusSeconds?: IntWithAggregatesFilter<"User"> | number
  }

  export type OAuthAccountWhereInput = {
    AND?: OAuthAccountWhereInput | OAuthAccountWhereInput[]
    OR?: OAuthAccountWhereInput[]
    NOT?: OAuthAccountWhereInput | OAuthAccountWhereInput[]
    id?: StringFilter<"OAuthAccount"> | string
    provider?: StringFilter<"OAuthAccount"> | string
    providerAccountId?: StringFilter<"OAuthAccount"> | string
    accessToken?: StringNullableFilter<"OAuthAccount"> | string | null
    refreshToken?: StringNullableFilter<"OAuthAccount"> | string | null
    userId?: StringFilter<"OAuthAccount"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OAuthAccountOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OAuthAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: OAuthAccountProviderProviderAccountIdCompoundUniqueInput
    AND?: OAuthAccountWhereInput | OAuthAccountWhereInput[]
    OR?: OAuthAccountWhereInput[]
    NOT?: OAuthAccountWhereInput | OAuthAccountWhereInput[]
    provider?: StringFilter<"OAuthAccount"> | string
    providerAccountId?: StringFilter<"OAuthAccount"> | string
    accessToken?: StringNullableFilter<"OAuthAccount"> | string | null
    refreshToken?: StringNullableFilter<"OAuthAccount"> | string | null
    userId?: StringFilter<"OAuthAccount"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type OAuthAccountOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: OAuthAccountCountOrderByAggregateInput
    _max?: OAuthAccountMaxOrderByAggregateInput
    _min?: OAuthAccountMinOrderByAggregateInput
  }

  export type OAuthAccountScalarWhereWithAggregatesInput = {
    AND?: OAuthAccountScalarWhereWithAggregatesInput | OAuthAccountScalarWhereWithAggregatesInput[]
    OR?: OAuthAccountScalarWhereWithAggregatesInput[]
    NOT?: OAuthAccountScalarWhereWithAggregatesInput | OAuthAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OAuthAccount"> | string
    provider?: StringWithAggregatesFilter<"OAuthAccount"> | string
    providerAccountId?: StringWithAggregatesFilter<"OAuthAccount"> | string
    accessToken?: StringNullableWithAggregatesFilter<"OAuthAccount"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"OAuthAccount"> | string | null
    userId?: StringWithAggregatesFilter<"OAuthAccount"> | string
  }

  export type FocusSessionWhereInput = {
    AND?: FocusSessionWhereInput | FocusSessionWhereInput[]
    OR?: FocusSessionWhereInput[]
    NOT?: FocusSessionWhereInput | FocusSessionWhereInput[]
    id?: StringFilter<"FocusSession"> | string
    startTime?: DateTimeFilter<"FocusSession"> | Date | string
    endTime?: DateTimeNullableFilter<"FocusSession"> | Date | string | null
    duration?: IntNullableFilter<"FocusSession"> | number | null
    status?: EnumSessionStatusFilter<"FocusSession"> | $Enums.SessionStatus
    createdAt?: DateTimeFilter<"FocusSession"> | Date | string
    userId?: StringFilter<"FocusSession"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    breaks?: BreakListRelationFilter
    strictnessOverride?: XOR<StrictnessNullableScalarRelationFilter, StrictnessWhereInput> | null
  }

  export type FocusSessionOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    breaks?: BreakOrderByRelationAggregateInput
    strictnessOverride?: StrictnessOrderByWithRelationInput
  }

  export type FocusSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FocusSessionWhereInput | FocusSessionWhereInput[]
    OR?: FocusSessionWhereInput[]
    NOT?: FocusSessionWhereInput | FocusSessionWhereInput[]
    startTime?: DateTimeFilter<"FocusSession"> | Date | string
    endTime?: DateTimeNullableFilter<"FocusSession"> | Date | string | null
    duration?: IntNullableFilter<"FocusSession"> | number | null
    status?: EnumSessionStatusFilter<"FocusSession"> | $Enums.SessionStatus
    createdAt?: DateTimeFilter<"FocusSession"> | Date | string
    userId?: StringFilter<"FocusSession"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    breaks?: BreakListRelationFilter
    strictnessOverride?: XOR<StrictnessNullableScalarRelationFilter, StrictnessWhereInput> | null
  }, "id">

  export type FocusSessionOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: FocusSessionCountOrderByAggregateInput
    _avg?: FocusSessionAvgOrderByAggregateInput
    _max?: FocusSessionMaxOrderByAggregateInput
    _min?: FocusSessionMinOrderByAggregateInput
    _sum?: FocusSessionSumOrderByAggregateInput
  }

  export type FocusSessionScalarWhereWithAggregatesInput = {
    AND?: FocusSessionScalarWhereWithAggregatesInput | FocusSessionScalarWhereWithAggregatesInput[]
    OR?: FocusSessionScalarWhereWithAggregatesInput[]
    NOT?: FocusSessionScalarWhereWithAggregatesInput | FocusSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FocusSession"> | string
    startTime?: DateTimeWithAggregatesFilter<"FocusSession"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"FocusSession"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"FocusSession"> | number | null
    status?: EnumSessionStatusWithAggregatesFilter<"FocusSession"> | $Enums.SessionStatus
    createdAt?: DateTimeWithAggregatesFilter<"FocusSession"> | Date | string
    userId?: StringWithAggregatesFilter<"FocusSession"> | string
  }

  export type StrictnessWhereInput = {
    AND?: StrictnessWhereInput | StrictnessWhereInput[]
    OR?: StrictnessWhereInput[]
    NOT?: StrictnessWhereInput | StrictnessWhereInput[]
    id?: StringFilter<"Strictness"> | string
    maxBreaks?: IntFilter<"Strictness"> | number
    baseAdDuration?: IntFilter<"Strictness"> | number
    adIncreasePerBreak?: IntFilter<"Strictness"> | number
    noBreaksAllowed?: BoolFilter<"Strictness"> | boolean
    userId?: StringNullableFilter<"Strictness"> | string | null
    sessionId?: StringNullableFilter<"Strictness"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    session?: XOR<FocusSessionNullableScalarRelationFilter, FocusSessionWhereInput> | null
  }

  export type StrictnessOrderByWithRelationInput = {
    id?: SortOrder
    maxBreaks?: SortOrder
    baseAdDuration?: SortOrder
    adIncreasePerBreak?: SortOrder
    noBreaksAllowed?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    session?: FocusSessionOrderByWithRelationInput
  }

  export type StrictnessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    sessionId?: string
    AND?: StrictnessWhereInput | StrictnessWhereInput[]
    OR?: StrictnessWhereInput[]
    NOT?: StrictnessWhereInput | StrictnessWhereInput[]
    maxBreaks?: IntFilter<"Strictness"> | number
    baseAdDuration?: IntFilter<"Strictness"> | number
    adIncreasePerBreak?: IntFilter<"Strictness"> | number
    noBreaksAllowed?: BoolFilter<"Strictness"> | boolean
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    session?: XOR<FocusSessionNullableScalarRelationFilter, FocusSessionWhereInput> | null
  }, "id" | "userId" | "sessionId">

  export type StrictnessOrderByWithAggregationInput = {
    id?: SortOrder
    maxBreaks?: SortOrder
    baseAdDuration?: SortOrder
    adIncreasePerBreak?: SortOrder
    noBreaksAllowed?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    _count?: StrictnessCountOrderByAggregateInput
    _avg?: StrictnessAvgOrderByAggregateInput
    _max?: StrictnessMaxOrderByAggregateInput
    _min?: StrictnessMinOrderByAggregateInput
    _sum?: StrictnessSumOrderByAggregateInput
  }

  export type StrictnessScalarWhereWithAggregatesInput = {
    AND?: StrictnessScalarWhereWithAggregatesInput | StrictnessScalarWhereWithAggregatesInput[]
    OR?: StrictnessScalarWhereWithAggregatesInput[]
    NOT?: StrictnessScalarWhereWithAggregatesInput | StrictnessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Strictness"> | string
    maxBreaks?: IntWithAggregatesFilter<"Strictness"> | number
    baseAdDuration?: IntWithAggregatesFilter<"Strictness"> | number
    adIncreasePerBreak?: IntWithAggregatesFilter<"Strictness"> | number
    noBreaksAllowed?: BoolWithAggregatesFilter<"Strictness"> | boolean
    userId?: StringNullableWithAggregatesFilter<"Strictness"> | string | null
    sessionId?: StringNullableWithAggregatesFilter<"Strictness"> | string | null
  }

  export type BreakWhereInput = {
    AND?: BreakWhereInput | BreakWhereInput[]
    OR?: BreakWhereInput[]
    NOT?: BreakWhereInput | BreakWhereInput[]
    id?: StringFilter<"Break"> | string
    takenAt?: DateTimeFilter<"Break"> | Date | string
    adDuration?: IntFilter<"Break"> | number
    skipped?: BoolFilter<"Break"> | boolean
    sessionId?: StringFilter<"Break"> | string
    session?: XOR<FocusSessionScalarRelationFilter, FocusSessionWhereInput>
  }

  export type BreakOrderByWithRelationInput = {
    id?: SortOrder
    takenAt?: SortOrder
    adDuration?: SortOrder
    skipped?: SortOrder
    sessionId?: SortOrder
    session?: FocusSessionOrderByWithRelationInput
  }

  export type BreakWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BreakWhereInput | BreakWhereInput[]
    OR?: BreakWhereInput[]
    NOT?: BreakWhereInput | BreakWhereInput[]
    takenAt?: DateTimeFilter<"Break"> | Date | string
    adDuration?: IntFilter<"Break"> | number
    skipped?: BoolFilter<"Break"> | boolean
    sessionId?: StringFilter<"Break"> | string
    session?: XOR<FocusSessionScalarRelationFilter, FocusSessionWhereInput>
  }, "id">

  export type BreakOrderByWithAggregationInput = {
    id?: SortOrder
    takenAt?: SortOrder
    adDuration?: SortOrder
    skipped?: SortOrder
    sessionId?: SortOrder
    _count?: BreakCountOrderByAggregateInput
    _avg?: BreakAvgOrderByAggregateInput
    _max?: BreakMaxOrderByAggregateInput
    _min?: BreakMinOrderByAggregateInput
    _sum?: BreakSumOrderByAggregateInput
  }

  export type BreakScalarWhereWithAggregatesInput = {
    AND?: BreakScalarWhereWithAggregatesInput | BreakScalarWhereWithAggregatesInput[]
    OR?: BreakScalarWhereWithAggregatesInput[]
    NOT?: BreakScalarWhereWithAggregatesInput | BreakScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Break"> | string
    takenAt?: DateTimeWithAggregatesFilter<"Break"> | Date | string
    adDuration?: IntWithAggregatesFilter<"Break"> | number
    skipped?: BoolWithAggregatesFilter<"Break"> | boolean
    sessionId?: StringWithAggregatesFilter<"Break"> | string
  }

  export type BlockedAppWhereInput = {
    AND?: BlockedAppWhereInput | BlockedAppWhereInput[]
    OR?: BlockedAppWhereInput[]
    NOT?: BlockedAppWhereInput | BlockedAppWhereInput[]
    id?: StringFilter<"BlockedApp"> | string
    appName?: StringFilter<"BlockedApp"> | string
    browserUrl?: StringNullableFilter<"BlockedApp"> | string | null
    isBlocked?: BoolFilter<"BlockedApp"> | boolean
    userId?: StringFilter<"BlockedApp"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BlockedAppOrderByWithRelationInput = {
    id?: SortOrder
    appName?: SortOrder
    browserUrl?: SortOrderInput | SortOrder
    isBlocked?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BlockedAppWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_appName?: BlockedAppUserIdAppNameCompoundUniqueInput
    AND?: BlockedAppWhereInput | BlockedAppWhereInput[]
    OR?: BlockedAppWhereInput[]
    NOT?: BlockedAppWhereInput | BlockedAppWhereInput[]
    appName?: StringFilter<"BlockedApp"> | string
    browserUrl?: StringNullableFilter<"BlockedApp"> | string | null
    isBlocked?: BoolFilter<"BlockedApp"> | boolean
    userId?: StringFilter<"BlockedApp"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_appName">

  export type BlockedAppOrderByWithAggregationInput = {
    id?: SortOrder
    appName?: SortOrder
    browserUrl?: SortOrderInput | SortOrder
    isBlocked?: SortOrder
    userId?: SortOrder
    _count?: BlockedAppCountOrderByAggregateInput
    _max?: BlockedAppMaxOrderByAggregateInput
    _min?: BlockedAppMinOrderByAggregateInput
  }

  export type BlockedAppScalarWhereWithAggregatesInput = {
    AND?: BlockedAppScalarWhereWithAggregatesInput | BlockedAppScalarWhereWithAggregatesInput[]
    OR?: BlockedAppScalarWhereWithAggregatesInput[]
    NOT?: BlockedAppScalarWhereWithAggregatesInput | BlockedAppScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlockedApp"> | string
    appName?: StringWithAggregatesFilter<"BlockedApp"> | string
    browserUrl?: StringNullableWithAggregatesFilter<"BlockedApp"> | string | null
    isBlocked?: BoolWithAggregatesFilter<"BlockedApp"> | boolean
    userId?: StringWithAggregatesFilter<"BlockedApp"> | string
  }

  export type ThemeWhereInput = {
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    id?: StringFilter<"Theme"> | string
    name?: StringFilter<"Theme"> | string
    description?: StringNullableFilter<"Theme"> | string | null
    quoteSet?: StringNullableListFilter<"Theme">
    exerciseSet?: StringNullableListFilter<"Theme">
    isPremiun?: BoolFilter<"Theme"> | boolean
    userThemes?: UserThemeListRelationFilter
  }

  export type ThemeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    quoteSet?: SortOrder
    exerciseSet?: SortOrder
    isPremiun?: SortOrder
    userThemes?: UserThemeOrderByRelationAggregateInput
  }

  export type ThemeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    description?: StringNullableFilter<"Theme"> | string | null
    quoteSet?: StringNullableListFilter<"Theme">
    exerciseSet?: StringNullableListFilter<"Theme">
    isPremiun?: BoolFilter<"Theme"> | boolean
    userThemes?: UserThemeListRelationFilter
  }, "id" | "name">

  export type ThemeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    quoteSet?: SortOrder
    exerciseSet?: SortOrder
    isPremiun?: SortOrder
    _count?: ThemeCountOrderByAggregateInput
    _max?: ThemeMaxOrderByAggregateInput
    _min?: ThemeMinOrderByAggregateInput
  }

  export type ThemeScalarWhereWithAggregatesInput = {
    AND?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    OR?: ThemeScalarWhereWithAggregatesInput[]
    NOT?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Theme"> | string
    name?: StringWithAggregatesFilter<"Theme"> | string
    description?: StringNullableWithAggregatesFilter<"Theme"> | string | null
    quoteSet?: StringNullableListFilter<"Theme">
    exerciseSet?: StringNullableListFilter<"Theme">
    isPremiun?: BoolWithAggregatesFilter<"Theme"> | boolean
  }

  export type UserThemeWhereInput = {
    AND?: UserThemeWhereInput | UserThemeWhereInput[]
    OR?: UserThemeWhereInput[]
    NOT?: UserThemeWhereInput | UserThemeWhereInput[]
    id?: StringFilter<"UserTheme"> | string
    userId?: StringFilter<"UserTheme"> | string
    themeId?: StringFilter<"UserTheme"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    theme?: XOR<ThemeScalarRelationFilter, ThemeWhereInput>
  }

  export type UserThemeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    themeId?: SortOrder
    user?: UserOrderByWithRelationInput
    theme?: ThemeOrderByWithRelationInput
  }

  export type UserThemeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserThemeWhereInput | UserThemeWhereInput[]
    OR?: UserThemeWhereInput[]
    NOT?: UserThemeWhereInput | UserThemeWhereInput[]
    themeId?: StringFilter<"UserTheme"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    theme?: XOR<ThemeScalarRelationFilter, ThemeWhereInput>
  }, "id" | "userId">

  export type UserThemeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    themeId?: SortOrder
    _count?: UserThemeCountOrderByAggregateInput
    _max?: UserThemeMaxOrderByAggregateInput
    _min?: UserThemeMinOrderByAggregateInput
  }

  export type UserThemeScalarWhereWithAggregatesInput = {
    AND?: UserThemeScalarWhereWithAggregatesInput | UserThemeScalarWhereWithAggregatesInput[]
    OR?: UserThemeScalarWhereWithAggregatesInput[]
    NOT?: UserThemeScalarWhereWithAggregatesInput | UserThemeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserTheme"> | string
    userId?: StringWithAggregatesFilter<"UserTheme"> | string
    themeId?: StringWithAggregatesFilter<"UserTheme"> | string
  }

  export type YoutubeAllowlistWhereInput = {
    AND?: YoutubeAllowlistWhereInput | YoutubeAllowlistWhereInput[]
    OR?: YoutubeAllowlistWhereInput[]
    NOT?: YoutubeAllowlistWhereInput | YoutubeAllowlistWhereInput[]
    id?: StringFilter<"YoutubeAllowlist"> | string
    videoId?: StringFilter<"YoutubeAllowlist"> | string
    url?: StringFilter<"YoutubeAllowlist"> | string
    title?: StringNullableFilter<"YoutubeAllowlist"> | string | null
    thumbnail?: StringNullableFilter<"YoutubeAllowlist"> | string | null
    addedAt?: DateTimeFilter<"YoutubeAllowlist"> | Date | string
    userId?: StringFilter<"YoutubeAllowlist"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type YoutubeAllowlistOrderByWithRelationInput = {
    id?: SortOrder
    videoId?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    addedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type YoutubeAllowlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_videoId?: YoutubeAllowlistUserIdVideoIdCompoundUniqueInput
    AND?: YoutubeAllowlistWhereInput | YoutubeAllowlistWhereInput[]
    OR?: YoutubeAllowlistWhereInput[]
    NOT?: YoutubeAllowlistWhereInput | YoutubeAllowlistWhereInput[]
    videoId?: StringFilter<"YoutubeAllowlist"> | string
    url?: StringFilter<"YoutubeAllowlist"> | string
    title?: StringNullableFilter<"YoutubeAllowlist"> | string | null
    thumbnail?: StringNullableFilter<"YoutubeAllowlist"> | string | null
    addedAt?: DateTimeFilter<"YoutubeAllowlist"> | Date | string
    userId?: StringFilter<"YoutubeAllowlist"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_videoId">

  export type YoutubeAllowlistOrderByWithAggregationInput = {
    id?: SortOrder
    videoId?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    addedAt?: SortOrder
    userId?: SortOrder
    _count?: YoutubeAllowlistCountOrderByAggregateInput
    _max?: YoutubeAllowlistMaxOrderByAggregateInput
    _min?: YoutubeAllowlistMinOrderByAggregateInput
  }

  export type YoutubeAllowlistScalarWhereWithAggregatesInput = {
    AND?: YoutubeAllowlistScalarWhereWithAggregatesInput | YoutubeAllowlistScalarWhereWithAggregatesInput[]
    OR?: YoutubeAllowlistScalarWhereWithAggregatesInput[]
    NOT?: YoutubeAllowlistScalarWhereWithAggregatesInput | YoutubeAllowlistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"YoutubeAllowlist"> | string
    videoId?: StringWithAggregatesFilter<"YoutubeAllowlist"> | string
    url?: StringWithAggregatesFilter<"YoutubeAllowlist"> | string
    title?: StringNullableWithAggregatesFilter<"YoutubeAllowlist"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"YoutubeAllowlist"> | string | null
    addedAt?: DateTimeWithAggregatesFilter<"YoutubeAllowlist"> | Date | string
    userId?: StringWithAggregatesFilter<"YoutubeAllowlist"> | string
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: StringFilter<"Achievement"> | string
    name?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    condition?: StringFilter<"Achievement"> | string
    icon?: StringNullableFilter<"Achievement"> | string | null
    userAchievements?: UserAchievementListRelationFilter
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    condition?: SortOrder
    icon?: SortOrderInput | SortOrder
    userAchievements?: UserAchievementOrderByRelationAggregateInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    description?: StringFilter<"Achievement"> | string
    condition?: StringFilter<"Achievement"> | string
    icon?: StringNullableFilter<"Achievement"> | string | null
    userAchievements?: UserAchievementListRelationFilter
  }, "id" | "name">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    condition?: SortOrder
    icon?: SortOrderInput | SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Achievement"> | string
    name?: StringWithAggregatesFilter<"Achievement"> | string
    description?: StringWithAggregatesFilter<"Achievement"> | string
    condition?: StringWithAggregatesFilter<"Achievement"> | string
    icon?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
  }

  export type UserAchievementWhereInput = {
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    id?: StringFilter<"UserAchievement"> | string
    unlockedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    userId?: StringFilter<"UserAchievement"> | string
    achievementId?: StringFilter<"UserAchievement"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>
  }

  export type UserAchievementOrderByWithRelationInput = {
    id?: SortOrder
    unlockedAt?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    user?: UserOrderByWithRelationInput
    achievement?: AchievementOrderByWithRelationInput
  }

  export type UserAchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_achievementId?: UserAchievementUserIdAchievementIdCompoundUniqueInput
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    unlockedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    userId?: StringFilter<"UserAchievement"> | string
    achievementId?: StringFilter<"UserAchievement"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>
  }, "id" | "userId_achievementId">

  export type UserAchievementOrderByWithAggregationInput = {
    id?: SortOrder
    unlockedAt?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    _count?: UserAchievementCountOrderByAggregateInput
    _max?: UserAchievementMaxOrderByAggregateInput
    _min?: UserAchievementMinOrderByAggregateInput
  }

  export type UserAchievementScalarWhereWithAggregatesInput = {
    AND?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    OR?: UserAchievementScalarWhereWithAggregatesInput[]
    NOT?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAchievement"> | string
    unlockedAt?: DateTimeWithAggregatesFilter<"UserAchievement"> | Date | string
    userId?: StringWithAggregatesFilter<"UserAchievement"> | string
    achievementId?: StringWithAggregatesFilter<"UserAchievement"> | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    label?: StringFilter<"Schedule"> | string
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    daysOfWeek?: IntNullableListFilter<"Schedule">
    isActive?: BoolFilter<"Schedule"> | boolean
    timezone?: StringFilter<"Schedule"> | string
    userId?: StringFilter<"Schedule"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    daysOfWeek?: SortOrder
    isActive?: SortOrder
    timezone?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    label?: StringFilter<"Schedule"> | string
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    daysOfWeek?: IntNullableListFilter<"Schedule">
    isActive?: BoolFilter<"Schedule"> | boolean
    timezone?: StringFilter<"Schedule"> | string
    userId?: StringFilter<"Schedule"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    daysOfWeek?: SortOrder
    isActive?: SortOrder
    timezone?: SortOrder
    userId?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    label?: StringWithAggregatesFilter<"Schedule"> | string
    startTime?: StringWithAggregatesFilter<"Schedule"> | string
    endTime?: StringWithAggregatesFilter<"Schedule"> | string
    daysOfWeek?: IntNullableListFilter<"Schedule">
    isActive?: BoolWithAggregatesFilter<"Schedule"> | boolean
    timezone?: StringWithAggregatesFilter<"Schedule"> | string
    userId?: StringWithAggregatesFilter<"Schedule"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
    sessions?: FocusSessionCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppCreateNestedManyWithoutUserInput
    strictness?: StrictnessCreateNestedOneWithoutUserInput
    themes?: UserThemeCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppUncheckedCreateNestedManyWithoutUserInput
    strictness?: StrictnessUncheckedCreateNestedOneWithoutUserInput
    themes?: UserThemeUncheckedCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
    sessions?: FocusSessionUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUpdateOneWithoutUserNestedInput
    themes?: UserThemeUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUncheckedUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUncheckedUpdateOneWithoutUserNestedInput
    themes?: UserThemeUncheckedUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthAccountCreateInput = {
    id?: string
    provider: string
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
    user: UserCreateNestedOneWithoutOauthAccountsInput
  }

  export type OAuthAccountUncheckedCreateInput = {
    id?: string
    provider: string
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
    userId: string
  }

  export type OAuthAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutOauthAccountsNestedInput
  }

  export type OAuthAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OAuthAccountCreateManyInput = {
    id?: string
    provider: string
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
    userId: string
  }

  export type OAuthAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OAuthAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FocusSessionCreateInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
    breaks?: BreakCreateNestedManyWithoutSessionInput
    strictnessOverride?: StrictnessCreateNestedOneWithoutSessionInput
  }

  export type FocusSessionUncheckedCreateInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    userId: string
    breaks?: BreakUncheckedCreateNestedManyWithoutSessionInput
    strictnessOverride?: StrictnessUncheckedCreateNestedOneWithoutSessionInput
  }

  export type FocusSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    breaks?: BreakUpdateManyWithoutSessionNestedInput
    strictnessOverride?: StrictnessUpdateOneWithoutSessionNestedInput
  }

  export type FocusSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    breaks?: BreakUncheckedUpdateManyWithoutSessionNestedInput
    strictnessOverride?: StrictnessUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type FocusSessionCreateManyInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    userId: string
  }

  export type FocusSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StrictnessCreateInput = {
    id?: string
    maxBreaks?: number
    baseAdDuration?: number
    adIncreasePerBreak?: number
    noBreaksAllowed?: boolean
    user?: UserCreateNestedOneWithoutStrictnessInput
    session?: FocusSessionCreateNestedOneWithoutStrictnessOverrideInput
  }

  export type StrictnessUncheckedCreateInput = {
    id?: string
    maxBreaks?: number
    baseAdDuration?: number
    adIncreasePerBreak?: number
    noBreaksAllowed?: boolean
    userId?: string | null
    sessionId?: string | null
  }

  export type StrictnessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxBreaks?: IntFieldUpdateOperationsInput | number
    baseAdDuration?: IntFieldUpdateOperationsInput | number
    adIncreasePerBreak?: IntFieldUpdateOperationsInput | number
    noBreaksAllowed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutStrictnessNestedInput
    session?: FocusSessionUpdateOneWithoutStrictnessOverrideNestedInput
  }

  export type StrictnessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxBreaks?: IntFieldUpdateOperationsInput | number
    baseAdDuration?: IntFieldUpdateOperationsInput | number
    adIncreasePerBreak?: IntFieldUpdateOperationsInput | number
    noBreaksAllowed?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StrictnessCreateManyInput = {
    id?: string
    maxBreaks?: number
    baseAdDuration?: number
    adIncreasePerBreak?: number
    noBreaksAllowed?: boolean
    userId?: string | null
    sessionId?: string | null
  }

  export type StrictnessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxBreaks?: IntFieldUpdateOperationsInput | number
    baseAdDuration?: IntFieldUpdateOperationsInput | number
    adIncreasePerBreak?: IntFieldUpdateOperationsInput | number
    noBreaksAllowed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StrictnessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxBreaks?: IntFieldUpdateOperationsInput | number
    baseAdDuration?: IntFieldUpdateOperationsInput | number
    adIncreasePerBreak?: IntFieldUpdateOperationsInput | number
    noBreaksAllowed?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BreakCreateInput = {
    id?: string
    takenAt?: Date | string
    adDuration: number
    skipped?: boolean
    session: FocusSessionCreateNestedOneWithoutBreaksInput
  }

  export type BreakUncheckedCreateInput = {
    id?: string
    takenAt?: Date | string
    adDuration: number
    skipped?: boolean
    sessionId: string
  }

  export type BreakUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adDuration?: IntFieldUpdateOperationsInput | number
    skipped?: BoolFieldUpdateOperationsInput | boolean
    session?: FocusSessionUpdateOneRequiredWithoutBreaksNestedInput
  }

  export type BreakUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adDuration?: IntFieldUpdateOperationsInput | number
    skipped?: BoolFieldUpdateOperationsInput | boolean
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type BreakCreateManyInput = {
    id?: string
    takenAt?: Date | string
    adDuration: number
    skipped?: boolean
    sessionId: string
  }

  export type BreakUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adDuration?: IntFieldUpdateOperationsInput | number
    skipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BreakUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adDuration?: IntFieldUpdateOperationsInput | number
    skipped?: BoolFieldUpdateOperationsInput | boolean
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type BlockedAppCreateInput = {
    id?: string
    appName: string
    browserUrl?: string | null
    isBlocked?: boolean
    user: UserCreateNestedOneWithoutBlockedAppsInput
  }

  export type BlockedAppUncheckedCreateInput = {
    id?: string
    appName: string
    browserUrl?: string | null
    isBlocked?: boolean
    userId: string
  }

  export type BlockedAppUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appName?: StringFieldUpdateOperationsInput | string
    browserUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutBlockedAppsNestedInput
  }

  export type BlockedAppUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appName?: StringFieldUpdateOperationsInput | string
    browserUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BlockedAppCreateManyInput = {
    id?: string
    appName: string
    browserUrl?: string | null
    isBlocked?: boolean
    userId: string
  }

  export type BlockedAppUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appName?: StringFieldUpdateOperationsInput | string
    browserUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockedAppUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appName?: StringFieldUpdateOperationsInput | string
    browserUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ThemeCreateInput = {
    id?: string
    name: string
    description?: string | null
    quoteSet?: ThemeCreatequoteSetInput | string[]
    exerciseSet?: ThemeCreateexerciseSetInput | string[]
    isPremiun?: boolean
    userThemes?: UserThemeCreateNestedManyWithoutThemeInput
  }

  export type ThemeUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    quoteSet?: ThemeCreatequoteSetInput | string[]
    exerciseSet?: ThemeCreateexerciseSetInput | string[]
    isPremiun?: boolean
    userThemes?: UserThemeUncheckedCreateNestedManyWithoutThemeInput
  }

  export type ThemeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quoteSet?: ThemeUpdatequoteSetInput | string[]
    exerciseSet?: ThemeUpdateexerciseSetInput | string[]
    isPremiun?: BoolFieldUpdateOperationsInput | boolean
    userThemes?: UserThemeUpdateManyWithoutThemeNestedInput
  }

  export type ThemeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quoteSet?: ThemeUpdatequoteSetInput | string[]
    exerciseSet?: ThemeUpdateexerciseSetInput | string[]
    isPremiun?: BoolFieldUpdateOperationsInput | boolean
    userThemes?: UserThemeUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type ThemeCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    quoteSet?: ThemeCreatequoteSetInput | string[]
    exerciseSet?: ThemeCreateexerciseSetInput | string[]
    isPremiun?: boolean
  }

  export type ThemeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quoteSet?: ThemeUpdatequoteSetInput | string[]
    exerciseSet?: ThemeUpdateexerciseSetInput | string[]
    isPremiun?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThemeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quoteSet?: ThemeUpdatequoteSetInput | string[]
    exerciseSet?: ThemeUpdateexerciseSetInput | string[]
    isPremiun?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserThemeCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutThemesInput
    theme: ThemeCreateNestedOneWithoutUserThemesInput
  }

  export type UserThemeUncheckedCreateInput = {
    id?: string
    userId: string
    themeId: string
  }

  export type UserThemeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutThemesNestedInput
    theme?: ThemeUpdateOneRequiredWithoutUserThemesNestedInput
  }

  export type UserThemeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    themeId?: StringFieldUpdateOperationsInput | string
  }

  export type UserThemeCreateManyInput = {
    id?: string
    userId: string
    themeId: string
  }

  export type UserThemeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserThemeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    themeId?: StringFieldUpdateOperationsInput | string
  }

  export type YoutubeAllowlistCreateInput = {
    id?: string
    videoId: string
    url: string
    title?: string | null
    thumbnail?: string | null
    addedAt?: Date | string
    user: UserCreateNestedOneWithoutYoutubeAllowlistInput
  }

  export type YoutubeAllowlistUncheckedCreateInput = {
    id?: string
    videoId: string
    url: string
    title?: string | null
    thumbnail?: string | null
    addedAt?: Date | string
    userId: string
  }

  export type YoutubeAllowlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutYoutubeAllowlistNestedInput
  }

  export type YoutubeAllowlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type YoutubeAllowlistCreateManyInput = {
    id?: string
    videoId: string
    url: string
    title?: string | null
    thumbnail?: string | null
    addedAt?: Date | string
    userId: string
  }

  export type YoutubeAllowlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YoutubeAllowlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AchievementCreateInput = {
    id?: string
    name: string
    description: string
    condition: string
    icon?: string | null
    userAchievements?: UserAchievementCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    condition: string
    icon?: string | null
    userAchievements?: UserAchievementUncheckedCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    userAchievements?: UserAchievementUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    userAchievements?: UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementCreateManyInput = {
    id?: string
    name: string
    description: string
    condition: string
    icon?: string | null
  }

  export type AchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserAchievementCreateInput = {
    id?: string
    unlockedAt?: Date | string
    user: UserCreateNestedOneWithoutAchievementsInput
    achievement: AchievementCreateNestedOneWithoutUserAchievementsInput
  }

  export type UserAchievementUncheckedCreateInput = {
    id?: string
    unlockedAt?: Date | string
    userId: string
    achievementId: string
  }

  export type UserAchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAchievementsNestedInput
    achievement?: AchievementUpdateOneRequiredWithoutUserAchievementsNestedInput
  }

  export type UserAchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
  }

  export type UserAchievementCreateManyInput = {
    id?: string
    unlockedAt?: Date | string
    userId: string
    achievementId: string
  }

  export type UserAchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleCreateInput = {
    id?: string
    label: string
    startTime: string
    endTime: string
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isActive?: boolean
    timezone?: string
    user: UserCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    label: string
    startTime: string
    endTime: string
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isActive?: boolean
    timezone?: string
    userId: string
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleCreateManyInput = {
    id?: string
    label: string
    startTime: string
    endTime: string
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isActive?: boolean
    timezone?: string
    userId: string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type OAuthAccountListRelationFilter = {
    every?: OAuthAccountWhereInput
    some?: OAuthAccountWhereInput
    none?: OAuthAccountWhereInput
  }

  export type FocusSessionListRelationFilter = {
    every?: FocusSessionWhereInput
    some?: FocusSessionWhereInput
    none?: FocusSessionWhereInput
  }

  export type BlockedAppListRelationFilter = {
    every?: BlockedAppWhereInput
    some?: BlockedAppWhereInput
    none?: BlockedAppWhereInput
  }

  export type StrictnessNullableScalarRelationFilter = {
    is?: StrictnessWhereInput | null
    isNot?: StrictnessWhereInput | null
  }

  export type UserThemeNullableScalarRelationFilter = {
    is?: UserThemeWhereInput | null
    isNot?: UserThemeWhereInput | null
  }

  export type YoutubeAllowlistListRelationFilter = {
    every?: YoutubeAllowlistWhereInput
    some?: YoutubeAllowlistWhereInput
    none?: YoutubeAllowlistWhereInput
  }

  export type UserAchievementListRelationFilter = {
    every?: UserAchievementWhereInput
    some?: UserAchievementWhereInput
    none?: UserAchievementWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OAuthAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FocusSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockedAppOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type YoutubeAllowlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    strictnessLevel?: SortOrder
    totalFocusSeconds?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    strictnessLevel?: SortOrder
    totalFocusSeconds?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    strictnessLevel?: SortOrder
    totalFocusSeconds?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    strictnessLevel?: SortOrder
    totalFocusSeconds?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    strictnessLevel?: SortOrder
    totalFocusSeconds?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OAuthAccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type OAuthAccountCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
  }

  export type OAuthAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
  }

  export type OAuthAccountMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type BreakListRelationFilter = {
    every?: BreakWhereInput
    some?: BreakWhereInput
    none?: BreakWhereInput
  }

  export type BreakOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FocusSessionCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type FocusSessionAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type FocusSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type FocusSessionMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type FocusSessionSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type FocusSessionNullableScalarRelationFilter = {
    is?: FocusSessionWhereInput | null
    isNot?: FocusSessionWhereInput | null
  }

  export type StrictnessCountOrderByAggregateInput = {
    id?: SortOrder
    maxBreaks?: SortOrder
    baseAdDuration?: SortOrder
    adIncreasePerBreak?: SortOrder
    noBreaksAllowed?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
  }

  export type StrictnessAvgOrderByAggregateInput = {
    maxBreaks?: SortOrder
    baseAdDuration?: SortOrder
    adIncreasePerBreak?: SortOrder
  }

  export type StrictnessMaxOrderByAggregateInput = {
    id?: SortOrder
    maxBreaks?: SortOrder
    baseAdDuration?: SortOrder
    adIncreasePerBreak?: SortOrder
    noBreaksAllowed?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
  }

  export type StrictnessMinOrderByAggregateInput = {
    id?: SortOrder
    maxBreaks?: SortOrder
    baseAdDuration?: SortOrder
    adIncreasePerBreak?: SortOrder
    noBreaksAllowed?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
  }

  export type StrictnessSumOrderByAggregateInput = {
    maxBreaks?: SortOrder
    baseAdDuration?: SortOrder
    adIncreasePerBreak?: SortOrder
  }

  export type FocusSessionScalarRelationFilter = {
    is?: FocusSessionWhereInput
    isNot?: FocusSessionWhereInput
  }

  export type BreakCountOrderByAggregateInput = {
    id?: SortOrder
    takenAt?: SortOrder
    adDuration?: SortOrder
    skipped?: SortOrder
    sessionId?: SortOrder
  }

  export type BreakAvgOrderByAggregateInput = {
    adDuration?: SortOrder
  }

  export type BreakMaxOrderByAggregateInput = {
    id?: SortOrder
    takenAt?: SortOrder
    adDuration?: SortOrder
    skipped?: SortOrder
    sessionId?: SortOrder
  }

  export type BreakMinOrderByAggregateInput = {
    id?: SortOrder
    takenAt?: SortOrder
    adDuration?: SortOrder
    skipped?: SortOrder
    sessionId?: SortOrder
  }

  export type BreakSumOrderByAggregateInput = {
    adDuration?: SortOrder
  }

  export type BlockedAppUserIdAppNameCompoundUniqueInput = {
    userId: string
    appName: string
  }

  export type BlockedAppCountOrderByAggregateInput = {
    id?: SortOrder
    appName?: SortOrder
    browserUrl?: SortOrder
    isBlocked?: SortOrder
    userId?: SortOrder
  }

  export type BlockedAppMaxOrderByAggregateInput = {
    id?: SortOrder
    appName?: SortOrder
    browserUrl?: SortOrder
    isBlocked?: SortOrder
    userId?: SortOrder
  }

  export type BlockedAppMinOrderByAggregateInput = {
    id?: SortOrder
    appName?: SortOrder
    browserUrl?: SortOrder
    isBlocked?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserThemeListRelationFilter = {
    every?: UserThemeWhereInput
    some?: UserThemeWhereInput
    none?: UserThemeWhereInput
  }

  export type UserThemeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThemeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quoteSet?: SortOrder
    exerciseSet?: SortOrder
    isPremiun?: SortOrder
  }

  export type ThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPremiun?: SortOrder
  }

  export type ThemeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPremiun?: SortOrder
  }

  export type ThemeScalarRelationFilter = {
    is?: ThemeWhereInput
    isNot?: ThemeWhereInput
  }

  export type UserThemeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    themeId?: SortOrder
  }

  export type UserThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    themeId?: SortOrder
  }

  export type UserThemeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    themeId?: SortOrder
  }

  export type YoutubeAllowlistUserIdVideoIdCompoundUniqueInput = {
    userId: string
    videoId: string
  }

  export type YoutubeAllowlistCountOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    addedAt?: SortOrder
    userId?: SortOrder
  }

  export type YoutubeAllowlistMaxOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    addedAt?: SortOrder
    userId?: SortOrder
  }

  export type YoutubeAllowlistMinOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    addedAt?: SortOrder
    userId?: SortOrder
  }

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    condition?: SortOrder
    icon?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    condition?: SortOrder
    icon?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    condition?: SortOrder
    icon?: SortOrder
  }

  export type AchievementScalarRelationFilter = {
    is?: AchievementWhereInput
    isNot?: AchievementWhereInput
  }

  export type UserAchievementUserIdAchievementIdCompoundUniqueInput = {
    userId: string
    achievementId: string
  }

  export type UserAchievementCountOrderByAggregateInput = {
    id?: SortOrder
    unlockedAt?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
  }

  export type UserAchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    unlockedAt?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
  }

  export type UserAchievementMinOrderByAggregateInput = {
    id?: SortOrder
    unlockedAt?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    daysOfWeek?: SortOrder
    isActive?: SortOrder
    timezone?: SortOrder
    userId?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    daysOfWeek?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    timezone?: SortOrder
    userId?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    timezone?: SortOrder
    userId?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    daysOfWeek?: SortOrder
  }

  export type OAuthAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput> | OAuthAccountCreateWithoutUserInput[] | OAuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccountCreateOrConnectWithoutUserInput | OAuthAccountCreateOrConnectWithoutUserInput[]
    createMany?: OAuthAccountCreateManyUserInputEnvelope
    connect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
  }

  export type FocusSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput> | FocusSessionCreateWithoutUserInput[] | FocusSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutUserInput | FocusSessionCreateOrConnectWithoutUserInput[]
    createMany?: FocusSessionCreateManyUserInputEnvelope
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
  }

  export type BlockedAppCreateNestedManyWithoutUserInput = {
    create?: XOR<BlockedAppCreateWithoutUserInput, BlockedAppUncheckedCreateWithoutUserInput> | BlockedAppCreateWithoutUserInput[] | BlockedAppUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlockedAppCreateOrConnectWithoutUserInput | BlockedAppCreateOrConnectWithoutUserInput[]
    createMany?: BlockedAppCreateManyUserInputEnvelope
    connect?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
  }

  export type StrictnessCreateNestedOneWithoutUserInput = {
    create?: XOR<StrictnessCreateWithoutUserInput, StrictnessUncheckedCreateWithoutUserInput>
    connectOrCreate?: StrictnessCreateOrConnectWithoutUserInput
    connect?: StrictnessWhereUniqueInput
  }

  export type UserThemeCreateNestedOneWithoutUserInput = {
    create?: XOR<UserThemeCreateWithoutUserInput, UserThemeUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserThemeCreateOrConnectWithoutUserInput
    connect?: UserThemeWhereUniqueInput
  }

  export type YoutubeAllowlistCreateNestedManyWithoutUserInput = {
    create?: XOR<YoutubeAllowlistCreateWithoutUserInput, YoutubeAllowlistUncheckedCreateWithoutUserInput> | YoutubeAllowlistCreateWithoutUserInput[] | YoutubeAllowlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YoutubeAllowlistCreateOrConnectWithoutUserInput | YoutubeAllowlistCreateOrConnectWithoutUserInput[]
    createMany?: YoutubeAllowlistCreateManyUserInputEnvelope
    connect?: YoutubeAllowlistWhereUniqueInput | YoutubeAllowlistWhereUniqueInput[]
  }

  export type UserAchievementCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutUserInput = {
    create?: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput> | ScheduleCreateWithoutUserInput[] | ScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutUserInput | ScheduleCreateOrConnectWithoutUserInput[]
    createMany?: ScheduleCreateManyUserInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type OAuthAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput> | OAuthAccountCreateWithoutUserInput[] | OAuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccountCreateOrConnectWithoutUserInput | OAuthAccountCreateOrConnectWithoutUserInput[]
    createMany?: OAuthAccountCreateManyUserInputEnvelope
    connect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
  }

  export type FocusSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput> | FocusSessionCreateWithoutUserInput[] | FocusSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutUserInput | FocusSessionCreateOrConnectWithoutUserInput[]
    createMany?: FocusSessionCreateManyUserInputEnvelope
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
  }

  export type BlockedAppUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlockedAppCreateWithoutUserInput, BlockedAppUncheckedCreateWithoutUserInput> | BlockedAppCreateWithoutUserInput[] | BlockedAppUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlockedAppCreateOrConnectWithoutUserInput | BlockedAppCreateOrConnectWithoutUserInput[]
    createMany?: BlockedAppCreateManyUserInputEnvelope
    connect?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
  }

  export type StrictnessUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StrictnessCreateWithoutUserInput, StrictnessUncheckedCreateWithoutUserInput>
    connectOrCreate?: StrictnessCreateOrConnectWithoutUserInput
    connect?: StrictnessWhereUniqueInput
  }

  export type UserThemeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserThemeCreateWithoutUserInput, UserThemeUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserThemeCreateOrConnectWithoutUserInput
    connect?: UserThemeWhereUniqueInput
  }

  export type YoutubeAllowlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<YoutubeAllowlistCreateWithoutUserInput, YoutubeAllowlistUncheckedCreateWithoutUserInput> | YoutubeAllowlistCreateWithoutUserInput[] | YoutubeAllowlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YoutubeAllowlistCreateOrConnectWithoutUserInput | YoutubeAllowlistCreateOrConnectWithoutUserInput[]
    createMany?: YoutubeAllowlistCreateManyUserInputEnvelope
    connect?: YoutubeAllowlistWhereUniqueInput | YoutubeAllowlistWhereUniqueInput[]
  }

  export type UserAchievementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput> | ScheduleCreateWithoutUserInput[] | ScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutUserInput | ScheduleCreateOrConnectWithoutUserInput[]
    createMany?: ScheduleCreateManyUserInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OAuthAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput> | OAuthAccountCreateWithoutUserInput[] | OAuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccountCreateOrConnectWithoutUserInput | OAuthAccountCreateOrConnectWithoutUserInput[]
    upsert?: OAuthAccountUpsertWithWhereUniqueWithoutUserInput | OAuthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthAccountCreateManyUserInputEnvelope
    set?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    disconnect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    delete?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    connect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    update?: OAuthAccountUpdateWithWhereUniqueWithoutUserInput | OAuthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthAccountUpdateManyWithWhereWithoutUserInput | OAuthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthAccountScalarWhereInput | OAuthAccountScalarWhereInput[]
  }

  export type FocusSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput> | FocusSessionCreateWithoutUserInput[] | FocusSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutUserInput | FocusSessionCreateOrConnectWithoutUserInput[]
    upsert?: FocusSessionUpsertWithWhereUniqueWithoutUserInput | FocusSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FocusSessionCreateManyUserInputEnvelope
    set?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    disconnect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    delete?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    update?: FocusSessionUpdateWithWhereUniqueWithoutUserInput | FocusSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FocusSessionUpdateManyWithWhereWithoutUserInput | FocusSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
  }

  export type BlockedAppUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlockedAppCreateWithoutUserInput, BlockedAppUncheckedCreateWithoutUserInput> | BlockedAppCreateWithoutUserInput[] | BlockedAppUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlockedAppCreateOrConnectWithoutUserInput | BlockedAppCreateOrConnectWithoutUserInput[]
    upsert?: BlockedAppUpsertWithWhereUniqueWithoutUserInput | BlockedAppUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlockedAppCreateManyUserInputEnvelope
    set?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    disconnect?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    delete?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    connect?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    update?: BlockedAppUpdateWithWhereUniqueWithoutUserInput | BlockedAppUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlockedAppUpdateManyWithWhereWithoutUserInput | BlockedAppUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlockedAppScalarWhereInput | BlockedAppScalarWhereInput[]
  }

  export type StrictnessUpdateOneWithoutUserNestedInput = {
    create?: XOR<StrictnessCreateWithoutUserInput, StrictnessUncheckedCreateWithoutUserInput>
    connectOrCreate?: StrictnessCreateOrConnectWithoutUserInput
    upsert?: StrictnessUpsertWithoutUserInput
    disconnect?: StrictnessWhereInput | boolean
    delete?: StrictnessWhereInput | boolean
    connect?: StrictnessWhereUniqueInput
    update?: XOR<XOR<StrictnessUpdateToOneWithWhereWithoutUserInput, StrictnessUpdateWithoutUserInput>, StrictnessUncheckedUpdateWithoutUserInput>
  }

  export type UserThemeUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserThemeCreateWithoutUserInput, UserThemeUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserThemeCreateOrConnectWithoutUserInput
    upsert?: UserThemeUpsertWithoutUserInput
    disconnect?: UserThemeWhereInput | boolean
    delete?: UserThemeWhereInput | boolean
    connect?: UserThemeWhereUniqueInput
    update?: XOR<XOR<UserThemeUpdateToOneWithWhereWithoutUserInput, UserThemeUpdateWithoutUserInput>, UserThemeUncheckedUpdateWithoutUserInput>
  }

  export type YoutubeAllowlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<YoutubeAllowlistCreateWithoutUserInput, YoutubeAllowlistUncheckedCreateWithoutUserInput> | YoutubeAllowlistCreateWithoutUserInput[] | YoutubeAllowlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YoutubeAllowlistCreateOrConnectWithoutUserInput | YoutubeAllowlistCreateOrConnectWithoutUserInput[]
    upsert?: YoutubeAllowlistUpsertWithWhereUniqueWithoutUserInput | YoutubeAllowlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: YoutubeAllowlistCreateManyUserInputEnvelope
    set?: YoutubeAllowlistWhereUniqueInput | YoutubeAllowlistWhereUniqueInput[]
    disconnect?: YoutubeAllowlistWhereUniqueInput | YoutubeAllowlistWhereUniqueInput[]
    delete?: YoutubeAllowlistWhereUniqueInput | YoutubeAllowlistWhereUniqueInput[]
    connect?: YoutubeAllowlistWhereUniqueInput | YoutubeAllowlistWhereUniqueInput[]
    update?: YoutubeAllowlistUpdateWithWhereUniqueWithoutUserInput | YoutubeAllowlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: YoutubeAllowlistUpdateManyWithWhereWithoutUserInput | YoutubeAllowlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: YoutubeAllowlistScalarWhereInput | YoutubeAllowlistScalarWhereInput[]
  }

  export type UserAchievementUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutUserInput | UserAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutUserInput | UserAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutUserInput | UserAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput> | ScheduleCreateWithoutUserInput[] | ScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutUserInput | ScheduleCreateOrConnectWithoutUserInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutUserInput | ScheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScheduleCreateManyUserInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutUserInput | ScheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutUserInput | ScheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type OAuthAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput> | OAuthAccountCreateWithoutUserInput[] | OAuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccountCreateOrConnectWithoutUserInput | OAuthAccountCreateOrConnectWithoutUserInput[]
    upsert?: OAuthAccountUpsertWithWhereUniqueWithoutUserInput | OAuthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthAccountCreateManyUserInputEnvelope
    set?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    disconnect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    delete?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    connect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    update?: OAuthAccountUpdateWithWhereUniqueWithoutUserInput | OAuthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthAccountUpdateManyWithWhereWithoutUserInput | OAuthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthAccountScalarWhereInput | OAuthAccountScalarWhereInput[]
  }

  export type FocusSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput> | FocusSessionCreateWithoutUserInput[] | FocusSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutUserInput | FocusSessionCreateOrConnectWithoutUserInput[]
    upsert?: FocusSessionUpsertWithWhereUniqueWithoutUserInput | FocusSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FocusSessionCreateManyUserInputEnvelope
    set?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    disconnect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    delete?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    update?: FocusSessionUpdateWithWhereUniqueWithoutUserInput | FocusSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FocusSessionUpdateManyWithWhereWithoutUserInput | FocusSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
  }

  export type BlockedAppUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlockedAppCreateWithoutUserInput, BlockedAppUncheckedCreateWithoutUserInput> | BlockedAppCreateWithoutUserInput[] | BlockedAppUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlockedAppCreateOrConnectWithoutUserInput | BlockedAppCreateOrConnectWithoutUserInput[]
    upsert?: BlockedAppUpsertWithWhereUniqueWithoutUserInput | BlockedAppUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlockedAppCreateManyUserInputEnvelope
    set?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    disconnect?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    delete?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    connect?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    update?: BlockedAppUpdateWithWhereUniqueWithoutUserInput | BlockedAppUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlockedAppUpdateManyWithWhereWithoutUserInput | BlockedAppUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlockedAppScalarWhereInput | BlockedAppScalarWhereInput[]
  }

  export type StrictnessUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StrictnessCreateWithoutUserInput, StrictnessUncheckedCreateWithoutUserInput>
    connectOrCreate?: StrictnessCreateOrConnectWithoutUserInput
    upsert?: StrictnessUpsertWithoutUserInput
    disconnect?: StrictnessWhereInput | boolean
    delete?: StrictnessWhereInput | boolean
    connect?: StrictnessWhereUniqueInput
    update?: XOR<XOR<StrictnessUpdateToOneWithWhereWithoutUserInput, StrictnessUpdateWithoutUserInput>, StrictnessUncheckedUpdateWithoutUserInput>
  }

  export type UserThemeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserThemeCreateWithoutUserInput, UserThemeUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserThemeCreateOrConnectWithoutUserInput
    upsert?: UserThemeUpsertWithoutUserInput
    disconnect?: UserThemeWhereInput | boolean
    delete?: UserThemeWhereInput | boolean
    connect?: UserThemeWhereUniqueInput
    update?: XOR<XOR<UserThemeUpdateToOneWithWhereWithoutUserInput, UserThemeUpdateWithoutUserInput>, UserThemeUncheckedUpdateWithoutUserInput>
  }

  export type YoutubeAllowlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<YoutubeAllowlistCreateWithoutUserInput, YoutubeAllowlistUncheckedCreateWithoutUserInput> | YoutubeAllowlistCreateWithoutUserInput[] | YoutubeAllowlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YoutubeAllowlistCreateOrConnectWithoutUserInput | YoutubeAllowlistCreateOrConnectWithoutUserInput[]
    upsert?: YoutubeAllowlistUpsertWithWhereUniqueWithoutUserInput | YoutubeAllowlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: YoutubeAllowlistCreateManyUserInputEnvelope
    set?: YoutubeAllowlistWhereUniqueInput | YoutubeAllowlistWhereUniqueInput[]
    disconnect?: YoutubeAllowlistWhereUniqueInput | YoutubeAllowlistWhereUniqueInput[]
    delete?: YoutubeAllowlistWhereUniqueInput | YoutubeAllowlistWhereUniqueInput[]
    connect?: YoutubeAllowlistWhereUniqueInput | YoutubeAllowlistWhereUniqueInput[]
    update?: YoutubeAllowlistUpdateWithWhereUniqueWithoutUserInput | YoutubeAllowlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: YoutubeAllowlistUpdateManyWithWhereWithoutUserInput | YoutubeAllowlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: YoutubeAllowlistScalarWhereInput | YoutubeAllowlistScalarWhereInput[]
  }

  export type UserAchievementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutUserInput | UserAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutUserInput | UserAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutUserInput | UserAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput> | ScheduleCreateWithoutUserInput[] | ScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutUserInput | ScheduleCreateOrConnectWithoutUserInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutUserInput | ScheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScheduleCreateManyUserInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutUserInput | ScheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutUserInput | ScheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOauthAccountsInput = {
    create?: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOauthAccountsNestedInput = {
    create?: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthAccountsInput
    upsert?: UserUpsertWithoutOauthAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOauthAccountsInput, UserUpdateWithoutOauthAccountsInput>, UserUncheckedUpdateWithoutOauthAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type BreakCreateNestedManyWithoutSessionInput = {
    create?: XOR<BreakCreateWithoutSessionInput, BreakUncheckedCreateWithoutSessionInput> | BreakCreateWithoutSessionInput[] | BreakUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: BreakCreateOrConnectWithoutSessionInput | BreakCreateOrConnectWithoutSessionInput[]
    createMany?: BreakCreateManySessionInputEnvelope
    connect?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
  }

  export type StrictnessCreateNestedOneWithoutSessionInput = {
    create?: XOR<StrictnessCreateWithoutSessionInput, StrictnessUncheckedCreateWithoutSessionInput>
    connectOrCreate?: StrictnessCreateOrConnectWithoutSessionInput
    connect?: StrictnessWhereUniqueInput
  }

  export type BreakUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<BreakCreateWithoutSessionInput, BreakUncheckedCreateWithoutSessionInput> | BreakCreateWithoutSessionInput[] | BreakUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: BreakCreateOrConnectWithoutSessionInput | BreakCreateOrConnectWithoutSessionInput[]
    createMany?: BreakCreateManySessionInputEnvelope
    connect?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
  }

  export type StrictnessUncheckedCreateNestedOneWithoutSessionInput = {
    create?: XOR<StrictnessCreateWithoutSessionInput, StrictnessUncheckedCreateWithoutSessionInput>
    connectOrCreate?: StrictnessCreateOrConnectWithoutSessionInput
    connect?: StrictnessWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type BreakUpdateManyWithoutSessionNestedInput = {
    create?: XOR<BreakCreateWithoutSessionInput, BreakUncheckedCreateWithoutSessionInput> | BreakCreateWithoutSessionInput[] | BreakUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: BreakCreateOrConnectWithoutSessionInput | BreakCreateOrConnectWithoutSessionInput[]
    upsert?: BreakUpsertWithWhereUniqueWithoutSessionInput | BreakUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: BreakCreateManySessionInputEnvelope
    set?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    disconnect?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    delete?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    connect?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    update?: BreakUpdateWithWhereUniqueWithoutSessionInput | BreakUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: BreakUpdateManyWithWhereWithoutSessionInput | BreakUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: BreakScalarWhereInput | BreakScalarWhereInput[]
  }

  export type StrictnessUpdateOneWithoutSessionNestedInput = {
    create?: XOR<StrictnessCreateWithoutSessionInput, StrictnessUncheckedCreateWithoutSessionInput>
    connectOrCreate?: StrictnessCreateOrConnectWithoutSessionInput
    upsert?: StrictnessUpsertWithoutSessionInput
    disconnect?: StrictnessWhereInput | boolean
    delete?: StrictnessWhereInput | boolean
    connect?: StrictnessWhereUniqueInput
    update?: XOR<XOR<StrictnessUpdateToOneWithWhereWithoutSessionInput, StrictnessUpdateWithoutSessionInput>, StrictnessUncheckedUpdateWithoutSessionInput>
  }

  export type BreakUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<BreakCreateWithoutSessionInput, BreakUncheckedCreateWithoutSessionInput> | BreakCreateWithoutSessionInput[] | BreakUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: BreakCreateOrConnectWithoutSessionInput | BreakCreateOrConnectWithoutSessionInput[]
    upsert?: BreakUpsertWithWhereUniqueWithoutSessionInput | BreakUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: BreakCreateManySessionInputEnvelope
    set?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    disconnect?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    delete?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    connect?: BreakWhereUniqueInput | BreakWhereUniqueInput[]
    update?: BreakUpdateWithWhereUniqueWithoutSessionInput | BreakUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: BreakUpdateManyWithWhereWithoutSessionInput | BreakUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: BreakScalarWhereInput | BreakScalarWhereInput[]
  }

  export type StrictnessUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: XOR<StrictnessCreateWithoutSessionInput, StrictnessUncheckedCreateWithoutSessionInput>
    connectOrCreate?: StrictnessCreateOrConnectWithoutSessionInput
    upsert?: StrictnessUpsertWithoutSessionInput
    disconnect?: StrictnessWhereInput | boolean
    delete?: StrictnessWhereInput | boolean
    connect?: StrictnessWhereUniqueInput
    update?: XOR<XOR<StrictnessUpdateToOneWithWhereWithoutSessionInput, StrictnessUpdateWithoutSessionInput>, StrictnessUncheckedUpdateWithoutSessionInput>
  }

  export type UserCreateNestedOneWithoutStrictnessInput = {
    create?: XOR<UserCreateWithoutStrictnessInput, UserUncheckedCreateWithoutStrictnessInput>
    connectOrCreate?: UserCreateOrConnectWithoutStrictnessInput
    connect?: UserWhereUniqueInput
  }

  export type FocusSessionCreateNestedOneWithoutStrictnessOverrideInput = {
    create?: XOR<FocusSessionCreateWithoutStrictnessOverrideInput, FocusSessionUncheckedCreateWithoutStrictnessOverrideInput>
    connectOrCreate?: FocusSessionCreateOrConnectWithoutStrictnessOverrideInput
    connect?: FocusSessionWhereUniqueInput
  }

  export type UserUpdateOneWithoutStrictnessNestedInput = {
    create?: XOR<UserCreateWithoutStrictnessInput, UserUncheckedCreateWithoutStrictnessInput>
    connectOrCreate?: UserCreateOrConnectWithoutStrictnessInput
    upsert?: UserUpsertWithoutStrictnessInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStrictnessInput, UserUpdateWithoutStrictnessInput>, UserUncheckedUpdateWithoutStrictnessInput>
  }

  export type FocusSessionUpdateOneWithoutStrictnessOverrideNestedInput = {
    create?: XOR<FocusSessionCreateWithoutStrictnessOverrideInput, FocusSessionUncheckedCreateWithoutStrictnessOverrideInput>
    connectOrCreate?: FocusSessionCreateOrConnectWithoutStrictnessOverrideInput
    upsert?: FocusSessionUpsertWithoutStrictnessOverrideInput
    disconnect?: FocusSessionWhereInput | boolean
    delete?: FocusSessionWhereInput | boolean
    connect?: FocusSessionWhereUniqueInput
    update?: XOR<XOR<FocusSessionUpdateToOneWithWhereWithoutStrictnessOverrideInput, FocusSessionUpdateWithoutStrictnessOverrideInput>, FocusSessionUncheckedUpdateWithoutStrictnessOverrideInput>
  }

  export type FocusSessionCreateNestedOneWithoutBreaksInput = {
    create?: XOR<FocusSessionCreateWithoutBreaksInput, FocusSessionUncheckedCreateWithoutBreaksInput>
    connectOrCreate?: FocusSessionCreateOrConnectWithoutBreaksInput
    connect?: FocusSessionWhereUniqueInput
  }

  export type FocusSessionUpdateOneRequiredWithoutBreaksNestedInput = {
    create?: XOR<FocusSessionCreateWithoutBreaksInput, FocusSessionUncheckedCreateWithoutBreaksInput>
    connectOrCreate?: FocusSessionCreateOrConnectWithoutBreaksInput
    upsert?: FocusSessionUpsertWithoutBreaksInput
    connect?: FocusSessionWhereUniqueInput
    update?: XOR<XOR<FocusSessionUpdateToOneWithWhereWithoutBreaksInput, FocusSessionUpdateWithoutBreaksInput>, FocusSessionUncheckedUpdateWithoutBreaksInput>
  }

  export type UserCreateNestedOneWithoutBlockedAppsInput = {
    create?: XOR<UserCreateWithoutBlockedAppsInput, UserUncheckedCreateWithoutBlockedAppsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedAppsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBlockedAppsNestedInput = {
    create?: XOR<UserCreateWithoutBlockedAppsInput, UserUncheckedCreateWithoutBlockedAppsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedAppsInput
    upsert?: UserUpsertWithoutBlockedAppsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlockedAppsInput, UserUpdateWithoutBlockedAppsInput>, UserUncheckedUpdateWithoutBlockedAppsInput>
  }

  export type ThemeCreatequoteSetInput = {
    set: string[]
  }

  export type ThemeCreateexerciseSetInput = {
    set: string[]
  }

  export type UserThemeCreateNestedManyWithoutThemeInput = {
    create?: XOR<UserThemeCreateWithoutThemeInput, UserThemeUncheckedCreateWithoutThemeInput> | UserThemeCreateWithoutThemeInput[] | UserThemeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: UserThemeCreateOrConnectWithoutThemeInput | UserThemeCreateOrConnectWithoutThemeInput[]
    createMany?: UserThemeCreateManyThemeInputEnvelope
    connect?: UserThemeWhereUniqueInput | UserThemeWhereUniqueInput[]
  }

  export type UserThemeUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<UserThemeCreateWithoutThemeInput, UserThemeUncheckedCreateWithoutThemeInput> | UserThemeCreateWithoutThemeInput[] | UserThemeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: UserThemeCreateOrConnectWithoutThemeInput | UserThemeCreateOrConnectWithoutThemeInput[]
    createMany?: UserThemeCreateManyThemeInputEnvelope
    connect?: UserThemeWhereUniqueInput | UserThemeWhereUniqueInput[]
  }

  export type ThemeUpdatequoteSetInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ThemeUpdateexerciseSetInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserThemeUpdateManyWithoutThemeNestedInput = {
    create?: XOR<UserThemeCreateWithoutThemeInput, UserThemeUncheckedCreateWithoutThemeInput> | UserThemeCreateWithoutThemeInput[] | UserThemeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: UserThemeCreateOrConnectWithoutThemeInput | UserThemeCreateOrConnectWithoutThemeInput[]
    upsert?: UserThemeUpsertWithWhereUniqueWithoutThemeInput | UserThemeUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: UserThemeCreateManyThemeInputEnvelope
    set?: UserThemeWhereUniqueInput | UserThemeWhereUniqueInput[]
    disconnect?: UserThemeWhereUniqueInput | UserThemeWhereUniqueInput[]
    delete?: UserThemeWhereUniqueInput | UserThemeWhereUniqueInput[]
    connect?: UserThemeWhereUniqueInput | UserThemeWhereUniqueInput[]
    update?: UserThemeUpdateWithWhereUniqueWithoutThemeInput | UserThemeUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: UserThemeUpdateManyWithWhereWithoutThemeInput | UserThemeUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: UserThemeScalarWhereInput | UserThemeScalarWhereInput[]
  }

  export type UserThemeUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<UserThemeCreateWithoutThemeInput, UserThemeUncheckedCreateWithoutThemeInput> | UserThemeCreateWithoutThemeInput[] | UserThemeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: UserThemeCreateOrConnectWithoutThemeInput | UserThemeCreateOrConnectWithoutThemeInput[]
    upsert?: UserThemeUpsertWithWhereUniqueWithoutThemeInput | UserThemeUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: UserThemeCreateManyThemeInputEnvelope
    set?: UserThemeWhereUniqueInput | UserThemeWhereUniqueInput[]
    disconnect?: UserThemeWhereUniqueInput | UserThemeWhereUniqueInput[]
    delete?: UserThemeWhereUniqueInput | UserThemeWhereUniqueInput[]
    connect?: UserThemeWhereUniqueInput | UserThemeWhereUniqueInput[]
    update?: UserThemeUpdateWithWhereUniqueWithoutThemeInput | UserThemeUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: UserThemeUpdateManyWithWhereWithoutThemeInput | UserThemeUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: UserThemeScalarWhereInput | UserThemeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutThemesInput = {
    create?: XOR<UserCreateWithoutThemesInput, UserUncheckedCreateWithoutThemesInput>
    connectOrCreate?: UserCreateOrConnectWithoutThemesInput
    connect?: UserWhereUniqueInput
  }

  export type ThemeCreateNestedOneWithoutUserThemesInput = {
    create?: XOR<ThemeCreateWithoutUserThemesInput, ThemeUncheckedCreateWithoutUserThemesInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutUserThemesInput
    connect?: ThemeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutThemesNestedInput = {
    create?: XOR<UserCreateWithoutThemesInput, UserUncheckedCreateWithoutThemesInput>
    connectOrCreate?: UserCreateOrConnectWithoutThemesInput
    upsert?: UserUpsertWithoutThemesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutThemesInput, UserUpdateWithoutThemesInput>, UserUncheckedUpdateWithoutThemesInput>
  }

  export type ThemeUpdateOneRequiredWithoutUserThemesNestedInput = {
    create?: XOR<ThemeCreateWithoutUserThemesInput, ThemeUncheckedCreateWithoutUserThemesInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutUserThemesInput
    upsert?: ThemeUpsertWithoutUserThemesInput
    connect?: ThemeWhereUniqueInput
    update?: XOR<XOR<ThemeUpdateToOneWithWhereWithoutUserThemesInput, ThemeUpdateWithoutUserThemesInput>, ThemeUncheckedUpdateWithoutUserThemesInput>
  }

  export type UserCreateNestedOneWithoutYoutubeAllowlistInput = {
    create?: XOR<UserCreateWithoutYoutubeAllowlistInput, UserUncheckedCreateWithoutYoutubeAllowlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutYoutubeAllowlistInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutYoutubeAllowlistNestedInput = {
    create?: XOR<UserCreateWithoutYoutubeAllowlistInput, UserUncheckedCreateWithoutYoutubeAllowlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutYoutubeAllowlistInput
    upsert?: UserUpsertWithoutYoutubeAllowlistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutYoutubeAllowlistInput, UserUpdateWithoutYoutubeAllowlistInput>, UserUncheckedUpdateWithoutYoutubeAllowlistInput>
  }

  export type UserAchievementCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type UserAchievementUncheckedCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type UserAchievementUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutAchievementInput | UserAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutAchievementInput | UserAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    connect?: UserWhereUniqueInput
  }

  export type AchievementCreateNestedOneWithoutUserAchievementsInput = {
    create?: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUserAchievementsInput
    connect?: AchievementWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    upsert?: UserUpsertWithoutAchievementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAchievementsInput, UserUpdateWithoutAchievementsInput>, UserUncheckedUpdateWithoutAchievementsInput>
  }

  export type AchievementUpdateOneRequiredWithoutUserAchievementsNestedInput = {
    create?: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUserAchievementsInput
    upsert?: AchievementUpsertWithoutUserAchievementsInput
    connect?: AchievementWhereUniqueInput
    update?: XOR<XOR<AchievementUpdateToOneWithWhereWithoutUserAchievementsInput, AchievementUpdateWithoutUserAchievementsInput>, AchievementUncheckedUpdateWithoutUserAchievementsInput>
  }

  export type ScheduleCreatedaysOfWeekInput = {
    set: number[]
  }

  export type UserCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedulesInput
    connect?: UserWhereUniqueInput
  }

  export type ScheduleUpdatedaysOfWeekInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedulesInput
    upsert?: UserUpsertWithoutSchedulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSchedulesInput, UserUpdateWithoutSchedulesInput>, UserUncheckedUpdateWithoutSchedulesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type OAuthAccountCreateWithoutUserInput = {
    id?: string
    provider: string
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
  }

  export type OAuthAccountUncheckedCreateWithoutUserInput = {
    id?: string
    provider: string
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
  }

  export type OAuthAccountCreateOrConnectWithoutUserInput = {
    where: OAuthAccountWhereUniqueInput
    create: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput>
  }

  export type OAuthAccountCreateManyUserInputEnvelope = {
    data: OAuthAccountCreateManyUserInput | OAuthAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FocusSessionCreateWithoutUserInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    breaks?: BreakCreateNestedManyWithoutSessionInput
    strictnessOverride?: StrictnessCreateNestedOneWithoutSessionInput
  }

  export type FocusSessionUncheckedCreateWithoutUserInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    breaks?: BreakUncheckedCreateNestedManyWithoutSessionInput
    strictnessOverride?: StrictnessUncheckedCreateNestedOneWithoutSessionInput
  }

  export type FocusSessionCreateOrConnectWithoutUserInput = {
    where: FocusSessionWhereUniqueInput
    create: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput>
  }

  export type FocusSessionCreateManyUserInputEnvelope = {
    data: FocusSessionCreateManyUserInput | FocusSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlockedAppCreateWithoutUserInput = {
    id?: string
    appName: string
    browserUrl?: string | null
    isBlocked?: boolean
  }

  export type BlockedAppUncheckedCreateWithoutUserInput = {
    id?: string
    appName: string
    browserUrl?: string | null
    isBlocked?: boolean
  }

  export type BlockedAppCreateOrConnectWithoutUserInput = {
    where: BlockedAppWhereUniqueInput
    create: XOR<BlockedAppCreateWithoutUserInput, BlockedAppUncheckedCreateWithoutUserInput>
  }

  export type BlockedAppCreateManyUserInputEnvelope = {
    data: BlockedAppCreateManyUserInput | BlockedAppCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StrictnessCreateWithoutUserInput = {
    id?: string
    maxBreaks?: number
    baseAdDuration?: number
    adIncreasePerBreak?: number
    noBreaksAllowed?: boolean
    session?: FocusSessionCreateNestedOneWithoutStrictnessOverrideInput
  }

  export type StrictnessUncheckedCreateWithoutUserInput = {
    id?: string
    maxBreaks?: number
    baseAdDuration?: number
    adIncreasePerBreak?: number
    noBreaksAllowed?: boolean
    sessionId?: string | null
  }

  export type StrictnessCreateOrConnectWithoutUserInput = {
    where: StrictnessWhereUniqueInput
    create: XOR<StrictnessCreateWithoutUserInput, StrictnessUncheckedCreateWithoutUserInput>
  }

  export type UserThemeCreateWithoutUserInput = {
    id?: string
    theme: ThemeCreateNestedOneWithoutUserThemesInput
  }

  export type UserThemeUncheckedCreateWithoutUserInput = {
    id?: string
    themeId: string
  }

  export type UserThemeCreateOrConnectWithoutUserInput = {
    where: UserThemeWhereUniqueInput
    create: XOR<UserThemeCreateWithoutUserInput, UserThemeUncheckedCreateWithoutUserInput>
  }

  export type YoutubeAllowlistCreateWithoutUserInput = {
    id?: string
    videoId: string
    url: string
    title?: string | null
    thumbnail?: string | null
    addedAt?: Date | string
  }

  export type YoutubeAllowlistUncheckedCreateWithoutUserInput = {
    id?: string
    videoId: string
    url: string
    title?: string | null
    thumbnail?: string | null
    addedAt?: Date | string
  }

  export type YoutubeAllowlistCreateOrConnectWithoutUserInput = {
    where: YoutubeAllowlistWhereUniqueInput
    create: XOR<YoutubeAllowlistCreateWithoutUserInput, YoutubeAllowlistUncheckedCreateWithoutUserInput>
  }

  export type YoutubeAllowlistCreateManyUserInputEnvelope = {
    data: YoutubeAllowlistCreateManyUserInput | YoutubeAllowlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAchievementCreateWithoutUserInput = {
    id?: string
    unlockedAt?: Date | string
    achievement: AchievementCreateNestedOneWithoutUserAchievementsInput
  }

  export type UserAchievementUncheckedCreateWithoutUserInput = {
    id?: string
    unlockedAt?: Date | string
    achievementId: string
  }

  export type UserAchievementCreateOrConnectWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    create: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput>
  }

  export type UserAchievementCreateManyUserInputEnvelope = {
    data: UserAchievementCreateManyUserInput | UserAchievementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutUserInput = {
    id?: string
    label: string
    startTime: string
    endTime: string
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isActive?: boolean
    timezone?: string
  }

  export type ScheduleUncheckedCreateWithoutUserInput = {
    id?: string
    label: string
    startTime: string
    endTime: string
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isActive?: boolean
    timezone?: string
  }

  export type ScheduleCreateOrConnectWithoutUserInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput>
  }

  export type ScheduleCreateManyUserInputEnvelope = {
    data: ScheduleCreateManyUserInput | ScheduleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OAuthAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: OAuthAccountWhereUniqueInput
    update: XOR<OAuthAccountUpdateWithoutUserInput, OAuthAccountUncheckedUpdateWithoutUserInput>
    create: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput>
  }

  export type OAuthAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: OAuthAccountWhereUniqueInput
    data: XOR<OAuthAccountUpdateWithoutUserInput, OAuthAccountUncheckedUpdateWithoutUserInput>
  }

  export type OAuthAccountUpdateManyWithWhereWithoutUserInput = {
    where: OAuthAccountScalarWhereInput
    data: XOR<OAuthAccountUpdateManyMutationInput, OAuthAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type OAuthAccountScalarWhereInput = {
    AND?: OAuthAccountScalarWhereInput | OAuthAccountScalarWhereInput[]
    OR?: OAuthAccountScalarWhereInput[]
    NOT?: OAuthAccountScalarWhereInput | OAuthAccountScalarWhereInput[]
    id?: StringFilter<"OAuthAccount"> | string
    provider?: StringFilter<"OAuthAccount"> | string
    providerAccountId?: StringFilter<"OAuthAccount"> | string
    accessToken?: StringNullableFilter<"OAuthAccount"> | string | null
    refreshToken?: StringNullableFilter<"OAuthAccount"> | string | null
    userId?: StringFilter<"OAuthAccount"> | string
  }

  export type FocusSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: FocusSessionWhereUniqueInput
    update: XOR<FocusSessionUpdateWithoutUserInput, FocusSessionUncheckedUpdateWithoutUserInput>
    create: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput>
  }

  export type FocusSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: FocusSessionWhereUniqueInput
    data: XOR<FocusSessionUpdateWithoutUserInput, FocusSessionUncheckedUpdateWithoutUserInput>
  }

  export type FocusSessionUpdateManyWithWhereWithoutUserInput = {
    where: FocusSessionScalarWhereInput
    data: XOR<FocusSessionUpdateManyMutationInput, FocusSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type FocusSessionScalarWhereInput = {
    AND?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
    OR?: FocusSessionScalarWhereInput[]
    NOT?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
    id?: StringFilter<"FocusSession"> | string
    startTime?: DateTimeFilter<"FocusSession"> | Date | string
    endTime?: DateTimeNullableFilter<"FocusSession"> | Date | string | null
    duration?: IntNullableFilter<"FocusSession"> | number | null
    status?: EnumSessionStatusFilter<"FocusSession"> | $Enums.SessionStatus
    createdAt?: DateTimeFilter<"FocusSession"> | Date | string
    userId?: StringFilter<"FocusSession"> | string
  }

  export type BlockedAppUpsertWithWhereUniqueWithoutUserInput = {
    where: BlockedAppWhereUniqueInput
    update: XOR<BlockedAppUpdateWithoutUserInput, BlockedAppUncheckedUpdateWithoutUserInput>
    create: XOR<BlockedAppCreateWithoutUserInput, BlockedAppUncheckedCreateWithoutUserInput>
  }

  export type BlockedAppUpdateWithWhereUniqueWithoutUserInput = {
    where: BlockedAppWhereUniqueInput
    data: XOR<BlockedAppUpdateWithoutUserInput, BlockedAppUncheckedUpdateWithoutUserInput>
  }

  export type BlockedAppUpdateManyWithWhereWithoutUserInput = {
    where: BlockedAppScalarWhereInput
    data: XOR<BlockedAppUpdateManyMutationInput, BlockedAppUncheckedUpdateManyWithoutUserInput>
  }

  export type BlockedAppScalarWhereInput = {
    AND?: BlockedAppScalarWhereInput | BlockedAppScalarWhereInput[]
    OR?: BlockedAppScalarWhereInput[]
    NOT?: BlockedAppScalarWhereInput | BlockedAppScalarWhereInput[]
    id?: StringFilter<"BlockedApp"> | string
    appName?: StringFilter<"BlockedApp"> | string
    browserUrl?: StringNullableFilter<"BlockedApp"> | string | null
    isBlocked?: BoolFilter<"BlockedApp"> | boolean
    userId?: StringFilter<"BlockedApp"> | string
  }

  export type StrictnessUpsertWithoutUserInput = {
    update: XOR<StrictnessUpdateWithoutUserInput, StrictnessUncheckedUpdateWithoutUserInput>
    create: XOR<StrictnessCreateWithoutUserInput, StrictnessUncheckedCreateWithoutUserInput>
    where?: StrictnessWhereInput
  }

  export type StrictnessUpdateToOneWithWhereWithoutUserInput = {
    where?: StrictnessWhereInput
    data: XOR<StrictnessUpdateWithoutUserInput, StrictnessUncheckedUpdateWithoutUserInput>
  }

  export type StrictnessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxBreaks?: IntFieldUpdateOperationsInput | number
    baseAdDuration?: IntFieldUpdateOperationsInput | number
    adIncreasePerBreak?: IntFieldUpdateOperationsInput | number
    noBreaksAllowed?: BoolFieldUpdateOperationsInput | boolean
    session?: FocusSessionUpdateOneWithoutStrictnessOverrideNestedInput
  }

  export type StrictnessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxBreaks?: IntFieldUpdateOperationsInput | number
    baseAdDuration?: IntFieldUpdateOperationsInput | number
    adIncreasePerBreak?: IntFieldUpdateOperationsInput | number
    noBreaksAllowed?: BoolFieldUpdateOperationsInput | boolean
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserThemeUpsertWithoutUserInput = {
    update: XOR<UserThemeUpdateWithoutUserInput, UserThemeUncheckedUpdateWithoutUserInput>
    create: XOR<UserThemeCreateWithoutUserInput, UserThemeUncheckedCreateWithoutUserInput>
    where?: UserThemeWhereInput
  }

  export type UserThemeUpdateToOneWithWhereWithoutUserInput = {
    where?: UserThemeWhereInput
    data: XOR<UserThemeUpdateWithoutUserInput, UserThemeUncheckedUpdateWithoutUserInput>
  }

  export type UserThemeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: ThemeUpdateOneRequiredWithoutUserThemesNestedInput
  }

  export type UserThemeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    themeId?: StringFieldUpdateOperationsInput | string
  }

  export type YoutubeAllowlistUpsertWithWhereUniqueWithoutUserInput = {
    where: YoutubeAllowlistWhereUniqueInput
    update: XOR<YoutubeAllowlistUpdateWithoutUserInput, YoutubeAllowlistUncheckedUpdateWithoutUserInput>
    create: XOR<YoutubeAllowlistCreateWithoutUserInput, YoutubeAllowlistUncheckedCreateWithoutUserInput>
  }

  export type YoutubeAllowlistUpdateWithWhereUniqueWithoutUserInput = {
    where: YoutubeAllowlistWhereUniqueInput
    data: XOR<YoutubeAllowlistUpdateWithoutUserInput, YoutubeAllowlistUncheckedUpdateWithoutUserInput>
  }

  export type YoutubeAllowlistUpdateManyWithWhereWithoutUserInput = {
    where: YoutubeAllowlistScalarWhereInput
    data: XOR<YoutubeAllowlistUpdateManyMutationInput, YoutubeAllowlistUncheckedUpdateManyWithoutUserInput>
  }

  export type YoutubeAllowlistScalarWhereInput = {
    AND?: YoutubeAllowlistScalarWhereInput | YoutubeAllowlistScalarWhereInput[]
    OR?: YoutubeAllowlistScalarWhereInput[]
    NOT?: YoutubeAllowlistScalarWhereInput | YoutubeAllowlistScalarWhereInput[]
    id?: StringFilter<"YoutubeAllowlist"> | string
    videoId?: StringFilter<"YoutubeAllowlist"> | string
    url?: StringFilter<"YoutubeAllowlist"> | string
    title?: StringNullableFilter<"YoutubeAllowlist"> | string | null
    thumbnail?: StringNullableFilter<"YoutubeAllowlist"> | string | null
    addedAt?: DateTimeFilter<"YoutubeAllowlist"> | Date | string
    userId?: StringFilter<"YoutubeAllowlist"> | string
  }

  export type UserAchievementUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    update: XOR<UserAchievementUpdateWithoutUserInput, UserAchievementUncheckedUpdateWithoutUserInput>
    create: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput>
  }

  export type UserAchievementUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    data: XOR<UserAchievementUpdateWithoutUserInput, UserAchievementUncheckedUpdateWithoutUserInput>
  }

  export type UserAchievementUpdateManyWithWhereWithoutUserInput = {
    where: UserAchievementScalarWhereInput
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAchievementScalarWhereInput = {
    AND?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    OR?: UserAchievementScalarWhereInput[]
    NOT?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    id?: StringFilter<"UserAchievement"> | string
    unlockedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    userId?: StringFilter<"UserAchievement"> | string
    achievementId?: StringFilter<"UserAchievement"> | string
  }

  export type ScheduleUpsertWithWhereUniqueWithoutUserInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutUserInput, ScheduleUncheckedUpdateWithoutUserInput>
    create: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutUserInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutUserInput, ScheduleUncheckedUpdateWithoutUserInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutUserInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutUserInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: StringFilter<"Schedule"> | string
    label?: StringFilter<"Schedule"> | string
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    daysOfWeek?: IntNullableListFilter<"Schedule">
    isActive?: BoolFilter<"Schedule"> | boolean
    timezone?: StringFilter<"Schedule"> | string
    userId?: StringFilter<"Schedule"> | string
  }

  export type UserCreateWithoutOauthAccountsInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    sessions?: FocusSessionCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppCreateNestedManyWithoutUserInput
    strictness?: StrictnessCreateNestedOneWithoutUserInput
    themes?: UserThemeCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOauthAccountsInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    sessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppUncheckedCreateNestedManyWithoutUserInput
    strictness?: StrictnessUncheckedCreateNestedOneWithoutUserInput
    themes?: UserThemeUncheckedCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOauthAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
  }

  export type UserUpsertWithoutOauthAccountsInput = {
    update: XOR<UserUpdateWithoutOauthAccountsInput, UserUncheckedUpdateWithoutOauthAccountsInput>
    create: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOauthAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOauthAccountsInput, UserUncheckedUpdateWithoutOauthAccountsInput>
  }

  export type UserUpdateWithoutOauthAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    sessions?: FocusSessionUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUpdateOneWithoutUserNestedInput
    themes?: UserThemeUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOauthAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    sessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUncheckedUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUncheckedUpdateOneWithoutUserNestedInput
    themes?: UserThemeUncheckedUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppCreateNestedManyWithoutUserInput
    strictness?: StrictnessCreateNestedOneWithoutUserInput
    themes?: UserThemeCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppUncheckedCreateNestedManyWithoutUserInput
    strictness?: StrictnessUncheckedCreateNestedOneWithoutUserInput
    themes?: UserThemeUncheckedCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type BreakCreateWithoutSessionInput = {
    id?: string
    takenAt?: Date | string
    adDuration: number
    skipped?: boolean
  }

  export type BreakUncheckedCreateWithoutSessionInput = {
    id?: string
    takenAt?: Date | string
    adDuration: number
    skipped?: boolean
  }

  export type BreakCreateOrConnectWithoutSessionInput = {
    where: BreakWhereUniqueInput
    create: XOR<BreakCreateWithoutSessionInput, BreakUncheckedCreateWithoutSessionInput>
  }

  export type BreakCreateManySessionInputEnvelope = {
    data: BreakCreateManySessionInput | BreakCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type StrictnessCreateWithoutSessionInput = {
    id?: string
    maxBreaks?: number
    baseAdDuration?: number
    adIncreasePerBreak?: number
    noBreaksAllowed?: boolean
    user?: UserCreateNestedOneWithoutStrictnessInput
  }

  export type StrictnessUncheckedCreateWithoutSessionInput = {
    id?: string
    maxBreaks?: number
    baseAdDuration?: number
    adIncreasePerBreak?: number
    noBreaksAllowed?: boolean
    userId?: string | null
  }

  export type StrictnessCreateOrConnectWithoutSessionInput = {
    where: StrictnessWhereUniqueInput
    create: XOR<StrictnessCreateWithoutSessionInput, StrictnessUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUpdateOneWithoutUserNestedInput
    themes?: UserThemeUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUncheckedUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUncheckedUpdateOneWithoutUserNestedInput
    themes?: UserThemeUncheckedUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BreakUpsertWithWhereUniqueWithoutSessionInput = {
    where: BreakWhereUniqueInput
    update: XOR<BreakUpdateWithoutSessionInput, BreakUncheckedUpdateWithoutSessionInput>
    create: XOR<BreakCreateWithoutSessionInput, BreakUncheckedCreateWithoutSessionInput>
  }

  export type BreakUpdateWithWhereUniqueWithoutSessionInput = {
    where: BreakWhereUniqueInput
    data: XOR<BreakUpdateWithoutSessionInput, BreakUncheckedUpdateWithoutSessionInput>
  }

  export type BreakUpdateManyWithWhereWithoutSessionInput = {
    where: BreakScalarWhereInput
    data: XOR<BreakUpdateManyMutationInput, BreakUncheckedUpdateManyWithoutSessionInput>
  }

  export type BreakScalarWhereInput = {
    AND?: BreakScalarWhereInput | BreakScalarWhereInput[]
    OR?: BreakScalarWhereInput[]
    NOT?: BreakScalarWhereInput | BreakScalarWhereInput[]
    id?: StringFilter<"Break"> | string
    takenAt?: DateTimeFilter<"Break"> | Date | string
    adDuration?: IntFilter<"Break"> | number
    skipped?: BoolFilter<"Break"> | boolean
    sessionId?: StringFilter<"Break"> | string
  }

  export type StrictnessUpsertWithoutSessionInput = {
    update: XOR<StrictnessUpdateWithoutSessionInput, StrictnessUncheckedUpdateWithoutSessionInput>
    create: XOR<StrictnessCreateWithoutSessionInput, StrictnessUncheckedCreateWithoutSessionInput>
    where?: StrictnessWhereInput
  }

  export type StrictnessUpdateToOneWithWhereWithoutSessionInput = {
    where?: StrictnessWhereInput
    data: XOR<StrictnessUpdateWithoutSessionInput, StrictnessUncheckedUpdateWithoutSessionInput>
  }

  export type StrictnessUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxBreaks?: IntFieldUpdateOperationsInput | number
    baseAdDuration?: IntFieldUpdateOperationsInput | number
    adIncreasePerBreak?: IntFieldUpdateOperationsInput | number
    noBreaksAllowed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutStrictnessNestedInput
  }

  export type StrictnessUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxBreaks?: IntFieldUpdateOperationsInput | number
    baseAdDuration?: IntFieldUpdateOperationsInput | number
    adIncreasePerBreak?: IntFieldUpdateOperationsInput | number
    noBreaksAllowed?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutStrictnessInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
    sessions?: FocusSessionCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppCreateNestedManyWithoutUserInput
    themes?: UserThemeCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStrictnessInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppUncheckedCreateNestedManyWithoutUserInput
    themes?: UserThemeUncheckedCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStrictnessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStrictnessInput, UserUncheckedCreateWithoutStrictnessInput>
  }

  export type FocusSessionCreateWithoutStrictnessOverrideInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
    breaks?: BreakCreateNestedManyWithoutSessionInput
  }

  export type FocusSessionUncheckedCreateWithoutStrictnessOverrideInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    userId: string
    breaks?: BreakUncheckedCreateNestedManyWithoutSessionInput
  }

  export type FocusSessionCreateOrConnectWithoutStrictnessOverrideInput = {
    where: FocusSessionWhereUniqueInput
    create: XOR<FocusSessionCreateWithoutStrictnessOverrideInput, FocusSessionUncheckedCreateWithoutStrictnessOverrideInput>
  }

  export type UserUpsertWithoutStrictnessInput = {
    update: XOR<UserUpdateWithoutStrictnessInput, UserUncheckedUpdateWithoutStrictnessInput>
    create: XOR<UserCreateWithoutStrictnessInput, UserUncheckedCreateWithoutStrictnessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStrictnessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStrictnessInput, UserUncheckedUpdateWithoutStrictnessInput>
  }

  export type UserUpdateWithoutStrictnessInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
    sessions?: FocusSessionUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUpdateManyWithoutUserNestedInput
    themes?: UserThemeUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStrictnessInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUncheckedUpdateManyWithoutUserNestedInput
    themes?: UserThemeUncheckedUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FocusSessionUpsertWithoutStrictnessOverrideInput = {
    update: XOR<FocusSessionUpdateWithoutStrictnessOverrideInput, FocusSessionUncheckedUpdateWithoutStrictnessOverrideInput>
    create: XOR<FocusSessionCreateWithoutStrictnessOverrideInput, FocusSessionUncheckedCreateWithoutStrictnessOverrideInput>
    where?: FocusSessionWhereInput
  }

  export type FocusSessionUpdateToOneWithWhereWithoutStrictnessOverrideInput = {
    where?: FocusSessionWhereInput
    data: XOR<FocusSessionUpdateWithoutStrictnessOverrideInput, FocusSessionUncheckedUpdateWithoutStrictnessOverrideInput>
  }

  export type FocusSessionUpdateWithoutStrictnessOverrideInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    breaks?: BreakUpdateManyWithoutSessionNestedInput
  }

  export type FocusSessionUncheckedUpdateWithoutStrictnessOverrideInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    breaks?: BreakUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type FocusSessionCreateWithoutBreaksInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
    strictnessOverride?: StrictnessCreateNestedOneWithoutSessionInput
  }

  export type FocusSessionUncheckedCreateWithoutBreaksInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    userId: string
    strictnessOverride?: StrictnessUncheckedCreateNestedOneWithoutSessionInput
  }

  export type FocusSessionCreateOrConnectWithoutBreaksInput = {
    where: FocusSessionWhereUniqueInput
    create: XOR<FocusSessionCreateWithoutBreaksInput, FocusSessionUncheckedCreateWithoutBreaksInput>
  }

  export type FocusSessionUpsertWithoutBreaksInput = {
    update: XOR<FocusSessionUpdateWithoutBreaksInput, FocusSessionUncheckedUpdateWithoutBreaksInput>
    create: XOR<FocusSessionCreateWithoutBreaksInput, FocusSessionUncheckedCreateWithoutBreaksInput>
    where?: FocusSessionWhereInput
  }

  export type FocusSessionUpdateToOneWithWhereWithoutBreaksInput = {
    where?: FocusSessionWhereInput
    data: XOR<FocusSessionUpdateWithoutBreaksInput, FocusSessionUncheckedUpdateWithoutBreaksInput>
  }

  export type FocusSessionUpdateWithoutBreaksInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    strictnessOverride?: StrictnessUpdateOneWithoutSessionNestedInput
  }

  export type FocusSessionUncheckedUpdateWithoutBreaksInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    strictnessOverride?: StrictnessUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type UserCreateWithoutBlockedAppsInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
    sessions?: FocusSessionCreateNestedManyWithoutUserInput
    strictness?: StrictnessCreateNestedOneWithoutUserInput
    themes?: UserThemeCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlockedAppsInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    strictness?: StrictnessUncheckedCreateNestedOneWithoutUserInput
    themes?: UserThemeUncheckedCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlockedAppsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockedAppsInput, UserUncheckedCreateWithoutBlockedAppsInput>
  }

  export type UserUpsertWithoutBlockedAppsInput = {
    update: XOR<UserUpdateWithoutBlockedAppsInput, UserUncheckedUpdateWithoutBlockedAppsInput>
    create: XOR<UserCreateWithoutBlockedAppsInput, UserUncheckedCreateWithoutBlockedAppsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlockedAppsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlockedAppsInput, UserUncheckedUpdateWithoutBlockedAppsInput>
  }

  export type UserUpdateWithoutBlockedAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
    sessions?: FocusSessionUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUpdateOneWithoutUserNestedInput
    themes?: UserThemeUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockedAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUncheckedUpdateOneWithoutUserNestedInput
    themes?: UserThemeUncheckedUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserThemeCreateWithoutThemeInput = {
    id?: string
    user: UserCreateNestedOneWithoutThemesInput
  }

  export type UserThemeUncheckedCreateWithoutThemeInput = {
    id?: string
    userId: string
  }

  export type UserThemeCreateOrConnectWithoutThemeInput = {
    where: UserThemeWhereUniqueInput
    create: XOR<UserThemeCreateWithoutThemeInput, UserThemeUncheckedCreateWithoutThemeInput>
  }

  export type UserThemeCreateManyThemeInputEnvelope = {
    data: UserThemeCreateManyThemeInput | UserThemeCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type UserThemeUpsertWithWhereUniqueWithoutThemeInput = {
    where: UserThemeWhereUniqueInput
    update: XOR<UserThemeUpdateWithoutThemeInput, UserThemeUncheckedUpdateWithoutThemeInput>
    create: XOR<UserThemeCreateWithoutThemeInput, UserThemeUncheckedCreateWithoutThemeInput>
  }

  export type UserThemeUpdateWithWhereUniqueWithoutThemeInput = {
    where: UserThemeWhereUniqueInput
    data: XOR<UserThemeUpdateWithoutThemeInput, UserThemeUncheckedUpdateWithoutThemeInput>
  }

  export type UserThemeUpdateManyWithWhereWithoutThemeInput = {
    where: UserThemeScalarWhereInput
    data: XOR<UserThemeUpdateManyMutationInput, UserThemeUncheckedUpdateManyWithoutThemeInput>
  }

  export type UserThemeScalarWhereInput = {
    AND?: UserThemeScalarWhereInput | UserThemeScalarWhereInput[]
    OR?: UserThemeScalarWhereInput[]
    NOT?: UserThemeScalarWhereInput | UserThemeScalarWhereInput[]
    id?: StringFilter<"UserTheme"> | string
    userId?: StringFilter<"UserTheme"> | string
    themeId?: StringFilter<"UserTheme"> | string
  }

  export type UserCreateWithoutThemesInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
    sessions?: FocusSessionCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppCreateNestedManyWithoutUserInput
    strictness?: StrictnessCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutThemesInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppUncheckedCreateNestedManyWithoutUserInput
    strictness?: StrictnessUncheckedCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutThemesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThemesInput, UserUncheckedCreateWithoutThemesInput>
  }

  export type ThemeCreateWithoutUserThemesInput = {
    id?: string
    name: string
    description?: string | null
    quoteSet?: ThemeCreatequoteSetInput | string[]
    exerciseSet?: ThemeCreateexerciseSetInput | string[]
    isPremiun?: boolean
  }

  export type ThemeUncheckedCreateWithoutUserThemesInput = {
    id?: string
    name: string
    description?: string | null
    quoteSet?: ThemeCreatequoteSetInput | string[]
    exerciseSet?: ThemeCreateexerciseSetInput | string[]
    isPremiun?: boolean
  }

  export type ThemeCreateOrConnectWithoutUserThemesInput = {
    where: ThemeWhereUniqueInput
    create: XOR<ThemeCreateWithoutUserThemesInput, ThemeUncheckedCreateWithoutUserThemesInput>
  }

  export type UserUpsertWithoutThemesInput = {
    update: XOR<UserUpdateWithoutThemesInput, UserUncheckedUpdateWithoutThemesInput>
    create: XOR<UserCreateWithoutThemesInput, UserUncheckedCreateWithoutThemesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutThemesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutThemesInput, UserUncheckedUpdateWithoutThemesInput>
  }

  export type UserUpdateWithoutThemesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
    sessions?: FocusSessionUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutThemesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUncheckedUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUncheckedUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThemeUpsertWithoutUserThemesInput = {
    update: XOR<ThemeUpdateWithoutUserThemesInput, ThemeUncheckedUpdateWithoutUserThemesInput>
    create: XOR<ThemeCreateWithoutUserThemesInput, ThemeUncheckedCreateWithoutUserThemesInput>
    where?: ThemeWhereInput
  }

  export type ThemeUpdateToOneWithWhereWithoutUserThemesInput = {
    where?: ThemeWhereInput
    data: XOR<ThemeUpdateWithoutUserThemesInput, ThemeUncheckedUpdateWithoutUserThemesInput>
  }

  export type ThemeUpdateWithoutUserThemesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quoteSet?: ThemeUpdatequoteSetInput | string[]
    exerciseSet?: ThemeUpdateexerciseSetInput | string[]
    isPremiun?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThemeUncheckedUpdateWithoutUserThemesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quoteSet?: ThemeUpdatequoteSetInput | string[]
    exerciseSet?: ThemeUpdateexerciseSetInput | string[]
    isPremiun?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutYoutubeAllowlistInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
    sessions?: FocusSessionCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppCreateNestedManyWithoutUserInput
    strictness?: StrictnessCreateNestedOneWithoutUserInput
    themes?: UserThemeCreateNestedOneWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutYoutubeAllowlistInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppUncheckedCreateNestedManyWithoutUserInput
    strictness?: StrictnessUncheckedCreateNestedOneWithoutUserInput
    themes?: UserThemeUncheckedCreateNestedOneWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutYoutubeAllowlistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutYoutubeAllowlistInput, UserUncheckedCreateWithoutYoutubeAllowlistInput>
  }

  export type UserUpsertWithoutYoutubeAllowlistInput = {
    update: XOR<UserUpdateWithoutYoutubeAllowlistInput, UserUncheckedUpdateWithoutYoutubeAllowlistInput>
    create: XOR<UserCreateWithoutYoutubeAllowlistInput, UserUncheckedCreateWithoutYoutubeAllowlistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutYoutubeAllowlistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutYoutubeAllowlistInput, UserUncheckedUpdateWithoutYoutubeAllowlistInput>
  }

  export type UserUpdateWithoutYoutubeAllowlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
    sessions?: FocusSessionUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUpdateOneWithoutUserNestedInput
    themes?: UserThemeUpdateOneWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutYoutubeAllowlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUncheckedUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUncheckedUpdateOneWithoutUserNestedInput
    themes?: UserThemeUncheckedUpdateOneWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserAchievementCreateWithoutAchievementInput = {
    id?: string
    unlockedAt?: Date | string
    user: UserCreateNestedOneWithoutAchievementsInput
  }

  export type UserAchievementUncheckedCreateWithoutAchievementInput = {
    id?: string
    unlockedAt?: Date | string
    userId: string
  }

  export type UserAchievementCreateOrConnectWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    create: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementCreateManyAchievementInputEnvelope = {
    data: UserAchievementCreateManyAchievementInput | UserAchievementCreateManyAchievementInput[]
    skipDuplicates?: boolean
  }

  export type UserAchievementUpsertWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    update: XOR<UserAchievementUpdateWithoutAchievementInput, UserAchievementUncheckedUpdateWithoutAchievementInput>
    create: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementUpdateWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    data: XOR<UserAchievementUpdateWithoutAchievementInput, UserAchievementUncheckedUpdateWithoutAchievementInput>
  }

  export type UserAchievementUpdateManyWithWhereWithoutAchievementInput = {
    where: UserAchievementScalarWhereInput
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyWithoutAchievementInput>
  }

  export type UserCreateWithoutAchievementsInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
    sessions?: FocusSessionCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppCreateNestedManyWithoutUserInput
    strictness?: StrictnessCreateNestedOneWithoutUserInput
    themes?: UserThemeCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistCreateNestedManyWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAchievementsInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppUncheckedCreateNestedManyWithoutUserInput
    strictness?: StrictnessUncheckedCreateNestedOneWithoutUserInput
    themes?: UserThemeUncheckedCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAchievementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
  }

  export type AchievementCreateWithoutUserAchievementsInput = {
    id?: string
    name: string
    description: string
    condition: string
    icon?: string | null
  }

  export type AchievementUncheckedCreateWithoutUserAchievementsInput = {
    id?: string
    name: string
    description: string
    condition: string
    icon?: string | null
  }

  export type AchievementCreateOrConnectWithoutUserAchievementsInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
  }

  export type UserUpsertWithoutAchievementsInput = {
    update: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
  }

  export type UserUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
    sessions?: FocusSessionUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUpdateOneWithoutUserNestedInput
    themes?: UserThemeUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUncheckedUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUncheckedUpdateOneWithoutUserNestedInput
    themes?: UserThemeUncheckedUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AchievementUpsertWithoutUserAchievementsInput = {
    update: XOR<AchievementUpdateWithoutUserAchievementsInput, AchievementUncheckedUpdateWithoutUserAchievementsInput>
    create: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
    where?: AchievementWhereInput
  }

  export type AchievementUpdateToOneWithWhereWithoutUserAchievementsInput = {
    where?: AchievementWhereInput
    data: XOR<AchievementUpdateWithoutUserAchievementsInput, AchievementUncheckedUpdateWithoutUserAchievementsInput>
  }

  export type AchievementUpdateWithoutUserAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AchievementUncheckedUpdateWithoutUserAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutSchedulesInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
    sessions?: FocusSessionCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppCreateNestedManyWithoutUserInput
    strictness?: StrictnessCreateNestedOneWithoutUserInput
    themes?: UserThemeCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSchedulesInput = {
    id?: string
    email: string
    name?: string
    password?: string | null
    avatar?: string | null
    isPremium?: boolean
    createdAt?: Date | string
    strictnessLevel?: number
    totalFocusSeconds?: number
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
    blockedApps?: BlockedAppUncheckedCreateNestedManyWithoutUserInput
    strictness?: StrictnessUncheckedCreateNestedOneWithoutUserInput
    themes?: UserThemeUncheckedCreateNestedOneWithoutUserInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSchedulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
  }

  export type UserUpsertWithoutSchedulesInput = {
    update: XOR<UserUpdateWithoutSchedulesInput, UserUncheckedUpdateWithoutSchedulesInput>
    create: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSchedulesInput, UserUncheckedUpdateWithoutSchedulesInput>
  }

  export type UserUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
    sessions?: FocusSessionUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUpdateOneWithoutUserNestedInput
    themes?: UserThemeUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strictnessLevel?: IntFieldUpdateOperationsInput | number
    totalFocusSeconds?: IntFieldUpdateOperationsInput | number
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
    blockedApps?: BlockedAppUncheckedUpdateManyWithoutUserNestedInput
    strictness?: StrictnessUncheckedUpdateOneWithoutUserNestedInput
    themes?: UserThemeUncheckedUpdateOneWithoutUserNestedInput
    youtubeAllowlist?: YoutubeAllowlistUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OAuthAccountCreateManyUserInput = {
    id?: string
    provider: string
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
  }

  export type FocusSessionCreateManyUserInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    duration?: number | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
  }

  export type BlockedAppCreateManyUserInput = {
    id?: string
    appName: string
    browserUrl?: string | null
    isBlocked?: boolean
  }

  export type YoutubeAllowlistCreateManyUserInput = {
    id?: string
    videoId: string
    url: string
    title?: string | null
    thumbnail?: string | null
    addedAt?: Date | string
  }

  export type UserAchievementCreateManyUserInput = {
    id?: string
    unlockedAt?: Date | string
    achievementId: string
  }

  export type ScheduleCreateManyUserInput = {
    id?: string
    label: string
    startTime: string
    endTime: string
    daysOfWeek?: ScheduleCreatedaysOfWeekInput | number[]
    isActive?: boolean
    timezone?: string
  }

  export type OAuthAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OAuthAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OAuthAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FocusSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    breaks?: BreakUpdateManyWithoutSessionNestedInput
    strictnessOverride?: StrictnessUpdateOneWithoutSessionNestedInput
  }

  export type FocusSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    breaks?: BreakUncheckedUpdateManyWithoutSessionNestedInput
    strictnessOverride?: StrictnessUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type FocusSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedAppUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appName?: StringFieldUpdateOperationsInput | string
    browserUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockedAppUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appName?: StringFieldUpdateOperationsInput | string
    browserUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockedAppUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appName?: StringFieldUpdateOperationsInput | string
    browserUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type YoutubeAllowlistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YoutubeAllowlistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YoutubeAllowlistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateOneRequiredWithoutUserAchievementsNestedInput
  }

  export type UserAchievementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievementId?: StringFieldUpdateOperationsInput | string
  }

  export type UserAchievementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievementId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    daysOfWeek?: ScheduleUpdatedaysOfWeekInput | number[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type BreakCreateManySessionInput = {
    id?: string
    takenAt?: Date | string
    adDuration: number
    skipped?: boolean
  }

  export type BreakUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adDuration?: IntFieldUpdateOperationsInput | number
    skipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BreakUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adDuration?: IntFieldUpdateOperationsInput | number
    skipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BreakUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adDuration?: IntFieldUpdateOperationsInput | number
    skipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserThemeCreateManyThemeInput = {
    id?: string
    userId: string
  }

  export type UserThemeUpdateWithoutThemeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutThemesNestedInput
  }

  export type UserThemeUncheckedUpdateWithoutThemeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserThemeUncheckedUpdateManyWithoutThemeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserAchievementCreateManyAchievementInput = {
    id?: string
    unlockedAt?: Date | string
    userId: string
  }

  export type UserAchievementUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type UserAchievementUncheckedUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserAchievementUncheckedUpdateManyWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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