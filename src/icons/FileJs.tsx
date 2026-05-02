import { FileJsIcon as FileJsBoldIcon } from "../bold/FileJs";
import { FileJsIcon as FileJsDuotoneIcon } from "../duotone/FileJs";
import { FileJsIcon as FileJsFillIcon } from "../fill/FileJs";
import { FileJsIcon as FileJsLightIcon } from "../light/FileJs";
import { FileJsIcon as FileJsRegularIcon } from "../regular/FileJs";
import { FileJsIcon as FileJsThinIcon } from "../thin/FileJs";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileJsThinIcon,
	light: FileJsLightIcon,
	regular: FileJsRegularIcon,
	bold: FileJsBoldIcon,
	fill: FileJsFillIcon,
	duotone: FileJsDuotoneIcon,
} as const;

export function FileJsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileJsIcon as FileJs };
