/** @type {import('./$types').PageLoad} */
export async function load() {
    const response = await this.fetch("/apple-app-site-association.json");
    const jsonRes = await response.json();
    return jsonRes;
}