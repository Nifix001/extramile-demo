// import { Asset, CommunityPost, ToastType } from '@/src/types';

// export const ASSETS: Asset[] = [
//   { 
//     id: 1, 
//     name: 'Laptop HP EliteBook', 
//     price: 450000, 
//     category: 'Electronics', 
//     image: 'https://imgs.search.brave.com/GyJ5VFJT-_6O9DP4IR0j-h2fCmBTQNNSR5m3yJwPMAg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL3lnVUFB/ZVN3SU94b3BIck4v/cy1sNDAwLndlYnA' 
//   },
//   { 
//     id: 2, 
//     name: 'Solar Panel 200W', 
//     price: 85000, 
//     category: 'Solar', 
//     image: 'https://imgs.search.brave.com/1uSQqTbAXZhvbIQLElcC27wCez6k_ZZ1l3YzE14vkuA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFIbTk5MlAtS0wu/anBn' 
//   },
//   { 
//     id: 3, 
//     name: 'Generator 5KVA', 
//     price: 320000, 
//     category: 'Power', 
//     image: 'https://imgs.search.brave.com/xMsOlBNyc01lYMJdT1Mv_ltrbcY32FQaSnwGFDB6Otg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waWN0/dXJlcy1uaWdlcmlh/LmppamlzdGF0aWMu/bmV0LzEwNjMyMTEx/Nl9NekF3TFRRd01D/MW1NakprWXpGbE16/YzFMVEUud2VicA' 
//   },
//   { 
//     id: 4, 
//     name: 'Refrigerator LG', 
//     price: 280000, 
//     category: 'Appliances', 
//     image: 'https://imgs.search.brave.com/ITPkz4-FVNbmv_kyoUv1HbpAExAr9JIHf4dntd3yy9Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS51cy5sZy5jb20v/dHJhbnNmb3JtL2Vj/b21tLVBEUEdhbGxl/cnlUaHVtYm5haWwt/MzUweDM1MC82MjRm/ZTU5Yy0zZmEzLTRm/NTAtOWQ0MC04YTlj/ZmI4NzBmMmYvUmVm/cmlnZXJhdG9yX0xG/MjlTOTc3NVNfZ2Fs/bGVyeS0wMV81MDAw/eDU2MjY' 
//   },
//   { 
//     id: 5, 
//     name: 'Washing Machine', 
//     price: 195000, 
//     category: 'Appliances', 
//     image: 'https://imgs.search.brave.com/8K7rbyat4wmDJEA7C0gW6f2fg5Tu6R_EIRCLyyCSpTQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vdmFyaWFu/dHMvcEdCdXdXa2pp/ck1qNnl3ZnNMVGtV/dDNjLzYyNGYwZGMx/ZGZmOWJkY2NhYjAz/MmY5M2MzM2U3OWRl/Nzg0ODE3NzBlNzll/MjFkM2IwNDY5ZGFm/NTFmMDI3OTc' 
//   },
//   { 
//     id: 6, 
//     name: 'iPhone 13 Pro', 
//     price: 520000, 
//     category: 'Electronics', 
//     image: 'https://imgs.search.brave.com/99GLARHEoyrhO3xwe79TGFIIItIF1ud0ybe6GPP_nAE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U0LzI0/LzlkL2U0MjQ5ZGM2/ZGE5ZGRkMTBiYzYz/ZDQyZTk4M2U1ZTg5/LmpwZw' 
//   },
//   { 
//     id: 7, 
//     name: 'Air Conditioner 1.5HP', 
//     price: 235000, 
//     category: 'Appliances', 
//     image: 'https://imgs.search.brave.com/t-wz_BkfF9FhxauIvmSIJHgVKWmFLyjCu4k8qNude7s/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9hbGFi/YW1hcnQuY29tL2Nk/bi9zaG9wL2ZpbGVz/LzYyYTQ2OTU3NjU1/NjguanBnP3Y9MTY5/MzU4Nzg5MCZ3aWR0/aD0xNDQ1' 
//   },
//   { 
//     id: 8, 
//     name: 'Inverter Battery', 
//     price: 125000, 
//     category: 'Power', 
//     image: 'https://imgs.search.brave.com/dIVa078VJT6r6x1wgwVJspLpbSCtZrC5RNxNycIBuEY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vMTJW/LTE1MEFILVNMQS1S/ZXBsYWNlbWVudC1C/YXR0ZXJ5LWZvci1J/bnZlcnRlcnNfNzM0/MzIyOGMtZDQzMi00/OTM0LWI2ODUtOGNm/Njk4ZTdmNDUyLmMz/MGY3ZTRiZjdlODA3/MzNhOTcwYWVmY2Iw/MzlhYzk0LmpwZWc_/b2RuSGVpZ2h0PTU4/MCZvZG5XaWR0aD01/ODAmb2RuQmc9RkZG/RkZG' 
//   },
// ];

// export const COMMUNITY_POSTS: CommunityPost[] = [
//   { 
//     id: 1, 
//     user: 'John D.', 
//     content: 'Just bought a solar panel! Installation was smooth. Highly recommended!', 
//     likes: 12, 
//     time: '2h ago' 
//   },
//   { 
//     id: 2, 
//     user: 'Sarah M.', 
//     content: 'The credit option made it easy for me to get my dream laptop. Thank you!', 
//     likes: 8, 
//     time: '5h ago' 
//   },
//   { 
//     id: 3, 
//     user: 'Ahmed K.', 
//     content: 'Anyone has experience with the 5KVA generator? Thinking of buying one.', 
//     likes: 5, 
//     time: '1d ago' 
//   },
//   { 
//     id: 4, 
//     user: 'Blessing O.', 
//     content: 'Customer service is excellent! They helped me choose the right washing machine.', 
//     likes: 15, 
//     time: '2d ago' 
//   },
// ];

// src/data/dummy-data.ts

import { Asset, CommunityPost } from '@/src/types';

export const ASSETS: Asset[] = [
  { 
    id: 1, 
    name: 'Laptop HP EliteBook', 
    price: 450000, 
    category: 'Gadgets', 
    image: '💻' 
  },
  { 
    id: 2, 
    name: 'Solar Panel 200W', 
    price: 85000, 
    category: 'Home and Office Appliances', 
    image: '☀️' 
  },
  { 
    id: 3, 
    name: 'Generator 5KVA', 
    price: 320000, 
    category: 'Industrial Equipments', 
    image: '⚡' 
  },
  { 
    id: 4, 
    name: 'Refrigerator LG', 
    price: 280000, 
    category: 'Home and Office Appliances', 
    image: '🧊' 
  },
  { 
    id: 5, 
    name: 'Washing Machine', 
    price: 195000, 
    category: 'Home and Office Appliances', 
    image: '🌀' 
  },
  { 
    id: 6, 
    name: 'iPhone 13 Pro', 
    price: 520000, 
    category: 'Gadgets', 
    image: '📱' 
  },
  { 
    id: 7, 
    name: 'Air Conditioner 1.5HP', 
    price: 235000, 
    category: 'Home and Office Appliances', 
    image: '❄️' 
  },
  { 
    id: 8, 
    name: 'Concrete Block Making Machine', 
    price: 850000, 
    category: 'Industrial Equipments', 
    image: '🏗️' 
  },
  { 
    id: 9, 
    name: 'Commercial Convection Oven', 
    price: 420000, 
    category: 'Industrial Equipments', 
    image: '🔥' 
  },
  { 
    id: 10, 
    name: 'Scooter 125cc Automatic', 
    price: 380000, 
    category: 'Mobilities', 
    image: '🛵' 
  },
  { 
    id: 11, 
    name: 'Tricycle Taxi (Keke NAPEP)', 
    price: 950000, 
    category: 'Mobilities', 
    image: '🛺' 
  },
  { 
    id: 12, 
    name: 'Inverter Battery 200AH', 
    price: 125000, 
    category: 'Home and Office Appliances', 
    image: '🔋' 
  },
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  { 
    id: 1, 
    user: 'John D.', 
    content: 'Just bought a solar panel! Installation was smooth. Highly recommended!', 
    likes: 12, 
    time: '2h ago' 
  },
  { 
    id: 2, 
    user: 'Sarah M.', 
    content: 'The credit option made it easy for me to get my dream laptop. Thank you!', 
    likes: 8, 
    time: '5h ago' 
  },
  { 
    id: 3, 
    user: 'Ahmed K.', 
    content: 'Anyone has experience with the 5KVA generator? Thinking of buying one.', 
    likes: 5, 
    time: '1d ago' 
  },
  { 
    id: 4, 
    user: 'Blessing O.', 
    content: 'Customer service is excellent! They helped me choose the right washing machine.', 
    likes: 15, 
    time: '2d ago' 
  },
];

export const CATEGORIES = [
  'All Categories',
  'Home and Office Appliances',
  'Industrial Equipments',
  'Mobilities',
  'Gadgets'
];