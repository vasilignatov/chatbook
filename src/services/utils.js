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
        const user = JSON.parse(localStorage.getItem('user'));
        console.log('user: ', user);
        if (user) {
            options.headers['Authorization'] = `Bearer ${user.acessToken}`;
        }
        
        if (body) {
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(body);
        }

    } catch (error) {
        
    }


    return options;
}