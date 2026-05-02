import { FilesIcon as FilesBoldIcon } from "../bold/Files";
import { FilesIcon as FilesDuotoneIcon } from "../duotone/Files";
import { FilesIcon as FilesFillIcon } from "../fill/Files";
import { FilesIcon as FilesLightIcon } from "../light/Files";
import { FilesIcon as FilesRegularIcon } from "../regular/Files";
import { FilesIcon as FilesThinIcon } from "../thin/Files";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FilesThinIcon,
	light: FilesLightIcon,
	regular: FilesRegularIcon,
	bold: FilesBoldIcon,
	fill: FilesFillIcon,
	duotone: FilesDuotoneIcon,
} as const;

export function FilesIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FilesIcon as Files };
