import { Effect } from "effect"
import { HttpRouter, HttpServerResponse } from "effect/unstable/http"

export const StaticFilesRouter = HttpRouter.add("GET", "/", () =>
	Effect.gen(function* () {
		return yield* HttpServerResponse.file("package.json")
	}),
)
