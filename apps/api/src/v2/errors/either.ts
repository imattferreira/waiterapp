type Either<L, R> = Left<L> | Right<R>;

export class Left<L> {
  private constructor(readonly error: L) {}

  isLeft(): this is Left<L> {
    return true;
  }

  isRight(): this is Right<never> {
    return false;
  }

  static commit<T>(value: T): Left<T> {
    return new Left(value);
  }
}

export class Right<R> {
  private constructor(readonly value: R) {}

  isLeft(): this is Left<never> {
    return false;
  }

  isRight(): this is Right<R> {
    return true;
  }

  static commit<T>(value: T): Right<T> {
    return new Right(value);
  }
}

export default Either;
