"use server";

export const getPage = async (uri: string) => {
    try {
        let data = await fetch(`${process.env.DIRECTUS_APP_URL}/items/pages?filter[permalink]=/${uri}&fields=*.*.*.*`, {
            headers: {
                "Authorization": `Bearer ${process.env.TOKEN}`,
            },
            cache: "no-store"
        });
        data = await data.json();        
        return data;
    } catch (err) {
        throw new Error("Error came while fetching forms");
    }
}

export const getNavLinks = async () => {
    try {
        let data = await fetch(`${process.env.DIRECTUS_APP_URL}/items/pages`, {
            headers: {
                "Authorization": `Bearer ${process.env.TOKEN}`,
            },
            cache: "no-store"
        });
        data = await data.json();        
        return data;
    } catch (err) {
        throw new Error("Error came while fetching forms");
    }
}