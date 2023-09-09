'user cliente'
import Cookies from "js-cookie";

export const metadata = {
  title: 'Vingadores',
  description: 'Project for class PTAC',
}

export default function RootLayout({ children }) {
  function sair (e){
    e.preventDefault()
    Cookies.remove('token')
  }
  return (
    <html lang="pt-br">
      <body>{children}</body>
      <button onClick={sair()}>excluir</button>
    </html>
  )
}
