export function compose(...classes: (string | undefined)[]) {
  return classes
    .filter(Boolean)
    .reduce((acc, className) => acc + ` ${className}`, "");
}
