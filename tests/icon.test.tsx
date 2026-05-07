import { describe, expect, it } from "vitest";
import { createIconComponent } from "../src/create-icon";
import { AcornIcon } from "../src/icons/Acorn";

describe("Icon", () => {
	it("renders the matching icon by lowercase name and forwards weight plus props", () => {
		const Icon = createIconComponent({
			acorn: AcornIcon,
		});

		const element = Icon({
			color: "#111827",
			name: "acorn",
			size: 24,
			weight: "bold",
		});

		expect(element).not.toBeNull();
		if (element === null) return;

		expect(element.type).toBe(AcornIcon);
		expect(element.props).toMatchObject({
			color: "#111827",
			size: 24,
			weight: "bold",
		});
	});

	it("renders nothing for an unknown icon name", () => {
		const Icon = createIconComponent({
			acorn: AcornIcon,
		});

		const element = Icon({
			name: "activity" as never,
		});

		expect(element).toBeNull();
	});
});
