export function classNames(...arguments_: any[]) {
	let result = new Set();

	for (let item of arguments_) {
		let type = typeof item;

		if (type === "string" && item.length > 0) {
			result.add(item);
		} else if (type === "object" && item !== null) {
			for (let [key, value] of Object.entries(item)) {
				if (value) {
					result.add(key);
				}
			}
		}
	}

	return [...result].join(" ");
}
