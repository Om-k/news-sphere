export const mergeUnique = (arr1: string[], arr2: string[]): string[] =>
  Array.from(new Set([...arr1, ...arr2]));

export const makeUniqueObjectsByKey = (
  mergedArray: any[],
  key: string
): any[] => {
  const uniqueObjects = mergedArray.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t[key] === value[key])
  );
  return uniqueObjects;
};
