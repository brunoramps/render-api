import puppeteer from 'puppeteer';

export async function getRenderedPageFromSingleUrl(url){

    // Abrindo e configurando o browser
    const browser = await puppeteer.launch({
        headless: 'shell',
        ignoreHTTPSErrors : true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--no-first-run",
            "--start-maximized",
            // This will write shared memory files into /tmp instead of /dev/shm,
            // because Docker’s default for /dev/shm is 64MB
            "--disable-dev-shm-usage",
            '--aggressive-cache-discard',
            '--disable-cache',
            '--disable-application-cache',
            '--disable-offline-load-stale-cache',
            '--disable-gpu-shader-disk-cache',
            '--media-cache-size=0',
            '--disk-cache-size=0',
          ]
    });

    // Abrindo e configurando uma nova página
    const page = await browser.newPage();

    // Setando o userAgent do googleBot
    await page.setUserAgent('Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');

    // Acessando e Coletando informações da página
    const response = await page.goto(url, {
        waitUntil: 'networkidle2',
        timeout: 25000 //Definindo 25 segundos como timeout de carregamento
    });

    // Se você quiser impedir que o servidor processe uma página inválida, pode usar o responde.status() para validar o status http
    // Exemplo: const httStatus = response.status(), isto vai ter retornar o código em número inteiro, a partir daí, você pode usar swith case ou IFs, se preferir.
    
    // Pegando o código renderizado
    const renderedHtml = await page.content();

    return { renderedHtml }
    
}