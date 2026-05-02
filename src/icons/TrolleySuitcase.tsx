import { TrolleySuitcaseIcon as TrolleySuitcaseBoldIcon } from "../bold/TrolleySuitcase";
import { TrolleySuitcaseIcon as TrolleySuitcaseDuotoneIcon } from "../duotone/TrolleySuitcase";
import { TrolleySuitcaseIcon as TrolleySuitcaseFillIcon } from "../fill/TrolleySuitcase";
import { TrolleySuitcaseIcon as TrolleySuitcaseLightIcon } from "../light/TrolleySuitcase";
import { TrolleySuitcaseIcon as TrolleySuitcaseRegularIcon } from "../regular/TrolleySuitcase";
import { TrolleySuitcaseIcon as TrolleySuitcaseThinIcon } from "../thin/TrolleySuitcase";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrolleySuitcaseThinIcon,
	light: TrolleySuitcaseLightIcon,
	regular: TrolleySuitcaseRegularIcon,
	bold: TrolleySuitcaseBoldIcon,
	fill: TrolleySuitcaseFillIcon,
	duotone: TrolleySuitcaseDuotoneIcon,
} as const;

export function TrolleySuitcaseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrolleySuitcaseIcon as TrolleySuitcase };
