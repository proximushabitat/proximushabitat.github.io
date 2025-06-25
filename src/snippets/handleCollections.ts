import { getCollection, getEntry } from "astro:content";


export function getTranslations(post: object, posts: object) {
	//////console.log.log("somePost")
	//////console.log.log(post.filePath?.split('/')[post.filePath?.split('/').length - 1]);
	const translations = posts.filter(onePage => onePage.filePath?.split('/')[onePage.filePath?.split('/').length - 1] == post.filePath?.split('/')[post.filePath?.split('/').length - 1])
	//////console.log.log("translationsBefore");
	//////console.log.log(translations);
	return translations;
}

export function getOneLang(posts: object, lang: string){
	const oneLang = posts.filter(post => 
		{	
			////////////////////////////console.log.log("postFilePath");
			////////////////////////////console.log.log(post.filePath);
			const filePath = post.filePath.split('/');
			////////////////////////////console.log.log("filePath");
			////////////////////////////console.log.log(filePath);
			const thisLang = filePath[filePath.length - 2]; 
			////////////////////////////console.log.log("thisLang");
			////////////////////////////console.log.log(thisLang);
			////////////////////////////console.log.log("lang");
			////////////////////////////console.log.log(lang);
			////////////////////////////console.log.log("thisLang == lang");
			////////////////////////////console.log.log(thisLang == lang);
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
			//////////////////////////////console.log.log("fileName");
			//////////////////////////////console.log.log(fileName);
			const fileNameNoType = fileName?.split(".")[0];
			//////////////////////////////console.log.log("fileNameNoType");
			//////////////////////////////console.log.log(fileNameNoType);
			return fileNameNoType == section;
		}
	);
	return sectionData;
}

export function getItemLang(item: object){
	////////////////////console.log.log("item Lang");
	////////////////////console.log.log(item.id);
	const langNames = {"de": "Deutsch", "en": "English", "fr": "Français"};
	const filePath = item.filePath.split('/');
	const fileLang = filePath[filePath.length - 2];

	const stuff = {full: langNames[fileLang], short: fileLang}
	////////////////////console.log.log("stuff");
	////////////////////console.log.log(stuff);

	return stuff;
}

export function getSectionNameInLang(sections: object, section: string, lang: string){
	const sectionSingle = sections.filter(dat => 
		{
			const fileName = dat.filePath?.split("/")[dat.filePath?.split("/").length - 1];
			const fileNameNoType = fileName?.split(".")[0];
			return fileNameNoType == section;
		});
	////////////////////console.log.log("sectionSingle");
	////////////////////console.log.log(sectionSingle);
	const sectionOneLang = sectionSingle.filter(dat =>
		{
			const fileParent = dat.filePath?.split("/")[dat.filePath?.split("/").length - 2];
			return fileParent == lang;
		}
	);
	////////////////////console.log.log("sectionOneLang");
	////////////////////console.log.log(sectionOneLang);
	const sectionInLang = sectionOneLang[0].data.slug;
	////////////////////console.log.log("sectionInLang");
	////////////////////console.log.log(sectionInLang);
	return sectionInLang;
}

export function getPageUrl(item: object, sections: object){
	////////////////////console.log.log("item url");
	////////////////////console.log.log(item.id);

	var lang = getItemLang(item).short;
	////////////////////console.log.log("item.collection");
	////////////////////console.log.log(item.collection);

	var url = "/";
	url += lang
	url += "/";
	url += getSectionNameInLang(sections, item.collection, lang);
	url += "/";
	url += item.data.slug;
	url += "/";
	////////////////////console.log.log("url");
	////////////////////console.log.log(url);
	return url;
}