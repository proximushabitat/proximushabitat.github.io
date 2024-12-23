import { getCollection } from "astro:content";

export function getTranslations(post: object, posts: object) {
	const translations = posts.filter(onePage => onePage.filePath?.split('/')[onePage.filePath?.split('/').length - 1] == post.filePath?.split('/')[post.filePath?.split('/').length - 1])
	return translations;
}

export function getOneLang(posts: object, lang: string){
	const oneLang = posts.filter(post => 
		{	
			////console.log("postFilePath");
			////console.log(post.filePath);
			const filePath = post.filePath.split('/');
			////console.log("filePath");
			////console.log(filePath);
			const thisLang = filePath[filePath.length - 2]; 
			////console.log("thisLang");
			////console.log(thisLang);
			////console.log("lang");
			////console.log(lang);
			////console.log("thisLang == lang");
			////console.log(thisLang == lang);
			return thisLang == lang;
		}
	);
	return oneLang
}

export async function getSection(section: string){
	var sectionData = await getCollection('sections');
	sectionData = sectionData.filter(dat => 
		{
			const fileName = dat.filePath?.split("/")[dat.filePath?.split("/").length - 1];
			//////console.log("fileName");
			//////console.log(fileName);
			const fileNameNoType = fileName?.split(".")[0];
			//////console.log("fileNameNoType");
			//////console.log(fileNameNoType);
			return fileNameNoType == section;
		}
	);
	return sectionData;
}