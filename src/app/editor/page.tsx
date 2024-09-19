"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { generateImageUrl } from '../services/Api';

const EditPSDPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nomeEstabelecimento: '',
    nomeItem: '',
    precoOriginal: '',
    precoPromocional: '',
    diaValidade: '',
    imagemItem: '',
    imagemEstabelecimento: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, imagemItem: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      nomeEstabelecimento,
      nomeItem,
      precoOriginal,
      precoPromocional,
      imagemItem,
      imagemEstabelecimento,
    } = formData;

    const url = generateImageUrl({
      psdId: 'd209b80d-d425-4b21-b1e5-7e6dcbf4664c',
      logoEstabelecimento: imagemEstabelecimento,
      itemImagem: imagemItem,
      itemNome: nomeItem,
      precoOriginal,
      precoPromocional,
    });

    setLoading(true);
    setError(null);

    try {
      router.push(url);
    } catch (err) {
      setError('Failed to generate image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Edição de PSD - Bigou Delivery
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-4 gap-x-8">
            <div>
              <label htmlFor="nomeEstabelecimento" className="block text-sm font-medium text-gray-700">
                Nome do Estabelecimento:
              </label>
              <input
                type="text"
                id="nomeEstabelecimento"
                name="nomeEstabelecimento"
                value={formData.nomeEstabelecimento}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="nomeItem" className="block text-sm font-medium text-gray-700">
                Nome do Item:
              </label>
              <input
                type="text"
                id="nomeItem"
                name="nomeItem"
                value={formData.nomeItem}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="precoOriginal" className="block text-sm font-medium text-gray-700">
                Preço Original:
              </label>
              <input
                type="text"
                id="precoOriginal"
                name="precoOriginal"
                value={formData.precoOriginal}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="precoPromocional" className="block text-sm font-medium text-gray-700">
                Preço Promocional:
              </label>
              <input
                type="text"
                id="precoPromocional"
                name="precoPromocional"
                value={formData.precoPromocional}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="diaValidade" className="block text-sm font-medium text-gray-700">
                Dia de Validade:
              </label>
              <input
                type="date"
                id="diaValidade"
                name="diaValidade"
                value={formData.diaValidade}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="imagemItem" className="block text-sm font-medium text-gray-700">
                Imagem do Item:
              </label>
              <input
                type="url"
                id="imagemItem"
                name="imagemItem"
                value={formData.imagemItem}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
              {formData.imagemItem && (
                <img src={formData.imagemItem} alt="Preview do Item" className="mt-2 rounded-md" style={{ maxWidth: '100%', height: 'auto' }} />
              )}
            </div>

            <div>
              <label htmlFor="imagemEstabelecimento" className="block text-sm font-medium text-gray-700">
                Imagem do Estabelecimento:
              </label>
              <input
                type="url"
                id="imagemEstabelecimento"
                name="imagemEstabelecimento"
                value={formData.imagemEstabelecimento}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
              {formData.imagemEstabelecimento && (
                <img src={formData.imagemEstabelecimento} alt="Preview do Estabelecimento" className="mt-2 rounded-md" style={{ maxWidth: '100%', height: 'auto' }} />
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
  );
};

export default EditPSDPage;

