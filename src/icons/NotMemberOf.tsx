import { NotMemberOfIcon as NotMemberOfBoldIcon } from "../bold/NotMemberOf";
import { NotMemberOfIcon as NotMemberOfDuotoneIcon } from "../duotone/NotMemberOf";
import { NotMemberOfIcon as NotMemberOfFillIcon } from "../fill/NotMemberOf";
import { NotMemberOfIcon as NotMemberOfLightIcon } from "../light/NotMemberOf";
import { NotMemberOfIcon as NotMemberOfRegularIcon } from "../regular/NotMemberOf";
import { NotMemberOfIcon as NotMemberOfThinIcon } from "../thin/NotMemberOf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NotMemberOfThinIcon,
	light: NotMemberOfLightIcon,
	regular: NotMemberOfRegularIcon,
	bold: NotMemberOfBoldIcon,
	fill: NotMemberOfFillIcon,
	duotone: NotMemberOfDuotoneIcon,
} as const;

export function NotMemberOfIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NotMemberOfIcon as NotMemberOf };
