import { HighDefinitionIcon as HighDefinitionBoldIcon } from "../bold/HighDefinition";
import { HighDefinitionIcon as HighDefinitionDuotoneIcon } from "../duotone/HighDefinition";
import { HighDefinitionIcon as HighDefinitionFillIcon } from "../fill/HighDefinition";
import { HighDefinitionIcon as HighDefinitionLightIcon } from "../light/HighDefinition";
import { HighDefinitionIcon as HighDefinitionRegularIcon } from "../regular/HighDefinition";
import { HighDefinitionIcon as HighDefinitionThinIcon } from "../thin/HighDefinition";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HighDefinitionThinIcon,
	light: HighDefinitionLightIcon,
	regular: HighDefinitionRegularIcon,
	bold: HighDefinitionBoldIcon,
	fill: HighDefinitionFillIcon,
	duotone: HighDefinitionDuotoneIcon,
} as const;

export function HighDefinitionIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HighDefinitionIcon as HighDefinition };
