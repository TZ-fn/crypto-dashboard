export default function capitalise(string: string) {
  return `${string[0]!.toLocaleUpperCase()}${string.slice(1)}`;
}
