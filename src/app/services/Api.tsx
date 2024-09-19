import axios from 'axios'

const api = axios.create({
    baseURL: 'https://ferrazdev.com/custom',
    headers: {
        'Content-Type': 'application/json',
    },
})

interface GenerateImageUrlParams {
    psd_id: string
    estabelecimento_nome: string
    item_nome: string
    preco_original: string
    preco_promocional: string
    dia_validade: string
    item_imagem: string
    estabelecimento_imagem: string
}

const generateImageUrl = ({
    psd_id,
    estabelecimento_nome,
    item_nome,
    preco_original,
    preco_promocional,
    dia_validade,
    item_imagem,
    estabelecimento_imagem,
}: GenerateImageUrlParams): string => {
    const url = new URL('http://localhost:6078/custom')
    // const url = new URL('https://ferrazdev.com/custom');
    url.searchParams.set('psd_id', psd_id)
    url.searchParams.set('estabelecimento_nome', estabelecimento_nome)
    url.searchParams.set('item_imagem', preco_original)
    url.searchParams.set('item_nome', item_nome)
    url.searchParams.set('preco_original', preco_original)
    url.searchParams.set('preco_promocional', preco_promocional)
    url.searchParams.set('dia_validade', dia_validade)
    url.searchParams.set('item_imagem', item_imagem)
    url.searchParams.set('estabelecimento_imagem', estabelecimento_imagem)

    return url.toString()
}

export { api, generateImageUrl }
