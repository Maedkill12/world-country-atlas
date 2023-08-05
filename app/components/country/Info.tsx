export default function Info({ tag, value }: { tag: string; value: string }) {
  return (
    <p className="text-sm leading-7 truncate">
      <span className="font-semibold">{tag}:</span>{" "}
      <span className="text-gray-700 dark:text-gray-400">{value}</span>
    </p>
  );
}
