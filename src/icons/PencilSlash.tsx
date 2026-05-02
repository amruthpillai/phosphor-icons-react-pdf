import { PencilSlashIcon as PencilSlashBoldIcon } from "../bold/PencilSlash";
import { PencilSlashIcon as PencilSlashDuotoneIcon } from "../duotone/PencilSlash";
import { PencilSlashIcon as PencilSlashFillIcon } from "../fill/PencilSlash";
import { PencilSlashIcon as PencilSlashLightIcon } from "../light/PencilSlash";
import { PencilSlashIcon as PencilSlashRegularIcon } from "../regular/PencilSlash";
import { PencilSlashIcon as PencilSlashThinIcon } from "../thin/PencilSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PencilSlashThinIcon,
	light: PencilSlashLightIcon,
	regular: PencilSlashRegularIcon,
	bold: PencilSlashBoldIcon,
	fill: PencilSlashFillIcon,
	duotone: PencilSlashDuotoneIcon,
} as const;

export function PencilSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PencilSlashIcon as PencilSlash };
