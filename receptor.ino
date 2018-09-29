#include <ESP8266WiFi.h>

const char* ssid = "LIS";
const char* password = "fwpmicsc";

const char* host = "192.168.5.5";

void setup()
{
  delay(2000); //Aguarda 2 seg para comecar
  Serial.begin(115200);
  Serial.println();

  Serial.printf("Connecting to %s ", ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" connected");
}


void loop()
{
  leSerial();
  delay(5000);
}


void leSerial() 
{
    if (Serial.available()) 
    {
        String dados = "0";
        while (Serial.available()) 
        {
            char c = (char)Serial.read();
            if ((c != '\n')&&(c != '\r')) {
                dados += c;
            }
            delay(10);
        }

        EnviaInformacoes(dados);
    }
}//fim leSerial


void EnviaInformacoes(String dados)
{
    WiFiClient client;
    Serial.printf("\n[Connecting to %s ... ", host);
    if (client.connect(host, 80)) 
    {     
//          String url = "/lis/";
//          url += "index.php";
//          url += "?comando=";
//          url += info;

          String url = "/api/log/";
          url += "?dados=";
          url += dados; 
        
         
          Serial.print("Requesting URL: ");
          Serial.println(url);
  
          // This will send the request to the server
          client.print(String("GET ") + url + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" + 
               "Connection: close\r\n\r\n");

          unsigned long timeout = millis();
          while (client.available() == 0) 
          {
              if (millis() - timeout > 5000) 
              {
                  Serial.println(">>> Client Timeout !");
                  client.stop();
                  return;
              }
          }
  
          // Read all the lines of the reply from server and print them to Serial
          while(client.available()){
              String line = client.readStringUntil('\r');
              Serial.print(line);
          }
  
          Serial.println();
          Serial.println("closing connection");
    } 
    else 
    {
        Serial.println("Erro ao conectar ao servidor");
    }   
}