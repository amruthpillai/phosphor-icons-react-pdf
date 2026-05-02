import { FileDocIcon as FileDocBoldIcon } from "../bold/FileDoc";
import { FileDocIcon as FileDocDuotoneIcon } from "../duotone/FileDoc";
import { FileDocIcon as FileDocFillIcon } from "../fill/FileDoc";
import { FileDocIcon as FileDocLightIcon } from "../light/FileDoc";
import { FileDocIcon as FileDocRegularIcon } from "../regular/FileDoc";
import { FileDocIcon as FileDocThinIcon } from "../thin/FileDoc";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileDocThinIcon,
	light: FileDocLightIcon,
	regular: FileDocRegularIcon,
	bold: FileDocBoldIcon,
	fill: FileDocFillIcon,
	duotone: FileDocDuotoneIcon,
} as const;

export function FileDocIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileDocIcon as FileDoc };
