function configure(
  configs: Record<string, unknown> | Record<string, unknown>[]
) {
  return Array.isArray(configs)
    ? configs.reduce((acc, curr) => ({ ...acc, ...curr }), {})
    : configs;
}

export default configure;
