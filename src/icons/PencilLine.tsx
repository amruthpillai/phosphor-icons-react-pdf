import { PencilLineIcon as PencilLineBoldIcon } from "../bold/PencilLine";
import { PencilLineIcon as PencilLineDuotoneIcon } from "../duotone/PencilLine";
import { PencilLineIcon as PencilLineFillIcon } from "../fill/PencilLine";
import { PencilLineIcon as PencilLineLightIcon } from "../light/PencilLine";
import { PencilLineIcon as PencilLineRegularIcon } from "../regular/PencilLine";
import { PencilLineIcon as PencilLineThinIcon } from "../thin/PencilLine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PencilLineThinIcon,
	light: PencilLineLightIcon,
	regular: PencilLineRegularIcon,
	bold: PencilLineBoldIcon,
	fill: PencilLineFillIcon,
	duotone: PencilLineDuotoneIcon,
} as const;

export function PencilLineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PencilLineIcon as PencilLine };
