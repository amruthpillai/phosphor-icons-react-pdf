import { CirclesThreePlusIcon as CirclesThreePlusBoldIcon } from "../bold/CirclesThreePlus";
import { CirclesThreePlusIcon as CirclesThreePlusDuotoneIcon } from "../duotone/CirclesThreePlus";
import { CirclesThreePlusIcon as CirclesThreePlusFillIcon } from "../fill/CirclesThreePlus";
import { CirclesThreePlusIcon as CirclesThreePlusLightIcon } from "../light/CirclesThreePlus";
import { CirclesThreePlusIcon as CirclesThreePlusRegularIcon } from "../regular/CirclesThreePlus";
import { CirclesThreePlusIcon as CirclesThreePlusThinIcon } from "../thin/CirclesThreePlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CirclesThreePlusThinIcon,
	light: CirclesThreePlusLightIcon,
	regular: CirclesThreePlusRegularIcon,
	bold: CirclesThreePlusBoldIcon,
	fill: CirclesThreePlusFillIcon,
	duotone: CirclesThreePlusDuotoneIcon,
} as const;

export function CirclesThreePlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CirclesThreePlusIcon as CirclesThreePlus };
