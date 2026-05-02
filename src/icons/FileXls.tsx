import { FileXlsIcon as FileXlsBoldIcon } from "../bold/FileXls";
import { FileXlsIcon as FileXlsDuotoneIcon } from "../duotone/FileXls";
import { FileXlsIcon as FileXlsFillIcon } from "../fill/FileXls";
import { FileXlsIcon as FileXlsLightIcon } from "../light/FileXls";
import { FileXlsIcon as FileXlsRegularIcon } from "../regular/FileXls";
import { FileXlsIcon as FileXlsThinIcon } from "../thin/FileXls";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileXlsThinIcon,
	light: FileXlsLightIcon,
	regular: FileXlsRegularIcon,
	bold: FileXlsBoldIcon,
	fill: FileXlsFillIcon,
	duotone: FileXlsDuotoneIcon,
} as const;

export function FileXlsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileXlsIcon as FileXls };
