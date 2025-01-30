class ApiMethods {
    static async request(method:string, url: string, body = null, header = true){
        try {
            const response = await fetch(url, {
                method: method,
                headers: header ? {
                    'Content-Type': 'application/json'
                } : {},
                body: body ? JSON.stringify(body) : null
            });
            return await response.json();
        } catch (e: any) {
            console.error('Error:', e.message);
        }
    }

    static GET = (url: string) => {
        return this.request('GET', url);
    }

    static POST = (url: string, body: any) => {
        return this.request('POST', url, body);
    }

    static PUT = (url: string, body: any) => {
        return this.request('PUT', url, body);
    }

    static DELETE = (url: string) => {
        return this.request('DELETE', url);
    }

}