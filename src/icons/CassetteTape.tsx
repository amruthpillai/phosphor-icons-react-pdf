import { CassetteTapeIcon as CassetteTapeBoldIcon } from "../bold/CassetteTape";
import { CassetteTapeIcon as CassetteTapeDuotoneIcon } from "../duotone/CassetteTape";
import { CassetteTapeIcon as CassetteTapeFillIcon } from "../fill/CassetteTape";
import { CassetteTapeIcon as CassetteTapeLightIcon } from "../light/CassetteTape";
import { CassetteTapeIcon as CassetteTapeRegularIcon } from "../regular/CassetteTape";
import { CassetteTapeIcon as CassetteTapeThinIcon } from "../thin/CassetteTape";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CassetteTapeThinIcon,
	light: CassetteTapeLightIcon,
	regular: CassetteTapeRegularIcon,
	bold: CassetteTapeBoldIcon,
	fill: CassetteTapeFillIcon,
	duotone: CassetteTapeDuotoneIcon,
} as const;

export function CassetteTapeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CassetteTapeIcon as CassetteTape };
