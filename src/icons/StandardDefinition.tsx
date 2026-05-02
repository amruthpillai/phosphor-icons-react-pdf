import { StandardDefinitionIcon as StandardDefinitionBoldIcon } from "../bold/StandardDefinition";
import { StandardDefinitionIcon as StandardDefinitionDuotoneIcon } from "../duotone/StandardDefinition";
import { StandardDefinitionIcon as StandardDefinitionFillIcon } from "../fill/StandardDefinition";
import { StandardDefinitionIcon as StandardDefinitionLightIcon } from "../light/StandardDefinition";
import { StandardDefinitionIcon as StandardDefinitionRegularIcon } from "../regular/StandardDefinition";
import { StandardDefinitionIcon as StandardDefinitionThinIcon } from "../thin/StandardDefinition";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StandardDefinitionThinIcon,
	light: StandardDefinitionLightIcon,
	regular: StandardDefinitionRegularIcon,
	bold: StandardDefinitionBoldIcon,
	fill: StandardDefinitionFillIcon,
	duotone: StandardDefinitionDuotoneIcon,
} as const;

export function StandardDefinitionIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StandardDefinitionIcon as StandardDefinition };
