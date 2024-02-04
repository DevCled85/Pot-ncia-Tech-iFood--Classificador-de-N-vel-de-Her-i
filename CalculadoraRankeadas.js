function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de ranqueadas (vitórias - derrotas)
    let saldoVitorias = vitorias - derrotas;
    
    // Determina o nível com base no saldo de ranqueadas
    let nivel;
    if (saldoVitorias < 0) {
        nivel = "Iniciante";
    } else if (saldoVitorias >= 0 && saldoVitorias < 10) {
        nivel = "Intermediário";
    } else if (saldoVitorias >= 10 && saldoVitorias < 20) {
        nivel = "Avançado";
    } else {
        nivel = "Mestre";
    }

    // Exibe a mensagem final
    console.log(`O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}.`);
    
    // Retorna o resultado para uso futuro, se necessário
    return { saldoVitorias, nivel };
}

// Exemplo de uso da função
calcularNivel(20, 5);
