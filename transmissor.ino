#include <SoftwareSerial.h> // Biblioteca SoftwareSerial

SoftwareSerial comunicacaoESP(2, 3); // objeto para comunicação serial com o ESP8266 nas Portas 2(RX) e 3(TX)
const int pinoOut = 5;
int inicio = 0;
int fim = 0;
//Função setup (inicializações do programa)
void setup()
{
  pinMode(pinoOut, INPUT);
  Serial.begin(9600);
  Serial.println("======Leitor de temperatura======");
  //comunicacaoESP.begin(115200); // inicia a comunicação serial com o ESP8266
}

//loop (programa principal)
void loop()
{
  comunicacaoESP.begin(115200);
  //Serial.print(digitalRead(pinoOut));
  if (digitalRead(pinoOut) == LOW){
    if(fim == 1){
      Serial.print(" Colocou o capacete: ");
      Serial.print(1);
      comunicacaoESP.println(1); 
      comunicacaoESP.end();
      inicio = 1;
      fim =0;
    }
  }else{
    if (fim==0){
      Serial.print(" Sem capacete: ");
      Serial.print(0);
      comunicacaoESP.println(0); 
      comunicacaoESP.end();
      fim =1;
      inicio = 0;
    }
    

  }

  delay(2000);

}

