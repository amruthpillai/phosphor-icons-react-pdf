import { HandSoapIcon as HandSoapBoldIcon } from "../bold/HandSoap";
import { HandSoapIcon as HandSoapDuotoneIcon } from "../duotone/HandSoap";
import { HandSoapIcon as HandSoapFillIcon } from "../fill/HandSoap";
import { HandSoapIcon as HandSoapLightIcon } from "../light/HandSoap";
import { HandSoapIcon as HandSoapRegularIcon } from "../regular/HandSoap";
import { HandSoapIcon as HandSoapThinIcon } from "../thin/HandSoap";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandSoapThinIcon,
	light: HandSoapLightIcon,
	regular: HandSoapRegularIcon,
	bold: HandSoapBoldIcon,
	fill: HandSoapFillIcon,
	duotone: HandSoapDuotoneIcon,
} as const;

export function HandSoapIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandSoapIcon as HandSoap };
