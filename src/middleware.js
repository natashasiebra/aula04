import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {
    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urldash = new URL('/pages/dashboard', request.url);
    const urlAlter = new URL('/alterae', request.url); // Adicione a URL para a página "alter"
    const urlRegister = new URL('/registrar', request.url); // Adicione a URL para a página "register"
    
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard' || request.nextUrl.pathname === urlAlter.pathname || request.nextUrl.pathname === urlRegister.pathname) {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (isTokenValidated) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urldash);
        }
    }
    
    NextResponse.next();
};

export const config = {
    matcher: ['/', '/pages/dashboard', '/alterar', '/registrar'] // Adicione as URLs das páginas "alter" e "register"
};
