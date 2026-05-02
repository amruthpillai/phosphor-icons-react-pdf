import { EyedropperSampleIcon as EyedropperSampleBoldIcon } from "../bold/EyedropperSample";
import { EyedropperSampleIcon as EyedropperSampleDuotoneIcon } from "../duotone/EyedropperSample";
import { EyedropperSampleIcon as EyedropperSampleFillIcon } from "../fill/EyedropperSample";
import { EyedropperSampleIcon as EyedropperSampleLightIcon } from "../light/EyedropperSample";
import { EyedropperSampleIcon as EyedropperSampleRegularIcon } from "../regular/EyedropperSample";
import { EyedropperSampleIcon as EyedropperSampleThinIcon } from "../thin/EyedropperSample";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EyedropperSampleThinIcon,
	light: EyedropperSampleLightIcon,
	regular: EyedropperSampleRegularIcon,
	bold: EyedropperSampleBoldIcon,
	fill: EyedropperSampleFillIcon,
	duotone: EyedropperSampleDuotoneIcon,
} as const;

export function EyedropperSampleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EyedropperSampleIcon as EyedropperSample };
