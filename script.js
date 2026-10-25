function knightMoves(start, end) {
	// All 8 possible L-shaped movements for a knight
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

	// Helper function to check if the coordinates are within the 8x8 board

	const isValid = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;

	// The queue stores arrays representing the path taken so far
	const queue = [[start]];

	// Keep track of visited squares to avoid infinite loops
	const visited = new Set();
	visited.add(start.toString());

	while (queue.length > 0) {
		const path = queue.shift();
		const current = path[path.length - 1];

		// Check if the user reached the destination square
		if (current[0] === end[0] && current[1] === end[1]) {
			console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);
			path.forEach(square => console.log(`  [${square}]`));
			return path;
		}

		// Explore all 8 possible moves from the current square
		for (let [dx, dy] of possibleMoves) {
			const nextX = current[0] + dx;
			const nextY = current[1] + dy;
			const nextSquare = [nextX, nextY];

			// If the movie is valid and hasn't been visited yet, add it to the path and queue
			if (isValid(nextSquare) && !visited.has(nextSquare.toString())) {
				visited.add(nextSquare.toString());
				queue.push([...path, nextSquare]);
			}
		}
	}
}

knightMoves([3, 3], [4, 3]);
