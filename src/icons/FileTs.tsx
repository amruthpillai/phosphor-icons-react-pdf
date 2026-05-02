import { FileTsIcon as FileTsBoldIcon } from "../bold/FileTs";
import { FileTsIcon as FileTsDuotoneIcon } from "../duotone/FileTs";
import { FileTsIcon as FileTsFillIcon } from "../fill/FileTs";
import { FileTsIcon as FileTsLightIcon } from "../light/FileTs";
import { FileTsIcon as FileTsRegularIcon } from "../regular/FileTs";
import { FileTsIcon as FileTsThinIcon } from "../thin/FileTs";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileTsThinIcon,
	light: FileTsLightIcon,
	regular: FileTsRegularIcon,
	bold: FileTsBoldIcon,
	fill: FileTsFillIcon,
	duotone: FileTsDuotoneIcon,
} as const;

export function FileTsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileTsIcon as FileTs };
