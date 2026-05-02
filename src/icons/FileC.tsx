import { FileCIcon as FileCBoldIcon } from "../bold/FileC";
import { FileCIcon as FileCDuotoneIcon } from "../duotone/FileC";
import { FileCIcon as FileCFillIcon } from "../fill/FileC";
import { FileCIcon as FileCLightIcon } from "../light/FileC";
import { FileCIcon as FileCRegularIcon } from "../regular/FileC";
import { FileCIcon as FileCThinIcon } from "../thin/FileC";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileCThinIcon,
	light: FileCLightIcon,
	regular: FileCRegularIcon,
	bold: FileCBoldIcon,
	fill: FileCFillIcon,
	duotone: FileCDuotoneIcon,
} as const;

export function FileCIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileCIcon as FileC };
