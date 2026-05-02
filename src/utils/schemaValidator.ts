
import Ajv from "ajv";
const ajv = new Ajv();

export function validateSchema(schema: any, data: any) {
  const validate = ajv.compile(schema);
  if (!validate(data)) {
    throw new Error(JSON.stringify(validate.errors));
  }
}
