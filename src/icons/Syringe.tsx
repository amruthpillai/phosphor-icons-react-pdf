import { SyringeIcon as SyringeBoldIcon } from "../bold/Syringe";
import { SyringeIcon as SyringeDuotoneIcon } from "../duotone/Syringe";
import { SyringeIcon as SyringeFillIcon } from "../fill/Syringe";
import { SyringeIcon as SyringeLightIcon } from "../light/Syringe";
import { SyringeIcon as SyringeRegularIcon } from "../regular/Syringe";
import { SyringeIcon as SyringeThinIcon } from "../thin/Syringe";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SyringeThinIcon,
	light: SyringeLightIcon,
	regular: SyringeRegularIcon,
	bold: SyringeBoldIcon,
	fill: SyringeFillIcon,
	duotone: SyringeDuotoneIcon,
} as const;

export function SyringeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SyringeIcon as Syringe };
