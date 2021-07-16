import React from 'react'
import { useState } from "react"

interface IUseAlert {
	messageHandler: (messageType: string, successCb: Function, errorCb: Function) => any
}

export const useAlert = (alertDelay: number, clearMessageFunc: Function): IUseAlert => {
	// const [type, setType] = useState(initialType)
	// const [message, setMessage] = useState(initialMessage)

	// if (messageType === 'danger') {
	// 	messagePopup.showHide(alertDelay)
	// 	setTimeout(() => {
	// 		supportClearRegisterMessage()
	// 	}, alertDelay)
	// }

	// if (messageType === 'success') {

	// 	setTimeout(() => {
	// 		supportClearRegisterMessage()
	// 		history.goBack()
	// 	}, alertDelay)
	// }

	// const [messageHandler, setMessageHandler] = useState<Function>(() => {})

	const onSuccess = (cb: Function) => {
		setTimeout(() => {
			clearMessageFunc()
			cb()
		}, alertDelay)
	}

	const onError = (cb: Function = () => {}) => {
		cb()
		setTimeout(() => {
			clearMessageFunc()
		}, alertDelay)
	}

	// if (messageType === 'danger') {
	// 	setMessageHandler(onError)
	// }

	// if (messageType === 'success') {
	// 	setMessageHandler(onSuccess)
	// }

	const messageHandler = (messageType: string, successCb: Function, errorCb: Function): any => {
		if (messageType === 'danger') {
			// return onError(errorCb)
			console.log('Произошла ошибка')
		}

		if (messageType === 'success') {
			// return onSuccess(successCb)
			console.log('Успех')
		}

		// if (messageType === 'basic') {
		// 	return () => {}
		// }
	}

	return {
		messageHandler
	}

}