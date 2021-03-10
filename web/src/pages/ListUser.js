import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineDollar } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { BsTrashFill } from 'react-icons/bs';

import api from '../services/api';

import '../styles/pages/ListUser.css';

export default function ListUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('users/list').then(response => {
            setUsers(response.data);
        })
    }, [])

    return (
        <>
            <div className="cardTitle">
                <h3>Criação de Orçamento</h3>
            </div>
            <table>
                <tr>
                    <th>Nome do cliente</th>
                    <th>CNPJ</th>
                    <th>Port</th>
                    <th>QTD de Funcionarios</th>
                    <th>Telefone(Com)</th>
                    <th>
                        <div className="userAdd">
                            <Link to={'/add'}>
                                <button className="ListButton">
                                    <h2>+</h2>
                                </button>
                            </Link>
                        </div>
                    </th>
                </tr>
                {users.map(user => (
                    <tr key={user.clienteId}>
                        <td>{user.nome}</td>
                        <td>{user.cnpj}</td>
                        <td>{user.porteDaEmpreza}</td>
                        <td>{user.quantidadeDeFuncionarios}</td>
                        <td>{user.numCelular}</td>
                        <td>
                            <div><AiOutlineDollar /></div>
                            <div><FiEdit /></div>
                            <div><BsTrashFill /></div>
                        </td>
                    </tr>
                ))}

            </table>
        </>
    );
}