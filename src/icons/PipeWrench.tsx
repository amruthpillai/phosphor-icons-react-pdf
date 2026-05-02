import { PipeWrenchIcon as PipeWrenchBoldIcon } from "../bold/PipeWrench";
import { PipeWrenchIcon as PipeWrenchDuotoneIcon } from "../duotone/PipeWrench";
import { PipeWrenchIcon as PipeWrenchFillIcon } from "../fill/PipeWrench";
import { PipeWrenchIcon as PipeWrenchLightIcon } from "../light/PipeWrench";
import { PipeWrenchIcon as PipeWrenchRegularIcon } from "../regular/PipeWrench";
import { PipeWrenchIcon as PipeWrenchThinIcon } from "../thin/PipeWrench";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PipeWrenchThinIcon,
	light: PipeWrenchLightIcon,
	regular: PipeWrenchRegularIcon,
	bold: PipeWrenchBoldIcon,
	fill: PipeWrenchFillIcon,
	duotone: PipeWrenchDuotoneIcon,
} as const;

export function PipeWrenchIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PipeWrenchIcon as PipeWrench };
