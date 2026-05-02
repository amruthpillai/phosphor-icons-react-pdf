import { StethoscopeIcon as StethoscopeBoldIcon } from "../bold/Stethoscope";
import { StethoscopeIcon as StethoscopeDuotoneIcon } from "../duotone/Stethoscope";
import { StethoscopeIcon as StethoscopeFillIcon } from "../fill/Stethoscope";
import { StethoscopeIcon as StethoscopeLightIcon } from "../light/Stethoscope";
import { StethoscopeIcon as StethoscopeRegularIcon } from "../regular/Stethoscope";
import { StethoscopeIcon as StethoscopeThinIcon } from "../thin/Stethoscope";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StethoscopeThinIcon,
	light: StethoscopeLightIcon,
	regular: StethoscopeRegularIcon,
	bold: StethoscopeBoldIcon,
	fill: StethoscopeFillIcon,
	duotone: StethoscopeDuotoneIcon,
} as const;

export function StethoscopeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StethoscopeIcon as Stethoscope };
