export const  MESSAGES_BY_LANGUAGES = {
    fr: {
        400: "Requête invalide. Veuillez vérifier les données soumises.",
        401: "Vous n'êtes pas autorisé à accéder à cette ressource. Veuillez vous connecter.",
        403: "Accès refusé. Vous n'avez pas les permissions nécessaires.",
        404: "Ressource introuvable.",
        405: "Méthode non autorisée. La méthode HTTP demandée n'est pas supportée.",
        408: "Délai d'attente dépassé. Veuillez réessayer plus tard.",
        409: "Conflit. La requête n'a pas pu être complétée en raison d'un conflit.",
        410: "Disparu. La ressource demandée n'est plus disponible.",
        415: "Type de média non supporté. Le format de la requête n'est pas supporté.",
        422: "Entité non traitable. La requête était bien formée mais contient des erreurs sémantiques.",
        429: "Trop de requêtes. Veuillez ralentir et réessayer plus tard.",
        500: "Une erreur interne du serveur est survenue. Veuillez réessayer plus tard.",
        501: "Non implémenté. Le serveur ne supporte pas la fonctionnalité demandée.",
        502: "Mauvaise passerelle. Le serveur a reçu une réponse invalide d'un serveur en amont.",
        503: "Service indisponible. Le serveur est temporairement incapable de traiter la requête.",
        504: "Délai de la passerelle dépassé. Le serveur n'a pas reçu de réponse en temps voulu d'un serveur en amont.",
        505: "Version HTTP non supportée. Le serveur ne supporte pas la version du protocole HTTP utilisée dans la requête.",
        default: "Une erreur inattendue est survenue. Veuillez réessayer plus tard.",
        network: "Erreur réseau. Veuillez vérifier votre connexion internet."
    },
    en: {
        400: "Invalid request. Please check the submitted data.",
        401: "You are not authorized to access this resource. Please log in.",
        403: "Access denied. You do not have the necessary permissions.",
        404 : "Resource not found.",
        405 : "Method not allowed. The requested HTTP method is not supported.",
        408 : "Request timeout. Please try again later.",
        409 : "Conflict. The request could not be completed due to a conflict.",
        410 : "Gone. The requested resource is no longer available.",
        415 : "Unsupported media type. The request format is not supported.",
        422 : "Unprocessable entity. The request was well-formed but contains semantic errors.",
        429 : "Too many requests. Please slow down and try again later.",
        500 : "An internal server error occurred. Please try again later.",
        501 : "Not implemented. The server does not support the requested functionality.",
        502 : "Bad gateway. The server received an invalid response from an upstream server.",
        503 : "Service unavailable. The server is temporarily unable to handle the request.",
        504 : "Gateway timeout. The server did not receive a timely response from an upstream server.",
        505 : "HTTP version not supported. The server does not support the HTTP protocol version used in the request.",
        default: "An unexpected error occurred. Please try again later.",
        network: "Network error. Please check your internet connection."
    },
    es: {
        400: "Solicitud inválida. Por favor, verifique los datos enviados.",
        401: "No está autorizado para acceder a este recurso. Por favor, inicie sesión.",
        403: "Acceso denegado. No tiene los permisos necesarios.",
        404: "Recurso no encontrado.",
        405: "Método no permitido. El método HTTP solicitado no es compatible.",
        408: "Tiempo de espera agotado. Por favor, inténtelo de nuevo más tarde.",
        409: "Conflicto. La solicitud no pudo completarse debido a un conflicto.",
        410: "Desaparecido. El recurso solicitado ya no está disponible.",
        415: "Tipo de medio no compatible. El formato de la solicitud no es compatible.",
        422:
            "Entidad no procesable. La solicitud estaba bien formada pero contiene errores semánticos.",
        429:
            "Demasiadas solicitudes. Por favor, ralentice e inténtelo de nuevo más tarde.",
        500:
            "Se produjo un error interno del servidor. Por favor, inténtelo de nuevo más tarde.",
        501:
            "No implementado. El servidor no admite la funcionalidad solicitada.",
        502:
            "Puerta de enlace incorrecta. El servidor recibió una respuesta no válida de un servidor ascendente.",
        503:
            "Servicio no disponible. El servidor no puede manejar temporalmente la solicitud.",
        504:
            "Tiempo de espera de la puerta de enlace agotado. El servidor no recibió una respuesta oportuna de un servidor ascendente.",
        505:
            "Versión de HTTP no compatible. El servidor no admite la versión del protocolo HTTP utilizada en la solicitud.",
        default:
            "Se produjo un error inesperado. Por favor, inténtelo de nuevo más tarde.",
        network:
            "Error de red. Por favor, compruebe su conexión a Internet."
    }
};

export type LanguageType = "fr" | "en" | "es";

export type StatusCode = 400 | 401 | 403 | 404 | 405 | 408 | 409 | 410 | 415 | 422 | 429 | 500 | 501 | 502 | 503 | 504 | 505 | 'default' | 'network';