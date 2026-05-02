import { LighthouseIcon as LighthouseBoldIcon } from "../bold/Lighthouse";
import { LighthouseIcon as LighthouseDuotoneIcon } from "../duotone/Lighthouse";
import { LighthouseIcon as LighthouseFillIcon } from "../fill/Lighthouse";
import { LighthouseIcon as LighthouseLightIcon } from "../light/Lighthouse";
import { LighthouseIcon as LighthouseRegularIcon } from "../regular/Lighthouse";
import { LighthouseIcon as LighthouseThinIcon } from "../thin/Lighthouse";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LighthouseThinIcon,
	light: LighthouseLightIcon,
	regular: LighthouseRegularIcon,
	bold: LighthouseBoldIcon,
	fill: LighthouseFillIcon,
	duotone: LighthouseDuotoneIcon,
} as const;

export function LighthouseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LighthouseIcon as Lighthouse };
