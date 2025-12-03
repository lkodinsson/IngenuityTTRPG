import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import YAMLTable from "../components/YAMLTable";
import Tooltip from "../components/Tooltip";

export default {
	...MDXComponents, // Re-use the default mapping
	YAMLTable,
	Tooltip,
};
