
function validarLinkProjeto(link) {
    if (typeof link !== 'string' || link.trim() === '') {
        return false;
    }

    try {
        const url = new URL(link);

        return (
            ['http:', 'https:'].includes(url.protocol) &&
            url.hostname.length > 0
        );
    } catch {
        return false;
    }
}

module.exports = { validarLinkProjeto };
