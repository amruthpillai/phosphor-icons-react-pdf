import { RecordIcon as RecordBoldIcon } from "../bold/Record";
import { RecordIcon as RecordDuotoneIcon } from "../duotone/Record";
import { RecordIcon as RecordFillIcon } from "../fill/Record";
import { RecordIcon as RecordLightIcon } from "../light/Record";
import { RecordIcon as RecordRegularIcon } from "../regular/Record";
import { RecordIcon as RecordThinIcon } from "../thin/Record";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RecordThinIcon,
	light: RecordLightIcon,
	regular: RecordRegularIcon,
	bold: RecordBoldIcon,
	fill: RecordFillIcon,
	duotone: RecordDuotoneIcon,
} as const;

export function RecordIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RecordIcon as Record };
