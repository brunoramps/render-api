# render-api
 Api que recebe uma URL e retorna o código renderizado da página

# Instalação
npm install

# Iniciar o servidor
npm start

# Dependências
- Express (servidor api)
- Puppeteer (core da aplicação)

# Porta da aplicação
3333

# Rota para renderizar a URL
> post /render/single
```
{
    "url" : "https://www.example.com"
}
```