import { CertificateIcon as CertificateBoldIcon } from "../bold/Certificate";
import { CertificateIcon as CertificateDuotoneIcon } from "../duotone/Certificate";
import { CertificateIcon as CertificateFillIcon } from "../fill/Certificate";
import { CertificateIcon as CertificateLightIcon } from "../light/Certificate";
import { CertificateIcon as CertificateRegularIcon } from "../regular/Certificate";
import { CertificateIcon as CertificateThinIcon } from "../thin/Certificate";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CertificateThinIcon,
	light: CertificateLightIcon,
	regular: CertificateRegularIcon,
	bold: CertificateBoldIcon,
	fill: CertificateFillIcon,
	duotone: CertificateDuotoneIcon,
} as const;

export function CertificateIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CertificateIcon as Certificate };
