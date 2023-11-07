export default function Cadastro() {
    return (
        <main>
            <h1>Cadastro de Pessoa</h1>

            <form action="processar_cadastro.php" method="POST">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required/><br/>

                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input type="text" id="sobrenome" name="sobrenome" required /><br />

                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="e/mail" required /><br />

                    <label htmlFor="dataNascimento">Data de Nascimento:</label>
                    <input type="date" id="dataNascimento" name="dataNascimento" required /><br />

                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="/telefone" /><br />

                    <label htmlFor="endereco">Endereço:</label>
                    <input type="text" id="endereco" name="endereco" /><br />

                    <label htmlFor="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="c/idade" /><br />

                    <label htmlFor="estado">Estado:</label>
                    <input type="text" id="estado" name="e/stado" /><br />

                    <label htmlFor="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" /><br />

                    <input type="submit" value="Cadastrar" />
            </form>
        </main>
    )
}