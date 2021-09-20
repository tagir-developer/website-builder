import axios, { AxiosError } from 'axios'
import { useState } from "react"

export interface IUseRequestHook {
	sendNameAndPhone: Function
	loading: boolean
}

export const useRequestHook = (): IUseRequestHook => {

	const [loading, setLoading] = useState<boolean>(false)

	const sendNameAndPhone = async (projectId: string, formName: string, name: string, phone: string) => {
		setLoading(true)
		try {
			const response = await axios.post('http://localhost:5000/api/blocks/send-name-phone', {projectId, formName, name, phone})
			console.log('ПОЛУЧЕННЫЕ ДАННЫЕ В ХУКЕ', response.data)
			setLoading(false)
			return response.data
		} catch (error) {
			setLoading(false)
			const e = error as AxiosError
			if (e.response) {
				console.log('Ошибка отправки формы', e.response.data)
				return {
					errorData: e.response.data,
					message: 'ПРОИЗОШЛА ОШИБКА! ' + e.response.data.message
				}
			}
		}
	}

	return {
		sendNameAndPhone,
		loading
	}

}