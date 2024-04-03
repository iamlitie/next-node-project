import axios from 'axios'
// A mock function to mimic making an async request for data
export const fetchCount = async (amount = 1) => {
  const response = await axios('/api/counter', {
    method: 'post',
    data: {
      amount: amount
    }
  })
  const result: { data: number } = response.data;

  return result;
};
