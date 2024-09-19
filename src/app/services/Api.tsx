import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ferrazdev.com/custom',
  headers: {
    'Content-Type': 'application/json',
  },
});

interface GenerateImageUrlParams {
  psdId: string;
  logoEstabelecimento: string;
  itemImagem: string;
  itemNome: string;
  precoOriginal: string;
  precoPromocional: string;
}

const generateImageUrl = ({
  psdId,
  logoEstabelecimento,
  itemImagem,
  itemNome,
  precoOriginal,
  precoPromocional,
}: GenerateImageUrlParams): string => {
  const url = new URL('https://ferrazdev.com/custom');
  url.searchParams.set('psd_id', psdId);
  url.searchParams.set('logo_estabelecimento', logoEstabelecimento);
  url.searchParams.set('item_imagem', itemImagem);
  url.searchParams.set('item_nome', encodeURIComponent(itemNome));
  url.searchParams.set('preco_original', encodeURIComponent(precoOriginal));
  url.searchParams.set('preco_promocional', encodeURIComponent(precoPromocional));
  
  return url.toString();
};

export { api, generateImageUrl };
