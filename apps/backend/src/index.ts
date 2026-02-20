import { Layer } from "effect"
import { HttpRouter } from "effect/unstable/http"
import {
	NodeFileSystem,
	NodeHttpPlatform,
	NodeHttpServer,
	NodeRuntime,
} from "@effect/platform-node"

import { createServer } from "node:http"

import { ApiRouter } from "./api/index.js"
import { StaticFilesRouter } from "./static/index.js"

const AllRouters = Layer.merge(ApiRouter, StaticFilesRouter)

const FileSystem = NodeFileSystem.layer

const HttpServer = NodeHttpServer.layer(createServer, {
	port: 3001,
})

const RouterLive = HttpRouter.serve(AllRouters).pipe(
	Layer.provide(FileSystem),
	Layer.provide(HttpServer),
	Layer.provide(NodeHttpPlatform.layer),
	Layer.orDie,
	Layer.launch,
)

NodeRuntime.runMain(RouterLive)
