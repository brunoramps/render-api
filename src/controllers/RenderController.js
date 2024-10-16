import { getRenderedPageFromSingleUrl } from "../core/renderCore.js";
import { checkIsValidUrl } from "../core/urlValidator.js";

class RenderController {

    async getRenderedPageFromSingleUrl(req, res){

        const { url } = req.body
        const isValidUrl = await checkIsValidUrl(url);

        if(!isValidUrl) return res.status(403).json({status: "error" , message: "O atributo url deve ser uma URL válida"})

        const { renderedHtml } = await getRenderedPageFromSingleUrl(url);

        return res.status(200).json(renderedHtml);

    }

}

export { RenderController }