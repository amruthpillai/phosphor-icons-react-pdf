import { PencilIcon as PencilBoldIcon } from "../bold/Pencil";
import { PencilIcon as PencilDuotoneIcon } from "../duotone/Pencil";
import { PencilIcon as PencilFillIcon } from "../fill/Pencil";
import { PencilIcon as PencilLightIcon } from "../light/Pencil";
import { PencilIcon as PencilRegularIcon } from "../regular/Pencil";
import { PencilIcon as PencilThinIcon } from "../thin/Pencil";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PencilThinIcon,
	light: PencilLightIcon,
	regular: PencilRegularIcon,
	bold: PencilBoldIcon,
	fill: PencilFillIcon,
	duotone: PencilDuotoneIcon,
} as const;

export function PencilIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PencilIcon as Pencil };
