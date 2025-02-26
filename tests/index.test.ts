import ApiErrorHandler from '../src/index';
import { MESSAGES_BY_LANGUAGES, StatusCode } from '../src/constants';

// Mock constants
const mockMessages = {
    en: {
        default: "An unexpected error occurred. Please try again later.",
        network: "Network Error. Please check your connection.",
        400: "Invalid request. Please check the submitted data.",
        401: "You are not authorized to access this resource. Please log in.",
        403: "Forbidden. You do not have permission to access this resource.",
        404: "Resource not found.",
        405: "Method not allowed. Please check the request method.",
        408: "Request timeout. Please try again later.",
        409: "Conflict. The request could not be completed due to a conflict.",
        410: "Gone. The requested resource is no longer available.",
        415: "Unsupported media type. Please check the request format.",
        422: "Unprocessable entity. Please check the submitted data.",
        429: "Too many requests. Please try again later.",
        500: "An internal server error occurred. Please try again later.",
        501: "Not implemented. The requested functionality is not supported.",
        502: "Bad gateway. Please try again later.",
        503: "Service unavailable. Please try again later.",
        504: "Gateway timeout. Please try again later.",
        505: "HTTP version not supported. Please check the request."
    }
};

MESSAGES_BY_LANGUAGES.en = mockMessages.en;

const errorHandler = new ApiErrorHandler('en');

// Test cases
const tests = [
    {
        name: 'Unknown error',
        input: null,
        expected: mockMessages.en.default
    },
    {
        name: 'GraphQL error',
        input: { graphQLErrors: [{ message: "GraphQL Error" }] },
        expected: "GraphQL Error"
    },
    {
        name: 'Network error',
        input: { message: "Network Error" },
        expected: mockMessages.en.network
    },
    {
        name: 'Axios error with status 400',
        input: { response: { status: 400 as StatusCode, data: { message: "Bad Request" } } },
        expected: "Bad Request"
    },
    {
        name: 'Axios error with status 404',
        input: { response: { status: 404 as StatusCode, data: { message: "" } } },
        expected: mockMessages.en[404]
    },
    {
        name: 'Axios error with status 500',
        input: { response: { status: 500 as StatusCode, data: { message: "" } } },
        expected: mockMessages.en[500]
    }
];

// Run tests
tests.forEach(test => {
    if(test.input !== null) {
        console.log(`Running test: ${test.name}`);
        const result = errorHandler.handle(test.input);
        console.log(`${test.name}: ${result === test.expected ? 'PASSED' : 'FAILED'} \n`);

    }
   
});