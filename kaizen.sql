-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 10-Mar-2021 às 17:17
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `kaizen`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `clienteId` int(11) NOT NULL,
  `nome` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `nomeFantasia` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `emailSecundario` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `cnpj` int(14) DEFAULT NULL,
  `cep` int(8) DEFAULT NULL,
  `porteDaEmpreza` varchar(15) COLLATE utf8_bin DEFAULT NULL,
  `telefoneFixo` int(8) DEFAULT NULL,
  `numCelular` int(9) DEFAULT NULL,
  `quantidadeDeFuncionarios` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `rua` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `bairro` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `cidade` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `estado` varchar(30) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`clienteId`, `nome`, `nomeFantasia`, `email`, `emailSecundario`, `cnpj`, `cep`, `porteDaEmpreza`, `telefoneFixo`, `numCelular`, `quantidadeDeFuncionarios`, `rua`, `bairro`, `cidade`, `estado`) VALUES
(3, 'matheus', 'barth7m', 'hiragi.barth@gmail.com', 'emailSecundario', NULL, 111, 'porteDaEmpreza', 111, 111, '111', 'rua', 'bairro', 'cidade', 'estado');

-- --------------------------------------------------------

--
-- Estrutura da tabela `ferramentas`
--

CREATE TABLE `ferramentas` (
  `ferramentaId` int(11) NOT NULL,
  `nome` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `moedaTipo` varchar(15) COLLATE utf8_bin DEFAULT NULL,
  `cadastradoPor` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `basePequenoPorte` int(14) DEFAULT NULL,
  `baseMedioPorte` int(14) DEFAULT NULL,
  `baseGrandePorte` int(14) DEFAULT NULL,
  `valorDeRevenda` int(14) DEFAULT NULL,
  `valorParaParceiro` int(14) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `ferramentas`
--

INSERT INTO `ferramentas` (`ferramentaId`, `nome`, `moedaTipo`, `cadastradoPor`, `basePequenoPorte`, `baseMedioPorte`, `baseGrandePorte`, `valorDeRevenda`, `valorParaParceiro`) VALUES
(2, 'navio', 'dolar', 'Matheus Barth', 150000000, 151000000, 152000000, 145000000, 70000000),
(3, 'navio', 'dolar', 'Matheus Barth', 150000000, 151000000, 152000000, 145000000, 70000000);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`clienteId`);

--
-- Índices para tabela `ferramentas`
--
ALTER TABLE `ferramentas`
  ADD PRIMARY KEY (`ferramentaId`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `clienteId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `ferramentas`
--
ALTER TABLE `ferramentas`
  MODIFY `ferramentaId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
