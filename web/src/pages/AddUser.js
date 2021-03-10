import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/addUser.css';

export default function AddUser() {
    return (
        <>
            <div className="cardTitle">
                <h3>Criação de Orçamento</h3>
            </div>
            <div className="formContainer">
                <form action="">
                    <div>
                        <label htmlFor="first name">Nome do cliente (contato)</label>
                        <input type="text" />
                        <label htmlFor="nickname">Nome fantasia</label>
                        <input type="text" />
                        <label htmlFor="cnpj">CNPJ</label>
                        <input type="text" />
                        <label htmlFor="district">Bairro</label>
                        <input type="text" />
                        <label htmlFor="companySize">Porte da empresa</label>
                        <select name="size">
                            <option value="smallSize">Pequeno porte</option>
                            <option value="midSize">Médio porte</option>
                            <option value="largeSize">Grande porte</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="firstEmail">E-mail (contato)</label>
                        <input type="text" />
                        <label htmlFor="secondEmail">E-mail</label>
                        <input type="text" />
                        <label htmlFor="cep">CEP</label>
                        <input type="text" />
                        <label htmlFor="city">Cidade</label>
                        <input type="text" />
                        <label htmlFor="numberOfEmployees">Quantidade de funcionários</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="landline">Telefone/Ramal (contato)</label>
                        <input type="text" />
                        <label htmlFor="cellPhone">Telefone (comercial)</label>
                        <input type="text" />
                        <label htmlFor="address">Endereço</label>
                        <input type="text" />
                        <label htmlFor="state">Estado</label>
                        <input type="text" />
                    </div>
                    <div className="buttonContainer">
                        <Link to="../">
                            <button className="backButton">Voltar</button>
                        </Link>
                        <button className="addButton">Cadastrar</button>
                    </div>
                </form>
            </div>
        </>
    );
}