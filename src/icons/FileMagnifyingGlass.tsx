import { FileMagnifyingGlassIcon as FileMagnifyingGlassBoldIcon } from "../bold/FileMagnifyingGlass";
import { FileMagnifyingGlassIcon as FileMagnifyingGlassDuotoneIcon } from "../duotone/FileMagnifyingGlass";
import { FileMagnifyingGlassIcon as FileMagnifyingGlassFillIcon } from "../fill/FileMagnifyingGlass";
import { FileMagnifyingGlassIcon as FileMagnifyingGlassLightIcon } from "../light/FileMagnifyingGlass";
import { FileMagnifyingGlassIcon as FileMagnifyingGlassRegularIcon } from "../regular/FileMagnifyingGlass";
import { FileMagnifyingGlassIcon as FileMagnifyingGlassThinIcon } from "../thin/FileMagnifyingGlass";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileMagnifyingGlassThinIcon,
	light: FileMagnifyingGlassLightIcon,
	regular: FileMagnifyingGlassRegularIcon,
	bold: FileMagnifyingGlassBoldIcon,
	fill: FileMagnifyingGlassFillIcon,
	duotone: FileMagnifyingGlassDuotoneIcon,
} as const;

export function FileMagnifyingGlassIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileMagnifyingGlassIcon as FileMagnifyingGlass };
