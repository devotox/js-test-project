import assert from 'assert';

export const parseInput = (input) => {
  // To Be Defined
}


export const run = (input) => {
  // To Be Defined
}

// Easy Test
(() => {
	const input = `
				5 5
				1 2 N
				LMLMLMLMM
				3 3 E
				MMRMMRMRRM
				`
	
	const parsedInput = parseInput(input);
	const result = run(parsedInput);
  
	console.info(result.join('\n')); // eslint-disable-line

	assert(result[0] === "1 3 N", 'result[0] === "1 3 N"');
	assert(result[1] === "5 1 E", 'result[1] === "5 1 E"');
})();
