import { MemberOfIcon as MemberOfBoldIcon } from "../bold/MemberOf";
import { MemberOfIcon as MemberOfDuotoneIcon } from "../duotone/MemberOf";
import { MemberOfIcon as MemberOfFillIcon } from "../fill/MemberOf";
import { MemberOfIcon as MemberOfLightIcon } from "../light/MemberOf";
import { MemberOfIcon as MemberOfRegularIcon } from "../regular/MemberOf";
import { MemberOfIcon as MemberOfThinIcon } from "../thin/MemberOf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MemberOfThinIcon,
	light: MemberOfLightIcon,
	regular: MemberOfRegularIcon,
	bold: MemberOfBoldIcon,
	fill: MemberOfFillIcon,
	duotone: MemberOfDuotoneIcon,
} as const;

export function MemberOfIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MemberOfIcon as MemberOf };
