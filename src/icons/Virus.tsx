import { VirusIcon as VirusBoldIcon } from "../bold/Virus";
import { VirusIcon as VirusDuotoneIcon } from "../duotone/Virus";
import { VirusIcon as VirusFillIcon } from "../fill/Virus";
import { VirusIcon as VirusLightIcon } from "../light/Virus";
import { VirusIcon as VirusRegularIcon } from "../regular/Virus";
import { VirusIcon as VirusThinIcon } from "../thin/Virus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VirusThinIcon,
	light: VirusLightIcon,
	regular: VirusRegularIcon,
	bold: VirusBoldIcon,
	fill: VirusFillIcon,
	duotone: VirusDuotoneIcon,
} as const;

export function VirusIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VirusIcon as Virus };
