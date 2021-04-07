type parentType = string | null

export const useCreateClassName = (mainClass: string, parentClass?: parentType, modClass?: string[]): string => {

	const classes: string[] = [
		mainClass
	]

	if (parentClass) {
		classes.push(parentClass + "__" + mainClass)
	}

	// if (modClass) {
	// 	classes.push(mainClass + "_" + modClass)
	// }

	if (modClass) {
		modClass.forEach(mod => {
			classes.push(mainClass + "_" + mod)
		})
		
	}

	const result: string = classes.join(' ')

	return result
}
