import conditionsTable from "@site/src/components/tables/conditions.yml";
import difficultiesTable from "@site/src/components/tables/difficulties.yml";
import ideologiesTable from "@site/src/components/tables/ideologies.yml";
import proficienciesTable from "@site/src/components/tables/proficiencies.yml";
import sizesTable from "@site/src/components/tables/sizes.yml";
import skillsTable from "@site/src/components/tables/skills.yml";
import statsTable from "@site/src/components/tables/stats.yml";

export {
	// re-exporting for easy access elsewhere
	conditionsTable,
	difficultiesTable,
	ideologiesTable,
	proficienciesTable,
	sizesTable,
	skillsTable,
	statsTable,
};

function buildMap(
	sourceTable = [{}],
	sourceName = "Unknown",
	link = null, // link = "/rules/directory/docs_page"
	sublink = "", // sublink = "#header-id"
) {
	var nameTable = sourceTable.reduce((acc, item) => {
		if (item.name !== undefined) {
			acc[item.name.toLowerCase()] = item;
			item.source = sourceName;
			if (!item.link) { if (link) { item.link = link; } }
			if (!item.sublink) { if (sublink) { item.sublink = sublink; } }
		}
		return acc;
	}, {});
	var aliasTable = sourceTable.reduce((acc, item) => {
		if (item.alias !== undefined) {
			acc[item.alias.toLowerCase()] = item;
			item.source = sourceName;
			if (!item.link) { if (link) { item.link = link; } }
			if (!item.sublink) { if (sublink) { item.sublink = sublink; } }
		}
		return acc;
	}, {});
	return { ...nameTable, ...aliasTable }
}

export const conditions = buildMap(conditionsTable, "Condition", "/rules/core_rules/conditions");
export const difficulties = buildMap(difficultiesTable, "Difficulty", "/rules/core_rules/tests", "#table-challenge-difficulties");
export const ideologies = buildMap(ideologiesTable, "Ideology");
export const proficiencies = buildMap(proficienciesTable, "Proficiency", "/rules/core_rules/characters", "#proficiencies");
export const sizes = buildMap(sizesTable, "Size", "/rules/core_rules/characters", "#table-sizes");
export const skills = buildMap(skillsTable, "Skill", "/rules/core_rules/characters", "#skills");
export const stats = buildMap(statsTable, "Stat", "/rules/core_rules/characters");

export const allFeatures = {
	...conditions,
	...difficulties,
	...ideologies,
	...proficiencies,
	...sizes,
	...skills,
	...stats,
};

export const allFeatureNames = Object.keys(allFeatures);

export const allFeatureNamesRegex = new RegExp(`\\b(${allFeatureNames.join("|")})\\b`, "gi");