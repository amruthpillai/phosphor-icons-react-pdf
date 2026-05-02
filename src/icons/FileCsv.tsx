import { FileCsvIcon as FileCsvBoldIcon } from "../bold/FileCsv";
import { FileCsvIcon as FileCsvDuotoneIcon } from "../duotone/FileCsv";
import { FileCsvIcon as FileCsvFillIcon } from "../fill/FileCsv";
import { FileCsvIcon as FileCsvLightIcon } from "../light/FileCsv";
import { FileCsvIcon as FileCsvRegularIcon } from "../regular/FileCsv";
import { FileCsvIcon as FileCsvThinIcon } from "../thin/FileCsv";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileCsvThinIcon,
	light: FileCsvLightIcon,
	regular: FileCsvRegularIcon,
	bold: FileCsvBoldIcon,
	fill: FileCsvFillIcon,
	duotone: FileCsvDuotoneIcon,
} as const;

export function FileCsvIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileCsvIcon as FileCsv };
