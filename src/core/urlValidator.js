export async function checkIsValidUrl(url){
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false
    }
}