import { FilePptIcon as FilePptBoldIcon } from "../bold/FilePpt";
import { FilePptIcon as FilePptDuotoneIcon } from "../duotone/FilePpt";
import { FilePptIcon as FilePptFillIcon } from "../fill/FilePpt";
import { FilePptIcon as FilePptLightIcon } from "../light/FilePpt";
import { FilePptIcon as FilePptRegularIcon } from "../regular/FilePpt";
import { FilePptIcon as FilePptThinIcon } from "../thin/FilePpt";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FilePptThinIcon,
	light: FilePptLightIcon,
	regular: FilePptRegularIcon,
	bold: FilePptBoldIcon,
	fill: FilePptFillIcon,
	duotone: FilePptDuotoneIcon,
} as const;

export function FilePptIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FilePptIcon as FilePpt };
