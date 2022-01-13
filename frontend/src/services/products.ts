import api from './apiConfig'

export const getProducts = async (): Promise<ProductProps> => {
  try {
    const response = await api.get('/products')
    return response.data.payload
  } catch (err: any) {
      console.error(err.message);
      return Promise.reject(err)
  }
}

export const getProduct = async (id: string): Promise<IProduct> => {
  try {
      const response = await api.get(`/product/${id}`)
      return response.data.payload
  } catch (err: any) {
      console.error(err.message);
      return Promise.reject(err)
  }
}

export const createProduct = async (product: IProduct) => {
  try {
      const response = await api.post('/products', product)
      return response.data.payload
  } catch (err: any) {
      console.error(err.message);
      return Promise.reject(err)
  }
}

export const updateProduct = async (id: number, product: IProduct) => {
  try {
      const response = await api.put(`/product/${id}`, product)
      return response.data.payload
  } catch (err: any) {
      console.error(err.message);
      return Promise.reject(err)
  }
}

export const deleteProduct = async (id:number) => {
  try {
      const response = await api.delete(`/product/${id}`)
      return response.data.payload
  } catch (err: any) {
      console.error(err.message);
      return Promise.reject(err)
  }
}