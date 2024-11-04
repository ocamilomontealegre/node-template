export const HTTP_MESSAGES: Record<number, string> = {
  /* eslint-disable @typescript-eslint/naming-convention */
  200: "OK - Request completed successfully",
  201: "Created - Resource successfully created",
  202: "Accepted - Request accepted for processing, but not yet complete",
  204: "No Content - Request processed, but no content to return",
  300: "Multiple Choices - Multiple choices for the requested resource",
  301: "Moved Permanently - Requested resource has been permanently moved to a new URI",
  302: "Found - Requested resource resides temporarily under a different URI",
  303: "See Other - Response can be found at another URI using a GET method",
  304: "Not Modified - Resource has not been modified since last requested",
  400: "Bad Request - Invalid request format or parameters",
  401: "Unauthorized - Authentication required or failed",
  403: "Forbidden - You don't have permission to access this resource",
  404: "Not Found - The requested resource was not found",
  405: "Method Not Allowed - HTTP method is not supported for the requested resource",
  406: "Not Acceptable - Requested resource can only generate content not acceptable according to the Accept headers",
  407: "Proxy Authentication Required - Proxy authentication required",
  408: "Request Timeout - The server timed out waiting for the request",
  409: "Conflict - Conflict with the current state of the resource",
  410: "Gone - The requested resource is no longer available",
  411: "Length Required - Content-Length required for the request",
  412: "Precondition Failed - Precondition failed for the request",
  413: "Payload Too Large - Request is larger than the server can process",
  414: "URI Too Long - URI provided was too long for the server to process",
  415: "Unsupported Media Type - Unsupported media type for the request data",
  416: "Range Not Satisfiable - Range specified in the request cannot be satisfied",
  417: "Expectation Failed - Expectation failed for the request",
  500: "Internal Server Error - An unexpected error occurred on the server",
  501: "Not Implemented - Requested functionality is not supported by the server",
  502: "Bad Gateway - Server received an invalid response from an upstream server",
  503: "Service Unavailable - The server is currently unable to handle the request",
  504: "Gateway Timeout - The server did not receive a timely response from an upstream server",
  505: "HTTP Version Not Supported - HTTP version used in the request is not supported by the server",
};

