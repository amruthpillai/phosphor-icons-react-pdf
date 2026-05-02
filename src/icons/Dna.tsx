import { DnaIcon as DnaBoldIcon } from "../bold/Dna";
import { DnaIcon as DnaDuotoneIcon } from "../duotone/Dna";
import { DnaIcon as DnaFillIcon } from "../fill/Dna";
import { DnaIcon as DnaLightIcon } from "../light/Dna";
import { DnaIcon as DnaRegularIcon } from "../regular/Dna";
import { DnaIcon as DnaThinIcon } from "../thin/Dna";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DnaThinIcon,
	light: DnaLightIcon,
	regular: DnaRegularIcon,
	bold: DnaBoldIcon,
	fill: DnaFillIcon,
	duotone: DnaDuotoneIcon,
} as const;

export function DnaIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DnaIcon as Dna };
