import reactStringReplace from "react-string-replace";
import Tooltip from "../components/Tooltip";
import { allFeatureNamesRegex } from "./tables";
import tableDataDefault from "./YAMLTable.yml";
const headersDefault = ["Name", "Description"];
const valuesDefault = ["name", "desc"];
const alignDefault = null;
// align = ["left", "right", "center"]
const filtersDefault = {};
// filters = {"tags" : ["tag1", "tag4"]}
const sortDefault = "name";
// sort = ["-cost", "name"]

// dynamicSort() and dynamicSortMultiple()
// credit: https://stackoverflow.com/users/300011/ege-%c3%96zcan
// source: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
function dynamicSort(property) {
	var sortOrder = 1;
	if (property[0] === "-") {
		sortOrder = -1;
		property = property.substr(1);
	}
	return function (a, b) {
		/* next line works with strings and numbers,
		 * and you may want to customize it to your needs
		 */
		var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
		return result * sortOrder;
	};
}
function dynamicSortMultiple() {
	/*
	 * save the arguments object as it will be overwritten
	 * note that arguments object is an array-like object
	 * consisting of the names of the properties to sort by
	 */
	var props = arguments;
	return function (obj1, obj2) {
		var i = 0,
			result = 0,
			numberOfProperties = props.length;
		/* try getting a different result from 0 (equal)
		 * as long as we have extra properties to compare
		 */
		while (result === 0 && i < numberOfProperties) {
			result = dynamicSort(props[i])(obj1, obj2);
			i++;
		}
		return result;
	};
}
// Use of dynamicSortMultiple for coercing array into multiple arguments
// and a single string into an array with 1 element for the same purpose
// to be used with filteredData[] in YAMLTableRow before rendering the data
function sortRule(arg) {
	return dynamicSortMultiple.apply(this, Array.isArray(arg) ? arg : [`${arg}`]);
}
//

function YAMLTableHeader({ headers, align }) {
	if (align === null) {
		var align = [];
		for (let i = 0; i < headers.length; i++) {
			align.push("left");
		}
	}
	return (
		<tr>
			{headers.map((header) => (
				<th style={{ "text-align": align[headers.indexOf(header)] }}>{header}</th>
			))}
		</tr>
	);
}

function YAMLTableRow({ tableData, values, align, filters, sort }) {
	if (align === null) {
		var align = [];
		for (let i = 0; i < values.length; i++) {
			align.push("left");
		}
	}
	var filteredData = tableData.filter((data) =>
		Object.keys(filters).every((key) =>
			data[key].includes
				? filters[key].some((filter) => data[key].includes(filter))
				: data[key].includes(filters[key])
		)
	);
	return filteredData.sort(sortRule(sort)).map((data) => (
		<tr>
			{values.map((value) => {
				const displayValue = Array.isArray(data[`${value}`]) ? data[`${value}`].join(", ") : data[`${value}`];
				return (
					<td
						style={{
							"text-align": align[values.indexOf(value)],
							"white-space": "pre-wrap",
						}}
					>
						{value === "desc" || value === "body"
							? reactStringReplace(displayValue, allFeatureNamesRegex, (match, i) =>
									match.toLowerCase() !== data["name"].toLowerCase() && match !== "driving" ? (
										<Tooltip key={i} name={match}>
											{match}
										</Tooltip>
									) : (
										match
									)
							  )
							: displayValue}
					</td>
				);
			})}
		</tr>
	));
}

export default function YAMLTable({
	tableData = tableDataDefault,
	headers = headersDefault,
	values = valuesDefault,
	align = alignDefault,
	filters = filtersDefault,
	sort = sortDefault,
}) {
	return (
		<table>
			<thead>
				<YAMLTableHeader headers={headers} align={align} />
			</thead>
			<tbody>
				<YAMLTableRow tableData={tableData} values={values} align={align} filters={filters} sort={sort} />
			</tbody>
		</table>
	);
}
