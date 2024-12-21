export function getTranslations(post: object, posts: object) {
	const translations = posts.filter(onePage => onePage.filePath?.split('/')[onePage.filePath?.split('/').length - 1] == post.filePath?.split('/')[post.filePath?.split('/').length - 1])
	return translations;
}

export function getOneLang(posts: object, lang: string){
	const oneLang = posts.filter(post => post.filePath.split('/')[post.filePath.split('/').length - 2] == lang)
	return oneLang
}