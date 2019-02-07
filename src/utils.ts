import { TodoItem } from "./list-view";

export function add<T extends TodoItem>(item: T, items: T[]): T[] {
  if (item) {
    return [item, ...items];
  } else {
    return items;
  }
}

export function remove<T extends TodoItem>(removed: T, items: T[]): T[] {
  return items.filter((item: T) => item.id !== removed.id && item);
}

export function update<T extends TodoItem>(updated: T, items: T[]): T[] {
  return items.map(item => (item.id !== updated.id ? item : updated));
}
