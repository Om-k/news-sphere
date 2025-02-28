export const mergeUnique = (arr1: string[], arr2: string[]): string[] => 
    Array.from(new Set([...arr1, ...arr2]));
  