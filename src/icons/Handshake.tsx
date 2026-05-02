import { HandshakeIcon as HandshakeBoldIcon } from "../bold/Handshake";
import { HandshakeIcon as HandshakeDuotoneIcon } from "../duotone/Handshake";
import { HandshakeIcon as HandshakeFillIcon } from "../fill/Handshake";
import { HandshakeIcon as HandshakeLightIcon } from "../light/Handshake";
import { HandshakeIcon as HandshakeRegularIcon } from "../regular/Handshake";
import { HandshakeIcon as HandshakeThinIcon } from "../thin/Handshake";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandshakeThinIcon,
	light: HandshakeLightIcon,
	regular: HandshakeRegularIcon,
	bold: HandshakeBoldIcon,
	fill: HandshakeFillIcon,
	duotone: HandshakeDuotoneIcon,
} as const;

export function HandshakeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandshakeIcon as Handshake };
