import { FileIniIcon as FileIniBoldIcon } from "../bold/FileIni";
import { FileIniIcon as FileIniDuotoneIcon } from "../duotone/FileIni";
import { FileIniIcon as FileIniFillIcon } from "../fill/FileIni";
import { FileIniIcon as FileIniLightIcon } from "../light/FileIni";
import { FileIniIcon as FileIniRegularIcon } from "../regular/FileIni";
import { FileIniIcon as FileIniThinIcon } from "../thin/FileIni";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileIniThinIcon,
	light: FileIniLightIcon,
	regular: FileIniRegularIcon,
	bold: FileIniBoldIcon,
	fill: FileIniFillIcon,
	duotone: FileIniDuotoneIcon,
} as const;

export function FileIniIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileIniIcon as FileIni };
