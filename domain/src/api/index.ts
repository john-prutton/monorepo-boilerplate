import { HttpApi } from "effect/unstable/httpapi"

import { HealthApiGroup } from "./health/index.js"

export class Api extends HttpApi.make("Api")
	.add(HealthApiGroup)
	.prefix("/api") {}
