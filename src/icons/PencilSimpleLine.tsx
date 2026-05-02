import { PencilSimpleLineIcon as PencilSimpleLineBoldIcon } from "../bold/PencilSimpleLine";
import { PencilSimpleLineIcon as PencilSimpleLineDuotoneIcon } from "../duotone/PencilSimpleLine";
import { PencilSimpleLineIcon as PencilSimpleLineFillIcon } from "../fill/PencilSimpleLine";
import { PencilSimpleLineIcon as PencilSimpleLineLightIcon } from "../light/PencilSimpleLine";
import { PencilSimpleLineIcon as PencilSimpleLineRegularIcon } from "../regular/PencilSimpleLine";
import { PencilSimpleLineIcon as PencilSimpleLineThinIcon } from "../thin/PencilSimpleLine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PencilSimpleLineThinIcon,
	light: PencilSimpleLineLightIcon,
	regular: PencilSimpleLineRegularIcon,
	bold: PencilSimpleLineBoldIcon,
	fill: PencilSimpleLineFillIcon,
	duotone: PencilSimpleLineDuotoneIcon,
} as const;

export function PencilSimpleLineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PencilSimpleLineIcon as PencilSimpleLine };
