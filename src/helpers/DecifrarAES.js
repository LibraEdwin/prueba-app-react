import CryptJS from "crypto-js"

export const DecifrarAES = (texto) => {
    let bytes = CryptJS.AES.decrypt(texto, 'Star*Wars*SWAPI*-Test/2022-02-28')
    let textDescifrado = bytes.toString(CryptJS.enc.Utf8)
    return textDescifrado
}