"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenApiGeneratorV31Specifics = void 0;
class OpenApiGeneratorV31Specifics {
    get nullType() {
        return { type: 'null' };
    }
    mapNullableOfArray(objects, isNullable) {
        if (isNullable) {
            return [...objects, this.nullType];
        }
        return objects;
    }
    mapNullableType(type, isNullable) {
        if (!type) {
            // 'null' is considered a type in Open API 3.1.0 => not providing a type includes null
            return {};
        }
        // Open API 3.1.0 made the `nullable` key invalid and instead you use type arrays
        if (isNullable) {
            return {
                type: Array.isArray(type) ? [...type, 'null'] : [type, 'null'],
            };
        }
        return {
            type,
        };
    }
    getNumberChecks(checks) {
        return Object.assign({}, ...checks.map(check => {
            switch (check.kind) {
                case 'min':
                    return check.inclusive
                        ? { minimum: Number(check.value) }
                        : { exclusiveMinimum: Number(check.value) };
                case 'max':
                    return check.inclusive
                        ? { maximum: Number(check.value) }
                        : { exclusiveMaximum: Number(check.value) };
                default:
                    return {};
            }
        }));
    }
}
exports.OpenApiGeneratorV31Specifics = OpenApiGeneratorV31Specifics;
