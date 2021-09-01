import {useCallback, useState} from 'react'

interface IUseUserScript {
	loading: boolean


}

export const useUserScripts = (scripts: string): IUseUserScript => {

	// const [loading, setLoading] = useState<boolean>(false)

	let inlineScripts: RegExpMatchArray | null = scripts.match(/(?<=<script[^>]*>)([\s\S]*?)(?=<\/script>)/g)
	if (inlineScripts) inlineScripts.join("\n")

	const simpleSourceScripts: RegExpMatchArray | null = scripts.match(/(?<=<script\s+[^a]*src=").+(?=")/g)

	const asyncSourceScripts: RegExpMatchArray | null = scripts.match(/((?<=<script\s+.*async\s+.*src=").+(?=")|(?<=<script\s+.*src=").+(?="\s+.*async))/g)

	return { loading }
}