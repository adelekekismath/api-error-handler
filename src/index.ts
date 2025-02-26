import { LanguageType, MESSAGES_BY_LANGUAGES, StatusCode } from "./constants";

class ApiErrorHandler {
    private language: LanguageType;
    private callbacks: { [key: string]: Function };

    constructor(language: LanguageType = "en", callbacks: { [key: string]: Function } = {}) {
        this.language = language;
        this.callbacks = callbacks;
    }

    private getMessage(status: StatusCode): string {
        const messages = MESSAGES_BY_LANGUAGES[this.language] || {};
        return messages[status] || messages['default'];
    }

    handleUnknownError(): string {
        this.callbacks.onDefault?.();
        return this.getMessage('default');
    }

    handleNetworkError(): string {
        this.callbacks.onDefault?.();
        return this.getMessage('network');
    }

    handleGraphQLError(error: { message: string }[]): string {
        this.callbacks.onDefault?.();
        return error[0].message || this.getMessage('default');
    }

    handleAxiosError(error: { response?: { status: StatusCode; data: { message: string } } }): string {
        if (error.response) {
            const { status, data } = error.response;
            this.callbacks[status]?.(error);
            return data.message || this.getMessage(status) || this.getMessage('default');
        }
        return this.getMessage('default');
    }


    handle(error: {
        response?: { status: StatusCode; data: { message: string } };
        graphQLErrors?: { message: string }[];
        message?: string;
    }): string {
        if (!error) {
            return this.handleUnknownError();
        }

        if (error.graphQLErrors?.length) {
            return this.handleGraphQLError(error.graphQLErrors);
        }

        if (error.message === "Network Error") {
            return this.handleNetworkError();
        }

        if (error.response) {
            return this.handleAxiosError(error);
        }

        return this.handleUnknownError();
    }
}

export default ApiErrorHandler;