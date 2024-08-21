import { RegisterTransactionRequest, RegisterTransactionResponse } from '../../types';

// const API_URL = 'https://fsse-group-j-gfp-4c1847693ac3.herokuapp.com/register/transactions'; 
const apiHeroku = process.env.NEXT_PUBLIC_API_BASE_URL;

async function registerTransaction(
  data: RegisterTransactionRequest
): Promise<RegisterTransactionResponse> {
  try {
    const response = await fetch(`{apiHeroku}/register/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to register transaction');
    }

    const result: RegisterTransactionResponse = await response.json();
    return result;
  } catch (error) {
    console.error('Error registering transaction:', error);
    throw error;
  }
}

export default registerTransaction;