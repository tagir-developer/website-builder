import React from 'react'
import { useState } from "react"

interface IUseAlert {
	bind: {
		type: string
		message: string
	}
}

export const useAlert = (initialType: string, initialMessage: string): IUseAlert => {
	const [type, setType] = useState(initialType)
	const [message, setMessage] = useState(initialMessage)

	

	return {
		bind: {type, message}
	}

}