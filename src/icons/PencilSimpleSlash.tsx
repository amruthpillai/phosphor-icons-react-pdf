import { PencilSimpleSlashIcon as PencilSimpleSlashBoldIcon } from "../bold/PencilSimpleSlash";
import { PencilSimpleSlashIcon as PencilSimpleSlashDuotoneIcon } from "../duotone/PencilSimpleSlash";
import { PencilSimpleSlashIcon as PencilSimpleSlashFillIcon } from "../fill/PencilSimpleSlash";
import { PencilSimpleSlashIcon as PencilSimpleSlashLightIcon } from "../light/PencilSimpleSlash";
import { PencilSimpleSlashIcon as PencilSimpleSlashRegularIcon } from "../regular/PencilSimpleSlash";
import { PencilSimpleSlashIcon as PencilSimpleSlashThinIcon } from "../thin/PencilSimpleSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PencilSimpleSlashThinIcon,
	light: PencilSimpleSlashLightIcon,
	regular: PencilSimpleSlashRegularIcon,
	bold: PencilSimpleSlashBoldIcon,
	fill: PencilSimpleSlashFillIcon,
	duotone: PencilSimpleSlashDuotoneIcon,
} as const;

export function PencilSimpleSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PencilSimpleSlashIcon as PencilSimpleSlash };
