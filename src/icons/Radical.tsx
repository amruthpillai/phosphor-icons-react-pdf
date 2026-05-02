import { RadicalIcon as RadicalBoldIcon } from "../bold/Radical";
import { RadicalIcon as RadicalDuotoneIcon } from "../duotone/Radical";
import { RadicalIcon as RadicalFillIcon } from "../fill/Radical";
import { RadicalIcon as RadicalLightIcon } from "../light/Radical";
import { RadicalIcon as RadicalRegularIcon } from "../regular/Radical";
import { RadicalIcon as RadicalThinIcon } from "../thin/Radical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RadicalThinIcon,
	light: RadicalLightIcon,
	regular: RadicalRegularIcon,
	bold: RadicalBoldIcon,
	fill: RadicalFillIcon,
	duotone: RadicalDuotoneIcon,
} as const;

export function RadicalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RadicalIcon as Radical };
