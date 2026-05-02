import { MatrixLogoIcon as MatrixLogoBoldIcon } from "../bold/MatrixLogo";
import { MatrixLogoIcon as MatrixLogoDuotoneIcon } from "../duotone/MatrixLogo";
import { MatrixLogoIcon as MatrixLogoFillIcon } from "../fill/MatrixLogo";
import { MatrixLogoIcon as MatrixLogoLightIcon } from "../light/MatrixLogo";
import { MatrixLogoIcon as MatrixLogoRegularIcon } from "../regular/MatrixLogo";
import { MatrixLogoIcon as MatrixLogoThinIcon } from "../thin/MatrixLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MatrixLogoThinIcon,
	light: MatrixLogoLightIcon,
	regular: MatrixLogoRegularIcon,
	bold: MatrixLogoBoldIcon,
	fill: MatrixLogoFillIcon,
	duotone: MatrixLogoDuotoneIcon,
} as const;

export function MatrixLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MatrixLogoIcon as MatrixLogo };
