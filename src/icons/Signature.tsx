import { SignatureIcon as SignatureBoldIcon } from "../bold/Signature";
import { SignatureIcon as SignatureDuotoneIcon } from "../duotone/Signature";
import { SignatureIcon as SignatureFillIcon } from "../fill/Signature";
import { SignatureIcon as SignatureLightIcon } from "../light/Signature";
import { SignatureIcon as SignatureRegularIcon } from "../regular/Signature";
import { SignatureIcon as SignatureThinIcon } from "../thin/Signature";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SignatureThinIcon,
	light: SignatureLightIcon,
	regular: SignatureRegularIcon,
	bold: SignatureBoldIcon,
	fill: SignatureFillIcon,
	duotone: SignatureDuotoneIcon,
} as const;

export function SignatureIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SignatureIcon as Signature };
