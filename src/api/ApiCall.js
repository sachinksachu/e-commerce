
/**
 * To make API call.
 * @param {string} url The API URL
 * @param {string} method The API method
 * @returns Json data
 */
const ApiCall = async (url, method) => {

    const response = await fetch(url, {
        method: method,
    });
    return await response.json();
}

export default ApiCall;