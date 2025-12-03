import proficiencies from "@site/src/components/tables/proficiencies.yml";
import conditions from "@site/src/components/tables/conditions.yml";

export {
	// re-exporting for easy access elsewhere
	proficiencies,
	conditions,
};

export const proficienciesMap = proficiencies.reduce((acc, item) => {
	acc[item.name.toLowerCase()] = item;
	return acc;
}, {});
export const conditionsMap = conditions.reduce((acc, item) => {
	acc[item.name.toLowerCase()] = item;
	return acc;
}, {});

export const allFeaturesMap = {
	...proficienciesMap,
	...conditionsMap,
};

export const allFeatureNames = Object.keys(allFeaturesMap);

export const allFeatureNamesRegex = new RegExp(`\\b(${allFeatureNames.join("|")})\\b`, "gi");
