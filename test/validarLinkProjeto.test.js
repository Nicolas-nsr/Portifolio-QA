const { expect } = require('chai');
const { validarLinkProjeto } = require('../src/validarLinkProjeto');

describe('validarLinkProjeto', function () {
      it('deve retornar false para um link inválido', function () {
        const link = 'invalid-link';
        const resultado = validarLinkProjeto(link);
        expect(resultado).to.equal(false);
    });
    
    it('deve retornar false para uma string vazia', function () {
        const link = '';
        const resultado = validarLinkProjeto(link);
        expect(resultado).to.equal(false);
    });
    it('deve retornar false para um valor nulo', function () {
        const link = null;
        const resultado = validarLinkProjeto(link);
        expect(resultado).to.equal(false);
    });
    it('deve retornar false para um valor indefinido', function () {
        const link = undefined;
        const resultado = validarLinkProjeto(link);
        expect(resultado).to.equal(false);
    });
    it('deve retornar false para um número', function () {
        const link = 12345;
        const resultado = validarLinkProjeto(link);
        expect(resultado).to.equal(false);
    });
    it('deve aceitar um link HTTPS do GITHUB', function () {
        expect(
            validarLinkProjeto('https://github.com/Nicolas-nsr')
        ).to.equal(true);
    });
     it('deve aceitar um link HTTP válido', function () {
        expect(
            validarLinkProjeto('http://exemplo.com/projeto')
        ).to.equal(true);
    });

    it('deve rejeitar uma string vazia', function () {
        expect(validarLinkProjeto('')).to.equal(false);
    });

    it('deve rejeitar uma URL com protocolo javascript', function () {
        expect(
            validarLinkProjeto('javascript:alert(1)')
        ).to.equal(false);
    });

    it('deve rejeitar um texto que não seja uma URL', function () {
        expect(
            validarLinkProjeto('link do meu projeto')
        ).to.equal(false);
    });

    it('deve rejeitar um valor que não seja string', function () {
        expect(validarLinkProjeto(null)).to.equal(false);
    });
})