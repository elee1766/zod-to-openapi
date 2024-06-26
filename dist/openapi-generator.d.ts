import type { PathItemObject as PathItemObject30, OpenAPIObject as OpenAPIObject30, ComponentsObject as ComponentsObject30, SchemaObject as SchemaObject30 } from 'openapi3-ts/oas30';
import type { PathItemObject as PathItemObject31, OpenAPIObject as OpenAPIObject31, ComponentsObject as ComponentsObject31, SchemaObject as SchemaObject31 } from 'openapi3-ts/oas31';
type PathItemObject = PathItemObject30 & PathItemObject31;
type OpenAPIObject = OpenAPIObject30 & OpenAPIObject31;
type ComponentsObject = ComponentsObject30 & ComponentsObject31;
type SchemaObject = SchemaObject30 & SchemaObject31;
import type { ZodTypeAny } from 'zod';
import { OpenAPIDefinitions, RouteConfig } from './openapi-registry';
import { ZodNumericCheck } from './types';
declare const openApiVersions: readonly ["3.0.0", "3.0.1", "3.0.2", "3.0.3", "3.1.0"];
export type OpenApiVersion = typeof openApiVersions[number];
export interface OpenApiVersionSpecifics {
    get nullType(): any;
    mapNullableOfArray(objects: any[], isNullable: boolean): any[];
    mapNullableType(type: NonNullable<SchemaObject['type']> | undefined, isNullable: boolean): Pick<SchemaObject, 'type' | 'nullable'>;
    getNumberChecks(checks: ZodNumericCheck[]): any;
}
export declare class OpenAPIGenerator {
    private definitions;
    private versionSpecifics;
    private schemaRefs;
    private paramRefs;
    private pathRefs;
    private rawComponents;
    constructor(definitions: (OpenAPIDefinitions | ZodTypeAny)[], versionSpecifics: OpenApiVersionSpecifics);
    generateDocumentData(): {
        components: ComponentsObject;
        paths: Record<string, PathItemObject>;
    };
    generateComponents(): Pick<OpenAPIObject, 'components'>;
    private buildComponents;
    private sortDefinitions;
    private generateSingle;
    private generateParameterDefinition;
    private getParameterRef;
    private generateInlineParameters;
    private generateSimpleParameter;
    private generateParameter;
    private generateSchemaWithMetadata;
    /**
     * Generates an OpenAPI SchemaObject or a ReferenceObject with all the provided metadata applied
     */
    private generateSimpleSchema;
    /**
     * Generates a whole OpenApi schema and saves it into
     * schemaRefs if a `refId` is provided.
     */
    private generateSchema;
    /**
     * Same as `generateSchema` but if the new schema is added into the
     * referenced schemas, it would return a ReferenceObject and not the
     * whole result.
     *
     * Should be used for nested objects, arrays, etc.
     */
    private generateSchemaWithRef;
    private generateSchemaRef;
    private getRequestBody;
    private getParameters;
    generatePath(route: RouteConfig): PathItemObject;
    private generateSingleRoute;
    private getResponse;
    private getResponseHeaders;
    private getBodyContent;
    private getZodStringCheck;
    /**
     * Attempts to map Zod strings to known formats
     * https://json-schema.org/understanding-json-schema/reference/string.html#built-in-formats
     */
    private mapStringFormat;
    private mapDiscriminator;
    private mapNullableOfArray;
    private mapNullableType;
    private getNumberChecks;
    private constructReferencedOpenAPISchema;
    private toOpenAPISchema;
    private isOptionalSchema;
    private getDefaultValue;
    private requiredKeysOf;
    private toOpenAPIObjectSchema;
    private generateAdditionalProperties;
    private flattenUnionTypes;
    private flattenIntersectionTypes;
    private unwrapNullable;
    private unwrapChained;
    /**
     * A method that omits all custom keys added to the regular OpenAPI
     * metadata properties
     */
    private buildSchemaMetadata;
    private buildParameterMetadata;
    private getParamMetadata;
    private getMetadata;
    private getInternalMetadata;
    private getRefId;
    private applySchemaMetadata;
    private enhanceMissingParametersError;
}
export {};
