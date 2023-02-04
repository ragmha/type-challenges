/*
  13 - Hello World
  -------
  by Anthony Fu (@antfu) #warm-up

  ### Question

  Hello, World!

  In Type Challenges, we use the type system itself to do the assertion.

  For this challenge, you will need to change the following code to make the tests pass (no type check errors).

  ```ts
  // expected to be string
  type HelloWorld = any
  ```

  ```ts
  // you should make this work
  type test = Expect<Equal<HelloWorld, string>>
  ```

*/

/* _____________ Your Code Here _____________ */
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T,
>() => T extends Y ? 1 : 2
  ? true
  : false

export type Expect<T extends true> = T
export type IsAny<T> = 0 extends 1 & T ? true : false
export type NotAny<T> = true extends IsAny<T> ? false : true

type HelloWorld = string // expected to be a string

/* _____________ Test Cases _____________ */

export type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]
