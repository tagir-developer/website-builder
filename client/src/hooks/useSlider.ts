import { useEffect, useState } from "react"

export interface IUseSlider {
	bind: {
		values: readonly number[]
		onChange: (valuesParam: ReadonlyArray<number>) => void
		domain: number[]
		step: number
	}
	values: readonly number[]
	domain: number[]
	step: number
	onChange: (valuesParam: ReadonlyArray<number>) => void
	customValues: readonly any[]
}

interface IUseSliderConfig {
	defaultValues: any[]
	domain: number[]
	step: number
	decriptor?: IDecription
}

interface IDecription {
	[key: string]: any[]
}

export const useSlider = ({ defaultValues, domain, step, decriptor }: IUseSliderConfig): IUseSlider => {

	const convertedDefaultValues = (defValues: any[]): readonly number[] => {

		if (typeof defValues[0] === 'number') return defValues

		for (let key in decriptor) {
			if (defValues.toString() === decriptor[key].toString()) {
				const converted: number[] = []
				converted.push(Number(key))
				return converted
			}
		}

		return [0]
	}

	const decriptorFunc = (values: ReadonlyArray<number>): readonly any[] => {
		const newArray = values.map(value => decriptor?.[value])
		return newArray
	}

	const [values, setValues] = useState<readonly number[]>(convertedDefaultValues(defaultValues))
	const [customValues, setCustomValues] = useState<readonly any[]>(decriptor ? decriptorFunc(values) : convertedDefaultValues(defaultValues))

	const onChange = (valuesParam: ReadonlyArray<number>): void => {
		setValues(valuesParam)
	}

	useEffect(() => {
		const newValues = decriptorFunc(values)
		setCustomValues(newValues)
		// eslint-disable-next-line
	}, [values])

	return {
		bind: { values, onChange, domain, step },
		values,
		onChange,
		domain,
		step,
		customValues
	}

}





// export interface IUseSlider {
// 	bind: {
// 		values: readonly number[]
// 		onChange: (valuesParam: ReadonlyArray<number>) => void
// 		domain: number[]
// 		step: number
// 	}
// 	values: readonly number[]
// 	domain: number[]
// 	step: number
// 	onChange: (valuesParam: ReadonlyArray<number>) => void
// }

// interface IUseSliderConfig {
// 	defaultValues: number[]
// 	domain: number[]
// 	step: number
// }

// export const useSlider = ({
// 		defaultValues,
// 		domain,
// 		step
// 	}: IUseSliderConfig): IUseSlider => {

// 	const [values, setValues] = useState<readonly number[]>(defaultValues)

// 	const onChange = (valuesParam: ReadonlyArray<number>): void => {
// 		setValues(valuesParam)
// 	}

// 	return {
// 		bind: {values, onChange, domain, step},
// 		values,
// 		onChange,
// 		domain,
// 		step
// 	}

// }