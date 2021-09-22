import {useCallback, useState} from 'react'
import axios from 'axios'

interface IUseHttp {
	loading: boolean
	request: any
	error: any
	clearError: () => void
}

export const useHttp = (): IUseHttp => {

	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<any>(null)

	const request = useCallback(async (url: string, method: any = 'GET', data: any = null, headers: any = {}) => {

		setLoading(true)

		const options: any = {method, headers, data, url}

		try {		
			const response: any = await axios(options)
			const resData: any = response.data
			setLoading(false)

			return resData

		} catch(e) {
			setLoading(false)
			setError(e)
			throw e
		}

	}, [])

	const clearError = (): void => setError(null)

	return { loading, request, error, clearError }
}