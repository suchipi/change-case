/**
 * Lower case the first character of an input string.
 */
export function lowerCaseFirst(input: string) {
  return input.charAt(0).toLowerCase() + input.slice(1);
}
