import CryptJS from "crypto-js"

export const CifrarAES = (texto) => {
    let textoCifrado = CryptJS.AES.encrypt(texto, 'Star*Wars*SWAPI*-Test/2022-02-28').toString()
    return textoCifrado
}