export function convertToSerializableObject(leanDocument) {
  if (!leanDocument) return null;
  return JSON.parse(JSON.stringify(leanDocument));
}

