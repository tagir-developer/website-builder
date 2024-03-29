import React, { MutableRefObject, useRef, useState } from 'react'
import './CopyLink.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'

interface ICopyLink {
	parentClass?: string
	modClass?: string[]
	value: string
	useLabel?: string
	inputDisabled?: boolean
}

const CopyLink: React.FC<ICopyLink> = ({ parentClass, modClass, value, useLabel, inputDisabled }) => {

	const classes = useCreateClassName('copy-link', parentClass, modClass)

	const [copied, setCopied] = useState<boolean>(false)

	const inputRef = useRef() as MutableRefObject<HTMLInputElement>

	const copyLinkHandler = () => {
		navigator.clipboard.writeText(inputRef.current.value)
		setCopied(true)
		setTimeout(() => setCopied(false), 800)
	}


	return (
		<div className={classes}>
			{useLabel ? <div className="copy-link__input-label">{useLabel}</div> : null}

			{
				inputDisabled
					? <>
						<input
							type="text"
							className="copy-link__input copy-link__input_disabled"
							value={value}
							readOnly
							disabled
							ref={inputRef}
						/>
					</>
					: <>
						<div
							className="copy-link__button"
							onClick={copyLinkHandler}
						></div>
						<input
							type="text"
							className="copy-link__input"
							readOnly
							value={value}
							ref={inputRef}
						/>
					</>
			}

			{copied ? <div className="copy-link__anim-text-copy">{value}</div> : null}
		</div>
	)
}

export default CopyLink