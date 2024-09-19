'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { generateImageUrl } from '../services/Api'

const EditPSDPage: React.FC = () => {
    const [formData, setFormData] = useState({
        estabelecimento_nome: 'loja boa pra caralho',
        item_nome: 'item mt bom compra ai',
        preco_original: '70',
        preco_promocional: '35',
        dia_validade: '2024-09-19',
        item_imagem:
            'https://images.unsplash.com/photo-1615915468538-0fbd857888ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D',
        estabelecimento_imagem:
            'https://images.unsplash.com/photo-1615915468538-0fbd857888ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D',
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setFormData({ ...formData, item_imagem: reader.result as string })
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const {
            estabelecimento_nome,
            item_nome,
            preco_original,
            preco_promocional,
            item_imagem,
            dia_validade,
            estabelecimento_imagem,
        } = formData

        //   psdId: 'd209b80d-d425-4b21-b1e5-7e6dcbf4664c',

        const url = generateImageUrl({
            psd_id: '433726d0-e921-455a-9533-f9bd560fe513',
            estabelecimento_nome,
            item_nome,
            preco_original,
            preco_promocional,
            dia_validade,
            item_imagem,
            estabelecimento_imagem,
        })

        console.log(url)

        // setLoading(true);
        // setError(null);

        // try {
        //   router.push(url);
        // } catch (err) {
        //   setError('Failed to generate image. Please try again.');
        // } finally {
        //   setLoading(false);
        // }
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
                    Edição de PSD - Bigou Delivery
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                        <div>
                            <label
                                htmlFor="estabelecimento_nome"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Nome do Estabelecimento:
                            </label>
                            <input
                                type="text"
                                id="estabelecimento_nome"
                                name="estabelecimento_nome"
                                value={formData.estabelecimento_nome}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="item_nome"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Nome do Item:
                            </label>
                            <input
                                type="text"
                                id="item_nome"
                                name="item_nome"
                                value={formData.item_nome}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="preco_original"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Preço Original:
                            </label>
                            <input
                                type="text"
                                id="preco_original"
                                name="preco_original"
                                value={formData.preco_original}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="preco_promocional"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Preço Promocional:
                            </label>
                            <input
                                type="text"
                                id="preco_promocional"
                                name="preco_promocional"
                                value={formData.preco_promocional}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="diaValidade"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Dia de Validade:
                            </label>
                            <input
                                type="date"
                                id="diaValidade"
                                name="diaValidade"
                                value={formData.dia_validade}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="item_imagem"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Imagem do Item:
                            </label>
                            <input
                                type="url"
                                id="item_imagem"
                                name="item_imagem"
                                value={formData.item_imagem}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                required
                            />
                            {formData.item_imagem && (
                                <img
                                    src={formData.item_imagem}
                                    alt="Preview do Item"
                                    className="mt-2 rounded-md"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="estabelecimento_imagem"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Imagem do Estabelecimento:
                            </label>
                            <input
                                type="url"
                                id="estabelecimento_imagem"
                                name="estabelecimento_imagem"
                                value={formData.estabelecimento_imagem}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                required
                            />
                            {formData.estabelecimento_imagem && (
                                <img
                                    src={formData.estabelecimento_imagem}
                                    alt="Preview do Estabelecimento"
                                    className="mt-2 rounded-md"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            )}
                        </div>

                        <div className="flex justify-center mt-6">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                disabled={loading}
                            >
                                {loading ? 'Gerando...' : 'Enviar PSD'}
                            </button>
                            {error && <p className="text-red-500 mt-2">{error}</p>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditPSDPage
