import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import {
	allFeatures,
	conditions,
	difficulties,
	ideologies,
	proficiencies,
	sizes,
	skills,
	stats,
} from "./tables";

export default function Tooltip({
	data, // you can explicitly pass in data (one object from the yaml), if you have it
	name, // or just pass in the name of something, and we'll look it up
	source,
	place = "bottom",
	link,
	sublink,
}) {
	if (source) {
		if (source.toString().toLowerCase() === "conditions") { source = conditions; }
		if (source.toString().toLowerCase() === "difficulties") { source = difficulties; }
		if (source.toString().toLowerCase() === "ideologies") { source = ideologies; }
		if (source.toString().toLowerCase() === "proficiencies") { source = proficiencies; }
		if (source.toString().toLowerCase() === "sizes") { source = sizes; }
		if (source.toString().toLowerCase() === "skills") { source = skills; }
		if (source.toString().toLowerCase() === "stats") { source = stats; }
	} else { source = allFeatures; }
	if (name) { data = source[name.toLowerCase()]; } else { return "(TOOLTIP)"; }
	if (data !== undefined) {
		if (link === undefined) { if (data.link === undefined) { link = null; } else { link = data.link; } }
		if (sublink === undefined) { if (data.sublink === undefined) { sublink = ""; } else { sublink = data.sublink; } }
		return (
			<>
				<a
					data-tooltip-id={`tooltip-${data.name}`}
					data-tooltip-delay-hide={100}
					style={{
						color: "inherit",
						textDecorationStyle: "dashed",
						textDecorationLine: "underline",
					}}
				>
					{name || "◕‿‿◕"}
				</a>
				<ReactTooltip
					id={`tooltip-${data.name}`}
					className="tooltip-open-during-hover"
					place={place}
					style={{
						borderRadius: "8px",
					}}
					openEvents={{
						mouseover: true,
						click: true,
						focus: true,
					}}
					clickable
					opacity={1}
					border="1px solid var(--ifm-color-emphasis-300)"
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							maxWidth: "min(80vw, 40em)",
						}}
					>
						<div style={{ display: "flex", "justify-content": "space-between", "align-items": "baseline" }}>
							<h3>{
								link
									? <a href={link + sublink}>{data.name}</a>
									: data.name
								//: data.link
								//	? <a href={data.link}>{data.name}</a>
								//	: data.name
							}
								{data.alias && <span style={{ "white-space": "pre-wrap", "font-size": "80%", "font-weight": "normal" }}> ({data.alias})</span>}
							</h3>
							<span>&emsp;</span>
							{
								(data.source !== "Glossary") &&
									data.type
									? <span>({data.type} {data.source})</span>
									: <span>({data.source})</span>
							}
						</div>
						{data.desc && <div style={{ "white-space": "pre-wrap" }}>{data.desc}</div>}
						{data.body && <div style={{ "white-space": "pre-wrap" }}>{
							Array.isArray(data.body)
								? data.body.join(", ")
								: data.body
						}</div>}
					</div>
				</ReactTooltip >
			</>
		);
	} else { return "(" + name.toUpperCase() + ")"; }
}
