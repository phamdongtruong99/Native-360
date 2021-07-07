import unsplash from '../API';

async function getImagesFromServer() {
    try {
        let response = await unsplash.get('/photos');
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export { getImagesFromServer };