# nodemailer-portifolio
* Servidor para envio de e-mail
* node 
* express
* nodemailer
* nodemon
* body-parser

# Instruções
* Para rodar esse servidor você deve ter instalado em sua máquina o node e o gerenciador de pacotes npm
* Após clonar este repositório, você deve rodar o comando ```npm install``` 
* Para testar o envio de e-mail você deve colocar suas próprias credenciais no arquivo .auth que se encontra na pasta src, e colocar o email que deseja enviar nesta parte do código
que se encontra em server.js:
```
    const mailOptions = {
        from: email,
        to: 'youremail', --here
        subject: subject,
        text: email + " \n" + name + " \n" + telephone + " \n" + message
    }
 ```
 * Corpo da requisição - funciona no postman ou no insomnia
```
{
	"name":"You name here",
	"email":"your e-mail here",
	"telephone":"your telefone here",
	"subject":"Test",
	"message":"Test"
}
```
* Para rodar a aplicação localmente node o comando ```npm start```
* Caso não tenha conhecimento em como utlizar as ferramentas postman ou insomnia, ou não tenha conhecimento da biblioteca nodemailer, sugiro que leia e estude antes a documentação
dos mesmos.
