export async function waitForRequest(page, httpMethod, urlPart) {
    return await page.waitForRequest(request =>
        request.method() === httpMethod &&
        request.url().includes(urlPart)
    );
}