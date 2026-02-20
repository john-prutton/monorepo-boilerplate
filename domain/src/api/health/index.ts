import { HttpApiEndpoint, HttpApiGroup } from "effect/unstable/httpapi"

import { HealthApiError, HealthSchema } from "@/schema/index.js"

export class HealthApiGroup extends HttpApiGroup.make("Health")
	.add(
		HttpApiEndpoint.get("health", "/", {
			success: HealthSchema,
			error: HealthApiError,
		}),
	)
	.prefix("/health") {}
