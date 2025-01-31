import { getCollection, getEntry } from "astro:content";


export function getTranslations(post: object, posts: object) {
	const translations = posts.filter(onePage => onePage.filePath?.split('/')[onePage.filePath?.split('/').length - 1] == post.filePath?.split('/')[post.filePath?.split('/').length - 1])
	return translations;
}

export function getOneLang(posts: object, lang: string){
	const oneLang = posts.filter(post => 
		{	
			////////////////console.log("postFilePath");
			////////////////console.log(post.filePath);
			const filePath = post.filePath.split('/');
			////////////////console.log("filePath");
			////////////////console.log(filePath);
			const thisLang = filePath[filePath.length - 2]; 
			////////////////console.log("thisLang");
			////////////////console.log(thisLang);
			////////////////console.log("lang");
			////////////////console.log(lang);
			////////////////console.log("thisLang == lang");
			////////////////console.log(thisLang == lang);
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
			//////////////////console.log("fileName");
			//////////////////console.log(fileName);
			const fileNameNoType = fileName?.split(".")[0];
			//////////////////console.log("fileNameNoType");
			//////////////////console.log(fileNameNoType);
			return fileNameNoType == section;
		}
	);
	return sectionData;
}

export function getItemLang(item: object){
	////////console.log("item Lang");
	////////console.log(item.id);
	const langNames = {"de": "Deutsch", "en": "English", "fr": "Français"};
	const filePath = item.filePath.split('/');
	const fileLang = filePath[filePath.length - 2];

	const stuff = {full: langNames[fileLang], short: fileLang}
	////////console.log("stuff");
	////////console.log(stuff);

	return stuff;
}

export function getSectionNameInLang(sections: object, section: string, lang: string){
	const sectionSingle = sections.filter(dat => 
		{
			const fileName = dat.filePath?.split("/")[dat.filePath?.split("/").length - 1];
			const fileNameNoType = fileName?.split(".")[0];
			return fileNameNoType == section;
		});
	////////console.log("sectionSingle");
	////////console.log(sectionSingle);
	const sectionOneLang = sectionSingle.filter(dat =>
		{
			const fileParent = dat.filePath?.split("/")[dat.filePath?.split("/").length - 2];
			return fileParent == lang;
		}
	);
	////////console.log("sectionOneLang");
	////////console.log(sectionOneLang);
	const sectionInLang = sectionOneLang[0].data.slug;
	////////console.log("sectionInLang");
	////////console.log(sectionInLang);
	return sectionInLang;
}

export function getPageUrl(item: object, sections: object){
	////////console.log("item url");
	////////console.log(item.id);

	var lang = getItemLang(item).short;
	////////console.log("item.collection");
	////////console.log(item.collection);

	var url = "/";
	url += lang
	url += "/";
	url += getSectionNameInLang(sections, item.collection, lang);
	url += "/";
	url += item.data.slug;
	url += "/";
	////////console.log("url");
	////////console.log(url);
	return url;
}