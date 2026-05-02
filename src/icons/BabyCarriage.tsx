import { BabyCarriageIcon as BabyCarriageBoldIcon } from "../bold/BabyCarriage";
import { BabyCarriageIcon as BabyCarriageDuotoneIcon } from "../duotone/BabyCarriage";
import { BabyCarriageIcon as BabyCarriageFillIcon } from "../fill/BabyCarriage";
import { BabyCarriageIcon as BabyCarriageLightIcon } from "../light/BabyCarriage";
import { BabyCarriageIcon as BabyCarriageRegularIcon } from "../regular/BabyCarriage";
import { BabyCarriageIcon as BabyCarriageThinIcon } from "../thin/BabyCarriage";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BabyCarriageThinIcon,
	light: BabyCarriageLightIcon,
	regular: BabyCarriageRegularIcon,
	bold: BabyCarriageBoldIcon,
	fill: BabyCarriageFillIcon,
	duotone: BabyCarriageDuotoneIcon,
} as const;

export function BabyCarriageIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BabyCarriageIcon as BabyCarriage };
