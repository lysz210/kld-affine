declare module 'kld-affine' {
  interface ICoordinate2D {
    x: number
    y: number
  }

  interface IVector2D extends ICoordinate2D {

  }

  interface IMatrix2D {
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number
  }

  class Point2D {
    x: number
    y: number

    constructor (x?: number, y?: number)

    clone (): Point2D

    add (that: ICoordinate2D): Point2D

    subtract (that: ICoordinate2D): Point2D

    multiply (scalar: number): Point2D

    divide (scalar: number): Point2D

    equals (that: ICoordinate2D): boolean

    precisionEquals (that: ICoordinate2D, precision: number): boolean

    lerp (that: ICoordinate2D, t: number): Point2D

    distanceFrom (that: ICoordinate2D): number

    min (that: ICoordinate2D): Point2D

    max (that: ICoordinate2D): Point2D

    transform (matrix: IMatrix2D): Point2D

    toString (): string
  }

  class Vector2D {
    x: number
    y: number

    constructor (x?: number, y?: number)

    static fromPoints(p1: ICoordinate2D, p2: ICoordinate2D): Vector2D

    length (): number

    magnitude (): number

    dot (that: IVector2D): number

    cross (that: IVector2D): number

    determinant (that: IVector2D): number

    unit (): Vector2D

    add (that: IVector2D): Vector2D

    subtract (that: IVector2D): Vector2D

    multiply (scalar: number): Vector2D

    divide (scalar: number): Vector2D

    angleBetween (that: Vector2D): number

    perp (): Vector2D

    perpendicular (that: IVector2D): Vector2D

    project (that: Vector2D): Vector2D

    transform (matrix: IMatrix2D): Vector2D

    equals (that: IVector2D): boolean

    precisionEquals(that: IVector2D, precision: number): boolean

    toString (): string
  }
  
  class Matrix2D {
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number

    constructor (
      a?: number,
      b?: number,
      c?: number,
      d?: number,
      e?: number,
      f?: number
    )

    static IDENTITY: Matrix2D

    static translation (tx: number, ty: number): Matrix2D

    static scaling (scale: number): Matrix2D

    static scalingAt (scale: number, center: ICoordinate2D): Matrix2D

    static nonUniformScaling (scaleX: number, scaleY: number): Matrix2D

    static nonUniformScalingAt (scaleX: number, scalyY: number, center: ICoordinate2D): Matrix2D

    static rotation (radians: number): Matrix2D

    static rotationAt (radians: number, center: ICoordinate2D): Matrix2D

    static rotationFromVector (vector: Vector2D): Matrix2D

    static xFlip (): Matrix2D

    static yFlip (): Matrix2D

    static xSkew (radians: number): Matrix2D

    static ySkew (radians: number): Matrix2D

    multiply (that: Matrix2D): Matrix2D

    inverse (): Matrix2D

    translate (tx: number, ty: number): Matrix2D

    scale (scale: number): Matrix2D

    scaleAt (scale: number, center: ICoordinate2D): Matrix2D

    scaleNonUniform (scaleX: number, scaleY: number): Matrix2D

    scaleNonUniformAt (scaleX: number, scaleY: number, center: ICoordinate2D): Matrix2D

    rotate (radians: number): Matrix2D

    rotateAt (radians: number, center: ICoordinate2D): Matrix2D

    rotateFromVector (vector: number): Matrix2D

    flipX (): Matrix2D

    flipY (): Matrix2D

    skewX (radians: number): Matrix2D

    skewY (radians: number): Matrix2D

    isIndentity (): boolean

    isInvertible (): boolean

    getScale (): { scaleX: number, scaleY: number }

    getDecomposition (): { translation: Matrix2D, rotation: Matrix2D, scale: Matrix2D, rotation0: Matrix2D }

    equals (that: IMatrix2D): boolean

    precisionEquals (that: IMatrix2D, precision: number): boolean

    toString (): string
  }

}