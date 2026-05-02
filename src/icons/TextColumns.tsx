import { TextColumnsIcon as TextColumnsBoldIcon } from "../bold/TextColumns";
import { TextColumnsIcon as TextColumnsDuotoneIcon } from "../duotone/TextColumns";
import { TextColumnsIcon as TextColumnsFillIcon } from "../fill/TextColumns";
import { TextColumnsIcon as TextColumnsLightIcon } from "../light/TextColumns";
import { TextColumnsIcon as TextColumnsRegularIcon } from "../regular/TextColumns";
import { TextColumnsIcon as TextColumnsThinIcon } from "../thin/TextColumns";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextColumnsThinIcon,
	light: TextColumnsLightIcon,
	regular: TextColumnsRegularIcon,
	bold: TextColumnsBoldIcon,
	fill: TextColumnsFillIcon,
	duotone: TextColumnsDuotoneIcon,
} as const;

export function TextColumnsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextColumnsIcon as TextColumns };
