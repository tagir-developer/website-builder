import { useState } from "react"

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
}

interface IUseSliderConfig {
	defaultValues: number[]
	domain: number[]
	step: number
}

export const useSlider = ({
		defaultValues,
		domain,
		step
	}: IUseSliderConfig): IUseSlider => {

	const [values, setValues] = useState<readonly number[]>(defaultValues)

	const onChange = (valuesParam: ReadonlyArray<number>): void => {
		setValues(valuesParam)
	}

	return {
		bind: {values, onChange, domain, step},
		values,
		onChange,
		domain,
		step
	}

}