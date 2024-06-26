"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenApiGeneratorV31 = exports.OpenApiGeneratorV3 = exports.OpenAPIRegistry = exports.extendZodWithOpenApi = void 0;
var zod_extensions_1 = require("./zod-extensions");
Object.defineProperty(exports, "extendZodWithOpenApi", { enumerable: true, get: function () { return zod_extensions_1.extendZodWithOpenApi; } });
__exportStar(require("./openapi-metadata"), exports);
var openapi_registry_1 = require("./openapi-registry");
Object.defineProperty(exports, "OpenAPIRegistry", { enumerable: true, get: function () { return openapi_registry_1.OpenAPIRegistry; } });
var openapi_generator_1 = require("./v3.0/openapi-generator");
Object.defineProperty(exports, "OpenApiGeneratorV3", { enumerable: true, get: function () { return openapi_generator_1.OpenApiGeneratorV3; } });
var openapi_generator_2 = require("./v3.1/openapi-generator");
Object.defineProperty(exports, "OpenApiGeneratorV31", { enumerable: true, get: function () { return openapi_generator_2.OpenApiGeneratorV31; } });
