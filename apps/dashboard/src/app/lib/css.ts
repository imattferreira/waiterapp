export function compose(...classes: (string | undefined)[]): string {
  return classes
    .filter(Boolean)
    .reduce((acc, className) => acc + ` ${className}`, "");
}
