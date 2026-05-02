import { LecternIcon as LecternBoldIcon } from "../bold/Lectern";
import { LecternIcon as LecternDuotoneIcon } from "../duotone/Lectern";
import { LecternIcon as LecternFillIcon } from "../fill/Lectern";
import { LecternIcon as LecternLightIcon } from "../light/Lectern";
import { LecternIcon as LecternRegularIcon } from "../regular/Lectern";
import { LecternIcon as LecternThinIcon } from "../thin/Lectern";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LecternThinIcon,
	light: LecternLightIcon,
	regular: LecternRegularIcon,
	bold: LecternBoldIcon,
	fill: LecternFillIcon,
	duotone: LecternDuotoneIcon,
} as const;

export function LecternIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LecternIcon as Lectern };
