# render-api
 Api que recebe uma URL e retorna o código renderizado da página

# Dependências
- Express (servidor api)
- Puppeteer (core da aplicação)

# Instalação
npm install

# Iniciar o servidor
npm start

# Porta da aplicação
3333
> http://localhost:3333

# Rota para renderizar a URL
> post /render/single
```
{
    "url" : "https://www.example.com"
}
```