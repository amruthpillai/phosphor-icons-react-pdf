import { BlueprintIcon as BlueprintBoldIcon } from "../bold/Blueprint";
import { BlueprintIcon as BlueprintDuotoneIcon } from "../duotone/Blueprint";
import { BlueprintIcon as BlueprintFillIcon } from "../fill/Blueprint";
import { BlueprintIcon as BlueprintLightIcon } from "../light/Blueprint";
import { BlueprintIcon as BlueprintRegularIcon } from "../regular/Blueprint";
import { BlueprintIcon as BlueprintThinIcon } from "../thin/Blueprint";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BlueprintThinIcon,
	light: BlueprintLightIcon,
	regular: BlueprintRegularIcon,
	bold: BlueprintBoldIcon,
	fill: BlueprintFillIcon,
	duotone: BlueprintDuotoneIcon,
} as const;

export function BlueprintIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BlueprintIcon as Blueprint };
