type ConfigValue = string | null | undefined | boolean;

export const resolveBoolean = (value: ConfigValue, defaultValue = false): boolean => {
  if (value === null || value === undefined) return defaultValue;
  if (value === true || value === 'true' || value === 'TRUE') return true;
  if (value === false || value === 'false' || value === 'FALSE') return false;
  throw new Error(`Invalid Boolean configuration: ${value}`);
};

export const resolveInteger = (value: ConfigValue, defaultValue = 0): number => {
  if (typeof value === 'string' && /^(-)?\d+$/.test(value)) {
    return parseInt(value, 10);
  } else if (typeof value === 'number') return value;
  else if (value === null || value === undefined) return defaultValue;
  throw new Error(`Invalid Integer configuration: ${value}`);
};

export const resolveArray = (value: ConfigValue, defaultValue: string[]): string[] => {
  if (typeof value === 'string') {
    const splitted = value.split(',').map((i) => i.trim());
    if (splitted.includes(''))
      throw new Error(`Invalid Array configuration: ${value}; allow only non empty or whitespace`);
    return splitted;
  } else if (value === null || value === undefined) return defaultValue;
  throw new Error(`Invalid Array configuration: ${value}`);
};
