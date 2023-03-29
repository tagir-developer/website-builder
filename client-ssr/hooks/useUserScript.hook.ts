
export interface IUseUserScript {
	inlineScripts: string | null
	simpleSourceScripts: RegExpMatchArray | null
	asyncSourceScripts: RegExpMatchArray | null
}

export const useUserScripts = (scripts: string): IUseUserScript => {

	let findedInlineScripts: RegExpMatchArray | null = scripts.match(/(?<=<script[^>]*>)([\s\S]*?)(?=<\/script>)/g)
	const inlineScripts: string | null = findedInlineScripts ? findedInlineScripts.map(i => i.trim()).filter(i => i !== "").join("\n") : null

	const simpleSourceScripts: RegExpMatchArray | null = scripts.match(/(?<=<script\s+.*src=")(?<!<script.*async.*).+(?=")(?=.*>\s*<\/script>)(?!".*async.*>)/g)

	const asyncSourceScripts: RegExpMatchArray | null = scripts.match(/((?<=<script.*async.*src=").+(?=")(?=.*>\s*<\/script>)|(?<=<script.*src=").+(?=")(?=.*async.*>\s*<\/script>))/g)

	return { inlineScripts, simpleSourceScripts, asyncSourceScripts }
}