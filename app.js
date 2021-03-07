// Problema: precisamos de uma maneira simples de ver a contagem de medalhas de um usuário e os pontos de JavaScript
// Solução: use Node.js para se conectar à API da Elemesse  para obter informações de perfil para imprimir

//funcao para imprimir menssagem no console
function printMessage(username,badgeCount,point){
  const message = `${username} tem ${badgeCount} total de medalha(s) e ${point} pontos em JavaScript`;
  console.log(message);
}

printMessage("chalkers",100,2000000);
// Conecte-se ao URL da API (https://teamelemesse.com/username.json)
// Leia os dados
// Analise os dados
// Imprima os dados