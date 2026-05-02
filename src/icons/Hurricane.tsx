import { HurricaneIcon as HurricaneBoldIcon } from "../bold/Hurricane";
import { HurricaneIcon as HurricaneDuotoneIcon } from "../duotone/Hurricane";
import { HurricaneIcon as HurricaneFillIcon } from "../fill/Hurricane";
import { HurricaneIcon as HurricaneLightIcon } from "../light/Hurricane";
import { HurricaneIcon as HurricaneRegularIcon } from "../regular/Hurricane";
import { HurricaneIcon as HurricaneThinIcon } from "../thin/Hurricane";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HurricaneThinIcon,
	light: HurricaneLightIcon,
	regular: HurricaneRegularIcon,
	bold: HurricaneBoldIcon,
	fill: HurricaneFillIcon,
	duotone: HurricaneDuotoneIcon,
} as const;

export function HurricaneIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HurricaneIcon as Hurricane };
