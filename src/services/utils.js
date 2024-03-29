export async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok === false) {
            const error = await response.json();
            // throw new Error(error.message);
            console.dir(error);
            return error
        }

        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {}
    };
    try {
        const tokens = JSON.parse(localStorage.getItem('tokens'));

        if (tokens) {
            options.headers['Authorization'] = `Bearer ${tokens.accessToken}`;
        }

        if (body) {
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(body);
        }
    } catch (error) {
        console.log(error);
    }


    return options;
}

export function convertBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
}