export async function getPosts() {

    try{
        const response = await fetch('/api/projects');
        return await response.json();
    }catch(error) {
        console.log(error);
        return [];
    }

}