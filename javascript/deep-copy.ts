// Really dumb javascript deepcopy. Not properly tested. The easiest deep copy would be Json.parse(JSON.stringify(object))

export function deepCopy(value: unknown): unknown {
  if (value === null) {
    return null;
  }
  if (Array.isArray(value)) {
    return value.map(v => deepCopy(v));
  }
  if (value && typeof value === 'object') {
    const newObject: { [key: string]: unknown } = {};
    Object.entries(value as object).forEach(([k, v]) => {
      if (Array.isArray(v) || typeof v === 'object') {
        newObject[k] = deepCopy(v);
      } else {
        newObject[k] = v;
      }
    });
    return newObject;
  }
}
