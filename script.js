function knightMoves(start, end) {
	const possibleMoves = [
		[1, 2],
		[1, -2],
		[-1, 2],
		[-1, -2],
		[2, 1],
		[2, -1],
		[-2, 1],
		[-2, -1],
	];

	const isValid = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;

	const queue = [[start]];

	const visited = new Set();
	visited.add(start.toString());

	while (queue.length > 0) {
		const path = queue.shift();
		const current = path[path.length - 1];

		if (current[0] === end[0] && current[1] === end[1]) {
			console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);
			path.forEach(square => console.log(`  [${square}]`));
			return path;
		}

		for (let [dx, dy] of possibleMoves) {
			const nextX = current[0] + dx;
			const nextY = current[1] + dy;
			const nextSquare = [nextX, nextY];

			if (isValid(nextSquare) && !visited.has(nextSquare.toString())) {
				visited.add(nextSquare.toString());
				queue.push([...path, nextSquare]);
			}
		}
	}
}

knightMoves([3, 3], [4, 3]);
