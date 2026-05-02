import { TaxiIcon as TaxiBoldIcon } from "../bold/Taxi";
import { TaxiIcon as TaxiDuotoneIcon } from "../duotone/Taxi";
import { TaxiIcon as TaxiFillIcon } from "../fill/Taxi";
import { TaxiIcon as TaxiLightIcon } from "../light/Taxi";
import { TaxiIcon as TaxiRegularIcon } from "../regular/Taxi";
import { TaxiIcon as TaxiThinIcon } from "../thin/Taxi";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TaxiThinIcon,
	light: TaxiLightIcon,
	regular: TaxiRegularIcon,
	bold: TaxiBoldIcon,
	fill: TaxiFillIcon,
	duotone: TaxiDuotoneIcon,
} as const;

export function TaxiIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TaxiIcon as Taxi };
