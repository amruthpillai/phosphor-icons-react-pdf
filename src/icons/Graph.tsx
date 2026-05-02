import { GraphIcon as GraphBoldIcon } from "../bold/Graph";
import { GraphIcon as GraphDuotoneIcon } from "../duotone/Graph";
import { GraphIcon as GraphFillIcon } from "../fill/Graph";
import { GraphIcon as GraphLightIcon } from "../light/Graph";
import { GraphIcon as GraphRegularIcon } from "../regular/Graph";
import { GraphIcon as GraphThinIcon } from "../thin/Graph";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GraphThinIcon,
	light: GraphLightIcon,
	regular: GraphRegularIcon,
	bold: GraphBoldIcon,
	fill: GraphFillIcon,
	duotone: GraphDuotoneIcon,
} as const;

export function GraphIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GraphIcon as Graph };
