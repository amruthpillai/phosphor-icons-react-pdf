import { TrashIcon as TrashBoldIcon } from "../bold/Trash";
import { TrashIcon as TrashDuotoneIcon } from "../duotone/Trash";
import { TrashIcon as TrashFillIcon } from "../fill/Trash";
import { TrashIcon as TrashLightIcon } from "../light/Trash";
import { TrashIcon as TrashRegularIcon } from "../regular/Trash";
import { TrashIcon as TrashThinIcon } from "../thin/Trash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrashThinIcon,
	light: TrashLightIcon,
	regular: TrashRegularIcon,
	bold: TrashBoldIcon,
	fill: TrashFillIcon,
	duotone: TrashDuotoneIcon,
} as const;

export function TrashIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrashIcon as Trash };
