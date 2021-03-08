// Problema: precisamos de uma maneira simples de ver a contagem de medalhas de um usuário e os pontos de JavaScript
// Solução: use Node.js para se conectar à API da Elemesse  para obter informações de perfil para imprimir

//Require https module
const https = require('https');

//Print Error messages
function printError(error){
  console.error(error.message);
  }

//Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} tem ${badgeCount} total de medalha(s) e ${point} pontos em JavaScript`;
  console.log(message);
}

function getProfile(username) {
// Conecte-se ao URL da API (https://teamelemesse.com/username.json)
  const request = https.get(`https://teamelemesse.com/${username}.json`, response => {
                          let body = "";
                          // Read the data
                          response.on('data', data => {
                            body += data.toString();
                          });

                          response.on('end', () => {
                            try{
                            // Parse the data
                            const profile = JSON.parse(body);                            
                            // Print the data
                            printMessage(username, profile.badges.length, profile.points.JavaScript);
                              }catch (error){
                              printError(error);
                              }
                          });
                          
                          
                      });

request.on('error',printError);
  } catch (error) {
    printError(error);
  }
}

const users = process.argv.slice(2);
users.forEach(getProfile);
