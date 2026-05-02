import { ScrewdriverIcon as ScrewdriverBoldIcon } from "../bold/Screwdriver";
import { ScrewdriverIcon as ScrewdriverDuotoneIcon } from "../duotone/Screwdriver";
import { ScrewdriverIcon as ScrewdriverFillIcon } from "../fill/Screwdriver";
import { ScrewdriverIcon as ScrewdriverLightIcon } from "../light/Screwdriver";
import { ScrewdriverIcon as ScrewdriverRegularIcon } from "../regular/Screwdriver";
import { ScrewdriverIcon as ScrewdriverThinIcon } from "../thin/Screwdriver";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ScrewdriverThinIcon,
	light: ScrewdriverLightIcon,
	regular: ScrewdriverRegularIcon,
	bold: ScrewdriverBoldIcon,
	fill: ScrewdriverFillIcon,
	duotone: ScrewdriverDuotoneIcon,
} as const;

export function ScrewdriverIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ScrewdriverIcon as Screwdriver };
