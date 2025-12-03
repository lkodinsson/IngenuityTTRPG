import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { allFeaturesMap, proficienciesMap, conditionsMap } from "./tables";

export default function Tooltip({
  data, // you can explicitly pass in data (one object from the yaml), if you have it
  name, // or just pass in the name of something, and we'll look it up
  condition,
  proficiency,
  place = "bottom",
  link,
}) {
  if (name) {
    data = allFeaturesMap[name.toLowerCase()];
  } else if (proficiency) {
    data = proficienciesMap[proficiency.toLowerCase()];
  } else if (condition) {
    data = conditionsMap[condition.toLowerCase()];
  }

  return (
    <>
      <a
        data-tooltip-id={`tooltip-${data.name}`}
        data-tooltip-delay-hide={500}
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
          <h3>{link ? <a href={link}>{data.name}</a> : data.name}</h3>
          <div style={{ "white-space": "pre-wrap" }}>{data.desc}</div>
          {data.body && (
            <div style={{ "white-space": "pre-wrap", marginTop: "0.5em" }}>
              {data.body}
            </div>
          )}
        </div>
      </ReactTooltip>
    </>
  );
}
