import { MicroscopeIcon as MicroscopeBoldIcon } from "../bold/Microscope";
import { MicroscopeIcon as MicroscopeDuotoneIcon } from "../duotone/Microscope";
import { MicroscopeIcon as MicroscopeFillIcon } from "../fill/Microscope";
import { MicroscopeIcon as MicroscopeLightIcon } from "../light/Microscope";
import { MicroscopeIcon as MicroscopeRegularIcon } from "../regular/Microscope";
import { MicroscopeIcon as MicroscopeThinIcon } from "../thin/Microscope";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MicroscopeThinIcon,
	light: MicroscopeLightIcon,
	regular: MicroscopeRegularIcon,
	bold: MicroscopeBoldIcon,
	fill: MicroscopeFillIcon,
	duotone: MicroscopeDuotoneIcon,
} as const;

export function MicroscopeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MicroscopeIcon as Microscope };
