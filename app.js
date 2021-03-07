// Problema: precisamos de uma maneira simples de ver a contagem de medalhas de um usuário e os pontos de JavaScript
// Solução: use Node.js para se conectar à API da Elemesse  para obter informações de perfil para imprimir

//Require https module
const https = require('https');
const username = "chalkers";

//funcao para imprimir menssagem no console
function printMessage(username,badgeCount,point){
  const message = `${username} tem ${badgeCount} total de medalha(s) e ${point} pontos em JavaScript`;
  console.log(message);
}

// Conecte-se ao URL da API (https://teamelemesse.com/username.json)
const request = https.get(`https://teamelemesse.com/${username}.json`, response =>{
  let body = "";
                          // Read the data
                          response.on('data', data => {
                            body += data.toString();
                          });

                          response.on('end', () => {
                            console.log(body);
                            console.log(typeof body);
                            // Parse the data
                            // Print the data
                          });
                          
                          
                          });
