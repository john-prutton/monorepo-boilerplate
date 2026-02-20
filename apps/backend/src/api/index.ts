import { Effect, Layer } from "effect"
import { HttpApiBuilder } from "effect/unstable/httpapi"

import { Api } from "@repo/domain/api"
import { HealthSchema } from "@repo/domain/schema"

const ApiLive = HttpApiBuilder.group(Api, "Health", (handler) =>
	handler.handle("health", () =>
		Effect.gen(function* () {
			return { healthy: true } satisfies HealthSchema
		}),
	),
)

export const ApiRouter = HttpApiBuilder.layer(Api).pipe(Layer.provide(ApiLive))
